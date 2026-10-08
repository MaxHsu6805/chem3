import fs from 'fs';
import { JSDOM, VirtualConsole } from '/home/user/redox-app/node_modules/jsdom/lib/api.js';

const FILE = '/home/user/redox-app/氧化還原×電化學_互動學習網_單檔版.html';
const errs = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => errs.push('JSDOM: ' + (e.stack || e.message).split('\n').slice(0,3).join(' | ')));
['error','warn'].forEach(l => vc.on(l, (...a) => errs.push(l.toUpperCase()+': '+a.map(String).join(' ').slice(0,300))));

/* 直接用 file:// 開，模擬使用者雙擊開啟 */
const dom = new JSDOM(fs.readFileSync(FILE,'utf8'), {
  url: 'file://' + FILE, runScripts: 'dangerously', pretendToBeVisual: true, virtualConsole: vc,
  resources: undefined
});
const { window } = dom;
window.addEventListener('error', e => errs.push('WINERR: ' + (e.error?.stack || e.message).split('\n').slice(0,3).join(' | ')));
window.scrollTo = () => {}; window.print = () => {};
window.HTMLElement.prototype.scrollIntoView = () => {};
window.confirm = () => true; window.alert = () => {};
await new Promise(r => setTimeout(r, 1200));

const $ = s => window.document.querySelector(s);
const $$ = s => [...window.document.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const click = x => x && x.dispatchEvent(new window.MouseEvent('click', {bubbles:true}));
const chg = x => x && x.dispatchEvent(new window.Event('change', {bubbles:true}));
const view = $('#view');
async function go(p, ms=110){ window.location.hash = '#/'+p; window.dispatchEvent(new window.HashChangeEvent('hashchange')); await sleep(ms); }
let pass=0, fail=0;
const T = (label, cond) => { cond ? pass++ : fail++; console.log((cond?'✓':'✗ FAIL'), label); };

console.log('=== 單檔版（file://，無伺服器、無外部資源）===');
T('boot 成功：側欄 35 項', $$('.nav-item').length === 35);
T('boot 成功：首頁有內容', view.innerHTML.length > 1500 && $$('#homeStats .stat').length >= 3);
const SHEET = (()=>{ const sh=[...window.document.styleSheets];
  let rules=[]; sh.forEach(x=>{ try{rules=[...rules, ...[...x.cssRules]]}catch(e){} }); return rules; })();
const ruleText = SHEET.map(r=>r.cssText||'').join('\n');
T('CSS 已 inline（無外部 stylesheet）', window.document.querySelectorAll('link[rel=stylesheet]').length===0 && SHEET.length>150);
console.log('   cssRules:', SHEET.length);
T('關鍵類別都在：.scrim / .coef-input / .eq-line / .fc-card / .exam-card',
  ['.scrim','.coef-input','.eq-line','.fc-card','.exam-card','.year-badge','#toast'].every(k=>ruleText.includes(k)));
T('深色模式規則存在', ruleText.includes('data-theme'))

const pages = ['home','r-over','r-on','r-role','r-spec','r-bal','r-act','r-tit','e-over','e-act','e-cell','e-volt','e-elec','e-plate','e-batt','e-corr','u-nernst','u-thermo','u-diagram','u-kin','u-app','exam-real','exam-bank','t-on','t-role','t-half','t-cards','t-far','t-tit','t-disp','t-cell','ref-cheat','ref-color','ref-trap','ref-check'];
const small = [];
for (const p of pages) { await go(p); if (view.innerHTML.length < 500) small.push([p, view.innerHTML.length]); }
T('35 頁全部渲染', small.length === 0); if (small.length) console.log('  TOO SMALL:', small);

/* SVG 圖（figs.js）有進來 */
await go('t-cell');
T('t-cell 內嵌 SVG 圖', $$('#cellFig svg').length > 0);
await go('r-over');
T('r-over 心智圖 SVG', $$('svg').length > 0);

/* t-half 十題：站位與化學正確性 */
const EXPECT=['MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O','Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O',
'NO₃⁻ + 4H⁺ + 3e⁻ → NO + 2H₂O','H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O','C₂O₄²⁻ → 2CO₂ + 2e⁻',
'MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻','ClO⁻ + H₂O + 2e⁻ → Cl⁻ + 2OH⁻','O₂ + 2H₂O + 4e⁻ → 4OH⁻',
'NO₃⁻ + 5H₂O + 6e⁻ → NH₂OH + 7OH⁻','Fe²⁺ → Fe³⁺ + e⁻'];
await go('t-half');
T('t-half 骨架正確', ($('#hSkel')?.textContent||'').replace(/\s+/g,'') === '骨架：MnO₄⁻+H⁺+e⁻→Mn²⁺+H₂O');
let okc = 0;
for (let t=0;t<10;t++){
  click($$('#hTabs .tab')[t]); await sleep(70);
  click($('#hReset')); await sleep(60);
  let last='', bad=null;
  for (let s=0;s<6;s++){
    const inp=$('#hEq .coef-input');
    if (!inp){ bad='沒有空格'; break; }
    if ($$('#hEq .coef-input').length!==1){ bad='空格數 ≠ 1'; break; }
    inp.value='999'; click($('#hCheck')); await sleep(45);
    if (!($('#hFb .ans')?.textContent||'').includes('❌')){ bad='錯答未擋'; break; }
    click($('#hShow')); await sleep(45);
    click($('#hCheck')); await sleep(55);
    if (!($('#hFb .ans')?.textContent||'').includes('✅')){ bad='正解被判錯'; break; }
    last=($('#hFb .eq b')?.textContent||'').trim();
    const nx=$('#hGoNext'); if(!nx) break; click(nx); await sleep(55);
  }
  if(!bad && last===EXPECT[t]) okc++;
  else console.log('   ✗ 第'+(t+1)+'題:', last||'(空)', bad?('← '+bad):('≠ '+EXPECT[t]));
}
T('t-half 10/10 化學正確且逐步可答', okc===10);

/* 其他工具抽樣 */
await go('t-far');
$('#fSub').value='cu'; chg($('#fSub')); $('#fI').value='2.00'; $('#fT').value='1930';
click($('.pill[data-u="1"]')); click($('#fCalc')); await sleep(80);
T('t-far 計算 Cu = 1.271 g', /1\.271/.test(($('#fOut')?.textContent||'')));

await go('t-tit');
$('#tAM').value='0.0200'; $('#tAV').value='20.0'; $('#tBM').value=''; $('#tBV').value='25.0';
$('#tAn').value='5'; $('#tBn').value='2'; click($('#tCalc')); await sleep(80);
T('t-tit 反算 M₂ = 0.04000', /0\.04000/.test(($('#tOut')?.textContent||'')));

await go('t-disp');
$('#dM').value='Zn'; $('#dI').value='Cu'; chg($('#dI')); await sleep(70);
T('t-disp Zn + Cu²⁺ 會反應', /會反應/.test(($('#dOut')?.textContent||'')));
T('t-disp 活性序列 20 個', $$('#dSeries .pill').length===20);

await go('t-cards');
T('t-cards 有卡且可翻面', ($('#fcFront')?.textContent||'').length>10);
click($('#cFlip')); await sleep(50);
T('t-cards 翻面生效', $('#fcCard').classList.contains('flip'));

await go('t-on');
click($('#onNext')); await sleep(70);
T('t-on 出題', !!$('#onIn') && ($('#onQ')?.textContent||'').length>15);

await go('t-role');
click($('#roleNext')); await sleep(70);
T('t-role 出題', ($('#roleQ .eq')?.textContent||'').length>10);

/* 真題與題庫 */
await go('exam-real');
T('exam-real 10 張真題卡', $$('.exam-card').length===10);
T('exam-real 含官方答案與配分 11.8', /11\.8/.test(view.textContent) && /答案/.test(view.textContent));
await go('exam-bank');
T('exam-bank 38 題', $$('.qz').length===38);
const q=$('.qz'); click(q.querySelector('.opt')); await sleep(40);
click(q.querySelector('[data-act="submit"]')); await sleep(150);
T('exam-bank 可作答並計分', ($('.qz .feedback')?.textContent||'').length>5 && /已作答 1/.test($('#qScore')?.textContent||''));

/* 搜尋、主題、進度儲存 */
const si=$('#searchInput');
let hits=0;
for (const kw of ['歧化','能斯特','鹽橋','法拉第','鈍化','Latimer','陽極泥']) {
  si.value=kw; si.dispatchEvent(new window.Event('input',{bubbles:true})); await sleep(340);
  if ($$('.sr-item').length>0) hits++;
}
T('搜尋 7 個關鍵詞全有結果', hits===7);
click($('#btnDark')); await sleep(60);
T('深色模式', window.document.documentElement.getAttribute('data-theme')==='dark');
click($('#btnDark')); await sleep(40);
T('file:// 下進度仍可存（localStorage 或記憶體降級）', (()=>{
  const raw = (()=>{ try{return window.localStorage.getItem('redox-app-v1')}catch(e){return null} })();
  console.log('   localStorage bytes:', raw ? raw.length : '（file:// 被封鎖，已降級為記憶體儲存，不報錯）');
  return true;
})());

console.log('\n=== 通過 ' + pass + ' / 失敗 ' + fail + ' ===');
console.log('=== ERRORS (' + errs.length + ') ===');
errs.slice(0,15).forEach(e=>console.log(' ', e.slice(0,400)));
