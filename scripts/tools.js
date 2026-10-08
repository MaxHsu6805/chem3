/* ============================================================
   tools.js — 8 個互動工具
   契約：TOOLS[id] = {title, sub, render(el, ctx), cleanup?(el)}
   ctx = {store, save(), toast(msg), goto(pageId)}
   ============================================================ */
import { ON_BANK, ROLE_BANK, HALF_RX, CARDS, FARADAY, ACTIVITY, E_TABLE } from './data.js';
import { FIGS } from './figs.js';

const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const rd = (x, d) => { const p = Math.pow(10, d === undefined ? 3 : d); return Math.round(x * p) / p; };
const sig = (x, n) => {
  if (!isFinite(x) || x === 0) return String(x);
  const d = n === undefined ? 4 : n;
  const e = Math.floor(Math.log10(Math.abs(x)));
  const p = Math.max(0, d - 1 - e);
  return (Math.round(x * Math.pow(10, p)) / Math.pow(10, p)).toFixed(Math.min(p, 6));
};
const shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = b[i]; b[i] = b[j]; b[j] = t; } return b; };
const pick = a => a[Math.floor(Math.random() * a.length)];
/* 從陣列抽一個不等於 prev 的元素 */
const pickNew = (a, prev) => {
  const c = a.filter(x => x !== prev);
  return pick(c.length ? c : a);
};

export const TOOLS = {};

/* ============================================================
   t-on｜氧化數訓練器
   ============================================================ */
TOOLS['t-on'] = {
  title: '氧化數訓練器',
  sub: '隨機抽一個化合物，指出指定元素的氧化數。共 ' + ON_BANK.length + ' 題，含分數與負值。',
  render(el, ctx) {
    const st = ctx.store;
    if (!st.on) st.on = { i: null, ok: 0, no: 0 };
    let cur = st.on.i !== null ? ON_BANK[st.on.i] : null;

    el.innerHTML = `
      <div class="tool-panel">
        <div class="grid2" style="align-items:start;gap:18px">
          <div>
            <div class="field"><label>作答區</label>
              <div id="onQ" class="card" style="text-align:center;padding:26px 18px;min-height:150px"></div>
              <div class="qz-actions" style="margin-top:12px">
                <button class="btn" id="onNext">換一題 →</button>
                <button class="btn primary" id="onCheck" disabled>檢查答案</button>
              </div>
              <div id="onFb" class="feedback"></div>
            </div>
          </div>
          <div>
            <div class="stat-row">
              <div class="stat"><b id="onOk">${st.on.ok}</b><span>答對</span></div>
              <div class="stat"><b id="onNo">${st.on.no}</b><span>答錯</span></div>
              <div class="stat"><b>${ON_BANK.length}</b><span>題庫</span></div>
            </div>
            <div class="card">
              <h3>判定順序（照著走就不會錯）</h3>
              <ol class="chk">
                <li>游離態元素＝<b>0</b>（O₂、Cl₂、S₈、P₄、Na）</li>
                <li>單原子離子＝<b>電荷數</b>（Na⁺ +1、Cl⁻ −1）</li>
                <li>F 永遠 <b>−1</b>；O 一般 <b>−2</b>（過氧化物 −1、超氧化物 −1/2、OF₂ +2）</li>
                <li>H 一般 <b>+1</b>（金屬氫化物 −1）</li>
                <li>第 1 族 <b>+1</b>、第 2 族 <b>+2</b>、Al <b>+3</b></li>
                <li>中性分子：各氧化數和＝0；多原子離子：和＝電荷</li>
              </ol>
            </div>
            <div class="note"><b>常考陷阱</b>：Fe₃O₄ 的 Fe＝+8/3（平均）；S₄O₆²⁻ 的 S＝+2.5（平均）；NaN₃ 的 N＝−1/3；NH₄NO₃ 兩個 N 分別 −3 與 +5。</div>
          </div>
        </div>
      </div>`;

    function show() {
      const q = $('#onQ', el);
      if (!cur) { q.innerHTML = '<span class="small">按「換一題」開始</span>'; return; }
      q.innerHTML = `<div class="small">下列化合物中 <b style="color:var(--ox);font-size:16px">${esc(cur.hl)}</b> 的氧化數是多少？</div>
        <div style="font-size:38px;font-weight:800;margin-top:12px;letter-spacing:.5px">${esc(cur.f)}</div>
        <div style="margin-top:16px"><input class="coef-input" id="onIn" type="text" inputmode="text" placeholder="例如 +7、−1、5/2" style="font-size:20px;width:140px;text-align:center"></div>`;
      $('#onCheck', el).disabled = false;
      const inp = $('#onIn', el);
      inp.focus();
      inp.onkeydown = e => { if (e.key === 'Enter') $('#onCheck', el).click(); };
      $('#onFb', el).className = 'feedback';
      $('#onFb', el).innerHTML = '';
    }

    $('#onNext', el).onclick = () => {
      const prev = st.on.i;
      let i;
      do { i = Math.floor(Math.random() * ON_BANK.length); } while (i === prev && ON_BANK.length > 1);
      st.on.i = i; cur = ON_BANK[i]; ctx.save(); show();
    };
    $('#onCheck', el).onclick = () => {
      if (!cur) return;
      const raw = ($('#onIn', el).value || '').trim();
      const fb = $('#onFb', el);
      if (!raw) { fb.className = 'feedback bad show'; fb.innerHTML = '<div class="ans">請先輸入答案</div>'; return; }
      const norm = t => t.replace(/\s/g, '').replace('＋', '+').replace('－', '-').replace('—', '-')
        .replace(/^0+/, '').replace('+', '+');
      const a = norm(raw), b = norm(String(cur.v));
      /* 允許 +7 / 7 / ７；分數 5/2 允許 2.5 */
      let ok = a === b || a === '+' + b || (a.replace('+', '') === b.replace('+', ''));
      if (!ok && String(cur.v).includes('/')) {
        const [p, q] = String(cur.v).replace('+', '').split('/');
        ok = Math.abs(parseFloat(a) - (parseFloat(p) / parseFloat(q))) < 1e-6;
      }
      fb.className = 'feedback show ' + (ok ? 'good' : 'bad');
      fb.innerHTML = ok
        ? `<div class="ans">✅ 正確！${esc(cur.f)} 中 ${esc(cur.hl)} 的氧化數 = <b>${cur.v > 0 ? '+' : ''}${cur.v}</b></div>`
        : `<div class="ans">❌ 答案是 <b>${cur.v > 0 ? '+' : ''}${cur.v}</b></div>
           <div class="small">你填「${esc(raw)}」。複習一下判定順序：先看 F／O／H／第 1、2 族，再用「總和＝電荷」回推。</div>
           <div class="qz-actions"><a class="btn btn-sm" href="#/r-on">去讀 A1 氧化數 →</a></div>`;
      if (ok) { st.on.ok++; $('#onOk', el).textContent = st.on.ok; ctx.toast('答對！' + cur.f); }
      else { st.on.no++; $('#onNo', el).textContent = st.on.no; }
      ctx.save();
    };
    if (cur) show(); else $('#onQ', el).innerHTML = '<span class="small">按「換一題」開始</span>';
  }
};

/* ============================================================
   t-role｜四劑辨識訓練
   ============================================================ */
