# -*- coding: utf-8 -*-
"""改寫 t-half 的逐步互動：每步只有一個可填空格，其餘物種顯示為已知係數。"""
p = 'tools.js'
s = open(p, encoding='utf-8').read()

i = s.find("    /* 資料結構：h.sp = [")
if i < 0:
    i = s.find("    function sides(h) {")
    i = s.rfind("\n", 0, i) + 1
j = s.find("    function draw() {", i)
assert 0 < i < j, (i, j)

new = '''    /* 資料結構：h.sp = [{n:物種, sd:'L'|'R', ci:係數在 target/coefs 的索引}]
       站位由資料明確指定；每一步 coefs 中恰好一個 null 是要填的空格。 */
    function sides(h) {
      const rank = n => n === 'e⁻' ? 3 : (n === 'H₂O' ? 2 : (n === 'H⁺' || n === 'OH⁻' ? 1 : 0));
      const sf = (a, b) => (rank(a.n) - rank(b.n)) || (a.ci - b.ci);
      return { L: h.sp.filter(x => x.sd === 'L').slice().sort(sf),
               R: h.sp.filter(x => x.sd === 'R').slice().sort(sf) };
    }
    function eqHTML(h, coefs) {
      const plus = '<span class="sp">+</span>';
      const cell = it => {
        const c = coefs[it.ci];
        if (c === null || c === undefined) {
          return '<span style="display:inline-flex;align-items:center;gap:3px">' +
            '<input class="coef-input" data-p="' + it.ci + '" type="text" inputmode="numeric" value="" placeholder="?" ' +
            'aria-label="' + it.n + ' 的係數">' +
            '<span style="font-weight:700">' + it.n + '</span></span>';
        }
        if (c === 0) return null;
        return '<span style="display:inline-flex;align-items:center;gap:2px">' +
          '<span class="mono" style="color:var(--acc);font-weight:700;min-width:14px;text-align:right">' + (c > 1 ? c : '') + '</span>' +
          '<span>' + it.n + '</span></span>';
      };
      const sd = sides(h);
      const L = sd.L.map(cell).filter(Boolean), R = sd.R.map(cell).filter(Boolean);
      return '<div class="eq-line">' + L.join(plus) +
        '<span class="sp" style="font-size:22px;margin:0 10px">→</span>' + R.join(plus) + '</div>';
    }

    /* 未平衡的骨架式（顯示所有物種與正確站位，供對照） */
    function skeleton(h) {
      const sd = sides(h);
      return '<span class="small" style="margin-right:8px">骨架：</span>' + sd.L.map(x => x.n).join(' + ') +
        ' <span style="font-size:20px;margin:0 8px">→</span> ' + sd.R.map(x => x.n).join(' + ');
    }

'''
s = s[:i] + new + s[j:]

# --- hCheck：只批改本步驟的空格 ---
ci = s.find("      $('#hCheck', el).onclick = () => {")
cj = s.find("      $('#hHint', el).onclick", ci)
assert 0 < ci < cj, (ci, cj)
new_check = '''      $('#hCheck', el).onclick = () => {
        const inp = $('#hEq .coef-input', el);
        const fb0 = $('#hFb', el);
        if (!inp) { fb0.className = 'feedback show good'; fb0.innerHTML = '<div class="ans">這一步沒有要填的空格</div>'; return; }
        const p = +inp.dataset.p;
        const want = h.target[p];
        const raw = inp.value.trim();
        if (raw === '') {
          fb0.className = 'feedback bad show';
          fb0.innerHTML = '<div class="ans">請先填入係數</div><div class="small">本步驟只要填一個格子（係數為 1 時請填 1）。提示：' + s.hint + '</div>';
          return;
        }
        const got = parseFloat(raw);
        inp.classList.remove('right', 'wrong');
        const good = !isNaN(got) && got === want;
        inp.classList.add(good ? 'right' : 'wrong');
        fb0.className = 'feedback show ' + (good ? 'good' : 'bad');
        fb0.innerHTML = good
          ? '<div class="ans">✅ 這一步正確！' + nameAt(h, p) + ' 的係數 = ' + want + '</div><div class="small">' + s.hint + '</div>' +
            (step < h.steps.length - 1
              ? '<div class="qz-actions"><button class="btn primary" id="hGoNext">下一步 →</button></div>'
              : '<div class="key" style="margin-top:10px"><b>🎉 全部完成！</b>最終答案：<div class="eq" style="margin-top:6px">' + finalEq(h) + '</div></div>')
          : '<div class="ans">❌ 不對，再想一次</div><div class="small">提示：' + s.hint + '</div>';
        if (good) {
          st.half[h.id] = Math.max(st.half[h.id] || 0, step + 1); ctx.save();
          const nx = $('#hGoNext', fb0);
          if (nx) nx.onclick = () => { step++; draw(); };
        }
      };
'''
s = s[:ci] + new_check + s[cj:]

# --- hShow：只填本步驟空格 ---
si = s.find("      $('#hShow', el).onclick = () => {")
sj = s.find("\n      };\n", si) + len("\n      };\n")
assert si > 0
new_show = '''      $('#hShow', el).onclick = () => {
        const inp = $('#hEq .coef-input', el);
        const fb0 = $('#hFb', el);
        if (inp) { inp.value = h.target[+inp.dataset.p]; inp.classList.add('right'); }
        fb0.className = 'feedback show good';
        fb0.innerHTML = '<div class="ans">已填入本步驟答案</div><div class="small">' + s.hint + '</div>';
      };
'''
s = s[:si] + new_show + s[sj:]

# --- 輔助函式 ---
s = s.replace("    function finalEq(h) {",
"""    function nameAt(h, ci) { const x = h.sp.find(y => y.ci === ci); return x ? x.n : ''; }
    function finalEq(h) {""", 1)

open(p, 'w', encoding='utf-8').write(s)
print('t-half step UX rewritten')
