import fs from 'fs';
import { JSDOM, VirtualConsole } from '/home/user/redox-app/node_modules/jsdom/lib/api.js';

const errs = [];
const vc = new VirtualConsole();
vc.on('jsdomError', e => errs.push('JSDOM: ' + (e.stack || e.message)));
['error','warn'].forEach(l => vc.on(l, (...a) => errs.push(l.toUpperCase()+': '+a.map(String).join(' ').slice(0,300))));

const html = fs.readFileSync('/home/user/redox-app/index.html','utf8')
  .replace('<script type="module" src="scripts/app.js"></script>','');
const dom = new JSDOM(html, { url:'http://127.0.0.1:3000/index.html', runScripts:'dangerously', pretendToBeVisual:true, virtualConsole: vc });
const { window } = dom;
window.addEventListener('error', e => errs.push('WINERR: ' + (e.error?.stack || e.message)));
for (const k of ['window','document','location','localStorage','navigator','history','HTMLElement','Element','Node','Event','MouseEvent','HashChangeEvent','KeyboardEvent','getComputedStyle','requestAnimationFrame','customElements']) {
  try { globalThis[k] = window[k]; } catch(e) {}
}
window.scrollTo = () => {}; window.print = () => {}; window.HTMLElement.prototype.scrollIntoView = () => {};
globalThis.confirm = () => true; globalThis.alert = () => {}; window.confirm = () => true;

await import('/home/user/redox-app/scripts/app.js?v=' + Date.now());
await new Promise(r=>setTimeout(r,900));

const $ = s => window.document.querySelector(s);
const $$ = s => [...window.document.querySelectorAll(s)];
const view = $('#view');
const sleep = ms => new Promise(r=>setTimeout(r,ms));
const click = x => x && x.dispatchEvent(new window.MouseEvent('click',{bubbles:true}));
const chg = x => x && x.dispatchEvent(new window.Event('change',{bubbles:true}));
async function go(p, ms=110){ window.location.hash = '#/'+p; window.dispatchEvent(new window.HashChangeEvent('hashchange')); await sleep(ms); }
const T = (label, cond) => console.log((cond?'✓':'✗ FAIL'), label);

console.log('--- boot ---');
console.log('nav items:', $$('.nav-item').length, '| crumb:', $('#crumb')?.textContent, '| view len:', view.innerHTML.length, '| homeStats:', $$('#homeStats .stat').length);

const pages = ['home','r-over','r-on','r-role','r-spec','r-bal','r-act','r-tit','e-over','e-act','e-cell','e-volt','e-elec','e-plate','e-batt','e-corr','u-nernst','u-thermo','u-diagram','u-kin','u-app','exam-real','exam-bank','t-on','t-role','t-half','t-cards','t-far','t-tit','t-disp','t-cell','ref-cheat','ref-color','ref-trap','ref-check'];
const small=[];
for (const p of pages) { await go(p); const n=view.innerHTML.length; if(n<500) small.push([p,n]); }
T('35 頁全部渲染（len ≥ 500）', small.length===0); if(small.length) console.log('  TOO SMALL:', small);

/* ================= t-on ================= */
await go('t-on');
click($('#onNext')); await sleep(60);
T('t-on 出題（有化學式）', ($('#onQ')?.textContent||'').length > 20 && !!$('#onIn'));
console.log('  題目:', ($('#onQ')?.textContent||'').replace(/\s+/g,' ').slice(0,60));
click($('#onCheck')); await sleep(50);
T('t-on 空答有擋', ($('#onFb')?.textContent||'').includes('請先輸入'));
$('#onIn').value = '___WRONG___'; click($('#onCheck')); await sleep(60);
T('t-on 錯答顯示正解', ($('#onFb')?.textContent||'').includes('答案是'));
console.log('  統計:', $('#onOk')?.textContent, '/', $('#onNo')?.textContent);