TOOLS['t-role'] = {
  title: '四劑辨識訓練',
  sub: '先判斷是不是氧化還原反應，再找出氧化劑／還原劑。' + ROLE_BANK.length + ' 題，含歧化、歸中與「假氧化還原」陷阱。',
  render(el, ctx) {
    const st = ctx.store;
    if (!st.role) st.role = { i: null, ok: 0, no: 0 };
    let cur = st.role.i !== null ? ROLE_BANK[st.role.i] : null;

    el.innerHTML = `
      <div class="tool-panel">
        <div class="grid2" style="align-items:start;gap:18px">
          <div>
            <div id="roleQ" class="card" style="min-height:210px"></div>
            <div class="qz-actions" style="margin-top:12px">
              <button class="btn" id="roleNext">換一題 →</button>
            </div>
            <div id="roleFb" class="feedback"></div>
          </div>
          <div>
            <div class="stat-row">
              <div class="stat"><b id="roleOk">${st.role.ok}</b><span>答對</span></div>
              <div class="stat"><b id="roleNo">${st.role.no}</b><span>答錯</span></div>
              <div class="stat"><b>${ROLE_BANK.length}</b><span>題庫</span></div>
            </div>
            <div class="card">
              <h3>四個名詞一次分清楚</h3>
              <table><thead><tr><th>名詞</th><th>氧化數</th><th>電子</th><th>自身發生</th></tr></thead>
              <tbody>
                <tr><td class="oxl"><b>氧化劑</b></td><td>下降</td><td>得 e⁻</td><td>被還原</td></tr>
                <tr><td class="rel"><b>還原劑</b></td><td>上升</td><td>失 e⁻</td><td>被氧化</td></tr>
              </tbody></table>
              <div class="tip">口訣：<b>升・失・氧（化）→ 還原劑</b>；<b>降・得・還（原）→ 氧化劑</b>。<br>「劑」是<span class="pill">對別人做的事</span>，「被」是<span class="pill">自己遭遇的事</span>，兩者相反。</div>
            </div>
            <div class="warn"><b>必考陷阱</b>：酸性環境的 H⁺（H₂SO₄、HCl）與配位陰離子（如 Cu + 稀 HNO₃ 中 6/8 的 NO₃⁻）<b>氧化數不變 ⇒ 不是氧化劑</b>。判斷氧化劑一律看「哪個元素的氧化數真的下降」。</div>
          </div>
        </div>
      </div>`;

    function show() {
      const q = $('#roleQ', el), fb = $('#roleFb', el);
      fb.className = 'feedback'; fb.innerHTML = '';
      if (!cur) { q.innerHTML = '<span class="small">按「換一題」開始</span>'; return; }
      const opts = cur.none
        ? ['氧化劑＝還原劑（歧化）', '不是氧化還原反應', '歸中反應']
        : (cur.same
          ? ['氧化劑＝還原劑（歧化）', '只有氧化劑', '只有還原劑']
          : cur.sp.filter(x => x.on !== '+1 → +1' && !/不變/.test(x.on)).map(x => x.n).slice(0, 4));
      const list = cur.none || cur.same ? opts
        : shuffle(cur.sp.map(x => x.n)).slice(0, 4);
      q.innerHTML = `
        <div class="small">下列反應式，何者為<b style="color:var(--ox)">氧化劑</b>？何者為<b style="color:var(--re)">還原劑</b>？（先判斷是否為氧化還原反應）</div>
        <div class="eq" style="margin:14px 0;font-size:17px">${esc(cur.eq)}</div>
        <div class="field"><label>① 氧化劑（若整題不是氧化還原反應，請選「不是氧化還原反應」）</label>
          <div id="roleOx">${list.map(n => `<span class="pill clickable" data-g="ox" data-v="${esc(n)}">${esc(n)}</span>`).join('')}
            ${cur.none || cur.same ? '' : '<span class="pill clickable" data-g="ox" data-v="__none__">不是氧化還原反應</span>'}
          </div></div>
        <div class="field"><label>② 還原劑</label>
          <div id="roleRe">${list.map(n => `<span class="pill clickable" data-g="re" data-v="${esc(n)}">${esc(n)}</span>`).join('')}
            ${cur.none || cur.same ? '' : '<span class="pill clickable" data-g="re" data-v="__none__">不是氧化還原反應</span>'}
          </div></div>
        <button class="btn primary" id="roleCheck" style="margin-top:10px">檢查答案</button>`;

      const ans = { ox: null, re: null };
      $$('.pill.clickable', q).forEach(p => p.onclick = () => {
        const g = p.dataset.g;
        $$(`[data-g="${g}"]`, q).forEach(x => x.classList.remove('sel'));
        p.classList.add('sel');
        ans[g] = p.dataset.v;
      });
      $('#roleCheck', q).onclick = () => {
        if (ans.ox === null || ans.re === null) {
          fb.className = 'feedback bad show'; fb.innerHTML = '<div class="ans">兩題都要選</div>'; return;
        }
        const expOx = cur.none ? '__none__' : (cur.same ? 'SAME' : cur.oxA);
        const expRe = cur.none ? '__none__' : (cur.same ? 'SAME' : cur.reA);
        const okOx = expOx === 'SAME' ? /歧化|氧化劑＝還原劑/.test(ans.ox) : ans.ox === expOx;
        const okRe = expRe === 'SAME' ? /歧化|氧化劑＝還原劑/.test(ans.re) : ans.re === expRe;
        const ok = okOx && okRe;
        fb.className = 'feedback show ' + (ok ? 'good' : 'bad');
        fb.innerHTML = `<div class="ans">${ok ? '✅ 完全正確！' : '❌ 再想想'}</div>
          <div class="small">${cur.sp.map(x => `${esc(x.n)}：${esc(x.on)}`).join('　｜　')}</div>
          <div style="margin-top:8px">${cur.note}</div>
          ${ok ? '' : `<div class="small" style="margin-top:8px">正解：氧化劑 <b>${cur.none ? '—（不是氧化還原反應）' : esc(cur.oxA || '同物質（歧化）')}</b>｜還原劑 <b>${cur.none ? '—' : esc(cur.reA || '同物質（歧化）')}</b></div>`}
          <div class="qz-actions"><a class="btn btn-sm" href="#/r-role">去讀 A2 氧化劑與還原劑 →</a></div>`;
        if (ok) { st.role.ok++; $('#roleOk', el).textContent = st.role.ok; }
        else { st.role.no++; $('#roleNo', el).textContent = st.role.no; }
        ctx.save();
      };
    }

    $('#roleNext', el).onclick = () => {
      const prev = st.role.i;
      let i;
      do { i = Math.floor(Math.random() * ROLE_BANK.length); } while (i === prev && ROLE_BANK.length > 1);
      st.role.i = i; cur = ROLE_BANK[i]; ctx.save(); show();
    };
    if (cur) show(); else $('#roleQ', el).innerHTML = '<span class="small">按「換一題」開始</span>';
  }
};

/* ============================================================
   t-half｜半反應式分步訓練
   ------------------------------------------------------------
   資料結構：h.sp = [{n:物種, sd:'L'|'R', ci:係數在 target/coefs 的索引}]
   → 站位（左／右）由資料明確指定，不需要推測，也不會跑位。
   每一步 h.steps[k].coefs 中「恰好一個 null」＝該步要填的空格；
   最後一步的 coefs 與 target 相同（僅空格為 null）。
   ============================================================ */
