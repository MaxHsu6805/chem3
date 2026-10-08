/* ============================================================
   app.js — SPA 主程式：路由、導覽、搜尋、主題、進度儲存
   ============================================================ */
import { NAV, EXAMS, QUIZ, CARDS, E_TABLE, ON_BANK, HALF_RX, ROLE_BANK, FARADAY } from './data.js';
import { PAGES_A } from './content-a.js';
import { PAGES_B } from './content-b.js';
import { TOOLS } from './tools.js';

const KEY = 'redox-app-v1';
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------------- 狀態 ---------------- */
let store = load();
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return Object.assign(blank(), JSON.parse(raw));
  } catch (e) { /* 無 localStorage（沙箱預覽）時改用記憶體 */ }
  return blank();
}
function blank() {
  return { visited: {}, read: {}, dark: false, quiz: {}, on: null, role: null, half: {}, cards: {}, checks: {} };
}
let memoryOnly = false;
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(store)); }
  catch (e) { memoryOnly = true; }
  updateProgressUI();
}
const ctx = { store, save: () => save(), toast, goto };

/* ---------------- 頁面註冊 ---------------- */
const PAGES = Object.assign({}, PAGES_A, PAGES_B);
/* 資料驅動的特殊頁 */
PAGES['exam-real'] = pageExams;
PAGES['exam-bank'] = pageQuizBank;
PAGES['t-cards'] = null;      /* 由 TOOLS 接管 */

/* 建立完整順序表（供上一頁／下一頁） */
const ORDER = [];
NAV.forEach(g => g.items.forEach(it => ORDER.push(it.id)));
/* 補上 NAV 沒列到的工具頁（若未來新增） */
Object.keys(TOOLS).forEach(k => { if (!ORDER.includes(k)) ORDER.push(k); });

const TITLES = {};
NAV.forEach(g => g.items.forEach(it => { TITLES[it.id] = it.label; }));

/* ---------------- Toast ---------------- */
let toastTimer;
function toast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.innerHTML = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------------- 導覽列 ---------------- */
function buildNav() {
  const nav = $('#nav');
  nav.innerHTML = NAV.map(g => `
    <div class="nav-group">
      <div class="g-title">${esc(g.g)}</div>
      ${g.items.map(it => `
        <a class="nav-item" href="#/${it.id}" data-id="${it.id}">
          <span class="dot"></span>
          <span class="lbl">${esc(it.label)}</span>
          ${it.tag ? `<span class="tagx">${esc(it.tag)}</span>` : ''}
        </a>`).join('')}
    </div>`).join('');
}
function markNav(id) {
  $$('.nav-item').forEach(a => {
    a.classList.toggle('active', a.dataset.id === id);
    a.classList.toggle('done', !!store.visited[a.dataset.id] && a.dataset.id !== id);
  });
}

/* ---------------- 進度 ---------------- */
function updateProgressUI() {
  const contentPages = ORDER.filter(id => !id.startsWith('t-'));
  const done = contentPages.filter(id => store.read[id]).length;
  const pct = Math.round(done / contentPages.length * 100);
  const chip = $('#chipProgress');
  if (chip) chip.textContent = `完成度 ${pct}%`;
  const bar = $('#progressBar');
  if (bar) bar.style.width = pct + '%';
}