/* ================= t-role ================= */
await go('t-role');
click($('#roleNext')); await sleep(60);
T('t-role 出題', ($('#roleQ .eq')?.textContent||'').length > 10);
console.log('  反應式:', ($('#roleQ .eq')?.textContent||'').slice(0,58));
click($('#roleCheck')); await sleep(50);
T('t-role 未選完有擋', ($('#roleFb')?.textContent||'').includes('兩題都要選'));
const pills = $$('#roleOx .pill.clickable');
click(pills[0]); click($$('#roleRe .pill.clickable')[0]); await sleep(40);
click($('#roleCheck')); await sleep(80);
T('t-role 作答後有解析', ($('#roleFb')?.textContent||'').length > 40);

/* ================= t-half（核心修復） ================= */
await go('t-half');
const EXPECT=['MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O','Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O',
'NO₃⁻ + 4H⁺ + 3e⁻ → NO + 2H₂O','H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O','C₂O₄²⁻ → 2CO₂ + 2e⁻',
'MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻','ClO⁻ + H₂O + 2e⁻ → Cl⁻ + 2OH⁻','O₂ + 2H₂O + 4e⁻ → 4OH⁻',
'NO₃⁻ + 5H₂O + 6e⁻ → NH₂OH + 7OH⁻','Fe²⁺ → Fe³⁺ + e⁻'];
T('t-half 骨架正確（h1）', ($('#hSkel')?.textContent||'').replace(/\s+/g,'') === '骨架：MnO₄⁻+H⁺+e⁻→Mn²⁺+H₂O');
console.log('  骨架:', ($('#hSkel')?.textContent||'').trim());
let okCount=0;
for(let t=0;t<10;t++){
  click($$('#hTabs .tab')[t]); await sleep(70);
  click($('#hReset')); await sleep(60);
  let last='', bad=null, nSteps=0;
  for(let s=0;s<6;s++){
    const inp=$('#hEq .coef-input');
    if(!inp){ bad='第'+(s+1)+'步沒有空格'; break; }
    if($$('#hEq .coef-input').length!==1){ bad='第'+(s+1)+'步有 '+$$('#hEq .coef-input').length+' 個空格（應為 1）'; break; }
    inp.value='999'; click($('#hCheck')); await sleep(50);
    if(!($('#hFb .ans')?.textContent||'').includes('❌')){ bad='錯答未被擋下'; break; }
    inp.value=''; click($('#hCheck')); await sleep(40);
    if(!($('#hFb .ans')?.textContent||'').includes('請先填入')){ bad='空答未被擋下'; break; }
    click($('#hShow')); await sleep(40);
    const v=inp.value; click($('#hCheck')); await sleep(60);
    if(!($('#hFb .ans')?.textContent||'').includes('✅')){ bad='看答案後仍判錯'; break; }
    last=($('#hFb .eq b')?.textContent||'').trim(); nSteps++;
    const nx=$('#hGoNext'); if(!nx) break; click(nx); await sleep(60);
  }
  const ok = !bad && last===EXPECT[t];
  if(ok) okCount++;
  console.log((ok?'  ✓':'  ✗'), String(t+1).padStart(2), last.padEnd(40), 'steps', nSteps, bad?('← '+bad):(ok?'':('≠ '+EXPECT[t])));
}
T('t-half 10/10 化學正確且逐步可答', okCount===10);
/* 手動作答：h1 全程自己填 */
click($$('#hTabs .tab')[0]); await sleep(70); click($('#hReset')); await sleep(60);
const manual=['1','4','8','5'];
let manualOk=true;
for(const v of manual){
  const inp=$('#hEq .coef-input'); if(!inp){manualOk=false;break;}
  inp.value=v; click($('#hCheck')); await sleep(60);
  if(!($('#hFb .ans')?.textContent||'').includes('✅')){manualOk=false;break;}
  const nx=$('#hGoNext'); if(nx){click(nx); await sleep(60);}
}
T('t-half 手動作答（不點看答案）h1 全對', manualOk && ($('#hFb .eq b')?.textContent||'').trim()===EXPECT[0]);
console.log('  電荷檢查:', ($('#hCharge')?.textContent||'').replace(/\s+/g,' ').trim());
T('t-half 進度已存', ($('#hProgress')?.textContent||'').includes('✅'));