TOOLS['t-half'] = {
  title: '半反應式分步訓練',
  sub: '把 10 個必考半反應式拆成步驟，每步只填一個係數。酸性 5 題、鹼性 4 題、氧化半反應 2 題。',
  render(el, ctx) {
    const st = ctx.store;
    if (!st.half) st.half = {};
    let idx = 0, step = 0;
    let h = HALF_RX[0];

    /* --- 依資料決定站位與顯示順序 --- */
    function sides(hx) {
      const rank = n => n === 'e⁻' ? 3 : (n === 'H₂O' ? 2 : (n === 'H⁺' || n === 'OH⁻' ? 1 : 0));
      const sf = (a, b) => (rank(a.n) - rank(b.n)) || (a.ci - b.ci);
      return { L: hx.sp.filter(x => x.sd === 'L').slice().sort(sf),
               R: hx.sp.filter(x => x.sd === 'R').slice().sort(sf) };
    }
    const nameAt = (hx, ci) => { const x = hx.sp.find(y => y.ci === ci); return x ? x.n : ''; };

    /* 平衡式渲染：null → 可填輸入框；0 → 不顯示（尚未登場）；其他 → 靜態已知係數 */
    function eqHTML(hx, coefs) {
      const plus = '<span class="sp">+</span>';
      const cell = it => {
        const c = coefs[it.ci];
        if (c === null || c === undefined) {
          return '<span style="display:inline-flex;align-items:center;gap:3px">' +
            '<input class="coef-input" data-p="' + it.ci + '" type="text" inputmode="numeric" value="" placeholder="?" ' +
            'aria-label="' + esc(it.n) + ' 的係數">' +
            '<span style="font-weight:700">' + esc(it.n) + '</span></span>';
        }
        if (c === 0) return null;
        return '<span style="display:inline-flex;align-items:center;gap:2px">' +
          '<span class="mono" style="color:var(--acc);font-weight:700;min-width:13px;text-align:right">' + (c > 1 ? c : '') + '</span>' +
          '<span>' + esc(it.n) + '</span></span>';
      };
      const sd = sides(hx);
      return '<div class="eq-line">' + sd.L.map(cell).filter(Boolean).join(plus) +
        '<span class="sp" style="font-size:22px;margin:0 10px">→</span>' +
        sd.R.map(cell).filter(Boolean).join(plus) + '</div>';
    }
    function skeleton(hx) {
      const sd = sides(hx);
      return '<span class="small" style="margin-right:8px">骨架：</span>' + sd.L.map(x => esc(x.n)).join(' + ') +
        ' <span style="font-size:20px;margin:0 8px">→</span> ' + sd.R.map(x => esc(x.n)).join(' + ');
    }
    function finalEq(hx) {
      const t = hx.target, sd = sides(hx);
      const mk = arr => arr.filter(x => (t[x.ci] || 0) > 0).map(x => ((t[x.ci] > 1) ? t[x.ci] : '') + esc(x.n));
      return '<b>' + mk(sd.L).join(' + ') + ' → ' + mk(sd.R).join(' + ') + '</b>';
    }
    /* 電荷檢查：依物種名稱推電荷（給提示用） */
    const CHARGE = { 'MnO₄⁻': -1, 'Cr₂O₇²⁻': -2, 'NO₃⁻': -1, 'C₂O₄²⁻': -2, 'ClO⁻': -1, 'OH⁻': -1,
      'H⁺': 1, 'e⁻': -1, 'Mn²⁺': 2, 'Cr³⁺': 3, 'Fe²⁺': 2, 'Fe³⁺': 3 };
    function chargeOf(hx, coefs) {
      let L = 0, R = 0;
      hx.sp.forEach(x => { const c = coefs[x.ci] || 0; const q = CHARGE[x.n] || 0; if (x.sd === 'L') L += c * q; else R += c * q; });
      return { L, R };
    }

    el.innerHTML = `
      <div class="tool-panel">
        <div class="tabs" id="hTabs">
          ${HALF_RX.map((x, i) => `<span class="tab${i === 0 ? ' on' : ''}" data-i="${i}" title="${esc(x.title)}">${i + 1}</span>`).join('')}
        </div>
        <div class="grid2" style="align-items:start;gap:18px;margin-top:14px">
          <div>
            <h3 id="hTitle" style="margin-top:0"></h3>
            <div id="hSkel" class="small" style="margin-bottom:10px"></div>
            <div class="card" style="padding:18px">
              <div class="hstep-name" id="hStepName"></div>
              <div id="hEq" style="margin:14px 0 6px;font-size:19px"></div>
              <div id="hCharge" class="small"></div>
            </div>
            <div class="qz-actions" style="margin-top:12px">
              <button class="btn primary" id="hCheck">檢查這一步</button>
              <button class="btn" id="hHint">看提示</button>
              <button class="btn btn-ghost" id="hShow">直接填入答案</button>
              <button class="btn btn-ghost" id="hReset">重來</button>
            </div>
            <div id="hFb" class="feedback"></div>
          </div>
          <div>
            <div class="card">
              <h3>半反應法五步驟</h3>
              <ol class="chk">
                <li>寫出<b>主要元素</b>的反應物與產物，先平衡它</li>
                <li>用 <b>H₂O</b> 平衡 O</li>
                <li>酸性用 <b>H⁺</b>、鹼性用 <b>H₂O ＋ OH⁻</b> 平衡 H</li>
                <li>用 <b>e⁻</b> 平衡電荷（左右總電荷相等）</li>
                <li>兩式乘係數使 e⁻ 數相同後<b>相加</b>，消去 e⁻</li>
              </ol>
            </div>
            <div class="note"><b>鹼性快速法</b>：先當酸性平衡好，再兩邊各加「OH⁻ ＝ H⁺ 的個數」，把 H⁺ + OH⁻ 合成 H₂O 並消去。</div>
            <div class="card" id="hProgress"></div>
            <div class="tip"><b>驗證技巧</b>：填完 e⁻ 那一步後，看下方「電荷檢查」左右是否相等；再看 O、H 原子數是否相等，兩關都過就一定對。</div>
          </div>
        </div>
      </div>`;

    function drawProgress() {
      const done = HALF_RX.filter(x => (st.half[x.id] || 0) >= x.steps.length).length;
      $('#hProgress', el).innerHTML = `<h3>我的進度</h3>
        <div class="stat-row"><div class="stat"><b>${done}</b><span>完成 / ${HALF_RX.length}</span></div>
        <div class="stat"><b>${Math.round(done / HALF_RX.length * 100)}%</b><span>完成率</span></div></div>
        <div style="margin-top:8px">${HALF_RX.map((x, i) => {
          const p = st.half[x.id] || 0, full = p >= x.steps.length;
          return `<span class="pill${full ? ' on' : ''}" data-goto-i="${i}" style="cursor:pointer;margin:2px">${i + 1}. ${full ? '✅' : p + '/' + x.steps.length}</span>`;
        }).join('')}</div>`;
      $$('[data-goto-i]', $('#hProgress', el)).forEach(p => p.onclick = () => select(+p.dataset.gotoI));
    }

    function draw() {
      const s = h.steps[Math.min(step, h.steps.length - 1)];
      const envTxt = h.env === 'acid' ? '<span class="tag t-ox">酸性</span>' : '<span class="tag t-re">鹼性</span>';
      $('#hTitle', el).innerHTML = `${esc(h.title)}　${envTxt}　<span class="small">第 ${step + 1} / ${h.steps.length} 步</span>`;
      $('#hSkel', el).innerHTML = skeleton(h);
      $('#hStepName', el).textContent = s.name;
      $('#hEq', el).innerHTML = eqHTML(h, s.coefs);
      const inp = $('#hEq .coef-input', el);
      if (inp) {
        inp.onkeydown = e => { if (e.key === 'Enter') $('#hCheck', el).click(); };
        inp.oninput = () => updateCharge();
        setTimeout(() => { try { inp.focus(); } catch (e) {} }, 30);
      }
      updateCharge();
      const fb = $('#hFb', el); fb.className = 'feedback'; fb.innerHTML = '';
    }

    /* 電荷即時檢查（不重繪方程式，避免清掉使用者輸入） */
    function updateCharge() {
      const s = h.steps[Math.min(step, h.steps.length - 1)];
      const inp = $('#hEq .coef-input', el);
      const live = s.coefs.map(c => (c === null ? ((inp && parseFloat(inp.value)) || 0) : (c || 0)));
      const ch = chargeOf(h, live);
      const f = v => (v >= 0 ? '+' + v : String(v));
      $('#hCharge', el).innerHTML = `電荷檢查：左 ${f(ch.L)}　／　右 ${f(ch.R)}` +
        (ch.L === ch.R ? ' <span class="tag t-pu">✔ 相等</span>' : ' <span class="small">（尚未平衡）</span>');
    }

    function select(i) {
      idx = i; h = HALF_RX[i];
      step = Math.min(st.half[h.id] || 0, h.steps.length - 1);
      $$('#hTabs .tab', el).forEach((t, k) => t.classList.toggle('on', k === i));
      draw();
    }

    $$('#hTabs .tab', el).forEach(t => t.onclick = () => select(+t.dataset.i));

    $('#hReset', el).onclick = () => { st.half[h.id] = 0; ctx.save(); step = 0; draw(); drawProgress(); ctx.toast('已重置：' + h.title); };
    $('#hHint', el).onclick = () => {
      const s = h.steps[Math.min(step, h.steps.length - 1)];
      const fb = $('#hFb', el);
      fb.className = 'feedback show good';
      fb.innerHTML = `<div class="ans">💡 提示</div><div class="small">${esc(s.hint)}</div>`;
    };
    $('#hShow', el).onclick = () => {
      const s = h.steps[Math.min(step, h.steps.length - 1)];
      const inp = $('#hEq .coef-input', el);
      const fb = $('#hFb', el);
      if (inp) { inp.value = h.target[+inp.dataset.p]; inp.classList.add('right'); updateCharge(); }
      fb.className = 'feedback show good';
      fb.innerHTML = `<div class="ans">已填入本步驟答案</div><div class="small">${esc(s.hint)}</div>`;
    };
    $('#hCheck', el).onclick = () => {
      const s = h.steps[Math.min(step, h.steps.length - 1)];
      const inp = $('#hEq .coef-input', el);
      const fb = $('#hFb', el);
      if (!inp) { fb.className = 'feedback show good'; fb.innerHTML = '<div class="ans">這一步沒有要填的空格</div>'; return; }
      const p = +inp.dataset.p;
      const want = h.target[p];
      const raw = (inp.value || '').trim();
      if (raw === '') {
        fb.className = 'feedback bad show';
        fb.innerHTML = `<div class="ans">請先填入係數</div>
          <div class="small">本步驟只要填一個格子：${esc(nameAt(h, p))} 前面要填什麼數字？（係數為 1 時請填 1）</div>`;
        return;
      }
      const got = parseFloat(raw);
      inp.classList.remove('right', 'wrong');
      const good = !isNaN(got) && got === want;
      inp.classList.add(good ? 'right' : 'wrong');
      fb.className = 'feedback show ' + (good ? 'good' : 'bad');
      if (good) {
        fb.innerHTML = `<div class="ans">✅ 正確！${esc(nameAt(h, p))} 的係數 = ${want}</div>
          <div class="small">${esc(s.hint)}</div>` +
          (step < h.steps.length - 1
            ? '<div class="qz-actions"><button class="btn primary" id="hGoNext">下一步 →</button></div>'
            : `<div class="key" style="margin-top:10px"><b>🎉 全部完成！</b>最終平衡式：<div class="eq" style="margin-top:6px">${finalEq(h)}</div></div>
               <div class="qz-actions"><a class="btn btn-sm" href="#/r-bal">去讀 A4 平衡反應式 →</a>
               ${idx < HALF_RX.length - 1 ? '<button class="btn btn-sm" id="hNextRx">下一題 →</button>' : ''}</div>`);
        st.half[h.id] = Math.max(st.half[h.id] || 0, step + 1); ctx.save(); drawProgress();
        const nx = $('#hGoNext', fb);
        if (nx) nx.onclick = () => { step++; draw(); };
        const nr = $('#hNextRx', fb);
        if (nr) nr.onclick = () => select(idx + 1);
      } else {
        fb.innerHTML = `<div class="ans">❌ 不對，再想一次</div><div class="small">提示：${esc(s.hint)}</div>`;
      }
    };

    select(0); drawProgress();
  }
};

/* ============================================================
   t-cards｜閃卡記憶（71 張）
   ============================================================ */