/* ---------------- 路由 ---------------- */
let currentCleanup = null;
function goto(id, push) {
  if (!id || id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  if (id === 'prev' || id === 'next') {
    const i = ORDER.indexOf(currentId);
    const j = id === 'prev' ? Math.max(0, i - 1) : Math.min(ORDER.length - 1, i + 1);
    location.hash = '#/' + ORDER[j];
    return;
  }
  if (push !== false) location.hash = '#/' + id;
  render(id);
}
let currentId = 'home';

function render(id) {
  if (currentCleanup) { try { currentCleanup(); } catch (e) {} currentCleanup = null; }
  const view = $('#view');
  const isTool = id.startsWith('t-') && TOOLS[id];

  /* 產生內容 */
  if (isTool) {
    const t = TOOLS[id];
    view.innerHTML = `<h1 class="page">${t.title}</h1><p class="page-sub">${t.sub}</p><div id="toolMount"></div>`;
    t.render($('#toolMount', view), ctx);
    if (t.cleanup) currentCleanup = () => t.cleanup($('#toolMount', view));
  } else if (typeof PAGES[id] === 'function') {
    view.innerHTML = PAGES[id](ctx);
  } else {
    view.innerHTML = `<h1 class="page">找不到頁面</h1><p class="page-sub">「${esc(id)}」不存在。<a href="#/home">回首頁</a></p>`;
  }

  /* 頁面初始化鉤子 */
  hydrate(view, id);

  /* 紀錄 */
  store.visited[id] = (store.visited[id] || 0) + 1;
  if (!id.startsWith('t-')) store.read[id] = true;
  save();

  currentId = PAGES[id] || TOOLS[id] ? id : currentId;
  markNav(id);
  $('#crumb').textContent = TITLES[id] || (isTool ? TOOLS[id].title : id);
  document.title = (TITLES[id] ? TITLES[id] + '｜' : '') + '氧化還原 × 電化學';
  window.scrollTo({ top: 0 });
  $('#sidebar').classList.remove('open');
  $('#scrim').classList.remove('on');
  $('#searchResults').hidden = true;
}

/* ---------------- 頁面內互動初始化 ---------------- */
function hydrate(view, id) {
  /* 1. details 預設收合 */
  /* 2. .chk 清單勾選 */
  $$('ul.chk[data-checklist]', view).forEach(ul => {
    const key = ul.dataset.checklist;
    store.checks[key] = store.checks[key] || {};
    $$('li', ul).forEach((li, i) => {
      if (store.checks[key][i]) li.classList.add('on');
      li.onclick = () => {
        li.classList.toggle('on');
        store.checks[key][i] = li.classList.contains('on');
        save(); renderCheckSummary();
      };
    });
  });
  if (id === 'ref-check') renderCheckSummary();

  /* 3. E° 表 */
  if ($('#eTable', view)) $('#eTable', view).innerHTML = eTableHTML(true);
  if ($('#cheatE', view)) $('#cheatE', view).innerHTML = eTableHTML(false);

  /* 4. 首頁儀表板 */
  if (id === 'home' && $('#homeStats', view)) $('#homeStats', view).innerHTML = homeStats();

  /* 5. 全站「跳頁」按鈕 */
  $$('[data-jump]', view).forEach(b => b.onclick = () => goto(b.dataset.jump));

  /* 6. pill 可點（活性序列等） */
  $$('.pill[data-on]', view).forEach(p => p.onclick = () => toast(p.dataset.on));

  /* 7. 歷屆試題年份篩選 */
  if (id === 'exam-real') {
    $$('#examFilter .tab', view).forEach(t => t.onclick = () => {
      $$('#examFilter .tab', view).forEach(x => x.classList.remove('on'));
      t.classList.add('on');
      const y = t.dataset.y;
      $$('#examList .exam-card', view).forEach(c => {
        c.style.display = (y === 'all' || c.dataset.year === y) ? '' : 'none';
      });
    });
  }

  /* 8. 分級題庫篩選 */
  if (id === 'exam-bank') {
    const bind = () => {
      qFilter.area = $('#qArea', view).value;
      qFilter.lv = +$('#qLv', view).value;
      qFilter.type = $('#qType', view).value;
      renderQuizList(view);
    };
    ['qArea', 'qLv', 'qType'].forEach(k => $('#' + k, view).onchange = bind);
    $('#qReset', view).onclick = () => {
      if (!confirm('清空全部 38 題的作答紀錄？')) return;
      store.quiz = {}; save(); renderQuizList(view); toast('↺ 已清空題庫作答紀錄');
    };
    $('#qWrong', view).onclick = e => {
      qFilter.onlyWrong = !qFilter.onlyWrong;
      e.target.textContent = qFilter.onlyWrong ? '✅ 顯示全部題目' : '❌ 只看錯題';
      e.target.classList.toggle('primary', qFilter.onlyWrong);
      renderQuizList(view);
    };
    renderQuizList(view);
  }
}

function renderCheckSummary() {
  const box = $('#checkSummary');
  if (!box) return;
  const groups = [['redox', 'Part A 氧化還原', 12], ['ec', 'Part B 電化學', 14], ['uni', '大學延伸', 6]];
  const rows = groups.map(([k, name, total]) => {
    const s = store.checks[k] || {};
    const n = Object.keys(s).filter(x => s[x]).length;
    return `<div style="margin:8px 0">
      <div style="display:flex;justify-content:space-between"><b>${name}</b><span>${n} / ${total}</span></div>
      <div class="mastery"><i style="width:${Math.min(100, n / total * 100)}%"></i></div></div>`;
  }).join('');
  const all = groups.reduce((a, [k, , t]) => {
    const s = store.checks[k] || {};
    return a + Object.keys(s).filter(x => s[x]).length;
  }, 0);
  box.innerHTML = rows + `<div class="result-box"><div class="rv">總計 ${all} / 32 項　${all >= 32 ? '🎉 全部完成，可以去寫歷屆試題了！' : all >= 20 ? '👍 進度不錯，繼續！' : '加油，從 Part A 開始逐項打勾。'}</div></div>`;
}

function homeStats() {
  const readN = ORDER.filter(id => !id.startsWith('t-') && store.read[id]).length;
  const totalN = ORDER.filter(id => !id.startsWith('t-')).length;
  const quizDone = Object.keys(store.quiz).filter(k => store.quiz[k] && store.quiz[k].submitted).length;
  const quizRight = Object.keys(store.quiz).filter(k => store.quiz[k] && store.quiz[k].correct).length;
  const cardN = Object.keys(store.cards).filter(k => (store.cards[k] || 0) >= 2).length;
  const onN = store.on ? store.on.total : 0;
  const onR = store.on ? store.on.right : 0;
  return `
  <div class="stat"><b>${readN}<span class="small">/${totalN}</span></b><span>已讀頁面</span></div>
  <div class="stat"><b>${quizDone}<span class="small">/${QUIZ.length}</span></b><span>題庫作答（答對 ${quizRight}）</span></div>
  <div class="stat"><b>${cardN}<span class="small">/${CARDS.length}</span></b><span>已熟練閃卡</span></div>
  <div class="stat"><b>${onN ? Math.round(onR / onN * 100) + '%' : '—'}</b><span>氧化數訓練正確率（${onN} 題）</span></div>`;
}

/* ---------------- E° 表 ---------------- */
let eSortDesc = true;
function eTableHTML(sortable) {
  const rows = E_TABLE.slice().sort((a, b) => eSortDesc ? b.e - a.e : a.e - b.e);
  const arrow = eSortDesc ? '▼' : '▲';
  return `<div class="tbl-wrap"><table>
    <thead><tr>
      ${sortable ? `<th class="c" style="width:52px;cursor:pointer" id="eSortRank">#</th>` : '<th class="c" style="width:52px">#</th>'}
      <th>半反應式（還原）</th>
      <th class="c" style="width:110px;${sortable ? 'cursor:pointer' : ''}" ${sortable ? 'id="eSortE"' : ''}>E°(V) ${sortable ? arrow : ''}</th>
      <th style="width:190px">備註</th></tr></thead>
    <tbody>${rows.map((r, i) => `<tr${r.e === 0 ? ' class="hl"' : ''}>
      <td class="c small">${i + 1}</td>
      <td class="mono" style="font-size:14px">${r.h}</td>
      <td class="c"><b style="color:${r.e > 0 ? '#0f766e' : r.e < 0 ? '#c0392b' : '#5d6878'}">${r.e > 0 ? '+' : ''}${r.e.toFixed(2)}</b></td>
      <td class="small">${r.note || roleOf(r.h, r.e)}</td></tr>`).join('')}</tbody></table></div>`;
}
function roleOf(h, e) {
  if (e >= 1.3) return '<span class="tag t-ox">強氧化劑</span>';
  if (e <= -0.8) return '<span class="tag t-re">其右側為強還原劑</span>';
  return '';
}
document.addEventListener('click', e => {
  if (e.target.id === 'eSortE' || e.target.closest('#eSortE')) {
    eSortDesc = !eSortDesc;
    const box = $('#eTable') || $('#cheatE');
    if (box) { box.innerHTML = eTableHTML(true); toast(eSortDesc ? '由強氧化劑排到強還原劑' : '由強還原劑排到強氧化劑'); }
  }
});

/* ============================================================
   歷屆試題頁
   ============================================================ */
const TOPIC_CN = {
  'electrolysis': '電解・法拉第', 'oxidation-number': '氧化數', 'displacement': '活性・置換',
  'redox-basic': '氧還基本', 'balancing': '平衡反應式', 'titration': '滴定',
  'cell': '電池・電位', 'plating': '電鍍', 'battery': '商用電池', 'dispro': '歧化・歸中',
  'corrosion': '腐蝕', 'agent': '氧化劑/還原劑'
};
function badgeClass(exam) {
  if (/分科/.test(exam)) return 'ast';
  if (/指考/.test(exam)) return 'uni';
  return 'gsat';
}
function pageExams() {
  const years = [...new Set(EXAMS.map(e => e.year))].sort();
  return `
  <h1 class="page">102 學年度以來大考真題（含官方答案）</h1>
  <p class="page-sub">共 ${EXAMS.length} 題，取材自<b>大學入學考試中心</b>公布之試題與答案（102 指考、103 學測、105 學測、112 分科測驗等）。每題皆附<b>完整詳解</b>與<b>考點分析</b>。</p>
  <div class="warn"><b>出處說明：</b>題目文字依大考中心公告內容整理，部分題幹為便於閱讀而略作排字調整；<b>正式作答請以大考中心原題為準</b>。官方答案以選擇題公告答案為準，非選擇題答案依評分說明整理。</div>

  <div class="stat-row">
    ${years.map(y => `<div class="stat"><b>${EXAMS.filter(e => e.year === y).length}</b><span>${y} 學年度</span></div>`).join('')}
  </div>

  <div class="card">
    <h4>配分趨勢（選修化學 Ⅳ 第 1 章「氧化還原反應與電化學」）</h4>
    <div class="tbl-wrap"><table>
      <thead><tr><th>年度</th><th class="c">108</th><th class="c">109</th><th class="c">110</th><th class="c">111</th><th class="c">112</th><th class="c">平均</th></tr></thead>
      <tbody><tr><td><b>占分</b></td><td class="c">15</td><td class="c">8</td><td class="c">14</td><td class="c">12</td><td class="c">10</td><td class="c"><b class="acc">11.8</b></td></tr></tbody>
    </table></div>
    <div class="note"><b>結論：</b>本章<b>年年必考</b>，平均 <b>11.8 分</b>（占分科測驗化學約 15%）。其中<b>電化學</b>（電池電壓、電解、電鍍）近五年占比與氧化還原計算<b>幾乎相同</b>，不可偏廢。</div>
  </div>

  <div class="tabs" id="examFilter">
    <button class="tab on" data-y="all">全部 ${EXAMS.length} 題</button>
    ${years.map(y => `<button class="tab" data-y="${y}">${y}（${EXAMS.filter(e => e.year === y).length}）</button>`).join('')}
  </div>

  <div id="examList">${EXAMS.map(examCard).join('')}</div>

  <div class="tip" style="margin-top:20px"><b>下一步：</b>做完真題後，去 <a href="#/exam-bank">分級題庫 38 題</a> 加強弱點，或用 <a href="#/ref-trap">二十大易錯陷阱</a> 檢查自己有沒有踩雷。</div>`;
}

function examCard(e) {
  const opts = e.opts
    ? `<div class="opts" style="margin-top:10px">${e.opts.map((o, i) =>
        `<div class="opt" style="cursor:default"><span class="k">${'ABCDE'[i]}</span><span>${o}</span></div>`).join('')}</div>`
    : '';
  const table = e.table
    ? `<div class="tbl-wrap"><table><thead><tr>${e.table.head.map(h => `<th>${h}</th>`).join('')}</tr></thead>
       <tbody>${e.table.rows.map(r => `<tr>${r.map(c => `<td class="c">${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
    : '';
  const ansBox = e.free
    ? `<div class="key"><b>參考答案：</b><ol class="steps small" style="margin:6px 0 0">${e.ans.map(a => `<li>${a.replace(/^\(\d\)\s*/, '')}</li>`).join('')}</ol></div>`
    : `<div class="key" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
         <span><b>官方答案：</b></span>
         ${e.ans.map(a => `<span style="font-size:22px;font-weight:800;color:var(--ox)">${a}</span>`).join('')}
         <span class="small">${e.multi ? '（多選，漏答得部分分、錯答不倒扣）' : '（單選）'}</span>
       </div>`;
  return `<div class="exam-card" data-year="${e.year}">
    <div class="eh">
      <span class="year-badge ${badgeClass(e.exam)}">${e.year} ${e.exam}</span>
      <span class="tag t-ex">${e.num}</span>
      <span class="tag t-pu">${TOPIC_CN[e.topic] || e.topic}</span>
      <span class="tag ${e.src === 'ceec' ? 't-warn' : 't-re'}">${e.src === 'ceec' ? '大考中心原題' : '公開題組'}</span>
      ${e.free ? '<span class="tag t-ox">非選擇題</span>' : ''}
    </div>
    <div class="eb">
      <div class="qstem" style="font-size:15.5px">${e.stem}</div>
      ${table}${opts}
      <div style="margin-top:12px">${ansBox}</div>
      <details style="margin-top:10px"><summary><b>📖 完整詳解與考點分析</b></summary><div class="body">${e.sol}</div></details>
    </div></div>`;
}

/* ============================================================
   分級題庫頁（38 題互動）
   ============================================================ */
let qFilter = { area: 'all', lv: 0, type: 'all' };
function pageQuizBank() {
  return `
  <h1 class="page">分級題庫 38 題（互動作答）</h1>
  <p class="page-sub">氧化還原 <b>19 題</b> ＋ 電化學 <b>19 題</b>（1:1 比重），難度 ★ 到 ★★★★★。作答後立即批改並顯示詳解，進度自動儲存。</p>
  <div class="score-bar" id="qScore"></div>
  <div class="card">
    <div class="row" style="gap:16px;align-items:flex-end">
      <div class="field" style="flex:0 0 190px"><label>範圍</label>
        <select id="qArea"><option value="all">全部（38）</option>
        <option value="redox">氧化還原（19）</option><option value="ec">電化學（19）</option></select></div>
      <div class="field" style="flex:0 0 160px"><label>難度</label>
        <select id="qLv"><option value="0">全部</option>
        ${[1,2,3,4,5].map(l => `<option value="${l}">${'★'.repeat(l)} 以上</option>`).join('')}</select></div>
      <div class="field" style="flex:0 0 160px"><label>題型</label>
        <select id="qType"><option value="all">全部</option><option value="single">單選</option>
        <option value="multi">多選</option><option value="tf">是非</option></select></div>
      <button class="btn-ghost btn-sm" id="qReset" style="margin-bottom:12px">↺ 清空作答紀錄</button>
      <button class="btn-ghost btn-sm" id="qWrong" style="margin-bottom:12px">❌ 只看錯題</button>
    </div>
  </div>
  <div id="qList"></div>`;
}
function renderQuizList(view) {
  const box = $('#qList', view); if (!box) return;
  let list = QUIZ.filter(q =>
    (qFilter.area === 'all' || q.area === qFilter.area) &&
    (qFilter.lv === 0 || q.lv >= qFilter.lv) &&
    (qFilter.type === 'all' || q.type === qFilter.type));
  if (qFilter.onlyWrong) list = list.filter(q => store.quiz[q.id] && store.quiz[q.id].submitted && !store.quiz[q.id].correct);
  box.innerHTML = list.length ? list.map(q => quizCard(q)).join('') : '<div class="note">此條件下沒有題目。</div>';
  bindQuiz(view);
  renderQuizScore(view);
}
function renderQuizScore(view) {
  const box = $('#qScore', view); if (!box) return;
  const done = QUIZ.filter(q => store.quiz[q.id] && store.quiz[q.id].submitted);
  const right = done.filter(q => store.quiz[q.id].correct);
  box.innerHTML = `
    <div>已作答 <span class="big">${done.length}</span><span class="small"> / ${QUIZ.length}</span></div>
    <div>答對 <span class="big" style="color:#2f9e5f">${right.length}</span></div>
    <div>答錯 <span class="big" style="color:#c0392b">${done.length - right.length}</span></div>
    <div>正確率 <span class="big">${done.length ? Math.round(right.length / done.length * 100) + '%' : '—'}</span></div>
    <div class="small">氧還 ${QUIZ.filter(q => q.area === 'redox' && store.quiz[q.id] && store.quiz[q.id].submitted).length}/19　・　電化 ${QUIZ.filter(q => q.area === 'ec' && store.quiz[q.id] && store.quiz[q.id].submitted).length}/19</div>`;
}
const AREACN = { redox: '氧化還原', ec: '電化學' };
const TYPECN = { single: '單選', multi: '多選', tf: '是非' };
function quizCard(q) {
  const st = store.quiz[q.id] || {};
  return `<div class="qz" data-q="${q.id}">
    <div class="qmeta">
      <span class="tag ${q.area === 'redox' ? 't-ox' : 't-re'}">${AREACN[q.area]}</span>
      <span class="tag t-ex">${TYPECN[q.type]}</span>
      <span class="tag t-pu">${'★'.repeat(q.lv)}${'☆'.repeat(5 - q.lv)}</span>
      <span class="small">${q.id.toUpperCase()}</span>
      ${q.multi ? '<span class="tag t-warn">多選</span>' : ''}
    </div>
    <div class="qstem">${q.stem}</div>
    <div class="opts">${q.opts.map((o, i) => {
      const k = 'ABCDEF'[i];
      let cls = '';
      if (st.submitted) {
        cls = 'locked ';
        if (q.ans.includes(k)) cls += 'right';
        else if ((st.picked || []).includes(k)) cls += 'wrong';
      } else if ((st.picked || []).includes(k)) cls = 'picked';
      return `<div class="opt ${cls}" data-k="${k}"><span class="k">${k}</span><span>${o}</span></div>`;
    }).join('')}</div>
    <div class="qz-actions">
      ${st.submitted
        ? `<span class="tag ${st.correct ? 't-ex' : 't-ox'}">${st.correct ? '✅ 答對' : '❌ 答錯'}</span>
           <span class="small">正解：${q.ans.join('、')}</span>
           <button class="btn-ghost btn-sm" data-act="retry">重作</button>`
        : `<button class="btn primary" data-act="submit">送出批改</button>
           <button class="btn-ghost btn-sm" data-act="clear">重選</button>`}
    </div>
    <div class="feedback ${st.submitted ? 'show ' + (st.correct ? 'good' : 'bad') : ''}">
      ${st.submitted ? `<div class="ans">${st.correct ? '✅ 答對了！' : '❌ 正確答案：' + q.ans.join('、')}（你選：${(st.picked || []).join('、') || '未作答'}）</div><div>${q.exp}</div>` : ''}
    </div>
  </div>`;
}
function bindQuiz(view) {
  $$('.qz', view).forEach(card => {
    const id = card.dataset.q;
    const q = QUIZ.find(x => x.id === id);
    store.quiz[id] = store.quiz[id] || { picked: [], submitted: false, correct: false };
    const st = store.quiz[id];
    if (st.submitted) return;
    $$('.opt', card).forEach(o => o.onclick = () => {
      const k = o.dataset.k;
      if (q.type === 'multi') {
        const i = st.picked.indexOf(k);
        if (i >= 0) st.picked.splice(i, 1); else st.picked.push(k);
      } else st.picked = [k];
      $$('.opt', card).forEach(x => x.classList.toggle('picked', st.picked.includes(x.dataset.k)));
      save();
    });
    $('[data-act="submit"]', card).onclick = () => {
      if (!st.picked.length) { toast('請先選一個答案'); return; }
      st.submitted = true;
      const a = st.picked.slice().sort().join(''), b = q.ans.slice().sort().join('');
      st.correct = a === b;
      save();
      card.outerHTML = quizCard(q);
      bindQuiz(view); renderQuizScore(view);
      toast(st.correct ? '✅ 答對！' : '❌ 答錯，詳解已展開');
    };
    $('[data-act="clear"]', card).onclick = () => {
      st.picked = []; save();
      $$('.opt', card).forEach(x => x.classList.remove('picked'));
    };
  });
  $$('[data-act="retry"]', view).forEach(b => b.onclick = () => {
    const card = b.closest('.qz'); const id = card.dataset.q;
    store.quiz[id] = { picked: [], submitted: false, correct: false }; save();
    card.outerHTML = quizCard(QUIZ.find(x => x.id === id));
    bindQuiz(view); renderQuizScore(view);
  });
}

/* ---------------- 搜尋 ---------------- */
let SEARCH_INDEX = null;
function buildIndex() {
  const idx = [];
  ORDER.forEach(id => {
    let html = '';
    try { html = id.startsWith('t-') && TOOLS[id] ? (TOOLS[id].title + ' ' + TOOLS[id].sub) : (PAGES[id] ? PAGES[id](ctx) : ''); } catch (e) { html = ''; }
    const tmp = document.createElement('div'); tmp.innerHTML = html;
    const title = ($('h1', tmp) || {}).textContent || TITLES[id] || id;
    const text = (tmp.textContent || '').replace(/\s+/g, ' ');
    idx.push({ id, title, text: text.slice(0, 6000), label: TITLES[id] || title });
  });
  EXAMS.forEach(e => {
    const tmp = document.createElement('div'); tmp.innerHTML = e.stem + ' ' + e.sol;
    idx.push({ id: 'exam-real', title: `${e.year} ${e.exam} ${e.num}`, text: (tmp.textContent || '').slice(0, 3000), label: `歷屆｜${e.year} ${e.exam} ${e.num}`, extra: true });
  });
  QUIZ.forEach(q => idx.push({ id: 'exam-bank', title: q.id, text: q.stem + ' ' + q.exp, label: `題庫｜${q.id.toUpperCase()} ${AREACN[q.area]}`, extra: true }));
  CARDS.forEach((c, i) => idx.push({ id: 't-cards', title: c.f, text: c.f + ' ' + c.b, label: `閃卡｜${c.f.slice(0, 26)}`, extra: true }));
  SEARCH_INDEX = idx;
}
function doSearch(q) {
  const box = $('#searchResults');
  if (!q || q.length < 1) { box.hidden = true; box.innerHTML = ''; return; }
  if (!SEARCH_INDEX) buildIndex();
  const ql = q.toLowerCase();
  const hits = SEARCH_INDEX
    .map(it => {
      const hay = (it.title + ' ' + it.label + ' ' + it.text).toLowerCase();
      const i = hay.indexOf(ql);
      if (i < 0) return null;
      const inTitle = (it.title + it.label).toLowerCase().includes(ql);
      return { it, score: inTitle ? 1000 : 10, pos: i };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
  if (!hits.length) {
    box.innerHTML = '<div class="sr-empty">找不到「' + esc(q) + '」<br><span style="font-size:11.5px">試試：歧化、鹽橋、能斯特、法拉第、當量、鈍化</span></div>';
    box.hidden = false; return;
  }
  box.innerHTML = hits.map(h => {
    const t = h.it.text || '';
    const p = Math.max(0, t.toLowerCase().indexOf(ql) - 18);
    const snip = (p > 0 ? '…' : '') + t.slice(p, p + 70) + '…';
    return `<div class="sr-item" data-go="${h.it.id}"><b>${esc(h.it.label || h.it.title)}</b><span>${esc(snip)}</span></div>`;
  }).join('');
  box.hidden = false;
  $$('.sr-item', box).forEach(x => x.onclick = () => { box.hidden = true; $('#searchInput').value = ''; goto(x.dataset.go); });
}

/* ---------------- 啟動 ---------------- */
function boot() {
  buildNav();

  /* 主題 */
  if (store.dark) document.documentElement.setAttribute('data-theme', 'dark');
  $('#btnDark').onclick = () => {
    store.dark = !store.dark;
    document.documentElement.setAttribute('data-theme', store.dark ? 'dark' : 'light');
    save(); toast(store.dark ? '🌙 已切換深色模式' : '☀️ 已切換淺色模式');
  };
  $('#btnPrint').onclick = () => window.print();

  /* 重置 */
  $('#btnReset').onclick = () => {
    if (!confirm('確定要清空所有學習進度（已讀頁面、題庫作答、閃卡、勾選清單）嗎？')) return;
    store = blank();
    try { localStorage.removeItem(KEY); } catch (e) {}
    ctx.store = store;
    save(); render(currentId);
    toast('↺ 已重置全部進度');
  };

  /* 側欄（手機） */
  $('#navToggle').onclick = () => { $('#sidebar').classList.toggle('open'); $('#scrim').classList.toggle('on'); };
  $('#scrim').onclick = () => { $('#sidebar').classList.remove('open'); $('#scrim').classList.remove('on'); };

  /* 頁尾按鈕 */
  $$('[data-goto]').forEach(b => b.onclick = () => goto(b.dataset.goto));

  /* 導覽點擊 */
  $('#nav').addEventListener('click', e => {
    const a = e.target.closest('.nav-item');
    if (!a) return;
    e.preventDefault();
    goto(a.dataset.id);
  });

  /* 搜尋 */
  let sTimer;
  $('#searchInput').addEventListener('input', e => {
    clearTimeout(sTimer);
    const v = e.target.value.trim();
    sTimer = setTimeout(() => doSearch(v), 160);
  });
  $('#searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') { const first = $('.sr-item'); if (first) first.click(); }
    if (e.key === 'Escape') { $('#searchResults').hidden = true; e.target.blur(); }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-box')) $('#searchResults').hidden = true;
  });

  /* 全站 a[href^="#/"] 攔截 */
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#/"]');
    if (!a) return;
    e.preventDefault();
    goto(a.getAttribute('href').slice(2));
  });

  /* hash 路由 */
  window.addEventListener('hashchange', () => {
    const id = (location.hash || '').replace(/^#\//, '') || 'home';
    if (id !== currentId || !$('#view').innerHTML.trim()) render(id);
  });

  const start = (location.hash || '').replace(/^#\//, '') || 'home';
  render(start);
  updateProgressUI();
  if (memoryOnly) toast('⚠ 此環境無法使用 localStorage，進度僅保存在本次開啟期間');
  setTimeout(() => { if (!SEARCH_INDEX) buildIndex(); }, 1200);
}

let booted = false;
function start() { if (booted) return; booted = true; boot(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
else start();