/* ================= t-cards ================= */
await go('t-cards');
T('t-cards 有卡片', ($('#fcFront')?.textContent||'').length>10);
click($('#cFlip')); await sleep(50);
T('t-cards 翻面', $('#fcCard').classList.contains('flip'));
console.log('  正面:', ($('#fcFront')?.textContent||'').replace(/\s+/g,' ').slice(0,52));
console.log('  背面:', ($('#fcBack')?.textContent||'').replace(/\s+/g,' ').slice(0,52));
const c1=$('#cCount').textContent; click($('#cKnow')); await sleep(70);
T('t-cards 標記後前進', $('#cCount').textContent !== c1);
click($$('#cTabs .tab')[3]); await sleep(80);
T('t-cards 切換主題', $$('#cTabs .tab')[3].classList.contains('on') && ($('#fcFront')?.textContent||'').length>10);
click($('#cShuffle')); await sleep(60);
console.log('  計數:', ($('#cCount')?.textContent||'').replace(/\s+/g,' ').slice(0,60));
console.log('  熟練度列數:', $$('#cStat > div').length);

/* ================= t-far ================= */
await go('t-far');
T('t-far 預設有結果', ($('#fOut')?.textContent||'').length>30);
$('#fSub').value='cu'; chg($('#fSub')); await sleep(50);
$('#fI').value='2.00'; $('#fT').value='1930'; $('#fEff').value='100';
click($('.pill[data-u="1"]')); await sleep(30);
click($('#fCalc')); await sleep(80);
const fo=($('#fOut')?.textContent||'').replace(/\s+/g,' ');
console.log('  Cu 2A×1930s →', fo.slice(0,150));
T('t-far Cu = 1.271 g（2A×1930s＝0.04 mol e⁻）', fo.includes('0.04') && fo.includes('1.27'));
$('#fSub').value='h2'; chg($('#fSub')); click($('#fCalc')); await sleep(70);
const fh=($('#fOut')?.textContent||'').replace(/\s+/g,' ');
T('t-far H₂ 氣體給 STP 體積（0.448 L）', fh.includes('0.448') && fh.includes('STP'));
$('#fI').value='0'; click($('#fCalc')); await sleep(50);
T('t-far 非法輸入有擋', ($('#fOut .bad')?.textContent||'').length>0);
$('#fI').value='2.00'; $('#fEff').value='80'; click($('#fCalc')); await sleep(60);
T('t-far 電流效率有計入', ($('#fOut')?.textContent||'').includes('效率'));

/* ================= t-tit ================= */
await go('t-tit');
$('#tAM').value='0.0200'; $('#tAV').value=''; $('#tBM').value=''; $('#tBV').value='25.0';
$('#tAn').value='5'; $('#tBn').value='2';
click($('#tCalc')); await sleep(70);
const to=($('#tOut')?.textContent||'').replace(/\s+/g,' ');
console.log('  0.02 M KMnO₄ vs 25 mL 草酸 →', to.slice(0,160));
T('t-tit 只有兩個已知時要求補齊', ($('#tOut')?.textContent||'').includes('至少要填三個'));
$('#tAM').value='0.0200'; $('#tAV').value='20.0'; $('#tBM').value=''; $('#tBV').value='25.0';
click($('#tCalc')); await sleep(70);
const to2=($('#tOut')?.textContent||'').replace(/\s+/g,' ');
console.log('  M₂ =', to2.match(/待測液濃度 M₂ = [^m]+/)?.[0]);
T('t-tit M₂ = 0.04000（= 2×0.02×20/(2×25)）', /0\.04000/.test(to2));
$('#tA').value='k2cr2o7'; chg($('#tA')); await sleep(40);
T('t-tit 選物質自動帶 n=6', $('#tAn').value==='6');