const CARD_GROUPS = [
  { t: 'ox', n: '氧化數規則', c: 't-ox' }, { t: 'basic', n: '基本觀念', c: 't-re' },
  { t: 'agent', n: '氧化劑・還原劑', c: 't-ex' }, { t: 'series', n: '活性序列・置換', c: 't-pu' },
  { t: 'titration', n: '滴定與當量', c: 't-warn' }, { t: 'ec', n: '電化學・電池', c: 't-re' },
  { t: 'color', n: '顏色・現象', c: 't-ox' }, { t: 'app', n: '生活與工業應用', c: 't-pu' },
  { t: 'uni', n: '大學延伸', c: 't-warn' }
];
TOOLS['t-cards'] = {
  title: '閃卡記憶',
  sub: CARDS.length + ' 張卡，涵蓋 9 個主題。點卡片翻面；答對的卡會記住，下次自動優先出未熟的卡。',
  render(el, ctx) {
    const st = ctx.store;
    if (!st.cards) st.cards = {};
    let group = 'all', deck = [], pos = 0;

    el.innerHTML = `
      <div class="tool-panel">
        <div class="tabs" id="cTabs">
          <span class="tab on" data-g="all">全部 ${CARDS.length}</span>
          ${CARD_GROUPS.map(g => `<span class="tab" data-g="${g.t}">${g.n} ${CARDS.filter(c => c.t === g.t).length}</span>`).join('')}
        </div>
        <div class="grid2" style="align-items:start;gap:18px;margin-top:14px">
          <div>
            <div class="fc-stage" id="fcStage">
              <div class="fc-card" id="fcCard">
                <div class="fc-face fc-front" id="fcFront"></div>
                <div class="fc-face fc-back" id="fcBack"></div>
              </div>
            </div>
            <div class="qz-actions" style="margin-top:12px">
              <button class="btn primary" id="cFlip">翻面</button>
              <button class="btn" id="cKnow">我會了 ✔</button>
              <button class="btn" id="cDont">還不熟 ✘</button>
              <button class="btn btn-ghost" id="cShuffle">重新洗牌</button>
            </div>
            <div class="small" id="cCount" style="margin-top:8px"></div>
          </div>
          <div>
            <div class="card"><h3>各主題熟練度</h3><div id="cStat"></div></div>
            <div class="tip"><b>用法建議</b>：第一輪全部標「還不熟」，第二輪只練被標記的卡；考前一晚把「還不熟」的卡全部走完即可。</div>
            <div class="note">卡片內容與 <a href="#/ref-cheat">考前一頁速查表</a>、<a href="#/ref-trap">二十大易錯陷阱</a> 相互對應，看到不熟的卡可直接跳過去讀。</div>
          </div>
        </div>
      </div>`;

    function build() {
      const base = group === 'all' ? CARDS : CARDS.filter(c => c.t === group);
      /* 未熟（或沒紀錄）的排前面 */
      deck = shuffle(base).sort((a, b) => (st.cards[key(a)] || 0) - (st.cards[key(b)] || 0));
      pos = 0;
    }
    const key = c => group + '|' + c.f.slice(0, 18);

    function show() {
      const card = $('#fcCard', el);
      if (!deck.length) { $('#fcFront', el).innerHTML = '<span class="small">這個主題沒有卡片</span>'; $('#fcBack', el).innerHTML = ''; return; }
      const c = deck[pos % deck.length];
      const g = CARD_GROUPS.find(x => x.t === c.t) || { n: '其他' };
      card.classList.remove('flip');
      $('#fcFront', el).innerHTML = `<span class="tag ${g.c || 't-re'}">${esc(g.n)}</span>
        <div style="font-size:19px;font-weight:700;margin-top:14px;line-height:1.6">${esc(c.f)}</div>
        <div class="small" style="margin-top:16px">點卡片或按「翻面」看答案</div>`;
      $('#fcBack', el).innerHTML = `<span class="tag ${g.c || 't-re'}">答案</span>
        <div style="font-size:17px;margin-top:14px;line-height:1.75">${c.b}</div>`;
      $('#cCount', el).textContent = `第 ${(pos % deck.length) + 1} / ${deck.length} 張　（本主題已標記「我會了」${deck.filter(d => st.cards[key(d)] === 1).length} 張）`;
    }
    function stat() {
      $('#cStat', el).innerHTML = CARD_GROUPS.map(g => {
        const cs = CARDS.filter(c => c.t === g.t);
        const ok = cs.filter(c => st.cards['all|' + c.f.slice(0, 18)] === 1 || st.cards[g.t + '|' + c.f.slice(0, 18)] === 1).length;
        const pct = Math.round(ok / cs.length * 100);
        return `<div style="display:flex;align-items:center;gap:8px;margin:6px 0">
          <span class="small" style="width:112px">${g.n}</span>
          <span style="flex:1;height:8px;background:rgba(128,128,128,.22);border-radius:4px;overflow:hidden">
            <span style="display:block;height:100%;width:${pct}%;background:var(--acc)"></span></span>
          <span class="small mono" style="width:56px;text-align:right">${ok}/${cs.length}</span></div>`;
      }).join('');
    }

    $('#fcCard', el).onclick = () => $('#fcCard', el).classList.toggle('flip');
    $('#cFlip', el).onclick = () => $('#fcCard', el).classList.toggle('flip');
    const mark = v => {
      if (!deck.length) return;
      const c = deck[pos % deck.length];
      st.cards[key(c)] = v; ctx.save();
      pos++; if (pos >= deck.length) { build(); ctx.toast('這組走完一輪了！'); }
      show(); stat();
    };
    $('#cKnow', el).onclick = () => mark(1);
    $('#cDont', el).onclick = () => mark(0);
    $('#cShuffle', el).onclick = () => { build(); show(); ctx.toast('已重新洗牌'); };
    $$('#cTabs .tab', el).forEach(t => t.onclick = () => {
      $$('#cTabs .tab', el).forEach(x => x.classList.remove('on'));
      t.classList.add('on'); group = t.dataset.g; build(); show();
    });
    /* 鍵盤：空白鍵翻面、←→換卡（cleanup 時移除） */
    const onKey = e => {
      if (!$('#fcCard', el)) return;
      if (e.code === 'Space') { e.preventDefault(); $('#fcCard', el).classList.toggle('flip'); }
      else if (e.key === 'ArrowRight') { pos++; show(); }
      else if (e.key === 'ArrowLeft') { pos = Math.max(0, pos - 1); show(); }
    };
    document.addEventListener('keydown', onKey);
    el.__cardKey = onKey;
    build(); show(); stat();
  },
  cleanup(el) {
    if (el && el.__cardKey) { try { document.removeEventListener('keydown', el.__cardKey); } catch (e) {} el.__cardKey = null; }
  }
};

/* ============================================================
   t-far｜法拉第電解計算機
   ============================================================ */
TOOLS['t-far'] = {
  title: '法拉第電解計算機',
  sub: '輸入電流與時間，自動算出通過的電量、莫耳電子數、產物質量與氣體體積（STP）。',
  render(el, ctx) {
    const F = FARADAY.F, Vm = FARADAY.Vm;
    el.innerHTML = `
      <div class="tool-panel">
        <div class="grid2" style="align-items:start;gap:18px">
          <div>
            <div class="card">
              <h3>輸入條件</h3>
              <div class="field"><label>電解產物</label>
                <select id="fSub" class="coef-input" style="width:100%;font-size:15px;padding:9px">
                  ${FARADAY.subs.map(s => `<option value="${s.id}">${esc(s.label)}　（${esc(s.n)}，z = ${s.z}）</option>`).join('')}
                </select></div>
              <div class="grid2">
                <div class="field"><label>電流 I（A）</label><input class="coef-input" id="fI" type="number" step="0.01" value="2.00" style="width:100%"></div>
                <div class="field"><label>時間 t</label><input class="coef-input" id="fT" type="number" step="1" value="1930" style="width:100%"></div>
              </div>
              <div class="field"><label>時間單位</label>
                <div>
                  <span class="pill clickable sel" data-u="1">秒</span>
                  <span class="pill clickable" data-u="60">分鐘</span>
                  <span class="pill clickable" data-u="3600">小時</span>
                </div></div>
              <div class="field"><label>電流效率（%）</label><input class="coef-input" id="fEff" type="number" step="1" value="100" style="width:120px"></div>
              <button class="btn primary" id="fCalc">計算</button>
            </div>
          </div>
          <div>
            <div class="card"><h3>計算結果</h3><div id="fOut" class="result-box"></div></div>
            <div class="card">
              <h3>公式與單位</h3>
              <div class="eq">Q = I × t（庫侖 C）</div>
              <div class="eq">n(e⁻) = Q / F　（F = 96500 C/mol）</div>
              <div class="eq">產物莫耳數 = n(e⁻) / z</div>
              <div class="eq">質量 m = n × M　｜　氣體 V = n × ${Vm} L（STP）</div>
            </div>
            <div class="warn"><b>1 F（96500 C）速算表</b>：H₂ 11.2 L｜O₂ 5.6 L｜Cl₂ 11.2 L｜Cu 31.8 g｜Ag 107.9 g｜Al 9.0 g。<br>氣體用 <b>22.4 L/mol ÷ z</b>，固體用 <b>M ÷ z</b>，考場不用算 F。</div>
            <div class="note"><b>串聯</b>：電量相同 ⇒ 各槽 n(e⁻) 相同，產物莫耳比＝1/z 之比。<br><b>並聯</b>：電壓相同，電量依電阻分配。</div>
          </div>
        </div>
      </div>`;

    let unit = 1;
    $$('.pill[data-u]', el).forEach(p => p.onclick = () => {
      $$('.pill[data-u]', el).forEach(x => x.classList.remove('sel'));
      p.classList.add('sel'); unit = +p.dataset.u;
    });
    function calc() {
      const sub = FARADAY.subs.find(s => s.id === $('#fSub', el).value);
      const I = parseFloat($('#fI', el).value), t = parseFloat($('#fT', el).value);
      const eff = parseFloat($('#fEff', el).value);
      const out = $('#fOut', el);
      if (!sub || isNaN(I) || isNaN(t) || I <= 0 || t <= 0) {
        out.innerHTML = '<div class="rv bad">請輸入正確的電流與時間（都要 > 0）</div>'; return;
      }
      const e = (isNaN(eff) || eff <= 0 || eff > 100) ? 100 : eff;
      const Q = I * t * unit;
      const ne = Q / F * (e / 100);
      const np = ne / sub.z;
      const m = np * sub.M;
      const cond = sub.kind === 'gas'
        ? `<div class="rv">STP（0 ℃、1 atm）體積　<b>${sig(np * Vm)} L</b>　<span class="small">（${sig(np * Vm * 1000)} mL）</span></div>
           <div class="rv">25 ℃、1 atm 體積　<b>${sig(np * 24.5)} L</b></div>`
        : `<div class="rv">析出質量　<b>${sig(m)} g</b>　<span class="small">（${sig(m * 1000)} mg）</span></div>`;
      out.innerHTML = `
        <div class="rv">半反應　<b>${esc(sub.n)}</b>　（z = ${sub.z}，M = ${sub.M}）</div>
        <div class="rv">通過電量 Q = I×t　<b>${sig(Q)} C</b>${e < 100 ? ` × ${e}% 效率 = <b>${sig(Q * e / 100)} C</b>` : ''}</div>
        <div class="rv">莫耳電子數 n(e⁻)　<b>${sig(ne)} mol</b>　<span class="small">（≈ ${sig(ne, 3)} F）</span></div>
        <div class="rv">產物莫耳數　<b>${sig(np)} mol</b></div>
        ${cond}
        ${e < 100 ? `<div class="rv warn">已計入電流效率 ${e}%（實際產量較理論值低）</div>` : ''}`;
    }
    $('#fCalc', el).onclick = calc;
    ['#fI', '#fT', '#fEff', '#fSub'].forEach(s => { const n = $(s, el); if (n) n.onchange = calc; });
    calc();
  }
};

/* ============================================================
   t-tit｜滴定計算機
   ============================================================ */