/* ================= t-disp ================= */
await go('t-disp');
$('#dM').value='Zn'; $('#dI').value='Cu'; chg($('#dI')); await sleep(60);
let d=($('#dOut')?.textContent||'').replace(/\s+/g,' ');
T('t-disp Zn + Cu²⁺ 會反應', d.includes('會反應') && d.includes('Zn(s)'));
console.log('  Zn+Cu²⁺:', d.slice(0,110));
$('#dM').value='Cu'; $('#dI').value='Zn'; chg($('#dI')); await sleep(60);
T('t-disp Cu + Zn²⁺ 不反應', ($('#dOut')?.textContent||'').includes('不反應'));
$('#dM2').value='Cu'; $('#dR').value='hno3'; chg($('#dR')); await sleep(60);
const dh=($('#dOut2')?.textContent||'').replace(/\s+/g,' ');
T('t-disp Cu + HNO₃ 不放 H₂', dh.includes('不放 H₂') && dh.includes('NO'));
$('#dM2').value='Al'; $('#dR').value='hno3'; chg($('#dR')); await sleep(60);
T('t-disp Al 遇濃 HNO₃ 鈍化', ($('#dOut2')?.textContent||'').includes('鈍化'));
$('#dM2').value='Na'; $('#dR').value='cold'; chg($('#dR')); await sleep(60);
T('t-disp Na + 冷水劇烈', ($('#dOut2')?.textContent||'').includes('劇烈'));
$('#dX').value='Cl₂'; $('#dY').value='Br₂'; chg($('#dY')); await sleep(60);
T('t-disp Cl₂ + Br⁻ 會反應', ($('#dOut3')?.textContent||'').includes('會反應'));
T('t-disp 活性序列 20 個 pill', $$('#dSeries .pill').length===20);

/* ================= t-cell ================= */
await go('t-cell');
T('t-cell 有 SVG 圖', $$('#cellFig svg').length>0);
T('t-cell 電池 E°cell=+1.10 V', ($('#cellEq')?.textContent||'').includes('1.10'));
T('t-cell 對照表有陽氧陰還', ($('#cellInfo')?.textContent||'').includes('陽氧陰還'));
click($$('#cellTabs .tab')[1]); await sleep(80);
T('t-cell 電解池：陽極＝正極', ($('#cellInfo')?.textContent||'').includes('正極（+）'));
T('t-cell 電解池：H₂:O₂ = 2:1', ($('#cellEq')?.textContent||'').includes('2 : 1'));
click($$('#cellTabs .tab')[2]); await sleep(80);
T('t-cell 電鍍三原則', ($('#cellInfo')?.textContent||'').includes('待鍍物') && ($('#cellEq')?.textContent||'').includes('Ag⁺ + e⁻'));
T('t-cell 陽極處理＝工件當陽極', ($('#cellInfo')?.textContent||'').includes('陽極處理'));
click($$('#cellTabs .tab')[3]); await sleep(80);
T('t-cell 精煉陽極泥', ($('#cellInfo')?.textContent||'').includes('陽極泥'));

/* ================= exam / quiz ================= */
await go('exam-real');
T('exam-real 10 張真題卡', $$('.exam-card').length===10);
T('exam-real 配分 11.8', ($('#view')?.textContent||'').includes('11.8'));
await go('exam-bank');
T('exam-bank 38 題', $$('.qz').length===38);
const q=$('.qz'); click(q.querySelector('.opt')); await sleep(40);
click(q.querySelector('[data-act="submit"]')); await sleep(140);
T('exam-bank 可作答並給回饋', ($('.qz .feedback')?.textContent||'').length>5);
console.log('  計分:', ($('#qScore')?.textContent||'').replace(/\s+/g,' ').slice(0,70));

/* ================= home / search / theme ================= */
await go('home');
T('home 有儀表板', $$('#homeStats .stat').length>=3);
const si=$('#searchInput');
for (const kw of ['歧化','能斯特','鹽橋','法拉第','鈍化','Latimer','陽極泥']) {
  si.value=kw; si.dispatchEvent(new window.Event('input',{bubbles:true})); await sleep(340);
  const n=$$('.sr-item').length;
  T('搜尋「'+kw+'」有結果', n>0);
}
click($('#btnDark')); await sleep(60);
T('深色模式可切換', window.document.documentElement.getAttribute('data-theme')==='dark');
click($('#btnDark')); await sleep(40);
console.log('  chip:', $('#chipProgress')?.textContent, '| bar:', $('#progressBar')?.style.width, '| storage:', (window.localStorage.getItem('redox-app-v1')||'').length, 'bytes');

console.log('\n===== ERRORS ('+errs.length+') =====');
errs.slice(0,25).forEach(e=>console.log(e.slice(0,420)));