TOOLS['t-tit'] = {
  title: '氧化還原滴定計算機',
  sub: '當量莫耳濃度 N = M × n（n ＝ 每莫耳得失電子數）。輸入兩邊的條件，自動求未知濃度或體積。',
  render(el, ctx) {
    const AGENTS = [
      { id: 'kmno4-a', n: 'KMnO₄（酸性 → Mn²⁺）', nx: 5, M: '' },
      { id: 'kmno4-n', n: 'KMnO₄（中性 → MnO₂）', nx: 3, M: '' },
      { id: 'kmno4-b', n: 'KMnO₄（強鹼 → MnO₄²⁻）', nx: 1, M: '' },
      { id: 'k2cr2o7', n: 'K₂Cr₂O₇（酸性 → Cr³⁺）', nx: 6, M: '' },
      { id: 'h2o2', n: 'H₂O₂（→ H₂O）', nx: 2, M: '' },
      { id: 'hno3-c', n: 'HNO₃（濃 → NO₂）', nx: 1, M: '' },
      { id: 'hno3-d', n: 'HNO₃（稀 → NO）', nx: 3, M: '' },
      { id: 'hno3-vd', n: 'HNO₃（極稀 → NH₄⁺）', nx: 8, M: '' },
      { id: 'oxalate', n: 'H₂C₂O₄ / C₂O₄²⁻（→ CO₂）', nx: 2, M: '' },
      { id: 'thio', n: 'Na₂S₂O₃（→ S₄O₆²⁻）', nx: 1, M: '' },
      { id: 'ki', n: 'KI（→ I₂）', nx: 1, M: '' },
      { id: 'fe2', n: 'Fe²⁺（→ Fe³⁺）', nx: 1, M: '' },
      { id: 'so3', n: 'SO₃²⁻（→ SO₄²⁻）', nx: 2, M: '' },
      { id: 'i2', n: 'I₂（→ I⁻）', nx: 2, M: '' },
      { id: 'cl2', n: 'Cl₂（→ Cl⁻）', nx: 2, M: '' },
      { id: 'o2', n: 'O₂（→ H₂O）', nx: 4, M: '' },
      { id: 'asc', n: '維生素 C（C₆H₈O₆ → 去氫）', nx: 2, M: '176' },
      { id: 'other', n: '其他（自行輸入 n）', nx: 1, M: '' }
    ];
    const sel = (id, cur) => AGENTS.map(a => `<option value="${a.id}"${a.id === cur ? ' selected' : ''}>${esc(a.n)}　n = ${a.nx}</option>`).join('');

    el.innerHTML = `
      <div class="tool-panel">
        <div class="grid2" style="align-items:start;gap:18px">
          <div>
            <div class="card">
              <h3>① 滴定劑（在滴定管）</h3>
              <div class="field"><label>物質</label><select class="coef-input" id="tA" style="width:100%;font-size:14px;padding:9px">${sel('tA', 'kmno4-a')}</select></div>
              <div class="grid2">
                <div class="field"><label>M（mol/L）</label><input class="coef-input" id="tAM" type="number" step="0.001" value="0.0200" style="width:100%"></div>
                <div class="field"><label>V（mL）</label><input class="coef-input" id="tAV" type="number" step="0.1" value="" placeholder="未知可留白" style="width:100%"></div>
              </div>
              <div class="field"><label>得失電子數 n</label><input class="coef-input" id="tAn" type="number" step="1" value="5" style="width:90px"></div>
            </div>
            <div class="card" style="margin-top:14px">
              <h3>② 待測液（在錐形瓶）</h3>
              <div class="field"><label>物質</label><select class="coef-input" id="tB" style="width:100%;font-size:14px;padding:9px">${sel('tB', 'oxalate')}</select></div>
              <div class="grid2">
                <div class="field"><label>M（mol/L）</label><input class="coef-input" id="tBM" type="number" step="0.001" value="" placeholder="未知可留白" style="width:100%"></div>
                <div class="field"><label>V（mL）</label><input class="coef-input" id="tBV" type="number" step="0.1" value="25.0" style="width:100%"></div>
              </div>
              <div class="field"><label>得失電子數 n</label><input class="coef-input" id="tBn" type="number" step="1" value="2" style="width:90px"></div>
            </div>
            <div class="qz-actions" style="margin-top:12px">
              <button class="btn primary" id="tCalc">計算</button>
              <button class="btn btn-ghost" id="tClear">清空</button>
            </div>
          </div>
          <div>
            <div class="card"><h3>計算結果</h3><div id="tOut" class="result-box"></div></div>
            <div class="card">
              <h3>核心公式</h3>
              <div class="eq">N₁V₁ = N₂V₂　（N = M × n）</div>
              <div class="eq">M₁ × n₁ × V₁ = M₂ × n₂ × V₂</div>
              <div class="tip">等價點：<b>得失電子總數相等</b>，所以用「當量數」相等最不會錯。</div>
            </div>
            <div class="warn"><b>三大氧化劑的當量莫耳濃度（必背）</b><br>
              MnO₄⁻：酸性 n=5、中性 n=3、強鹼 n=1<br>
              Cr₂O₇²⁻：酸性 n=6<br>
              HNO₃：濃 n=1（→NO₂）、稀 n=3（→NO）、極稀 n=8（→NH₄⁺）</div>
            <div class="note"><b>碘量法</b>：1 mol I₂ ≡ 2 mol S₂O₃²⁻ ≡ 2 mol e⁻。間接法先讓待測物放出 I₂，再用 Na₂S₂O₃ 滴定，澱粉指示劑<b>近終點才加</b>。</div>
          </div>
        </div>
      </div>`;

    function sync(which) {
      const s = $('#' + which, el);
      const a = AGENTS.find(x => x.id === s.value);
      if (!a || a.id === 'other') return;
      $('#' + which + 'n', el).value = a.nx;
    }
    $('#tA', el).onchange = () => sync('tA');
    $('#tB', el).onchange = () => sync('tB');

    $('#tCalc', el).onclick = () => {
      const out = $('#tOut', el);
      const nA = parseFloat($('#tAn', el).value) || 1, nB = parseFloat($('#tBn', el).value) || 1;
      const MA = parseFloat($('#tAM', el).value), VA = parseFloat($('#tAV', el).value);
      const MB = parseFloat($('#tBM', el).value), VB = parseFloat($('#tBV', el).value);
      const a = AGENTS.find(x => x.id === $('#tA', el).value), b = AGENTS.find(x => x.id === $('#tB', el).value);
      const filled = [MA, VA, MB, VB].filter(x => !isNaN(x));
      if (filled.length < 3) { out.innerHTML = '<div class="rv bad">四個量（M₁V₁M₂V₂）中至少要填三個，未知的那一個留白</div>'; return; }

      const NA = MA * nA, NB = MB * nB;
      let unknown = '', val = NaN, unit = '';
      if (isNaN(VA)) { unknown = '滴定劑體積 V₁'; val = (NB * VB) / NA; unit = 'mL'; }
      else if (isNaN(MA)) { unknown = '滴定劑濃度 M₁'; val = (NB * VB) / (nA * VA); unit = 'mol/L'; }
      else if (isNaN(VB)) { unknown = '待測液體積 V₂'; val = (NA * VA) / NB; unit = 'mL'; }
      else if (isNaN(MB)) { unknown = '待測液濃度 M₂'; val = (NA * VA) / (nB * VB); unit = 'mol/L'; }
      else { unknown = null; }

      const eq1 = !isNaN(NA) && !isNaN(VA) ? NA * VA : NaN;
      const eq2 = !isNaN(NB) && !isNaN(VB) ? NB * VB : NaN;
      out.innerHTML = `
        <div class="rv">① ${esc(a.n)}：N₁ = M₁×n₁ = ${isNaN(NA) ? '？' : sig(NA) + ' N'}　V₁ = ${isNaN(VA) ? '？' : VA + ' mL'}</div>
        <div class="rv">② ${esc(b.n)}：N₂ = M₂×n₂ = ${isNaN(NB) ? '？' : sig(NB) + ' N'}　V₂ = ${isNaN(VB) ? '？' : VB + ' mL'}</div>
        ${unknown ? `<div class="rv big"><b>${esc(unknown)} = ${sig(val)} ${unit}</b></div>` :
          `<div class="rv">當量數　① ${sig(eq1)} meq　／　② ${sig(eq2)} meq　${Math.abs(eq1 - eq2) < 1e-6 ? '<b class="tag t-pu">✔ 恰達等價點</b>' : '<span class="tag t-warn">未達等價點</span>'}</div>`}
        <div class="rv small">莫耳比（① : ②）＝ ${isNaN(NA) || isNaN(NB) ? '？' : sig(nB / nA, 4) + ' : 1'}</div>`;
    };
    $('#tClear', el).onclick = () => {
      ['#tAM', '#tAV', '#tBM', '#tBV'].forEach(s => { $(s, el).value = ''; });
      $('#tOut', el).innerHTML = '<div class="rv">已清空。填入三個已知量後按「計算」。</div>';
    };
    $('#tOut', el).innerHTML = '<div class="rv">填入 M₁、V₁、M₂、V₂ 中任意三個（未知留白），按「計算」。</div>';
  }
};

/* ============================================================
   t-disp｜置換反應預測器
   ============================================================ */
TOOLS['t-disp'] = {
  title: '置換反應預測器',
  sub: '用活性序列判斷「金屬＋金屬離子」「金屬＋酸」「金屬＋水」「鹵素＋鹵離子」是否反應。',
  render(el, ctx) {
    const M = ACTIVITY.filter(a => !['C', 'H', 'Sb'].includes(a.s));
    const HAL = [
      { s: 'F₂', e: 2.87 }, { s: 'Cl₂', e: 1.36 }, { s: 'Br₂', e: 1.07 }, { s: 'I₂', e: 0.54 }
    ];
    /* 離子對照（取 ACTIVITY 的氧化數 +2 為主，特別標出不同價態） */
    const ION = { K: 'K⁺', Ca: 'Ca²⁺', Na: 'Na⁺', Mg: 'Mg²⁺', Al: 'Al³⁺', Zn: 'Zn²⁺', Cr: 'Cr³⁺',
      Fe: 'Fe²⁺', Ni: 'Ni²⁺', Cd: 'Cd²⁺', Sn: 'Sn²⁺', Pb: 'Pb²⁺', Cu: 'Cu²⁺', Hg: 'Hg²⁺', Ag: 'Ag⁺', Pt: 'Pt⁴⁺', Au: 'Au³⁺' };

    el.innerHTML = `
      <div class="tool-panel">
        <div class="grid2" style="align-items:start;gap:18px">
          <div>
            <div class="card">
              <h3>金屬置換</h3>
              <div class="grid2">
                <div class="field"><label>投入的金屬</label>
                  <select class="coef-input" id="dM" style="width:100%;font-size:15px;padding:9px">
                    ${M.map(a => `<option value="${a.s}"${a.s === 'Zn' ? ' selected' : ''}>${a.s}（${a.n}）</option>`).join('')}
                  </select></div>
                <div class="field"><label>溶液中的金屬離子</label>
                  <select class="coef-input" id="dI" style="width:100%;font-size:15px;padding:9px">
                    ${M.map(a => `<option value="${a.s}"${a.s === 'Cu' ? ' selected' : ''}>${ION[a.s] || a.s + 'ⁿ⁺'}（${a.n}）</option>`).join('')}
                  </select></div>
              </div>
              <div id="dOut" class="result-box" style="margin-top:10px"></div>
            </div>
            <div class="card" style="margin-top:14px">
              <h3>其他常見情境</h3>
              <div class="grid2">
                <div class="field"><label>金屬</label>
                  <select class="coef-input" id="dM2" style="width:100%;font-size:15px;padding:9px">
                    ${M.map(a => `<option value="${a.s}"${a.s === 'Fe' ? ' selected' : ''}>${a.s}（${a.n}）</option>`).join('')}
                  </select></div>
                <div class="field"><label>接觸的物質</label>
                  <select class="coef-input" id="dR" style="width:100%;font-size:15px;padding:9px">
                    <option value="cold">冷水</option><option value="hot">熱水／水蒸氣</option>
                    <option value="acid">稀鹽酸／稀硫酸</option><option value="hno3">稀硝酸</option>
                    <option value="o2">空氣中的 O₂</option>
                  </select></div>
              </div>
              <div id="dOut2" class="result-box" style="margin-top:10px"></div>
            </div>
            <div class="card" style="margin-top:14px">
              <h3>鹵素置換</h3>
              <div class="grid2">
                <div class="field"><label>加入的鹵素</label>
                  <select class="coef-input" id="dX" style="width:100%;font-size:15px;padding:9px">
                    ${HAL.map(h => `<option value="${h.s}"${h.s === 'Cl₂' ? ' selected' : ''}>${h.s}</option>`).join('')}
                  </select></div>
                <div class="field"><label>溶液中的鹵離子</label>
                  <select class="coef-input" id="dY" style="width:100%;font-size:15px;padding:9px">
                    ${HAL.map(h => `<option value="${h.s}"${h.s === 'Br₂' ? ' selected' : ''}>${h.s.replace('₂', '')}⁻</option>`).join('')}
                  </select></div>
              </div>
              <div id="dOut3" class="result-box" style="margin-top:10px"></div>
            </div>
          </div>
          <div>
            <div class="card"><h3>活性序列（由大至小）</h3>
              <div id="dSeries" style="line-height:2.1"></div>
              <div class="small" style="margin-top:8px">括號中的 C、H 是非金屬參考點；H 之前的金屬可置換酸中的氫。</div>
            </div>
            <div class="note"><b>三條判準</b><br>
              ① 活性大的金屬可把活性小的金屬離子置換出來。<br>
              ② 活性在 <b>H 之前</b> ⇒ 可與稀酸放 H₂（K～Ca 太劇烈，實驗上不用）。<br>
              ③ <b>K、Ca、Na</b> 遇水劇烈反應放 H₂；<b>Mg</b> 需熱水；<b>Al、Zn、Fe</b> 需高溫水蒸氣。</div>
            <div class="warn"><b>例外要記</b>：<br>
              • <b>稀 HNO₃ 不放 H₂</b>（氧化力來自 N⁺⁵，產物是 NO／N₂O／NH₄⁺）；濃 HNO₃ 放 NO₂。<br>
              • <b>Al、Cr、Fe 遇濃 HNO₃ 鈍化</b>（表面生成緻密氧化膜）⇒ 可用鋁罐裝濃硝酸。<br>
              • <b>Pb 不溶於稀 HCl／H₂SO₄</b>（生成難溶 PbCl₂／PbSO₄ 覆蓋表面）。<br>
              • <b>Cu、Hg、Ag 可溶於氧化性酸</b>（濃／稀 HNO₃、熱濃 H₂SO₄），但不溶於稀 HCl。</div>
            <div class="tip"><b>電化學對照</b>：活性大 ⇔ E°（還原電位）愈負 ⇔ 愈易被氧化 ⇔ 愈好的還原劑。所以活性序列就是「E° 由小到大」的排列。</div>
          </div>
        </div>
      </div>`;

    /* 活性序列視覺化 */
    $('#dSeries', el).innerHTML = ACTIVITY.map((a, i) =>
      `<span class="pill${a.s === 'H' ? ' on' : ''}" data-s="${a.s}" title="${a.n}，E° = ${a.act > 0 ? '−' : '+'}${Math.abs(a.act).toFixed(2)} V"
        style="cursor:pointer;margin:2px;font-weight:${a.s === 'H' ? 800 : 600}">${a.s}</span>` +
      (a.s === 'Pb' ? '<span class="small">（H）</span>' : '')).join('')
      .replace('（H）', '');
    /* H 位置標示 */
    const hs = $('[data-s="H"]', el);
    if (hs) { hs.textContent = '(H)'; hs.style.color = 'var(--warn)'; }

    const act = s => { const a = ACTIVITY.find(x => x.s === s); return a ? a.act : 0; };
    const name = s => { const a = ACTIVITY.find(x => x.s === s); return a ? a.n : s; };

    function calc1() {
      const m = $('#dM', el).value, i = $('#dI', el).value, out = $('#dOut', el);
      $$('#dSeries .pill', el).forEach(p => p.classList.toggle('on', p.dataset.s === m || p.dataset.s === i));
      if (m === i) { out.innerHTML = '<div class="rv warn">同一種金屬與自己的離子，<b>不反應</b>（無驅動力）。</div>'; return; }
      const ok = act(m) > act(i);
      const ion = ION[i] || (i + 'ⁿ⁺'), ion2 = ION[m] || (m + 'ⁿ⁺');
      out.innerHTML = ok
        ? `<div class="rv good"><b>✅ 會反應</b>：${m}（${name(m)}）活性 &gt; ${i}（${name(i)}）</div>
           <div class="eq">${m}(s) + ${ion}(aq) → ${ion2}(aq) + ${i}(s)</div>
           <div class="rv small">方向判斷：活性大者被氧化 ⇒ <b>正向自發</b>（ΔG° &lt; 0）。精確 E°cell 請查 <a href="#/e-act">標準還原電位表</a>。</div>
           <div class="rv small">現象：${m} 逐漸溶解、${i} 析出附著在表面，溶液顏色可能改變。</div>`
        : `<div class="rv bad"><b>❌ 不反應</b>：${m}（${name(m)}）活性 &lt; ${i}（${name(i)}），無法把 ${ion} 置換出來。</div>
           <div class="rv small">反向才會自發：${i}(s) + ${ion2}(aq) → ${ion}(aq) + ${m}(s)</div>`;
    }
    function calc2() {
      const m = $('#dM2', el).value, r = $('#dR', el).value, out = $('#dOut2', el);
      const a = act(m), pos = ['K', 'Ca', 'Na'];
      const res = {
        cold: pos.includes(m) ? `<div class="rv good"><b>✅ 劇烈反應，放 H₂</b></div><div class="eq">2${m} + 2H₂O → 2${m}OH + H₂↑</div><div class="rv small">${m} 活性極大（E° = ${a.toFixed(2)} V），遇冷水即反應；Na 放熱可使 H₂ 自燃。</div>`
          : (m === 'Mg') ? `<div class="rv warn"><b>△ 與冷水極慢，需熱水</b></div><div class="eq">Mg + 2H₂O(熱) → Mg(OH)₂ + H₂↑</div><div class="rv small">Mg(OH)₂ 難溶覆蓋表面，反應很快停止。</div>`
          : (a > 0) ? `<div class="rv bad"><b>❌ 常溫下不與冷水反應</b></div><div class="rv small">${m} 需高溫水蒸氣（見下）或表面已有氧化膜保護。</div>`
          : `<div class="rv bad"><b>❌ 不反應</b></div><div class="rv small">${m} 在 H 之後，活性不足以還原水中的 H。</div>`,
        hot: pos.includes(m) ? `<div class="rv good"><b>✅ 劇烈反應</b></div>`
          : (['Mg', 'Al', 'Zn', 'Cr', 'Fe', 'Cd'].includes(m)) ? `<div class="rv good"><b>✅ 高溫水蒸氣可反應，放 H₂</b></div><div class="eq">${m === 'Fe' ? '3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂↑' : m + ' + H₂O(g) → ' + m + 'O + H₂↑'}</div><div class="rv small">活性在 H 之前但不夠大的金屬，需加熱。</div>`
          : `<div class="rv bad"><b>❌ 不反應</b></div>`,
        acid: pos.includes(m) ? `<div class="rv good"><b>✅ 劇烈反應（危險）</b></div><div class="eq">${m} + HCl → ${m}Cl + ½H₂↑</div><div class="rv small">實驗上<b>不用</b> K／Ca／Na 製氫，太劇烈。</div>`
          : (a > 0 && !['Pb'].includes(m)) ? `<div class="rv good"><b>✅ 反應，放 H₂</b></div><div class="eq">${m} + 2HCl → ${ION[m] ? ION[m].replace(/[²³⁺]+$/, '') : m}Cl₂ + H₂↑</div><div class="rv small">活性在 H 之前 ⇒ 可置換稀酸中的氫。</div>`
          : (m === 'Pb') ? `<div class="rv warn"><b>△ 理論上可以，實際幾乎不反應</b></div><div class="rv small">生成難溶 PbCl₂／PbSO₄ 覆蓋表面，阻斷反應。</div>`
          : `<div class="rv bad"><b>❌ 不與稀 HCl／稀 H₂SO₄ 反應</b></div><div class="rv small">${m} 在 H 之後。但可溶於<b>氧化性酸</b>（HNO₃、熱濃 H₂SO₄）。</div>`,
        hno3: (m === 'Au' || m === 'Pt') ? `<div class="rv bad"><b>❌ 連 HNO₃ 也不溶</b></div><div class="rv small">需<b>王水</b>（濃 HCl : 濃 HNO₃ = 3 : 1），靠 Cl⁻ 錯合降低離子濃度。</div>`
          : (['Al', 'Cr', 'Fe'].includes(m)) ? `<div class="rv warn"><b>△ 遇濃 HNO₃ 鈍化，不溶</b></div><div class="rv small">表面生成緻密氧化膜 ⇒ 可用鋁罐運送濃硝酸。但<b>稀</b> HNO₃ 仍可緩慢反應。</div>`
          : `<div class="rv good"><b>✅ 反應，但不放 H₂</b></div><div class="eq">稀：3${m} + 8HNO₃ → 3${m}(NO₃)₂ + 2NO↑ + 4H₂O<br>濃：${m} + 4HNO₃ → ${m}(NO₃)₂ + 2NO₂↑ + 2H₂O</div><div class="rv small">氧化力來自 <b>N⁺⁵</b>，不是 H⁺ ⇒ 產物是 NO（無色，遇空氣轉紅棕 NO₂）或 NO₂（紅棕）。</div>`,
        o2: (pos.includes(m) || ['Mg', 'Al', 'Zn', 'Cr'].includes(m)) ? `<div class="rv good"><b>✅ 迅速氧化</b></div><div class="eq">4${m} + O₂ → 2${m}₂O${pos.includes(m) ? '' : ''}</div><div class="rv small">${m} 表面立刻生成氧化物；K、Na 需保存在煤油中。</div>`
          : (a > 0) ? `<div class="rv warn"><b>△ 緩慢氧化（生鏽）</b></div><div class="eq">4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O（鐵鏽，疏鬆不保護）</div><div class="rv small">需要<b>水＋氧氣</b>同時存在；Al、Cr 的氧化膜緻密 ⇒ 反而保護內部。</div>`
          : `<div class="rv bad"><b>❌ 常溫不易氧化</b></div><div class="rv small">${m} 屬貴金屬，需加熱才能與 O₂ 化合（如 2Cu + O₂ →Δ 2CuO）。</div>`
      };
      out.innerHTML = res[r] || '';
    }
    function calc3() {
      const x = $('#dX', el).value, y = $('#dY', el).value, out = $('#dOut3', el);
      const ex = HAL.find(a => a.s === x).e, ey = HAL.find(a => a.s === y).e;
      const xi = x.replace('₂', '') + '⁻', yi = y.replace('₂', '') + '⁻';
      if (x === y) { out.innerHTML = '<div class="rv warn">同一種鹵素與自己的離子，<b>不反應</b>。</div>'; return; }
      out.innerHTML = ex > ey
        ? `<div class="rv good"><b>✅ 會反應</b>：${x} 氧化力 &gt; ${y}（E° ${ex.toFixed(2)} &gt; ${ey.toFixed(2)} V）</div>
           <div class="eq">${x} + 2${yi} → 2${xi} + ${y}</div>
           <div class="rv small">E°cell = ${ey.toFixed(2)} − … 正向自發，差值 ${(ex - ey).toFixed(2)} V。${y === 'I₂' ? ' 可用澱粉檢驗生成的 I₂（藍色）。' : ''}</div>`
        : `<div class="rv bad"><b>❌ 不反應</b>：${x} 氧化力 &lt; ${y}</div><div class="rv small">反向才自發：${y} + 2${xi} → 2${yi} + ${x}</div>`;
    }

    ['#dM', '#dI'].forEach(s => $(s, el).onchange = calc1);
    ['#dM2', '#dR'].forEach(s => $(s, el).onchange = calc2);
    ['#dX', '#dY'].forEach(s => $(s, el).onchange = calc3);
    calc1(); calc2(); calc3();
  }
};

/* ============================================================
   t-cell｜電池／電解池互動圖
   ============================================================ */
TOOLS['t-cell'] = {
  title: '電池／電解池互動圖',
  sub: '同一張圖切換「電化電池（放電）」與「電解池（充電）」，對照電極名稱、正負極、電子與離子流向。',
  render(el, ctx) {
    let mode = 'galvanic';
    el.innerHTML = `
      <div class="tool-panel">
        <div class="tabs" id="cellTabs">
          <span class="tab on" data-m="galvanic">⚡ 電化電池（放電・自發）</span>
          <span class="tab" data-m="electro">🔌 電解池（非自發・需外接電源）</span>
          <span class="tab" data-m="plate">🪙 電鍍</span>
          <span class="tab" data-m="refine">🏭 電解精煉</span>
        </div>
        <div class="grid2" style="align-items:start;gap:18px;margin-top:14px">
          <div><div id="cellFig"></div>
            <div id="cellEq" class="card" style="margin-top:12px"></div>
          </div>
          <div><div id="cellInfo"></div></div>
        </div>
      </div>`;

    const CONTENT = {
      galvanic: {
        fig: FIGS.cell || '',
        eq: `<h3>電極反應（以 Zn｜Cu 丹尼爾電池為例）</h3>
          <div class="eq"><span class="oxl">陽極（−）氧化：</span>Zn(s) → Zn²⁺(aq) + 2e⁻　E° = +0.76 V（氧化電位）</div>
          <div class="eq"><span class="rel">陰極（+）還原：</span>Cu²⁺(aq) + 2e⁻ → Cu(s)　E° = +0.34 V（還原電位）</div>
          <div class="eq"><b>總反應：</b>Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)　<b>E°cell = +1.10 V</b></div>`,
        info: `<div class="card"><h3>對照表（電化電池）</h3>
          <table><thead><tr><th></th><th>陽極 Anode</th><th>陰極 Cathode</th></tr></thead><tbody>
          <tr><td>反應</td><td class="oxl"><b>氧化</b>（失 e⁻）</td><td class="rel"><b>還原</b>（得 e⁻）</td></tr>
          <tr><td>極性</td><td><b>負極（−）</b></td><td><b>正極（+）</b></td></tr>
          <tr><td>電子流向</td><td colspan="2">陽極 →（外 circuit 導線）→ 陰極</td></tr>
          <tr><td>電流方向</td><td colspan="2">陰極 → 陽極（與電子相反）</td></tr>
          <tr><td>鹽橋離子</td><td>陰離子 → 陽極半電池</td><td>陽離子 → 陰極半電池</td></tr>
          <tr><td>質量變化</td><td>電極<b>減輕</b>（Zn 溶解）</td><td>電極<b>增重</b>（Cu 析出）</td></tr>
          <tr><td>能量</td><td colspan="2">化學能 → 電能　ΔG° &lt; 0，自發</td></tr>
          </tbody></table></div>
          <div class="warn"><b>必記</b>：<b>陽氧陰還</b>（陽極氧化、陰極還原）在電池與電解池<b>都成立</b>；但<b>正負極相反</b>——電化電池陽極＝負極，電解池陽極＝正極。</div>
          <div class="card"><h3>電池電壓三個公式</h3>
            <div class="eq">E°cell = E°陰極（還原） − E°陽極（還原）</div>
            <div class="eq">ΔG° = −nFE°cell　（n = 轉移電子莫耳數）</div>
            <div class="eq">E°cell = (0.0592/n)·log K　（25 ℃）</div>
            <div class="tip">E°cell &gt; 0 ⇔ ΔG° &lt; 0 ⇔ K &gt; 1 ⇔ 自發。<b>電池反應式乘 2，E° 不變</b>（強度性質），但 ΔG° 與 n 會加倍。</div>
          </div>
          <div class="note"><b>鹽橋／多孔隔板的功能</b>：① 接通電路 ② 維持兩半電池的<b>電中性</b>（否則電荷累積會立刻停止反應）。鹽橋常用 KNO₃、KCl 瓊脂膠。</div>`
      },
      electro: {
        fig: FIGS.cell || '',
        eq: `<h3>電解反應（以電解 1 M CuCl₂(aq)、惰性電極為例）</h3>
          <div class="eq"><span class="oxl">陽極（+）氧化：</span>2Cl⁻ → Cl₂(g) + 2e⁻</div>
          <div class="eq"><span class="rel">陰極（−）還原：</span>Cu²⁺ + 2e⁻ → Cu(s)</div>
          <div class="eq"><b>總反應：</b>Cu²⁺ + 2Cl⁻ → Cu(s) + Cl₂(g)　E°cell = −1.02 V（<b>需外加 &gt; 1.02 V</b>）</div>
          <div class="eq"><b>電解水（加少量 H₂SO₄ 或 NaOH）：</b>2H₂O → 2H₂↑ + O₂↑　體積比 H₂ : O₂ = <b>2 : 1</b></div>`,
        info: `<div class="card"><h3>對照表（電解池）</h3>
          <table><thead><tr><th></th><th>陽極 Anode</th><th>陰極 Cathode</th></tr></thead><tbody>
          <tr><td>反應</td><td class="oxl"><b>氧化</b>（失 e⁻）</td><td class="rel"><b>還原</b>（得 e⁻）</td></tr>
          <tr><td>極性</td><td><b>正極（+）</b>接電源正極</td><td><b>負極（−）</b>接電源負極</td></tr>
          <tr><td>電子流向</td><td colspan="2">電源負極 → 陰極；陽極 → 電源正極</td></tr>
          <tr><td>溶液中離子</td><td>陰離子移向陽極</td><td>陽離子移向陰極</td></tr>
          <tr><td>能量</td><td colspan="2">電能 → 化學能　ΔG &gt; 0，非自發</td></tr>
          <tr><td>電壓</td><td colspan="2">外加電壓必須 &gt; |E°cell|（實際還要加<b>過電位</b>）</td></tr>
          </tbody></table></div>
          <div class="card"><h3>電解產物判斷順序（水溶液）</h3>
            <b>陰極（誰先被還原）</b>：E° 愈大愈先還原<br>
            <span class="small">Ag⁺ &gt; Fe³⁺ &gt; Cu²⁺ &gt; H⁺（酸）&gt; Pb²⁺ &gt; Sn²⁺ &gt; Ni²⁺ &gt; Fe²⁺ &gt; Zn²⁺ &gt; <b>H₂O</b> &gt; Al³⁺ &gt; Mg²⁺ &gt; Na⁺ &gt; K⁺</span><br>
            <div class="warn" style="margin:8px 0"><b>K⁺、Na⁺、Ca²⁺、Mg²⁺、Al³⁺ 在水溶液中不會被還原</b>——H₂O 先放 H₂。要得到這些金屬必須<b>電解熔融鹽</b>（如熔融 NaCl → Na + Cl₂）。</div>
            <b>陽極（誰先被氧化）</b>：<br>
            ① 若陽極是<b>活性金屬</b>（Cu、Ag、Zn、Ni，非 Pt／C）⇒ <b>電極本身溶解</b>（這才是電鍍、精煉的關鍵）<br>
            ② 若為惰性電極：S²⁻ &gt; I⁻ &gt; Br⁻ &gt; Cl⁻ &gt; OH⁻ &gt; <b>H₂O</b> &gt; 含氧酸根（NO₃⁻、SO₄²⁻、PO₄³⁻ <b>不放電</b>）<br>
            <span class="small">⇒ 電解 Na₂SO₄(aq) 其實是電解水；電解 NaCl(aq) 陽極出 Cl₂（濃度高時）。</span></div>
          <div class="note"><b>102 指考 Q16 型</b>：U 型管電解含酚酞的 KI 溶液 ⇒ 陰極區變紅（2H₂O + 2e⁻ → H₂ + 2OH⁻）、陽極區遇澱粉變藍黑（2I⁻ → I₂ + 2e⁻）。</div>`
      },
      plate: {
        fig: (FIGS.cell || '') + '<div class="small" style="text-align:center;margin-top:-6px">↑ 左：電化電池（放電）／右：電解池（電鍍屬此類，陽極＝鍍層金屬、陰極＝待鍍物）</div>',
        eq: `<h3>電鍍（鍍銀為例）</h3>
          <div class="eq"><span class="rel">陰極＝待鍍物（湯匙）：</span>Ag⁺ + e⁻ → Ag(s)　附著在表面</div>
          <div class="eq"><span class="oxl">陽極＝鍍層金屬（銀板）：</span>Ag(s) → Ag⁺ + e⁻　溶解補充</div>
          <div class="eq"><b>電鍍液：</b>含鍍層金屬離子的溶液（AgNO₃ 或 K[Ag(CN)₂]）</div>
          <div class="eq"><b>結果：</b>電鍍液中 Ag⁺ 濃度<b>幾乎不變</b></div>`,
        info: `<div class="card"><h3>電鍍三原則（必考）</h3>
          <table><thead><tr><th>項目</th><th>接法</th></tr></thead><tbody>
          <tr><td><b>陰極</b></td><td>待鍍物件（要鍍上去的東西）</td></tr>
          <tr><td><b>陽極</b></td><td>鍍層金屬（提供金屬離子）</td></tr>
          <tr><td><b>電鍍液</b></td><td>含<b>鍍層金屬</b>離子的溶液</td></tr>
          </tbody></table>
          <div class="tip">口訣：<b>「鍍什麼，陽極就用什麼；鍍到誰身上，誰當陰極。」</b></div></div>
          <div class="card"><h3>影響鍍層品質的因素</h3>
            <ul class="chk">
              <li><b>電流密度要小</b>：太大 ⇒ 沉積太快，鍍層粗糙、易剝落</li>
              <li><b>溫度與攪拌</b>：影響離子擴散速率與鍍層細緻度</li>
              <li><b>添加錯離子</b>（如 [Ag(CN)₂]⁻、[Cu(CN)₄]³⁻）⇒ 降低自由金屬離子濃度，沉積慢但<b>緻密光亮</b></li>
              <li><b>待鍍表面需先除油、酸洗</b>，否則鍍層附著不良</li>
              <li><b>光亮劑／整平劑</b>：工業上常用有機添加物</li>
            </ul></div>
          <div class="card"><h3>陽極處理（Anodizing，鋁）</h3>
            <div class="eq">鋁件當<b>陽極</b>，在稀 H₂SO₄ 中電解：<br>2Al + 3H₂O → Al₂O₃ + 6H⁺ + 6e⁻</div>
            <div class="small">生成<b>厚而緻密的 Al₂O₃ 膜</b>（可達數十 μm），比自然氧化膜厚百倍 ⇒ 抗蝕、耐磨，且多孔層可<b>染色</b>後封孔。這就是彩色鋁窗、陽極氧化筆電外殼的原理。</div>
            <div class="warn">注意與電鍍<b>相反</b>：陽極處理是把工件當<b>陽極</b>（讓它自己氧化成膜），電鍍是把工件當<b>陰極</b>（讓金屬鍍上去）。</div></div>
          <div class="note"><b>常見電鍍</b>：鍍鋅（白鐵皮／犧牲陽極防鏽）、鍍錫（馬口鐵／食品罐）、鍍鉻（裝飾＋耐磨）、鍍鎳（底鍍層）、鍍金／銀（電子接點、餐具）。</div>`
      },
      refine: {
        fig: (FIGS.cell || '') + '<div class="small" style="text-align:center;margin-top:-6px">↑ 電解精煉＝電解池的應用：粗銅當陽極溶解、純銅當陰極析出</div>',
        eq: `<h3>電解精煉銅</h3>
          <div class="eq"><span class="oxl">陽極＝粗銅（含 Zn、Fe、Ni、Ag、Au 雜質）：</span>Cu → Cu²⁺ + 2e⁻</div>
          <div class="eq"><span class="rel">陰極＝純銅薄片：</span>Cu²⁺ + 2e⁻ → Cu（99.99% 純銅）</div>
          <div class="eq"><b>電解液：</b>CuSO₄ + 少量 H₂SO₄</div>`,
        info: `<div class="card"><h3>雜質去哪了？（考點）</h3>
          <table><thead><tr><th>雜質</th><th>活性</th><th>結果</th></tr></thead><tbody>
          <tr><td>Zn、Fe、Ni</td><td>比 Cu <b>活潑</b></td><td>一起溶入溶液（Zn²⁺、Fe²⁺、Ni²⁺），但 E° 較負 ⇒ <b>不會在陰極析出</b>，留在電解液中</td></tr>
          <tr><td>Ag、Au、Pt</td><td>比 Cu <b>不活潑</b></td><td>不溶解 ⇒ 沉到槽底成為<b>陽極泥（anode slime）</b>，是提取 Ag、Au、Pt、Se、Te 的重要原料</td></tr>
          </tbody></table>
          <div class="tip">口訣：<b>「活潑的跟著溶、不溶的掉下去、只有 Cu 上陰極。」</b></div></div>
          <div class="card"><h3>工業電解三大應用對照</h3>
          <table><thead><tr><th></th><th>陽極</th><th>陰極</th><th>電解液</th><th>目的</th></tr></thead><tbody>
          <tr><td><b>電鍍</b></td><td>鍍層金屬</td><td>待鍍物</td><td>含鍍層離子</td><td>表面覆蓋</td></tr>
          <tr><td><b>精煉</b></td><td>粗金屬</td><td>純金屬薄片</td><td>含該金屬離子</td><td>提純</td></tr>
          <tr><td><b>電解冶金</b></td><td>惰性（C）</td><td>惰性（C）</td><td><b>熔融</b>氧化物／鹵化物</td><td>製取活潑金屬</td></tr>
          </tbody></table>
          <div class="note"><b>霍爾法煉鋁</b>：Al₂O₃ 溶於熔融<b>冰晶石</b>（Na₃AlF₆，把熔點從 2050 ℃ 降到約 950 ℃），碳陽極會被消耗（C + O₂ → CO₂），需定期更換。<br>
          <b>唐斯法煉鈉</b>：電解熔融 NaCl（加 CaCl₂ 降熔點至約 600 ℃）；<b>不能</b>電解食鹽水得 Na。</div></div>
          <div class="card"><h3>電解熔融 vs 水溶液（最常考對比）</h3>
          <table><thead><tr><th>NaCl</th><th>陽極</th><th>陰極</th></tr></thead><tbody>
          <tr><td><b>熔融</b></td><td>Cl₂(g)</td><td><b>Na(l)</b></td></tr>
          <tr><td><b>水溶液</b></td><td>Cl₂(g)</td><td><b>H₂(g) + OH⁻</b>（Na⁺ 不放電）</td></tr>
          </tbody></table>
          <div class="small">⇒ 電解食鹽水得 NaOH（陰極區）＋ H₂ ＋ Cl₂，稱為<b>氯鹼工業</b>，產物可合成 HCl、漂白水、PVC。</div></div>`
      }
    };

    function draw() {
      const c = CONTENT[mode];
      $('#cellFig', el).innerHTML = c.fig || '<div class="note">（此模式的示意圖見下方說明）</div>';
      $('#cellEq', el).innerHTML = c.eq;
      $('#cellInfo', el).innerHTML = c.info;
      $$('#cellTabs .tab', el).forEach(t => t.classList.toggle('on', t.dataset.m === mode));
    }
    $$('#cellTabs .tab', el).forEach(t => t.onclick = () => { mode = t.dataset.m; draw(); });
    draw();
  }
};
