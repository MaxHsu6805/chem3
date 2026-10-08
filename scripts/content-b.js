/* content-b.js — Part B 電化學（B0–B7）＋ 大學延伸（U1–U5）＋ 速查（ref-*） */
import { FIGS } from './figs.js';

export const PAGES_B = {};

/* ===================== B0 電化學全景 ===================== */
PAGES_B['e-over'] = () => `
<h1 class="page">B0｜電化學全景：陽氧陰還</h1>
<p class="page-sub">電化學就是把氧化還原反應「拆開」——讓電子走導線而不是直接在溶液裡交接，於是化學能可以變成電能（電池），或者反過來用電能驅動反應（電解）。</p>
${FIGS.cell}

<h2 class="ec"><span class="n">B0-1</span>電池 vs 電解池 全對比</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">項目</th><th>電池 Galvanic（放電）</th><th>電解池 Electrolytic</th></tr></thead>
<tbody>
<tr><td><b>能量轉換</b></td><td>化學能 → 電能</td><td>電能 → 化學能</td></tr>
<tr><td><b>自發性</b></td><td><b>自發</b>（ΔG &lt; 0、E° &gt; 0）</td><td><b>非自發</b>（ΔG &gt; 0，需外加電壓 &gt; |E<sub>cell</sub>|）</td></tr>
<tr><td><b>陽極</b></td><td class="ox">氧化反應；<b>負極（−）</b>；電子由此流出</td><td class="ox">氧化反應；<b>正極（＋）</b>；接電源正極</td></tr>
<tr><td><b>陰極</b></td><td class="re">還原反應；<b>正極（＋）</b>；電子流入</td><td class="re">還原反應；<b>負極（−）</b>；接電源負極</td></tr>
<tr><td><b>電極材料</b></td><td>通常是兩種<b>不同</b>活性金屬（或一惰性電極＋氣體）</td><td>可<b>相同</b>；陽極若為活性金屬則會溶解（電鍍）</td></tr>
<tr><td><b>外電路電流</b></td><td>正極 → 負極（電子反向）</td><td>電源正極 → 陽極 → 電解液 → 陰極 → 電源負極</td></tr>
<tr><td><b>溶液內</b></td><td colspan="2"><b>離子</b>移動（電子不走溶液）：陽離子 → 陰極；陰離子 → 陽極</td></tr>
<tr><td><b>典型例子</b></td><td>鋅銅電池、鉛蓄電池、乾電池、鋰電池、燃料電池</td><td>電解水、氯鹼工業、電煉鋁、電鍍、精煉銅</td></tr>
</tbody></table></div>

<div class="key"><b>🔑 三個一定要分清楚的詞</b>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:120px">名詞</th><th>定義</th><th>在電池中</th><th>在電解池中</th></tr></thead>
<tbody>
<tr><td><b>陽極 Anode</b></td><td><b>發生氧化反應</b>的電極（定義與正負無關）</td><td>負極（−）</td><td>正極（＋）</td></tr>
<tr><td><b>陰極 Cathode</b></td><td><b>發生還原反應</b>的電極</td><td>正極（＋）</td><td>負極（−）</td></tr>
<tr><td><b>正/負極</b></td><td>電位高低／電子流出入方向</td><td>陰極＝正、陽極＝負</td><td>陽極＝正、陰極＝負</td></tr>
</tbody></table></div>
<p style="margin-bottom:0"><b>結論：</b>「陽極＝氧化」「陰極＝還原」<b>永遠成立</b>；只有「正負極」的對應會因電池／電解池而<b>相反</b>。</p>
</div>

<h2 class="ec"><span class="n">B0-2</span>電化學的四大應用分類</h2>
<div class="grid4">
<div class="card tight"><h4>① 產生電力</h4><p class="small">電池、燃料電池、生物電池、太陽能染料敏化電池（DSSC）</p></div>
<div class="card tight"><h4>② 製造物質</h4><p class="small">氯鹼工業、電煉鋁/鈉/鎂、電合成（如己二腈）、電催化製氫</p></div>
<div class="card tight"><h4>③ 表面處理</h4><p class="small">電鍍、陽極處理（鋁陽極氧化）、電拋光、電沉積塗裝</p></div>
<div class="card tight"><h4>④ 分析測量</h4><p class="small">氧化還原滴定、pH 計、離子選擇性電極、庫倫分析法、感測器</p></div>
</div>

<h2 class="ec"><span class="n">B0-3</span>「陽極泥」與電極材料的選擇</h2>
<div class="card">
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">陽極材料</th><th>陽極反應</th><th>用途</th></tr></thead>
<tbody>
<tr><td><b>惰性電極</b>（Pt、石墨 C、Au）</td><td>由<b>溶液中的陰離子或 H₂O</b> 放電</td><td>電解水、電解 NaCl、一般電解</td></tr>
<tr><td><b>活性金屬</b>（Cu、Ag、Zn、Ni）</td><td><b>電極本身溶解</b>：M → Mⁿ⁺ + ne⁻</td><td>電鍍、精煉金屬</td></tr>
<tr><td><b>消耗性碳陽極</b></td><td>C + O₂ → CO₂（被生成的氧消耗）</td><td>電煉鋁（Hall–Héroult），需定期更換</td></tr>
</tbody></table></div>
<div class="note"><b>陽極放電順序（惰性電極）：</b>活性金屬電極 ＞ S²⁻ ＞ I⁻ ＞ Br⁻ ＞ Cl⁻ ＞ OH⁻ ＞ H₂O ＞ 含氧酸根（SO₄²⁻、NO₃⁻、PO₄³⁻ 不放電）<br>
<b>陰極放電順序：</b>Au³⁺ ＞ Ag⁺ ＞ Hg²⁺ ＞ Cu²⁺ ＞ H⁺（酸）＞ Pb²⁺ ＞ Sn²⁺ ＞ Ni²⁺ ＞ Fe²⁺ ＞ Zn²⁺ ＞ H₂O（中性/鹼）＞ Al³⁺ ＞ Mg²⁺ ＞ Na⁺ ＞ K⁺</div>
</div>
`;

/* ===================== B1 電化序與 E° ===================== */
PAGES_B['e-act'] = () => `
<h1 class="page">B1｜電化序與標準還原電位 E°</h1>
<p class="page-sub">高中的「活性序列」是大學的「電化序」的簡化版。E° 把「活性」變成<b>可以計算的數字</b>。</p>
${FIGS.potential}

<h2 class="ec"><span class="n">B1-1</span>標準還原電位的定義與條件</h2>
<div class="card">
<ul class="tight">
<li><b>定義：</b>在<b>標準狀態</b>下，某半反應相對於<b>標準氫電極（SHE）</b>的還原傾向，單位為伏特（V）。</li>
<li><b>標準狀態：</b>25 ℃（298 K）、溶質 <b>1 M</b>、氣體 <b>1 atm</b>、純固體/純液體為其標準態。</li>
<li><b>基準：</b>2H⁺(1 M) + 2e⁻ → H₂(1 atm)，<b>E° ≡ 0.00 V</b>（人為規定）。</li>
<li>E° &gt; 0 ⇒ 比 H⁺ 容易被還原（<b>氧化力 ＞ H⁺</b>）；E° &lt; 0 ⇒ 比 H⁺ 難被還原（元素<b>還原力 ＞ H₂</b>）。</li>
</ul>
<div class="warn"><b>三大性質（考試愛考）：</b>
<ol class="steps">
<li>E° 是<b>強度性質</b> ⇒ <b>乘上係數不會改變</b>：Cu²⁺ + 2e⁻ → Cu 與 2Cu²⁺ + 4e⁻ → 2Cu 的 E° 都是 +0.34 V。</li>
<li>E° <b>不可直接相加</b>；要求「跨步」電位必須用 ΔG° = −nFE° 換算（見 U3 Latimer 圖）。</li>
<li>反向反應的 E° <b>變號</b>：Cu → Cu²⁺ + 2e⁻ 的 E° = <b>−0.34 V</b>。</li>
</ol>
</div>
</div>

<h2 class="ec"><span class="n">B1-2</span>活性序列 ⇄ E° 對照</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:110px">金屬</th><th class="c" style="width:110px">E°(Mⁿ⁺/M)</th><th>還原力（活性）</th><th>其離子的氧化力</th></tr></thead>
<tbody>
<tr><td>Li</td><td class="c">−3.04 V</td><td>最強還原劑</td><td>Li⁺ 幾乎無氧化力</td></tr>
<tr><td>K</td><td class="c">−2.93 V</td><td>極強</td><td>極弱</td></tr>
<tr><td>Ca</td><td class="c">−2.87 V</td><td>極強</td><td>極弱</td></tr>
<tr><td>Na</td><td class="c">−2.71 V</td><td>極強</td><td>極弱</td></tr>
<tr><td>Mg</td><td class="c">−2.37 V</td><td>很強</td><td>很弱</td></tr>
<tr><td>Al</td><td class="c">−1.66 V</td><td>強（但表面氧化膜鈍化）</td><td>弱</td></tr>
<tr><td>Zn</td><td class="c">−0.76 V</td><td>中強</td><td>弱</td></tr>
<tr><td>Fe</td><td class="c">−0.44 V</td><td>中</td><td>弱</td></tr>
<tr><td>Ni</td><td class="c">−0.25 V</td><td>中弱</td><td>中弱</td></tr>
<tr><td>Sn</td><td class="c">−0.14 V</td><td>弱</td><td>中</td></tr>
<tr><td>Pb</td><td class="c">−0.13 V</td><td>弱</td><td>中</td></tr>
<tr class="hl"><td><b>H₂（SHE）</b></td><td class="c"><b>0.00 V</b></td><td colspan="2"><b>分界：氫前金屬可置換稀酸中的 H⁺</b></td></tr>
<tr><td>Cu</td><td class="c">+0.34 V</td><td>很弱</td><td>Cu²⁺ 中等氧化力</td></tr>
<tr><td>Ag</td><td class="c">+0.80 V</td><td>極弱</td><td>Ag⁺ 強氧化力</td></tr>
<tr><td>Hg</td><td class="c">+0.85 V</td><td>極弱</td><td>Hg²⁺ 強</td></tr>
<tr><td>Pt</td><td class="c">+1.18 V</td><td>幾乎無</td><td>很強</td></tr>
<tr><td>Au</td><td class="c">+1.50 V</td><td>幾乎無（惰性）</td><td>Au³⁺ 很強</td></tr>
</tbody></table></div>

<h2 class="ec"><span class="n">B1-3</span>用 E° 判斷反應自發性</h2>
<div class="card">
<div class="eq"><b>E°<sub>cell</sub> = E°<sub>陰極（還原）</sub> − E°<sub>陽極（還原）</sub></b></div>
<ul class="tight">
<li>E°<sub>cell</sub> &gt; 0 ⇒ 自發（可做成電池）</li>
<li>E°<sub>cell</sub> &lt; 0 ⇒ 非自發（需外加電壓電解）</li>
<li>E°<sub>cell</sub> = 0 ⇒ 平衡（濃度電池達到濃度均等時）</li>
</ul>
<p><b>範例：</b>Zn + Cu²⁺ → Zn²⁺ + Cu<br>
E°<sub>cell</sub> = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = (+0.34) − (−0.76) = <b>+1.10 V</b> ＞ 0 ⇒ 自發 ✅</p>
<p><b>反例：</b>Cu + Zn²⁺ → Cu²⁺ + Zn<br>
E°<sub>cell</sub> = (−0.76) − (+0.34) = <b>−1.10 V</b> ＜ 0 ⇒ 非自發 ❌</p>
<div class="warn"><b>最常錯：</b>把兩個 E° <b>相加</b>。<b>一定要相減</b>（陰極減陽極），且兩個都用「還原電位」。</div>
</div>

<h2 class="ec"><span class="n">B1-4</span>完整標準還原電位表</h2>
<p class="small">下表由強氧化劑（E° 大）到強還原劑（E° 小）排列。<b>點列首可排序</b>；完整表也在「速查」頁。</p>
<div id="eTable"></div>

<h2 class="ec"><span class="n">B1-5</span>例題</h2>
<div class="ex lv4"><div class="hd"><span>例 B1-1　由 E° 判氧化力與反應方向</span><span class="stars">★★★★☆</span></div><div class="bd">
<p>已知：① N₂ + 5H⁺ + 4e⁻ → N₂H₅⁺　E° = −0.23 V　② MnO₂ + 4H⁺ + 2e⁻ → Mn²⁺ + 2H₂O　E° = +1.23 V。下列何者正確？</p>
<details><summary>詳解</summary><div class="body">
<ul class="tight">
<li>E° 大 ⇒ 氧化力強：<b>MnO₂（+1.23）＞ N₂（−0.23）</b></li>
<li>還原力（其產物）相反：<b>N₂H₅⁺ ＞ Mn²⁺</b></li>
<li>自發方向：<b>MnO₂ 氧化 N₂H₅⁺</b>（MnO₂ + N₂H₅⁺ → Mn²⁺ + N₂），E°<sub>cell</sub> = 1.23 − (−0.23) = <b>+1.46 V</b></li>
</ul>
<div class="key"><b>注意：</b>E°<sub>cell</sub> = 1.23 − (−0.23) = <b>1.46 V</b>，<b>不是 1.00 V</b>（不可相加）。這是 101 指考題型的核心陷阱。</div>
</div></details></div></div>

<div class="ex lv3"><div class="hd"><span>例 B1-2　哪一個是最強還原劑？</span><span class="stars">★★★☆☆</span></div><div class="bd">
<p>已知 E°：Cr³⁺/Cr = −0.74 V、Co²⁺/Co = −0.28 V、MnO₄⁻/Mn²⁺ = +1.51 V。下列何者是最強的還原劑？(A) Cr (B) Cr³⁺ (C) Co (D) Mn²⁺ (E) MnO₄⁻</p>
<details><summary>詳解</summary><div class="body">
<p><b>答案：(A) Cr</b></p>
<p>還原劑是「被氧化的一方」，也就是各半反應<b>逆向</b>的反應物：Cr、Co、Mn²⁺。<br>
E° 越<b>小（越負）</b>⇒ 逆向反應越容易 ⇒ <b>還原力越強</b>。<br>
−0.74（Cr）＜ −0.28（Co）＜ +1.51（Mn²⁺）⇒ <b>Cr 最強</b>。</p>
<div class="note"><b>快速口訣：</b>「<b>最小的 E° 對應最強的還原劑；最大的 E° 對應最強的氧化劑</b>」。看表格時，最左下（E° 最負）的<b>右邊物種</b>是最強還原劑，最右上（E° 最正）的<b>左邊物種</b>是最強氧化劑——這叫「<b>對角線規則</b>」。</div>
</div></details></div></div>
`;

/* ===================== B2 電池 ===================== */
PAGES_B['e-cell'] = () => `
<h1 class="page">B2｜電池（Galvanic / Voltaic Cell）</h1>
<p class="page-sub">把氧化與還原拆到兩個燒杯，中間用鹽橋接通，電子就只好走導線——這就是電池。</p>

<h2 class="ec"><span class="n">B2-1</span>鋅銅電池（丹尼耳電池）完整解剖</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:130px">項目</th><th>陽極（−）：鋅半電池</th><th>陰極（＋）：銅半電池</th></tr></thead>
<tbody>
<tr><td><b>半反應</b></td><td class="ox">Zn(s) → Zn²⁺(aq) + 2e⁻</td><td class="re">Cu²⁺(aq) + 2e⁻ → Cu(s)</td></tr>
<tr><td><b>電極質量</b></td><td><b>減少</b>（Zn 溶解）</td><td><b>增加</b>（Cu 附著）</td></tr>
<tr><td><b>溶液濃度</b></td><td>[Zn²⁺] <b>上升</b></td><td>[Cu²⁺] <b>下降</b>、藍色<b>變淡</b></td></tr>
<tr><td><b>溶液電荷變化</b></td><td>Zn²⁺ 增多 ⇒ 趨正 ⇒ 需要<b>陰離子</b>流入</td><td>Cu²⁺ 減少、SO₄²⁻ 剩餘 ⇒ 趨負 ⇒ 需要<b>陽離子</b>流入</td></tr>
<tr><td><b>電子流向</b></td><td colspan="2">外電路：<b>Zn 極 → Cu 極</b>；電流方向相反（Cu → Zn）</td></tr>
<tr><td><b>電壓變化</b></td><td colspan="2">隨放電進行 <b>電壓下降</b>（[Zn²⁺]↑、[Cu²⁺]↓ ⇒ Q 增大 ⇒ E 減小），直到平衡（E = 0）或某一方耗盡</td></tr>
</tbody></table></div>

<h2 class="ec"><span class="n">B2-2</span>鹽橋（Salt Bridge）</h2>
<div class="card">
<ul class="tight">
<li><b>成分：</b>瓊脂（agar）＋惰性電解質（KCl、KNO₃、NH₄NO₃）凝膠。<b>不可用會與溶液產生沉澱的鹽</b>（例如含 Ag⁺、Pb²⁺ 的溶液不能用 KCl，會生成 AgCl↓）。</li>
<li><b>三大功能：</b>① 接通電路（讓離子移動）② <b>維持兩杯電中性</b> ③ 防止兩杯溶液直接混合。</li>
<li><b>離子流向：</b><span class="re">陽離子 → 陰極</span>；<span class="ox">陰離子 → 陽極</span>。</li>
<li><b>抽掉鹽橋</b> ⇒ 電荷累積、電路斷開 ⇒ <b>電壓歸零、電流停止</b>。</li>
</ul>
<div class="note"><b>替代方案：</b>多孔隔板（porous disk）、離子交換膜。工業電池（如氯鹼工業）用<b>離子交換膜</b>只允許特定離子通過，可提高產物純度。</div>
</div>

<h2 class="ec"><span class="n">B2-3</span>電池符號（Cell Notation）</h2>
<div class="card">
<div class="eq" style="text-align:center"><b>陽極｜陽極溶液‖陰極溶液｜陰極</b></div>
<ul class="tight">
<li><b>單豎線 ｜</b>：相界面（固/液、氣/液）</li>
<li><b>雙豎線 ‖</b>：鹽橋</li>
<li><b>左邊永遠是陽極（氧化）</b>，右邊是陰極（還原）</li>
<li>若需惰性電極（氣體或離子/離子體系），写在最外側：<b>Pt(s)</b></li>
<li>可標濃度與壓力：Zn(s)｜Zn²⁺(0.1 M)‖Cu²⁺(1.0 M)｜Cu(s)</li>
</ul>
<p><b>範例：</b></p>
<div class="eq">鋅銅電池：<b>Zn(s)｜Zn²⁺(1 M)‖Cu²⁺(1 M)｜Cu(s)</b>　E° = +1.10 V</div>
<div class="eq">氫電極與銀：<b>Pt(s)｜H₂(1 atm)｜H⁺(1 M)‖Ag⁺(1 M)｜Ag(s)</b>　E° = +0.80 V</div>
<div class="eq">Fe³⁺/Fe²⁺ 與 Cr₂O₇²⁻（都需 Pt）：<b>Pt｜Fe²⁺, Fe³⁺‖Cr₂O₇²⁻, Cr³⁺, H⁺｜Pt</b></div>
</div>

<h2 class="ec"><span class="n">B2-4</span>各種「特殊」電池</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">類型</th><th>說明</th><th>半反應</th></tr></thead>
<tbody>
<tr><td><b>濃度電池</b><br>Concentration cell</td><td>兩電極<b>材料相同</b>，只有<b>離子濃度不同</b>。E° = 0，但 E ≠ 0（由能斯特方程式決定）。系統朝<b>濃度均等</b>方向進行。</td><td>Zn｜Zn²⁺(0.001 M)‖Zn²⁺(1.0 M)｜Zn<br>E = 0 − (0.0592/2)log(10⁻³/1) = <b>+0.089 V</b></td></tr>
<tr><td><b>氣體電極</b></td><td>需<b>惰性導體（Pt）</b>承接電子，氣體吸附在 Pt 表面反應</td><td>氫電極：2H⁺ + 2e⁻ ⇌ H₂(Pt)<br>氧電極：O₂ + 4H⁺ + 4e⁻ ⇌ 2H₂O(Pt)</td></tr>
<tr><td><b>參比電極</b></td><td>電位穩定、可重現，用作測量基準</td><td><b>SHE</b>（0.000 V，操作麻煩）<br><b>飽和甘汞電極 SCE</b>：Hg₂Cl₂ + 2e⁻ → 2Hg + 2Cl⁻，<b>+0.241 V</b><br><b>Ag/AgCl</b>：+0.197 V（飽和 KCl）</td></tr>
<tr><td><b>pH 計（玻璃電極）</b></td><td>不是氧化還原，而是<b>離子交換膜電位</b>；但原理同源（能斯特方程式）</td><td>E = 常數 − 0.0592 × pH（25 ℃，每 1 pH 單位 = 59.2 mV）</td></tr>
</tbody></table></div>

<h2 class="ec"><span class="n">B2-5</span>例題</h2>
<div class="ex lv3"><div class="hd"><span>例 B2-1　鋅銅電池放電後的變化</span><span class="stars">★★★☆☆</span></div><div class="bd">
<p>鋅銅電池放電一段時間後，下列哪些敘述正確？(A) 鋅極質量增加 (B) 銅極質量增加 (C) 兩杯溶液總質量不變 (D) 鹽橋中 K⁺ 移向銅半電池 (E) 電壓逐漸下降 (F) 電子由銅極流向鋅極</p>
<details><summary>詳解</summary><div class="body">
<p><b>答案：(B)(D)(E)</b></p>
<ul class="tight">
<li>(A) ❌ 鋅極<b>溶解、質量減少</b>（陽極氧化）。</li>
<li>(B) ✅ Cu²⁺ + 2e⁻ → Cu 附著 ⇒ 質量增加。</li>
<li>(C) ❌ 鋅溶入（+65.4 g/mol）而銅析出（+63.5 g/mol），但<b>鹽橋中的離子也在移動</b>，兩杯各自的質量都會改變。</li>
<li>(D) ✅ 銅半電池是<b>陰極</b>，SO₄²⁻ 相對過剩 ⇒ <b>鹽橋中陽離子（K⁺）移向陰極</b>。</li>
<li>(E) ✅ [Zn²⁺]↑、[Cu²⁺]↓ ⇒ Q = [Zn²⁺]/[Cu²⁺] 增大 ⇒ 由能斯特方程式 E 下降。</li>
<li>(F) ❌ 電子由<b>鋅極（陽極，−）流向銅極（陰極，＋）</b>。</li>
</ul>
</div></details></div></div>

<div class="ex lv4"><div class="hd"><span>例 B2-2　寫出電池符號並求 E°</span><span class="stars">★★★★☆</span></div><div class="bd">
<p>將 Fe³⁺/Fe²⁺（E° = +0.77 V）與 Sn⁴⁺/Sn²⁺（E° = +0.15 V）組成電池。寫出電池符號、兩極半反應、全反應與 E°<sub>cell</sub>。</p>
<details><summary>詳解</summary><div class="body">
<p>E° 大者當<b>陰極（還原）</b>：Fe³⁺ + e⁻ → Fe²⁺（+0.77 V）<br>
E° 小者當<b>陽極（氧化，逆向）</b>：Sn²⁺ → Sn⁴⁺ + 2e⁻（−0.15 V）</p>
<div class="eq"><b>電池符號：Pt(s)｜Sn²⁺, Sn⁴⁺‖Fe³⁺, Fe²⁺｜Pt(s)</b></div>
<p><b>（兩邊都是離子/離子體系，都需要 Pt 惰性電極！）</b></p>
<p>電子數對齊：陽極 ×2 ⇒ 2Sn²⁺ → 2Sn⁴⁺ + 4e⁻；陰極 ×2（配合 4e⁻）… 實際取 LCM = 2：<br>
陽極：Sn²⁺ → Sn⁴⁺ + 2e⁻；陰極：2Fe³⁺ + 2e⁻ → 2Fe²⁺</p>
<div class="eq"><b>全反應：Sn²⁺ + 2Fe³⁺ → Sn⁴⁺ + 2Fe²⁺</b></div>
<div class="eq"><b>E°<sub>cell</sub> = 0.77 − 0.15 = +0.62 V</b>（注意：E° 不乘係數！）</div>
<div class="warn"><b>關鍵陷阱：</b>陰極半反應乘了 2，但 <b>E° 仍是 +0.77 V</b>（強度性質）。很多人會算成 0.77×2 − 0.15 = 1.39 V，<b>錯</b>。</div>
</div></details></div></div>
`;

/* ===================== B3 電池電壓・ΔG・K ===================== */
PAGES_B['e-volt'] = () => `
<h1 class="page">B3｜電池電壓・ΔG°・平衡常數 K</h1>
<p class="page-sub">這一節把「電化學」接上「熱力學」，是分科測驗與大學普化的必考核心。</p>
${FIGS.tri}

<h2 class="ec"><span class="n">B3-1</span>三大公式</h2>
<div class="grid3">
<div class="card tight"><h4>① 電功</h4>
<div class="eq" style="text-align:center">ΔG° = −nFE°<sub>cell</sub></div>
<p class="small">n = 轉移電子莫耳數<br>F = 96485 C/mol ≈ 96500<br>E° 單位 V（= J/C）<br>ΔG° 單位 J/mol</p></div>
<div class="card tight"><h4>② 平衡常數</h4>
<div class="eq" style="text-align:center">ΔG° = −RT ln K</div>
<p class="small">R = 8.314 J/(mol·K)<br>T = 298 K（25 ℃）<br>K &gt; 1 ⇒ ΔG° &lt; 0</p></div>
<div class="card tight"><h4>③ 直接連結</h4>
<div class="eq" style="text-align:center">E° = (RT/nF) ln K</div>
<p class="small">25 ℃ 換成常用對數：<br><b>E° = (0.0592/n) log K</b><br>或 <b>log K = nE°/0.0592</b></p></div>
</div>

<h2 class="ec"><span class="n">B3-2</span>符號對應表（一眼判自發）</h2>
<div class="tbl-wrap"><table>
<thead><tr><th class="c">E°<sub>cell</sub></th><th class="c">ΔG°</th><th class="c">K</th><th class="c">自發性</th><th>意義</th></tr></thead>
<tbody>
<tr><td class="c re"><b>＞ 0</b></td><td class="c"><b>＜ 0</b></td><td class="c"><b>＞ 1</b></td><td class="c"><b>自發</b></td><td>可做電池（放電）；正向反應趨於完全</td></tr>
<tr><td class="c"><b>= 0</b></td><td class="c">= 0</td><td class="c">= 1</td><td class="c">平衡</td><td>電池「沒電了」；濃度電池達到濃度均等</td></tr>
<tr><td class="c ox"><b>＜ 0</b></td><td class="c"><b>＞ 0</b></td><td class="c"><b>＜ 1</b></td><td class="c">非自發</td><td>需外加電壓電解；逆向才自發</td></tr>
</tbody></table></div>

<h2 class="ec"><span class="n">B3-3</span>最大電功與效率</h2>
<div class="card">
<div class="eq">W<sub>max</sub> = −ΔG = nFE<sub>cell</sub></div>
<ul class="tight">
<li>可逆操作（電流趨近 0）時電池做的<b>最大電功</b>＝ −ΔG。</li>
<li>實際放電時有<b>內阻</b>與<b>極化</b>，端電壓 V &lt; E，效率 = V/E × 100%。</li>
<li><b>燃料電池的理論效率</b>＝ ΔG/ΔH，氫氧燃料電池約 <b>83%</b>（遠高于卡諾循環限制的熱機 ~40%）——這是燃料電池被視為潔淨能源的核心原因。</li>
</ul>
<div class="note"><b>為什麼 ΔG ≠ ΔH？</b>ΔG = ΔH − TΔS。氫氧燃料電池 2H₂ + O₂ → 2H₂O(l)：ΔH° = −572 kJ、ΔG° = −474 kJ，差值 TΔS = −98 kJ 是「散失到環境的熱」。</div>
</div>

<h2 class="ec"><span class="n">B3-4</span>例題</h2>
<div class="ex lv4"><div class="hd"><span>例 B3-1　由 E° 求 ΔG° 與 K</span><span class="stars">★★★★☆</span></div><div class="bd">
<p>鋅銅電池 E°<sub>cell</sub> = +1.10 V，n = 2，25 ℃。求 ΔG° 與 K。</p>
<details><summary>詳解</summary><div class="body">
<p><b>ΔG°</b> = −nFE° = −2 × 96500 × 1.10 = −212,300 J/mol = <b>−212.3 kJ/mol</b>（負值 ⇒ 自發）</p>
<p><b>log K</b> = nE°/0.0592 = 2 × 1.10 / 0.0592 = <b>37.2</b> ⇒ K = <b>10³⁷·² ≈ 1.6 × 10³⁷</b></p>
<div class="key"><b>K 大得驚人 ⇒ 反應幾乎進行到底</b>。這解釋了為什麼 Zn 放入 CuSO₄ 溶液時 Cu²⁺ 幾乎被完全置換。<br>
K = [Zn²⁺]/[Cu²⁺] = 1.6×10³⁷ ⇒ 平衡時 [Cu²⁺] 小到測不到。</div>
</div></details></div></div>

<div class="ex lv5"><div class="hd"><span>例 B3-2　由 K 反推 E°（溶度積應用）</span><span class="stars">★★★★★</span></div><div class="bd">
<p>已知 AgCl 的 K<sub>sp</sub> = 1.8 × 10⁻¹⁰，E°(Ag⁺/Ag) = +0.80 V。求 E°(AgCl/Ag) 半反應：AgCl(s) + e⁻ → Ag(s) + Cl⁻。</p>
<details><summary>詳解</summary><div class="body">
<p><b>思路：</b>把目標半反應拆成兩個已知反應之和。</p>
<ol class="steps">
<li>AgCl(s) ⇌ Ag⁺ + Cl⁻　　K₁ = K<sub>sp</sub> = 1.8×10⁻¹⁰　（ΔG₁° = −RT ln K<sub>sp</sub>）</li>
<li>Ag⁺ + e⁻ → Ag(s)　　E₂° = +0.80 V　（ΔG₂° = −1×F×0.80）</li>
<li>相加：AgCl(s) + e⁻ → Ag(s) + Cl⁻　　ΔG₃° = ΔG₁° + ΔG₂°</li>
</ol>
<p><b>計算（用 ΔG 相加，因為 E° 不能直接加）：</b></p>
<div class="eq">ΔG₁° = −RT ln K<sub>sp</sub> = −(8.314)(298) ln(1.8×10⁻¹⁰) = +55,560 J/mol</div>
<div class="eq">ΔG₂° = −nFE° = −1 × 96500 × 0.80 = −77,200 J/mol</div>
<div class="eq">ΔG₃° = 55,560 − 77,200 = −21,640 J/mol</div>
<div class="eq"><b>E₃° = −ΔG₃°/(nF) = 21,640 / 96500 = +0.224 V ≈ +0.22 V</b></div>
<div class="note"><b>快速公式：</b>E°(AgCl/Ag) = E°(Ag⁺/Ag) + 0.0592 log K<sub>sp</sub> = 0.80 + 0.0592 × (−9.74) = 0.80 − 0.577 = <b>+0.22 V</b> ✓<br>
這就是 <b>Ag/AgCl 參比電極</b>的電位來源（飽和 KCl 時約 +0.197 V，因 [Cl⁻] ≠ 1 M）。</div>
</div></details></div></div>
`;

/* ===================== B4 電解與法拉第 ===================== */
PAGES_B['e-elec'] = () => `
<h1 class="page">B4｜電解與法拉第定律</h1>
<p class="page-sub">電池是自發反應產生電；電解是<b>用電逼出非自發反應</b>。所有定量計算都靠 1 F = 96500 C。</p>

<h2 class="ec"><span class="n">B4-1</span>法拉第定律</h2>
<div class="card">
<div class="eq"><b>1 F（法拉第）＝ 1 mol e⁻ ＝ 96485 C ≈ 96500 C</b></div>
<div class="eq">Q = I × t　（安培 A × 秒 s ＝ 庫倫 C）</div>
<div class="eq">n(e⁻) = Q / 96500 = I·t / 96500</div>
<div class="eq"><b>析出物質莫耳數 = n(e⁻) ÷ z</b>　（z = 每莫耳物質所需的電子莫耳數）</div>
<div class="eq">質量 m = (I·t / 96500) × (M / z)</div>
<p><b>法拉第第一定：</b>析出物質的質量 ∝ 通過的電量。<br>
<b>法拉第第二定：</b>相同電量下，析出物質的莫耳數與其 z 值成反比（等莫耳電子產生等當量物質）。</p>
</div>

<div class="card"><h4>1 F 電量的速算表（背起來，考場省 3 分鐘）</h4>
<div class="tbl-wrap"><table>
<thead><tr><th>物質</th><th>半反應</th><th class="c">z</th><th class="c">1 F 可得</th><th class="c">1 F 可得（STP 體積）</th></tr></thead>
<tbody>
<tr><td>H₂</td><td>2H⁺ + 2e⁻ → H₂</td><td class="c">2</td><td class="c">1.008 g</td><td class="c"><b>11.2 L</b></td></tr>
<tr><td>O₂</td><td>2H₂O → O₂ + 4H⁺ + 4e⁻</td><td class="c">4</td><td class="c">8.00 g</td><td class="c"><b>5.6 L</b></td></tr>
<tr><td>Cl₂</td><td>2Cl⁻ → Cl₂ + 2e⁻</td><td class="c">2</td><td class="c">35.45 g</td><td class="c"><b>11.2 L</b></td></tr>
<tr><td>Cu</td><td>Cu²⁺ + 2e⁻ → Cu</td><td class="c">2</td><td class="c"><b>31.8 g</b></td><td class="c">—</td></tr>
<tr><td>Ag</td><td>Ag⁺ + e⁻ → Ag</td><td class="c">1</td><td class="c"><b>107.9 g</b></td><td class="c">—</td></tr>
<tr><td>Au</td><td>Au³⁺ + 3e⁻ → Au</td><td class="c">3</td><td class="c">65.7 g</td><td class="c">—</td></tr>
<tr><td>Al</td><td>Al³⁺ + 3e⁻ → Al</td><td class="c">3</td><td class="c"><b>9.0 g</b></td><td class="c">—</td></tr>
<tr><td>Zn</td><td>Zn²⁺ + 2e⁻ → Zn</td><td class="c">2</td><td class="c">32.7 g</td><td class="c">—</td></tr>
<tr><td>Na</td><td>Na⁺ + e⁻ → Na</td><td class="c">1</td><td class="c">23.0 g</td><td class="c">—</td></tr>
</tbody></table></div>
</div>

<h2 class="ec"><span class="n">B4-2</span>電解各種溶液的產物</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">體系</th><th>陰極（還原）</th><th>陽極（氧化）</th><th>總反應與說明</th></tr></thead>
<tbody>
<tr><td><b>CuSO₄(aq)</b><br>惰性電極</td><td>Cu²⁺ + 2e⁻ → Cu</td><td>2H₂O → O₂ + 4H⁺ + 4e⁻</td><td>2Cu²⁺ + 2H₂O → 2Cu + O₂ + 4H⁺<br>溶液<b>變酸</b>、藍色變淡</td></tr>
<tr><td><b>NaCl(aq)</b><br>惰性電極</td><td>2H₂O + 2e⁻ → H₂ + 2OH⁻</td><td>2Cl⁻ → Cl₂ + 2e⁻</td><td><b>2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂</b>（<b>氯鹼工業</b>）</td></tr>
<tr><td><b>稀 H₂SO₄／NaOH／Na₂SO₄／KNO₃</b></td><td>2H₂O + 2e⁻ → H₂ + 2OH⁻</td><td>2H₂O → O₂ + 4H⁺ + 4e⁻</td><td><b>實質電解水</b>：2H₂O → 2H₂ + O₂，H₂:O₂ = <b>2:1</b>；電解質只增加導電度</td></tr>
<tr><td><b>熔融 NaCl</b></td><td>2Na⁺ + 2e⁻ → 2Na(l)</td><td>2Cl⁻ → Cl₂ + 2e⁻</td><td>2NaCl(l) → 2Na + Cl₂（<b>無水</b>才能得到金屬鈉；加 CaCl₂ 降熔點至 ~600 ℃，Downs cell）</td></tr>
<tr><td><b>熔融 Al₂O₃</b><br>＋冰晶石</td><td>Al³⁺ + 3e⁻ → Al(l)</td><td>2O²⁻ → O₂ + 4e⁻（碳陽極被消耗：C + O₂ → CO₂）</td><td>2Al₂O₃ → 4Al + 3O₂；<b>Hall–Héroult 法</b>，~950 ℃，耗電極大（1 kg Al ≈ 15 kWh）</td></tr>
<tr><td><b>CuCl₂(aq)</b></td><td>Cu²⁺ + 2e⁻ → Cu</td><td>2Cl⁻ → Cl₂ + 2e⁻</td><td>CuCl₂ → Cu + Cl₂（兩邊都是「容易」的一方）</td></tr>
<tr><td><b>AgNO₃(aq)</b><br>Pt 陽極</td><td>Ag⁺ + e⁻ → Ag</td><td>2H₂O → O₂ + 4H⁺ + 4e⁻</td><td>[Ag⁺] <b>下降</b>、溶液變酸</td></tr>
<tr><td><b>AgNO₃(aq)</b><br>Ag 陽極</td><td>Ag⁺ + e⁻ → Ag</td><td>Ag → Ag⁺ + e⁻</td><td>[Ag⁺] <b>不變</b> ⇒ 這就是<b>電鍍</b></td></tr>
</tbody></table></div>

<div class="warn"><b>「不放電」離子：</b><br>
<b>陽離子</b>（比 H₂O 難還原）：K⁺、Na⁺、Ca²⁺、Mg²⁺、Al³⁺ ⇒ 水溶液中永遠得不到這些金屬，必須<b>電解熔融鹽</b>。<br>
<b>陰離子</b>（比 H₂O 難氧化）：SO₄²⁻、NO₃⁻、PO₄³⁻、CO₃²⁻、F⁻ ⇒ 陽極改由 H₂O 放出 O₂。<br>
<b>例外：</b>Cl⁻、Br⁻、I⁻ 在<b>濃度高</b>時會優先於 H₂O 放電（因為 O₂ 的<b>過電位</b>很大，見 U4）。</div>

<h2 class="ec"><span class="n">B4-3</span>例題</h2>
<div class="ex lv3"><div class="hd"><span>例 B4-1　基本法拉第計算</span><span class="stars">★★★☆☆</span></div><div class="bd">
<p>以 2.00 A 電流電解 32 分 10 秒（1930 s），求：(1) 總電量與電子莫耳數 (2) 電解 CuSO₄ 時陰極析出 Cu 幾克 (3) 電解 AgNO₃ 時析出 Ag 幾克 (4) 電解稀 H₂SO₄ 時兩極氣體在 STP 的總體積。</p>
<details><summary>詳解</summary><div class="body">
<p><b>(1)</b> Q = 2.00 × 1930 = <b>3860 C</b>；n(e⁻) = 3860 ÷ 96500 = <b>0.0400 mol（0.0400 F）</b></p>
<p><b>(2)</b> Cu²⁺ + 2e⁻ → Cu ⇒ n(Cu) = 0.0400/2 = 0.0200 mol ⇒ m = 0.0200 × 63.55 = <b>1.271 g</b></p>
<p><b>(3)</b> Ag⁺ + e⁻ → Ag ⇒ n(Ag) = 0.0400 mol ⇒ m = 0.0400 × 107.9 = <b>4.32 g</b><br>
<span class="small">⇒ 相同電量下，1 價金屬析出的<b>莫耳數</b>是 2 價的 2 倍</span></p>
<p><b>(4)</b> 陰極 n(H₂) = 0.0400/2 = 0.0200 mol；陽極 n(O₂) = 0.0400/4 = 0.0100 mol<br>
總氣體 = 0.0300 mol × 22.4 = <b>0.672 L = 672 mL</b>，H₂ : O₂ = <b>2 : 1</b></p>
<div class="note"><b>速算：</b>0.0400 F ⇒ H₂ = 0.0400 × 11.2 = 0.448 L、O₂ = 0.0400 × 5.6 = 0.224 L，合計 0.672 L ✓</div>
</div></details></div></div>

<div class="ex lv4"><div class="hd"><span>例 B4-2　串聯電解（等電量）</span><span class="stars">★★★★☆</span></div><div class="bd">
<p>三個電解槽<b>串聯</b>：甲含 AgNO₃、乙含 CuSO₄、丙含稀 H₂SO₄。通電後甲槽析出 Ag 10.79 g。求：(1) 通過的電量 (2) 乙槽析出 Cu 幾克 (3) 丙槽陰極產生的 H₂ 在 STP 幾升。</p>
<details><summary>詳解</summary><div class="body">
<p><b>(1)</b> n(Ag) = 10.79 ÷ 107.9 = 0.100 mol；Ag⁺ + e⁻ → Ag ⇒ n(e⁻) = <b>0.100 mol</b><br>
Q = 0.100 × 96500 = <b>9650 C（= 0.100 F）</b></p>
<p><b>(2)</b> <b>串聯 ⇒ 通過各槽的電量相同</b> ⇒ n(e⁻) = 0.100 mol<br>
Cu²⁺ + 2e⁻ → Cu ⇒ n(Cu) = 0.0500 mol ⇒ m = 0.0500 × 63.55 = <b>3.18 g</b></p>
<p><b>(3)</b> 2H⁺ + 2e⁻ → H₂ ⇒ n(H₂) = 0.0500 mol ⇒ V = 0.0500 × 22.4 = <b>1.12 L</b></p>
<div class="key"><b>串聯 vs 並聯：</b><b>串聯</b> ⇒ 各槽<b>電量（Q）相同</b>；<b>並聯</b> ⇒ 各槽<b>電壓相同、電流依電阻分配</b>。考題 99% 是串聯。</div>
</div></details></div></div>

<div class="tip"><b>🎯 立刻去練：</b>「互動工具 → <b>法拉第電解計算機</b>」可任選 13 種產物、輸入 I/t/Q 任兩個量，自動算出電量、電子莫耳數、質量與氣體體積。</div>
`;

/* ===================== B5 電鍍與精煉 ===================== */
PAGES_B['e-plate'] = () => `
<h1 class="page">B5｜電鍍、陽極處理與金屬精煉</h1>
<p class="page-sub">電解最直接的工業應用：把一層金屬「鍍」在另一件東西上。</p>

<h2 class="ec"><span class="n">B5-1</span>電鍍三原則</h2>
<div class="card">
<ol class="steps">
<li><b>鍍件（被鍍物）＝ 陰極</b>（接電源負極）：Mⁿ⁺ + ne⁻ → M 附著在表面</li>
<li><b>鍍層金屬 ＝ 陽極</b>（接電源正極）：M → Mⁿ⁺ + ne⁻ 溶解補充離子</li>
<li><b>電解液 ＝ 含鍍層金屬離子的溶液</b>，濃度<b>維持不變</b>（陽極溶多少、陰極鍍多少）</li>
</ol>
<div class="eq rel">鍍銀：陰極（湯匙）Ag⁺ + e⁻ → Ag(s)｜陽極（銀片）Ag(s) → Ag⁺ + e⁻｜電解液 AgNO₃ 或 K[Ag(CN)₂]</div>
<div class="note"><b>實務細節：</b>工業鍍銀、鍍金常用<b>氰錯鹽</b>（如 K[Ag(CN)₂]、K[Au(CN)₂]）而非簡單鹽類，因為錯離子讓金屬<b>緩慢、均勻</b>析出，鍍層緻密光滑（直接用 AgNO₃ 會析出粗糙的樹枝狀銀）。<b>但氰化物劇毒</b>，現代已大量改用無氰鍍液。</div>
</div>

<h2 class="ec"><span class="n">B5-2</span>常見鍍層與用途</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:130px">鍍層</th><th>名稱／用途</th><th>刮傷後的行為</th></tr></thead>
<tbody>
<tr><td><b>Zn（鍍鋅）</b></td><td><b>白鐵</b>（鍍鋅鐵皮）：屋頂、水管、護欄、鐵桶</td><td class="acc">Zn 活性 ＞ Fe ⇒ Zn 當陽極<b>犧牲自己</b>，Fe 仍受保護 ✅</td></tr>
<tr><td><b>Sn（鍍錫）</b></td><td><b>馬口鐵</b>：食品罐頭（Sn 無毒、美觀、耐酸）</td><td class="ox">Fe 活性 ＞ Sn ⇒ Fe 當陽極<b>先被腐蝕</b>，刮傷後生鏽更快 ❌</td></tr>
<tr><td><b>Cr（鍍鉻）</b></td><td>裝飾、耐磨、汽車保險桿、水龍頭</td><td>Cr 表面生成緻密 Cr₂O₃，但刮傷後 Fe 仍會腐蝕（Cr 活性 ＜ Fe）</td></tr>
<tr><td><b>Ni（鍍鎳）</b></td><td>常作<b>底鍍層</b>（先鍍 Ni 再鍍 Cr），防鏽＋美觀</td><td>—</td></tr>
<tr><td><b>Ag／Au</b></td><td>餐具、電子接點（導電佳、抗氧化）、珠寶</td><td>Ag、Au 活性 ＜ 基材 ⇒ 刮傷後基材先腐蝕</td></tr>
<tr><td><b>Cu（鍍銅）</b></td><td>電路板（PCB）通孔鍍銅、塑膠電鍍的底層</td><td>—</td></tr>
</tbody></table></div>

<h2 class="ec"><span class="n">B5-3</span>精煉銅（Electrorefining）</h2>
<div class="card">
<ul class="tight">
<li><b>陽極：</b>粗銅（含 Zn、Fe、Ni、Ag、Au、Pt 雜質）</li>
<li><b>陰極：</b>純銅薄片</li>
<li><b>電解液：</b>CuSO₄ ＋ 稀 H₂SO₄</li>
<li><b>結果：</b>陰極得到 <b>99.99% 純銅</b>（電導率大幅提升，適合做電線）</li>
</ul>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:160px">雜質</th><th>行為</th><th>去向</th></tr></thead>
<tbody>
<tr><td><b>Zn、Fe、Ni</b>（活性 ＞ Cu）</td><td>會溶解成 Zn²⁺、Fe²⁺、Ni²⁺，但 E° 比 Cu²⁺ 小 ⇒ <b>不會在陰極析出</b></td><td>留在電解液中（需定期更換）</td></tr>
<tr><td><b>Ag、Au、Pt</b>（活性 ＜ Cu）</td><td><b>不溶解</b>，從陽極脫落沉到槽底</td><td><b>陽極泥（anode slime）</b> ⇒ 回收貴金屬，經濟價值高！</td></tr>
</tbody></table></div>
</div>

<h2 class="ec"><span class="n">B5-4</span>陽極處理（Anodizing）</h2>
<div class="card">
<p>把<b>鋁件當陽極</b>，在稀 H₂SO₄ 中電解，表面生成<b>厚而緻密的 Al₂O₃ 膜</b>（可達 25 μm，遠厚於自然氧化膜）：</p>
<div class="eq oxl">2Al + 3H₂O → Al₂O₃ + 6H⁺ + 6e⁻（陽極）</div>
<div class="eq rel">6H⁺ + 6e⁻ → 3H₂↑（陰極，通常用鉛或石墨）</div>
<ul class="tight">
<li>氧化膜<b>多孔</b>，可<b>染色</b>（吸附染料）後再用熱水「封孔」</li>
<li>用途：手機外殼、筆電機身、窗框、登山器材、鍋具</li>
<li>類似原理：<b>鎂合金、鈦合金</b>也可陽極處理（鈦的陽極氧化可產生<b>干涉色</b>，用在珠寶與醫療植入物）</li>
</ul>
</div>

<h2 class="ec"><span class="n">B5-5</span>例題</h2>
<div class="ex lv3"><div class="hd"><span>例 B5-1　電鍍銀</span><span class="stars">★★★☆☆</span></div><div class="bd">
<p>要在銅湯匙上鍍銀。問：(1) 湯匙接電源哪一極？(2) 另一電極用什麼？(3) 電解液用什麼？(4) 若以 0.50 A 電流鍍 32 分 10 秒，可鍍上銀幾克？(5) 電解液的 Ag⁺ 濃度如何變化？</p>
<details><summary>詳解</summary><div class="body">
<p><b>(1)</b> 湯匙是<b>鍍件</b> ⇒ 接電源<b>負極</b>（當<b>陰極</b>）：Ag⁺ + e⁻ → Ag</p>
<p><b>(2)</b> 用<b>銀片</b>當陽極（接正極）：Ag → Ag⁺ + e⁻</p>
<p><b>(3)</b> <b>AgNO₃(aq)</b> 或 K[Ag(CN)₂]（鍍層更細緻）</p>
<p><b>(4)</b> Q = 0.50 × 1930 = 965 C ⇒ n(e⁻) = 965/96500 = 0.0100 mol ⇒ n(Ag) = 0.0100 mol<br>
m = 0.0100 × 107.9 = <b>1.08 g</b>（約可鍍 10 cm² 面積、厚度 ~10 μm 的銀層）</p>
<p><b>(5)</b> 陽極溶解的 Ag ＝ 陰極析出的 Ag ⇒ <b>[Ag⁺] 維持不變</b>（這是電鍍與「用 Pt 陽極電解 AgNO₃」的最大差別，後者 [Ag⁺] 會下降）。</p>
</div></details></div></div>

<div class="ex lv4"><div class="hd"><span>例 B5-2　鍍層厚度計算</span><span class="stars">★★★★★</span></div><div class="bd">
<p>在面積 200 cm² 的鐵板上鍍鎳（密度 8.90 g/cm³），欲鍍 0.010 mm 厚，以 5.00 A 電流電解，需時多久？（Ni = 58.7，Ni²⁺ + 2e⁻ → Ni）</p>
<details><summary>詳解</summary><div class="body">
<ol class="steps">
<li>鍍層體積 V = 200 cm² × 0.0010 cm = <b>0.20 cm³</b></li>
<li>質量 m = 0.20 × 8.90 = <b>1.78 g</b></li>
<li>n(Ni) = 1.78 ÷ 58.7 = <b>0.03032 mol</b></li>
<li>n(e⁻) = 0.03032 × 2 = <b>0.06065 mol</b></li>
<li>Q = 0.06065 × 96500 = <b>5853 C</b></li>
<li>t = Q/I = 5853 ÷ 5.00 = <b>1171 s ≈ 19.5 分鐘</b></li>
</ol>
<div class="note"><b>實務補充：</b>真實電鍍的<b>電流效率</b>只有 90–97%（部分電流用在析氫等副反應），所以實際耗時會更長。這是大學「法拉第效率」的概念（見 U4）。</div>
</div></details></div></div>
`;

/* ===================== B6 商用電池 ===================== */
PAGES_B['e-batt'] = () => `
<h1 class="page">B6｜商用電池與燃料電池</h1>
<p class="page-sub">一次電池（用完丟）vs 二次電池（可充電）vs 燃料電池（持續供給燃料就不會沒電）。</p>

<h2 class="ec"><span class="n">B6-1</span>電池分類總覽</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:130px">類別</th><th>例子</th><th>特點</th></tr></thead>
<tbody>
<tr><td><b>一次電池</b><br>Primary</td><td>鋅碳乾電池、鹼性電池、水銀電池、鋰一次電池（鈕扣）、<b>鋅–空氣</b>（助聽器）</td><td><b>不可充電</b>；反應不可逆或充電會產生危險氣體</td></tr>
<tr><td><b>二次電池</b><br>Secondary</td><td><b>鉛蓄電池</b>、鎳鎘（NiCd）、鎳氫（NiMH）、<b>鋰離子（Li-ion）</b>、鋰鐵（LiFePO₄）、鈉離子</td><td><b>可反覆充放電</b>；反應可逆；成本較高</td></tr>
<tr><td><b>燃料電池</b><br>Fuel cell</td><td>氫氧（PEMFC、SOFC、AFC）、甲醇（DMFC）、天然氣</td><td><b>不儲存能量</b>，只要持續供給燃料與氧化劑就<b>永不耗盡</b>；效率高、產物潔淨</td></tr>
</tbody></table></div>

<h2 class="ec"><span class="n">B6-2</span>各電池的半反應式</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:140px">電池</th><th>陽極（−）氧化</th><th>陰極（＋）還原</th><th style="width:110px">電壓</th><th>特點</th></tr></thead>
<tbody>
<tr><td><b>鉛蓄電池</b><br><span class="small">汽車電瓶</span></td><td>Pb + SO₄²⁻ → PbSO₄ + 2e⁻</td><td>PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O</td><td class="c">2.0 V<br><span class="small">6 格串聯 = 12 V</span></td><td>全反應 <b>Pb + PbO₂ + 2H₂SO₄ ⇌ 2PbSO₄ + 2H₂O</b>；可充電；<b>放電時兩極質量都增加、硫酸比重下降</b>；便宜、電流大、耐低溫</td></tr>
<tr><td><b>鋅碳乾電池</b><br><span class="small">Leclanché</span></td><td>Zn → Zn²⁺ + 2e⁻（鋅罐）</td><td>2MnO₂ + 2NH₄⁺ + 2e⁻ → Mn₂O₃ + 2NH₃ + H₂O（碳棒）</td><td class="c">1.5 V</td><td>電解質 NH₄Cl＋ZnCl₂ 糊狀；<b>不可充電</b>；久置會漏液（鋅罐被腐蝕穿孔）；NH₃ 與 Zn²⁺ 形成 [Zn(NH₃)₄]²⁺ 避免氣壓升高</td></tr>
<tr><td><b>鹼性電池</b></td><td>Zn + 2OH⁻ → ZnO + H₂O + 2e⁻</td><td>2MnO₂ + H₂O + 2e⁻ → Mn₂O₃ + 2OH⁻</td><td class="c">1.5 V</td><td>電解質 KOH；<b>電流大、壽命長、不易漏液</b>、低溫表現佳；仍為一次電池</td></tr>
<tr><td><b>鎳氫 NiMH</b></td><td>MH + OH⁻ → M + H₂O + e⁻（儲氫合金）</td><td>NiO(OH) + H₂O + e⁻ → Ni(OH)₂ + OH⁻</td><td class="c">1.2 V</td><td>可充電、無鎘汙染（取代 NiCd）、記憶效應小</td></tr>
<tr><td><b>鋰離子 Li-ion</b></td><td>LiC₆ → C₆ + Li⁺ + e⁻（石墨嵌鋰）</td><td>Li⁺ + e⁻ + CoO₂ → LiCoO₂</td><td class="c">3.7 V</td><td><b>能量密度最高</b>、無記憶效應、自放電低；「搖椅式電池」（Li⁺ 在兩極間來回穿梭）；怕過充過放、熱失控風險</td></tr>
<tr><td><b>鋰鐵 LiFePO₄</b></td><td>LiC₆ → C₆ + Li⁺ + e⁻</td><td>FePO₄ + Li⁺ + e⁻ → LiFePO₄</td><td class="c">3.2 V</td><td><b>安全性高、循環壽命長（&gt;3000 次）</b>、成本低；電動車、儲能系統主流</td></tr>
<tr><td><b>氫氧燃料電池</b><br><span class="small">酸性（PEMFC）</span></td><td>2H₂ → 4H⁺ + 4e⁻</td><td>O₂ + 4H⁺ + 4e⁻ → 2H₂O</td><td class="c">1.23 V<br><span class="small">（理論）</span></td><td>全反應 <b>2H₂ + O₂ → 2H₂O</b>；產物<b>只有水</b>；效率 40–60%（遠高于内燃機）；需 Pt 催化劑、氫氣儲存難</td></tr>
<tr><td><b>氫氧燃料電池</b><br><span class="small">鹼性（AFC）</span></td><td>2H₂ + 4OH⁻ → 4H₂O + 4e⁻</td><td>O₂ + 2H₂O + 4e⁻ → 4OH⁻</td><td class="c">1.23 V</td><td>太空任務（<b>阿波羅計畫</b>）用它發電＋提供飲用水</td></tr>
<tr><td><b>鋅–空氣</b></td><td>Zn + 2OH⁻ → ZnO + H₂O + 2e⁻</td><td>O₂ + 2H₂O + 4e⁻ → 4OH⁻</td><td class="c">1.4 V</td><td>陰極反應物（O₂）取自<b>空氣</b>，不需自帶 ⇒ <b>能量密度高、體積小</b>；助聽器標準電池</td></tr>
<tr><td><b>甲醇燃料電池</b><br><span class="small">DMFC</span></td><td>CH₃OH + H₂O → CO₂ + 6H⁺ + 6e⁻</td><td>O₂ + 4H⁺ + 4e⁻ → 2H₂O（×3/2）</td><td class="c">~1.2 V</td><td>燃料是<b>液態甲醇</b>，儲存運輸方便；但甲醇會「穿透」膜造成效率損失</td></tr>
</tbody></table></div>

<div class="warn"><b>寫半反應式的三大鐵律：</b>
<ol class="steps">
<li><b>酸性電解質不可出現 OH⁻；鹼性電解質不可出現 H⁺</b>。（112 分科考過）</li>
<li>陽極<b>永遠</b>是氧化、陰極<b>永遠</b>是還原，與正負極無關。</li>
<li>兩式相加前必須<b>把電子數對齊</b>（取 LCM）。</li>
</ol>
</div>

<h2 class="ec"><span class="n">B6-3</span>充電＝放電的逆向</h2>
<div class="card">
<div class="tbl-wrap"><table>
<thead><tr><th style="width:130px">動作</th><th>原負極（Pb）</th><th>原正極（PbO₂）</th></tr></thead>
<tbody>
<tr><td><b>放電</b></td><td class="ox">陽極（−）：Pb → PbSO₄（氧化）</td><td class="re">陰極（＋）：PbO₂ → PbSO₄（還原）</td></tr>
<tr><td><b>充電</b></td><td class="re">接電源<b>負極</b> → 陰極：PbSO₄ + 2e⁻ → Pb + SO₄²⁻</td><td class="ox">接電源<b>正極</b> → 陽極：PbSO₄ + 2H₂O → PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻</td></tr>
</tbody></table></div>
<div class="key"><b>口訣：</b>「<b>負接負、正接正</b>」——充電時把電池的原負極接電源的負極、原正極接正極，才能把 PbSO₄ 分別<b>還原回 Pb</b>、<b>氧化回 PbO₂</b>。接反了會把電池弄壞。</div>
<p class="small"><b>補充：</b>鉛蓄電池過度放電會產生<b>粗大、難以再溶解的 PbSO₄ 結晶</b>（硫化 sulfation），導致容量永久下降——這就是「電瓶放太久沒充電就報廢」的原因。</p>
</div>

<h2 class="ec"><span class="n">B6-4</span>電池性能指標（選讀，接大學）</h2>
<div class="grid3">
<div class="card tight"><h4>能量密度</h4><p class="small">Wh/kg 或 Wh/L。鉛蓄 30–40｜NiMH 60–120｜<b>Li-ion 150–270</b>｜Li–空氣（理論）3500｜氫氣 33,000（但儲存困難）</p></div>
<div class="card tight"><h4>循環壽命</h4><p class="small">可充放次數。鉛蓄 300–500｜NiMH 500–1000｜Li-ion 500–2000｜<b>LiFePO₄ 3000–6000</b></p></div>
<div class="card tight"><h4>庫倫效率</h4><p class="small">放電電量 ÷ 充電電量 × 100%。Li-ion &gt; 99%；鉛蓄 ~95%。低效率代表副反應（析氣、自放電）。</p></div>
</div>

<h2 class="ec"><span class="n">B6-5</span>例題</h2>
<div class="ex lv4"><div class="hd"><span>例 B6-1　鉛蓄電池放電計算</span><span class="stars">★★★★☆</span></div><div class="bd">
<p>鉛蓄電池放電時有 96500 C（1 F）電量流過。求：(1) 兩極半反應 (2) 生成 PbSO₄ 幾克 (3) 消耗 H₂SO₄ 幾莫耳？比重如何變化 (4) 充電時如何接線？（Pb = 207.2、S = 32.1、O = 16.0）</p>
<details><summary>詳解</summary><div class="body">
<p><b>(1)</b> Pb 0 → +2（氧化）；PbO₂ 中 Pb +4 → +2（還原）</p>
<div class="eq oxl">陽極（−）：Pb + SO₄²⁻ → PbSO₄ + 2e⁻</div>
<div class="eq rel">陰極（＋）：PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O</div>
<p><b>(2)</b> n(e⁻) = 1 mol。全反應每 2 mol e⁻ 生成 2 mol PbSO₄ ⇒ 1 mol e⁻ 生成 <b>1 mol PbSO₄</b><br>
M(PbSO₄) = 207.2 + 32.1 + 64.0 = 303.3 ⇒ <b>303.3 g</b></p>
<p><b>(3)</b> 每 2 mol e⁻ 消耗 2 mol H₂SO₄ ⇒ 1 mol e⁻ 消耗 <b>1 mol H₂SO₄</b>。<br>
放電時 H₂SO₄ 被消耗、生成 H₂O ⇒ <b>濃度下降、比重降低</b>。（滿電約 1.28，1.10 以下需充電——所以用比重計就能量電量）</p>
<p><b>(4)</b> 原 Pb 極（負極）接電源<b>負極</b>；原 PbO₂ 極（正極）接電源<b>正極</b>。</p>
<div class="key"><b>對比其他電池：</b>鉛蓄電池放電時<b>兩極質量都增加</b>（都生成 PbSO₄），這與鋅銅電池「陽極減少、陰極增加」剛好相反，是很好的對比考點。</div>
</div></details></div></div>

<div class="ex lv5"><div class="hd"><span>例 B6-2　燃料電池的電量與水量</span><span class="stars">★★★★★</span></div><div class="bd">
<p>氫氧燃料電池（酸性）以 10.0 A 持續放電 1 小時。求：(1) 消耗 H₂ 幾莫耳、在 STP 幾升 (2) 產生水幾克 (3) 理論上可提供多少電能（kJ）？（E° = 1.23 V）</p>
<details><summary>詳解</summary><div class="body">
<p><b>(0)</b> Q = 10.0 × 3600 = <b>36,000 C</b> ⇒ n(e⁻) = 36000 ÷ 96500 = <b>0.373 mol</b></p>
<p><b>(1)</b> 2H₂ → 4H⁺ + 4e⁻ ⇒ n(H₂) = n(e⁻)/2 = 0.373/2 = <b>0.187 mol</b><br>
V = 0.187 × 22.4 = <b>4.18 L</b></p>
<p><b>(2)</b> 全反應 2H₂ + O₂ → 2H₂O，4e⁻ 對應 2 mol H₂O ⇒ n(H₂O) = 0.373/2 = 0.187 mol<br>
m = 0.187 × 18.0 = <b>3.36 g</b>（這就是太空船上太空人的飲用水來源！）</p>
<p><b>(3)</b> W = n(e⁻) × F × E° = 0.373 × 96500 × 1.23 = <b>44,240 J ≈ 44.2 kJ</b><br>
<span class="small">（也可用 Q × E = 36000 × 1.23 = 44,280 J ≈ 12.3 Wh）</span></p>
<div class="note"><b>對比：</b>0.187 mol H₂ = 0.377 g，卻能產生 44.2 kJ 電能 ⇒ <b>117 kJ/g</b>，是汽油（~44 kJ/g，且引擎效率僅 25%）的<b>10 倍以上</b>。這就是氫能被寄予厚望的原因。</div>
</div></details></div></div>
`;

/* ===================== B7 腐蝕與防蝕 ===================== */
PAGES_B['e-corr'] = () => `
<h1 class="page">B7｜腐蝕與防蝕</h1>
<p class="page-sub">生鏽就是一個「短路的電池」——鐵表面同時存在陽極區與陰極區。全球每年因腐蝕損失約 GDP 的 3–4%。</p>
${FIGS.corrosion}

<h2 class="ec"><span class="n">B7-1</span>鐵生鏽的電化學機制</h2>
<div class="card">
<p><b>必要條件：O₂ ＋ H₂O 同時存在</b>（缺一不可，乾燥空氣或煮沸過的純水中鐵都不生鏽）。</p>
<div class="eq oxl">陽極區（鐵表面某處）：Fe → Fe²⁺ + 2e⁻</div>
<div class="eq rel">陰極區（另一處，通常氧較充足）：O₂ + 2H₂O + 4e⁻ → 4OH⁻</div>
<div class="eq">Fe²⁺ + 2OH⁻ → Fe(OH)₂（白綠）→ 再被 O₂ 氧化 → Fe(OH)₃ → 脫水 → <b>Fe₂O₃·xH₂O（鐵鏽，紅棕）</b></div>
<div class="warn"><b>為什麼鐵鏽不能保護鐵？</b>Fe₂O₃·xH₂O 結構<b>疏鬆、多孔、易剝落</b>，水和氧可繼續滲入 ⇒ 腐蝕不斷向內推進。<br>
<b>對比：</b>Al 表面的 <b>Al₂O₃ 緻密、附著力強</b>，能阻斷進一步氧化 ⇒ 鋁「看起來」很安定（實際 E° = −1.66 V，比鐵活潑得多）。Cr 的 Cr₂O₃ 同理，這是不鏽鋼的基礎。</div>
<div class="note"><b>加速腐蝕的因素：</b>① 電解質（海水、酸雨、融雪鹽）② 接觸<b>活性較小的金屬</b>（如 Fe 接 Cu）③ 溫度升高 ④ 應力、刮痕、晶界 ⑤ 微生物（硫酸鹽還原菌）。</div>
</div>

<h2 class="ec"><span class="n">B7-2</span>五大防蝕方法</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:170px">方法</th><th>原理</th><th>應用</th></tr></thead>
<tbody>
<tr><td><b>① 隔絕層（塗層）</b></td><td>物理阻隔 O₂ 與 H₂O</td><td>油漆、油脂、塑膠、柏油、琺瑯、陽極處理</td></tr>
<tr><td><b>② 電鍍</b></td><td>鍍上一層耐蝕金屬</td><td>鍍 Zn（白鐵，<b>兼具犧牲保護</b>）、鍍 Sn（馬口鐵）、鍍 Cr、鍍 Ni</td></tr>
<tr><td><b>③ 犧牲陽極</b><br>Sacrificial anode</td><td>接上<b>活性更大</b>的金屬（Mg、Zn、Al 合金），讓它當陽極先被腐蝕</td><td>船體、地下油管、碼頭鋼樁、熱水器內膽</td></tr>
<tr><td><b>④ 外加電流陰極保護</b><br>Impressed current</td><td>用直流電源<b>強制</b>被保護結構當<b>陰極</b>，另用惰性陽極（石墨、混合金屬氧化物）</td><td>大型結構：橋墩、海底管線、儲油槽、鋼筋混凝土</td></tr>
<tr><td><b>⑤ 合金化</b></td><td>加入 Cr、Ni 等使表面生成<b>緻密氧化物膜</b>（鈍化）</td><td><b>不鏽鋼</b>（Fe + ≥10.5% Cr，常加 8% Ni ⇒ 304 不鏽鋼）</td></tr>
<tr><td>⑥ 環境控制</td><td>除氧、除濕、加緩蝕劑</td><td>鍋爐水加<b>亞硫酸鈉除氧</b>（Na₂SO₃ + ½O₂ → Na₂SO₄）、乾燥劑、氣相緩蝕劑（VCI）</td></tr>
</tbody></table></div>

<h2 class="ec"><span class="n">B7-3</span>白鐵 vs 馬口鐵（超愛考）</h2>
<div class="grid2">
<div class="card"><h4 class="acc">白鐵（鍍鋅鐵）</h4>
<p>活性 <b>Zn ＞ Fe</b>。刮傷後構成 Zn–Fe 原電池，<b>Zn 當陽極被腐蝕</b>，Fe 當陰極受保護。</p>
<div class="eq oxl">Zn → Zn²⁺ + 2e⁻（陽極，犧牲）</div>
<div class="eq rel">O₂ + 2H₂O + 4e⁻ → 4OH⁻（在 Fe 表面）</div>
<p class="small"><b>用途：</b>屋頂、水管、護欄、鐵桶、螺栓。<b>缺點：</b>Zn 有毒性疑慮，不可直接接觸酸性食品。</p>
</div>
<div class="card"><h4 class="ox">馬口鐵（鍍錫鐵）</h4>
<p>活性 <b>Fe ＞ Sn</b>。刮傷後 <b>Fe 當陽極被腐蝕</b>，Sn 當陰極 ⇒ <b>加速生鏽</b>。</p>
<div class="eq oxl">Fe → Fe²⁺ + 2e⁻（陽極，被犧牲）</div>
<div class="eq rel">O₂ + 2H₂O + 4e⁻ → 4OH⁻（在 Sn 表面）</div>
<p class="small"><b>用途：</b>食品罐頭。Sn <b>無毒、美觀、耐酸</b>，且罐內<b>缺氧</b>不易腐蝕；但若罐身破損，內容物會迅速被鐵汙染。</p>
</div>
</div>

<h2 class="ec"><span class="n">B7-4</span>其他常見腐蝕型態（大學延伸）</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">型態</th><th>機制</th><th>對策</th></tr></thead>
<tbody>
<tr><td><b>電偶腐蝕</b><br>Galvanic</td><td>兩種不同金屬接觸＋電解質 ⇒ 活性大者加速腐蝕</td><td>避免異種金屬直接接觸；用絕緣墊片；選電位相近的材料</td></tr>
<tr><td><b>縫隙腐蝕</b><br>Crevice</td><td>縫隙內 O₂ 濃度低 ⇒ 成為<b>陽極</b>（差異充氣電池）</td><td>焊接取代鉚接、填縫、避免積水死角</td></tr>
<tr><td><b>孔蝕</b><br>Pitting</td><td>Cl⁻ 破壞鈍化膜局部 ⇒ 形成小陽極/大陰極，<b>穿透極快</b>最危險</td><td>加 Mo（316 不鏽鋼）、降低 Cl⁻、陰極保護</td></tr>
<tr><td><b>應力腐蝕開裂</b><br>SCC</td><td>拉應力＋特定環境 ⇒ 沿晶界裂開，<b>無預警斷裂</b></td><td>消除殘留應力（退火）、選材</td></tr>
<tr><td><b>侵蝕腐蝕</b><br>Erosion</td><td>高速流體沖刷掉保護膜</td><td>降流速、加厚管壁、耐蝕合金</td></tr>
<tr><td><b>微生物腐蝕</b><br>MIC</td><td>硫酸鹽還原菌（SRB）產生 H₂S</td><td>殺菌劑、清管</td></tr>
</tbody></table></div>

<h2 class="ec"><span class="n">B7-5</span>例題</h2>
<div class="ex lv3"><div class="hd"><span>例 B7-1　防鏽方法的選擇</span><span class="stars">★★★☆☆</span></div><div class="bd">
<p>下列防鏽措施，哪些是「利用電化學原理」？(A) 塗油漆 (B) 鍍鋅 (C) 接鎂塊 (D) 外加直流電 (E) 製成不鏽鋼 (F) 塗機油</p>
<details><summary>詳解</summary><div class="body">
<p><b>答案：(B)(C)(D)</b>（(E) 部分算）</p>
<ul class="tight">
<li>(A)(F) 純<b>物理隔絕</b>，不涉及電化學。</li>
<li>(B) 鍍鋅：完整時是隔絕；<b>刮傷後 Zn 犧牲自己</b> ⇒ 電化學（陰極保護）。</li>
<li>(C) 接鎂塊：<b>犧牲陽極法</b> ⇒ 電化學。</li>
<li>(D) 外加直流電：<b>外加電流陰極保護</b> ⇒ 電化學。</li>
<li>(E) 不鏽鋼：靠 <b>Cr₂O₃ 鈍化膜</b>，屬「化學/材料」防護，但鈍化本身是電化學現象（可用極化曲線描述）。</li>
</ul>
</div></details></div></div>

<div class="ex lv4"><div class="hd"><span>例 B7-2　差異充氣電池（水線腐蝕）</span><span class="stars">★★★★★</span></div><div class="bd">
<p>鐵釘部分浸入 NaCl 水溶液中，一段時間後發現<b>水面附近</b>出現紅棕色鏽斑，而<b>水面下較深處</b>反而沒生鏽，但溶液加 K₃[Fe(CN)₆] 後變藍。為什麼？</p>
<details><summary>詳解</summary><div class="body">
<p><b>這是「差異充氣電池（differential aeration cell）」，也叫水線腐蝕。</b></p>
<ul class="tight">
<li><b>水面附近</b>：O₂ 供應充足 ⇒ O₂ 易被還原 ⇒ 此處是<b>陰極</b>：O₂ + 2H₂O + 4e⁻ → 4OH⁻</li>
<li><b>水面下較深處</b>：O₂ 少 ⇒ 此處是<b>陽極</b>：Fe → Fe²⁺ + 2e⁻</li>
<li>Fe²⁺ 與 K₃[Fe(CN)₆]（鐵氰化鉀）生成<b>滕氏藍（Turnbull's blue）</b> ⇒ 證明深處有 Fe²⁺，是陽極</li>
<li>生成的 Fe²⁺ 往上擴散，遇到水面附近的 OH⁻ 與 O₂ ⇒ 在<b>水線處</b>沉澱氧化成 Fe(OH)₃ ⇒ 棕色鏽斑</li>
</ul>
<div class="key"><b>反直覺的重點：</b>「氧多的地方是<b>陰極</b>（受保護）」、「氧少的地方是<b>陽極</b>（被腐蝕）」——和「有氧才會生鏽」的直覺剛好相反。<b>鏽斑出現的位置 ≠ 腐蝕發生的位置</b>。<br>
這也是為什麼<b>縫隙、墊片下方、泥沙覆蓋處</b>最容易穿孔（縫隙腐蝕），以及為什麼海水中的鋼樁在<b>泥線處</b>腐蝕最嚴重。</div>
</div></details></div></div>
`;

/* ===================== U1 能斯特 ===================== */
PAGES_B['u-nernst'] = () => `
<h1 class="page">U1｜能斯特方程式與濃度電池<span class="tag t-pu" style="margin-left:10px">大學延伸</span></h1>
<p class="page-sub">高中只算「標準狀態」（1 M、1 atm、25 ℃）。真實世界的濃度幾乎從不是 1 M——能斯特方程式就是修正這件事。</p>

<h2 class="un"><span class="n">U1-1</span>方程式的三種寫法</h2>
<div class="card">
<div class="eq" style="text-align:center"><b>E = E° − (RT / nF) · ln Q</b></div>
<div class="eq" style="text-align:center">25 ℃（298 K）、換成常用對數：<b>E = E° − (0.0592 / n) · log Q</b></div>
<div class="eq" style="text-align:center">更精確的常數：0.05916 V（有時課本寫 0.0592 或 0.06）</div>
<p class="small">其中 R = 8.314 J/(mol·K)、T = 298 K、F = 96485 C/mol、n = 轉移電子莫耳數、<b>Q = 反應商</b>（形式與 K 相同，但代入的是<b>當下</b>濃度）。</p>
<div class="note"><b>RT/F × ln10 = (8.314 × 298 / 96485) × 2.303 = 0.05916 V</b>——這個數字要背，因為所有能斯特計算都用它。</div>
</div>

<h2 class="un"><span class="n">U1-2</span>Q 怎麼寫（與 K 完全相同的規則）</h2>
<div class="card">
<p>對反應 <b>aA + bB → cC + dD</b>：</p>
<div class="eq" style="text-align:center">Q = ([C]ᶜ[D]ᵈ) / ([A]ᵃ[B]ᵇ)</div>
<ul class="tight">
<li><b>純固體、純液體不列入</b>（活度 = 1）：Zn(s)、Cu(s)、H₂O(l) 都寫 1</li>
<li><b>氣體用分壓（atm）</b>：H₂(g) 寫 P(H₂)</li>
<li><b>水溶液用莫耳濃度（M）</b></li>
</ul>
<p><b>範例：</b>Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)</p>
<div class="eq">Q = [Zn²⁺] / [Cu²⁺]　（Zn(s)、Cu(s) 都省略）</div>
<div class="eq">E = 1.10 − (0.0592/2) log([Zn²⁺]/[Cu²⁺])</div>
<p><b>範例（含氣體與 H⁺）：</b>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</p>
<div class="eq">E = 1.51 − (0.0592/5) log( [Mn²⁺] / ([MnO₄⁻][H⁺]⁸) )</div>
<div class="warn"><b>關鍵觀察：</b>[H⁺] 的<b>次方是 8</b> ⇒ pH 每變化 1，E 變化 8 × 0.0592/5 = <b>0.095 V</b>！<br>
這解釋了為什麼 <b>MnO₄⁻、Cr₂O₇²⁻ 的氧化力在酸性中遠強於中性/鹼性</b>——也是高中課本說「含氧物的氧化力：酸中 &gt; 鹼中」的熱力學原因。</div>
</div>

<h2 class="un"><span class="n">U1-3</span>濃度電池（Concentration Cell）</h2>
<div class="card">
<p>兩電極<b>材料完全相同</b>，只有離子濃度不同 ⇒ E° = 0，但 E ≠ 0：</p>
<div class="eq">Zn(s)｜Zn²⁺(0.0010 M)‖Zn²⁺(1.0 M)｜Zn(s)</div>
<div class="eq">E = 0 − (0.0592/2) log(0.0010/1.0) = −0.0296 × (−3) = <b>+0.0888 V</b></div>
<ul class="tight">
<li><b>稀溶液端是陽極</b>：Zn → Zn²⁺ + 2e⁻（讓濃度<b>上升</b>）</li>
<li><b>濃溶液端是陰極</b>：Zn²⁺ + 2e⁻ → Zn（讓濃度<b>下降</b>）</li>
<li>系統朝<b>濃度均等</b>方向進行；當 [Zn²⁺] 兩邊相等 ⇒ Q = 1 ⇒ log Q = 0 ⇒ <b>E = 0（電池沒電了）</b></li>
</ul>
<div class="tip"><b>真實世界的濃度電池：</b>
<ul class="tight">
<li><b>差異充氣電池</b>（見 B7-4）：O₂ 分壓不同造成的濃度電池，是水線腐蝕與縫隙腐蝕的根本原因。</li>
<li><b>神經傳導</b>：細胞膜內外 K⁺（內 140 mM／外 5 mM）與 Na⁺（內 12 mM／外 145 mM）的濃度差，用能斯特方程式可算出<b>靜止膜電位約 −70 mV</b>——這是生物電的基礎！</li>
<li><b>pH 計</b>：玻璃電極兩側 H⁺ 濃度差產生電位，E = 常數 − 0.0592 pH。</li>
</ul>
</div>
</div>

<h2 class="un"><span class="n">U1-4</span>能斯特方程式的四大應用</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:170px">應用</th><th>做法</th><th>例子</th></tr></thead>
<tbody>
<tr><td><b>① 測 pH</b></td><td>用氫電極或玻璃電極，E 與 [H⁺] 呈線性</td><td>pH 計：每 1 pH 單位 = <b>59.2 mV</b>（25 ℃）</td></tr>
<tr><td><b>② 測 K<sub>sp</sub></b></td><td>設計電池使 E° 與 K<sub>sp</sub> 相關</td><td>Ag/AgCl 電極 ⇒ K<sub>sp</sub>(AgCl) = 1.8×10⁻¹⁰（見 B3 例題）</td></tr>
<tr><td><b>③ 測未知離子濃度</b></td><td>離子選擇性電極（ISE）</td><td>F⁻ 電極（LaF₃ 單晶膜）、Ca²⁺ 電極、CN⁻ 電極；檢測飲水氟含量</td></tr>
<tr><td><b>④ 判斷非標準態的自發性</b></td><td>算 E，看正負</td><td>某些 E° &lt; 0 的反應，改變濃度可讓 E &gt; 0（反應「翻盤」）</td></tr>
</tbody></table></div>

<h2 class="un"><span class="n">U1-5</span>例題</h2>
<div class="ex lv5"><div class="hd"><span>例 U1-1　非標準態的電池電壓</span><span class="stars">★★★★★</span></div><div class="bd">
<p>鋅銅電池中 [Zn²⁺] = 0.10 M、[Cu²⁺] = 0.010 M，25 ℃。求 E<sub>cell</sub>，並判斷是否仍自發。</p>
<details><summary>詳解</summary><div class="body">
<div class="eq">E = E° − (0.0592/n) log Q = 1.10 − (0.0592/2) log([Zn²⁺]/[Cu²⁺])</div>
<p>Q = 0.10/0.010 = <b>10</b> ⇒ log Q = 1</p>
<div class="eq">E = 1.10 − 0.0296 × 1 = <b>1.070 V</b></div>
<p>E ＞ 0 ⇒ <b>仍然自發</b>，只是電壓比標準態（1.10 V）略低。</p>
<div class="note"><b>物理意義：</b>產物濃度（Zn²⁺）比反應物（Cu²⁺）高 ⇒ Q &gt; 1 ⇒ 反應「往回推」的趨勢增加 ⇒ E 下降。若 Q 大到使 E = 0，就是<b>平衡</b>（Q = K）。</div>
</div></details></div></div>

<div class="ex lv5"><div class="hd"><span>例 U1-2　pH 對氧化力的影響</span><span class="stars">★★★★★</span></div><div class="bd">
<p>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O，E° = +1.51 V。若 [MnO₄⁻] = [Mn²⁺] = 1.0 M，分別在 pH = 0 與 pH = 7 時，E 各為多少？這代表什麼意義？</p>
<details><summary>詳解</summary><div class="body">
<div class="eq">E = 1.51 − (0.0592/5) log( [Mn²⁺] / ([MnO₄⁻][H⁺]⁸) ) = 1.51 + (0.0592/5) × 8 × log[H⁺] × (−1)</div>
<p>簡化：E = 1.51 − (0.0592 × 8 / 5) × pH = 1.51 − <b>0.0947 × pH</b></p>
<p><b>pH = 0：</b>E = 1.51 − 0 = <b>+1.51 V</b><br>
<b>pH = 7：</b>E = 1.51 − 0.0947 × 7 = 1.51 − 0.663 = <b>+0.85 V</b></p>
<div class="key"><b>意義：</b>在中性環境下 MnO₄⁻ 的氧化力<b>掉了 44%</b>！0.85 V 已經<b>低於 Cl₂/Cl⁻ 的 1.36 V</b> ⇒ 中性時 MnO₄⁻ <b>無法氧化 Cl⁻</b>，但酸性時（1.51 V）可以。<br>
這也解釋了：① 為什麼 KMnO₄ 滴定<b>必須酸化</b>（否則氧化力不足、產物變成 MnO₂）② 為什麼<b>酸性中不可用 HCl</b>（會氧化 Cl⁻）③ 為什麼生物體內（pH 7）的 MnO₄⁻ 只被還原到 <b>MnO₂</b> 而不是 Mn²⁺。</div>
<div class="tip"><b>生物化學版本：</b>生化標準電位 E°′ 定義在 <b>pH 7</b>（而非 pH 0）。例如 O₂/H₂O 的 E° = +1.23 V，但 E°′ = +0.82 V；NAD⁺/NADH 的 E°′ = −0.32 V。呼吸鏈的電子傳遞就是靠這一串 E°′ 遞增的載體。</div>
</div></details></div></div>
`;

/* ===================== U2 ΔG-E-K ===================== */
PAGES_B['u-thermo'] = () => `
<h1 class="page">U2｜ΔG°・E°・K 與反應自發性<span class="tag t-pu" style="margin-left:10px">大學延伸</span></h1>
<p class="page-sub">電化學是連接「化學」與「熱力學」的橋。理解了這一節，你就理解了為什麼電池會沒電、為什麼有些反應根本不發生。</p>

<h2 class="un"><span class="n">U2-1</span>從「電功」推導 ΔG = −nFE</h2>
<div class="card">
<ol class="steps">
<li>電功的定義：W<sub>elec</sub> = Q × E（電量 × 電位差）</li>
<li>Q = n F（n 莫耳電子 × 每莫耳 96485 C）</li>
<li>熱力學中，<b>系統在恆溫恆壓下能做的最大「非膨脹功」＝ −ΔG</b></li>
<li>電池的最大電功就是非膨脹功 ⇒ <b>−ΔG = nFE</b> ⇒ <b>ΔG = −nFE</b></li>
</ol>
<div class="eq" style="text-align:center"><b>ΔG° = −nFE°<sub>cell</sub></b></div>
<p class="small">單位檢查：n(mol) × F(C/mol) × E(J/C) = J ⇒ ΔG 單位 J/mol ✓</p>
</div>

<h2 class="un"><span class="n">U2-2</span>三個公式的完整推導鏈</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:200px">關係</th><th>推導</th><th>25 ℃ 簡化式</th></tr></thead>
<tbody>
<tr><td><b>ΔG° = −nFE°</b></td><td>最大電功定義</td><td>ΔG°(kJ) = −n × 96.485 × E°(V)</td></tr>
<tr><td><b>ΔG° = −RT ln K</b></td><td>ΔG = ΔG° + RT ln Q；平衡時 ΔG = 0、Q = K</td><td>ΔG° = −5.708 log K（kJ/mol）</td></tr>
<tr><td><b>E° = (RT/nF) ln K</b></td><td>聯立上兩式</td><td><b>log K = nE°/0.0592</b></td></tr>
<tr><td><b>ΔG = −nFE</b>（非標準）</td><td>ΔG = ΔG° + RT ln Q ⇒ −nFE = −nFE° + RT ln Q</td><td>這就是<b>能斯特方程式</b>的來源！</td></tr>
</tbody></table></div>
<div class="key"><b>洞察：</b>能斯特方程式不是「另一個公式」，它就是 <b>ΔG = ΔG° + RT ln Q</b> 兩邊除以 −nF 的結果。所有電化學熱力學都是<b>同一個式子</b>的變形。</div>

<h2 class="un"><span class="n">U2-3</span>自發性判斷總表</h2>
<div class="tbl-wrap"><table>
<thead><tr><th class="c">E°<sub>cell</sub></th><th class="c">ΔG°</th><th class="c">K</th><th class="c">自發性</th><th>實際情況</th></tr></thead>
<tbody>
<tr><td class="c re">大正（&gt; +0.3 V）</td><td class="c">大負</td><td class="c">&gt;&gt; 1</td><td class="c"><b>強烈自發</b></td><td>Zn + Cu²⁺（1.10 V，K = 10³⁷）</td></tr>
<tr><td class="c">小正（0 ~ +0.3 V）</td><td class="c">小負</td><td class="c">略 &gt; 1</td><td class="c">自發但<b>可逆</b></td><td>Fe³⁺ + I⁻（0.23 V）；濃度變化可翻盤</td></tr>
<tr><td class="c">0</td><td class="c">0</td><td class="c">1</td><td class="c"><b>平衡</b></td><td>電池放電到「沒電」</td></tr>
<tr><td class="c ox">負</td><td class="c">正</td><td class="c">&lt; 1</td><td class="c">非自發</td><td>Cu + Zn²⁺；需要<b>電解</b></td></tr>
</tbody></table></div>

<div class="warn"><b>熱力學 ≠ 動力學！</b><br>
E° &gt; 0 只代表「<b>可以</b>發生」，不代表「<b>會很快</b>發生」。經典例子：<br>
・2H₂ + O₂ → 2H₂O，E° = +1.23 V、ΔG° = −474 kJ（超自發），但常溫下氫氧混合氣<b>可以放幾年不反應</b>——因為<b>活化能太高</b>。需要火花或 Pt 催化劑。<br>
・鑽石 → 石墨，ΔG° = −2.9 kJ（自發），但速率慢到可忽略，所以「鑽石是永恆的」。<br>
・Al 的 E° = −1.66 V（很活潑），卻因為表面 <b>Al₂O₃ 鈍化膜</b>而顯得安定。<br>
<b>結論：判斷「會不會發生」看 ΔG；判斷「多快發生」看動力學（活化能）。</b></div>

<h2 class="un"><span class="n">U2-4</span>電池效率的熱力學上限</h2>
<div class="card">
<div class="eq">理論效率 η = ΔG/ΔH = 1 − TΔS/ΔH</div>
<div class="tbl-wrap"><table>
<thead><tr><th>系統</th><th class="c">ΔH°(kJ)</th><th class="c">ΔG°(kJ)</th><th class="c">TΔS°(kJ)</th><th class="c">理論效率</th></tr></thead>
<tbody>
<tr><td>2H₂ + O₂ → 2H₂O(l)</td><td class="c">−572</td><td class="c">−474</td><td class="c">−98</td><td class="c"><b>83%</b></td></tr>
<tr><td>CH₄ + 2O₂ → CO₂ + 2H₂O(l)</td><td class="c">−890</td><td class="c">−818</td><td class="c">−72</td><td class="c"><b>92%</b></td></tr>
<tr><td>C(石墨) + O₂ → CO₂</td><td class="c">−394</td><td class="c">−394</td><td class="c">~0</td><td class="c"><b>~100%</b></td></tr>
<tr><td>內燃機（卡諾限制）</td><td class="c" colspan="4">η = 1 − T<sub>低</sub>/T<sub>高</sub> ≈ <b>25–40%</b>（實際更低）</td></tr>
</tbody></table></div>
<div class="note"><b>為什麼燃料電池效率能突破卡諾限制？</b>因為它<b>不經過「熱」這個中間形式</b>，直接把化學能轉成電能。卡諾效率只限制「熱機」，不限制電化學電池。這是燃料電池最重要的優勢。</div>
</div>

<h2 class="un"><span class="n">U2-5</span>例題</h2>
<div class="ex lv5"><div class="hd"><span>例 U2-1　三個量的互相換算</span><span class="stars">★★★★★</span></div><div class="bd">
<p>某電池反應 n = 3，25 ℃ 時 K = 1.0 × 10²⁰。求 E°<sub>cell</sub> 與 ΔG°。</p>
<details><summary>詳解</summary><div class="body">
<div class="eq">E° = (0.0592/n) log K = (0.0592/3) × log(1.0×10²⁰) = 0.01973 × 20 = <b>+0.395 V</b></div>
<div class="eq">ΔG° = −nFE° = −3 × 96485 × 0.395 = −114,300 J = <b>−114.3 kJ/mol</b></div>
<p><b>驗算：</b>ΔG° = −RT ln K = −8.314 × 298 × ln(10²⁰) = −8.314 × 298 × 46.05 = −114,050 J ≈ <b>−114 kJ</b> ✓</p>
<div class="key"><b>直覺建立：</b>25 ℃ 時，<b>每 0.0592/n 伏特 對應 K 的 10 倍變化</b>。所以 n=1 時 E° = 0.059 V ⇒ K = 10；E° = 0.59 V ⇒ K = 10¹⁰。這個「一個數量級 = 59 mV」的感覺在考場上非常有用。</div>
</div></details></div></div>

<div class="ex lv5"><div class="hd"><span>例 U2-2　跨步電位（不能相加！）</span><span class="stars">★★★★★</span></div><div class="bd">
<p>已知 Fe³⁺ + 3e⁻ → Fe　E° = −0.04 V；Fe²⁺ + 2e⁻ → Fe　E° = −0.44 V。求 Fe³⁺ + e⁻ → Fe²⁺ 的 E°。</p>
<details><summary>詳解</summary><div class="body">
<p><b>陷阱：</b>不能寫 −0.04 − (−0.44) = +0.40 V（<b>這是錯的</b>，因為 n 不同！）</p>
<p><b>正確做法：用 ΔG° 相加。</b></p>
<ol class="steps">
<li>① Fe³⁺ + 3e⁻ → Fe　ΔG₁° = −3F(−0.04) = <b>+0.12F</b></li>
<li>② Fe²⁺ + 2e⁻ → Fe　ΔG₂° = −2F(−0.44) = <b>+0.88F</b></li>
<li>目標：Fe³⁺ + e⁻ → Fe²⁺ ＝ ① − ②（② 反向）<br>
ΔG₃° = ΔG₁° − ΔG₂° = 0.12F − 0.88F = <b>−0.76F</b></li>
<li>E₃° = −ΔG₃°/(n₃F) = 0.76F / (1 × F) = <b>+0.76 V</b>（與文獻值 +0.77 V 相符）</li>
</ol>
<div class="key"><b>通用公式（Latimer 跨步）：</b>E°<sub>總</sub> = (n₁E₁° + n₂E₂° + …) / (n₁ + n₂ + …)<br>
驗證：(3×(−0.04) − 2×(−0.44)) / (3−2) = (−0.12 + 0.88)/1 = <b>+0.76 V</b> ✓<br>
<b>核心原因：E° 是強度性質（不可加），ΔG° 是廣度性質（可加）。</b></div>
</div></details></div></div>
`;

/* ===================== U3 Latimer/Frost ===================== */
PAGES_B['u-diagram'] = () => `
<h1 class="page">U3｜Latimer 圖・Frost 圖・歧化預測<span class="tag t-pu" style="margin-left:10px">大學延伸</span></h1>
<p class="page-sub">無機化學最愛用的兩張圖。學會之後，「某物種會不會歧化」不用再背，一看就知道。</p>
${FIGS.latimer}

<h2 class="un"><span class="n">U3-1</span>Latimer 圖（電位圖）</h2>
<div class="card">
<p><b>畫法：</b>把同一元素<b>各氧化態由高到低</b>排成一列，相鄰兩態之間標上<b>該步的標準還原電位 E°</b>。</p>
<h4>酸性溶液中的幾個重要 Latimer 圖</h4>
<div class="eq"><b>氯：</b>ClO₄⁻ <sup>+1.20</sup>→ ClO₃⁻ <sup>+1.18</sup>→ HClO₂ <sup>+1.65</sup>→ HClO <sup>+1.63</sup>→ Cl₂ <sup>+1.36</sup>→ Cl⁻</div>
<div class="eq"><b>錳：</b>MnO₄⁻ <sup>+0.56</sup>→ MnO₄²⁻ <sup>+2.26</sup>→ MnO₂ <sup>+0.95</sup>→ Mn³⁺ <sup>+1.51</sup>→ Mn²⁺ <sup>−1.18</sup>→ Mn</div>
<div class="eq"><b>銅：</b>Cu²⁺ <sup>+0.15</sup>→ Cu⁺ <sup>+0.52</sup>→ Cu</div>
<div class="eq"><b>鐵：</b>Fe³⁺ <sup>+0.77</sup>→ Fe²⁺ <sup>−0.44</sup>→ Fe</div>
<div class="eq"><b>氧：</b>O₃ <sup>+2.07</sup>→ O₂ <sup>+0.70</sup>→ H₂O₂ <sup>+1.78</sup>→ H₂O</div>
<div class="eq"><b>氮：</b>NO₃⁻ <sup>+0.80</sup>→ HNO₂ <sup>+0.99</sup>→ NO <sup>+1.59</sup>→ N₂O <sup>+1.77</sup>→ N₂ <sup>+0.28</sup>→ N₂H₅⁺ <sup>−0.23</sup>→ NH₄⁺</div>
</div>

<h2 class="un"><span class="n">U3-2</span>歧化判準（超好用）</h2>
<div class="key">
<b>規則：若某物種「右側的 E°」大於「左側的 E°」，它就會自發歧化。</b><br><br>
<b>為什麼？</b>把它當電池看：<br>
・陰極（還原）＝ 右邊那一步：E°<sub>右</sub><br>
・陽極（氧化）＝ 左邊那一步的逆向：E°<sub>左</sub><br>
・E°<sub>cell</sub> = E°<sub>右</sub> − E°<sub>左</sub> ＞ 0 ⇒ 自發歧化
</div>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:130px">物種</th><th class="c">E°<sub>左</sub></th><th class="c">E°<sub>右</sub></th><th class="c">E°<sub>右</sub> − E°<sub>左</sub></th><th>結論與反應式</th></tr></thead>
<tbody>
<tr class="hl"><td><b>Cu⁺</b></td><td class="c">+0.15 V</td><td class="c">+0.52 V</td><td class="c"><b>+0.37 V</b></td><td><b>會歧化</b>：2Cu⁺ → Cu + Cu²⁺（所以水中沒有穩定的 Cu⁺，只能存在於 CuCl、Cu₂O 等難溶物或錯離子中）</td></tr>
<tr class="hl"><td><b>H₂O₂</b></td><td class="c">+0.70 V<br><span class="small">(O₂/H₂O₂)</span></td><td class="c">+1.78 V<br><span class="small">(H₂O₂/H₂O)</span></td><td class="c"><b>+1.08 V</b></td><td><b>會歧化</b>：2H₂O₂ → 2H₂O + O₂（這就是雙氧水會自己分解、需棕色瓶冷藏的原因；MnO₂ 只是加速它）</td></tr>
<tr class="hl"><td><b>MnO₄²⁻</b></td><td class="c">+0.56 V</td><td class="c">+2.26 V</td><td class="c"><b>+1.70 V</b></td><td><b>會歧化</b>：3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O（所以墨綠色 MnO₄²⁻ 只穩定於<b>強鹼</b>中；酸化立刻歧化）</td></tr>
<tr class="hl"><td><b>Mn³⁺</b></td><td class="c">+0.95 V</td><td class="c">+1.51 V</td><td class="c"><b>+0.56 V</b></td><td><b>會歧化</b>：2Mn³⁺ + 2H₂O → Mn²⁺ + MnO₂ + 4H⁺</td></tr>
<tr><td><b>Fe²⁺</b></td><td class="c">+0.77 V</td><td class="c">−0.44 V</td><td class="c"><b>−1.21 V</b></td><td><b>不會歧化</b>（反而是 Fe + 2Fe³⁺ → 3Fe²⁺ 會<b>歸中</b>，因為逆向 E° = +1.21 V ＞ 0）</td></tr>
<tr><td><b>Cl₂</b>（酸性）</td><td class="c">+1.63 V</td><td class="c">+1.36 V</td><td class="c">−0.27 V</td><td>酸性中<b>不歧化</b>；但<b>鹼性中會</b>（因 HClO/ClO⁻ 的 E° 隨 pH 大幅下降）⇒ 這就是 Cl₂ + NaOH → NaCl + NaClO 的原因</td></tr>
</tbody></table></div>

<h2 class="un"><span class="n">U3-3</span>Frost 圖（氧化態圖）</h2>
${FIGS.frost}
<div class="card">
<p><b>畫法：</b>橫軸 = 氧化數 N，縱軸 = <b>N × E°</b>（即 −ΔG°/F，單位 V）。以<b>元素單質（N=0）為原點</b>。</p>
<h4>三大判讀法則</h4>
<ol class="steps">
<li><b>最低點 = 熱力學最穩定的物種</b>（酸性錳：Mn²⁺ 最低 ⇒ Mn²⁺ 最穩定，這就是為什麼酸性 KMnO₄ 的還原產物是 Mn²⁺）。</li>
<li><b>凸點（在相鄰兩點連線「上方」）= 會歧化</b>（酸性錳：Mn³⁺ 是凸點 ⇒ 歧化成 Mn²⁺ + MnO₂）。</li>
<li><b>凹點（在連線「下方」）= 不會歧化，反而會「歸中」</b>（相鄰兩態會反應生成它）。</li>
<li><b>兩點連線的斜率 = 該步的 E°</b>（斜率越陡 ⇒ E° 越大 ⇒ 氧化力越強）。</li>
</ol>
<div class="note"><b>Latimer 與 Frost 的關係：</b>Frost 圖就是 Latimer 圖的「積分」——Latimer 給的是<b>相鄰兩點的斜率</b>，Frost 給的是<b>累積的 nE°</b>。兩者資訊完全等價，可以互相換算。</div>
</div>

<h2 class="un"><span class="n">U3-4</span>用 Frost 圖解釋「為什麼介質這麼重要」</h2>
<div class="grid2">
<div class="card"><h4>錳（酸性 vs 鹼性）</h4>
<ul class="tight">
<li><b>酸性</b>：Mn²⁺ 是最低點 ⇒ KMnO₄ 一路還原到 <b>Mn²⁺</b>（E° = 1.51 V，超強氧化劑）</li>
<li><b>鹼性</b>：MnO₂ 是最低點 ⇒ MnO₄⁻ 只還原到 <b>MnO₂</b>（E° = 0.59 V，氧化力弱很多）</li>
<li>⇒ 高中課本說「KMnO₄ 的氧化力：<b>酸性 &gt; 中性 &gt; 鹼性</b>」，Frost 圖一眼就看出來</li>
</ul></div>
<div class="card"><h4>氯（酸性 vs 鹼性）</h4>
<ul class="tight">
<li><b>酸性</b>：Cl₂ 不歧化（HClO 的 E° 高）</li>
<li><b>鹼性</b>：ClO⁻ 成為凸點但動力學慢；Cl₂ 歧化成 Cl⁻ + ClO⁻ 的 E° 變正 ⇒ <b>自發</b></li>
<li>⇒ 漂白水必須在<b>鹼性</b>下製造與保存；酸化會釋出 Cl₂（危險！）：<br>
<span class="mono">ClO⁻ + Cl⁻ + 2H⁺ → Cl₂↑ + H₂O</span></li>
</ul></div>
</div>
<div class="warn"><b>生活安全：</b><b>漂白水（含 NaClO）絕對不可與鹽酸、馬桶清潔劑（含 HCl）混用</b>！酸化會立即產生<b>氯氣</b>：NaClO + 2HCl → NaCl + Cl₂↑ + H₂O。氯氣是<b>一戰時的化學武器</b>，吸入會造成肺水腫。同理也不可與雙氧水、氨水混用。</div>

<h2 class="un"><span class="n">U3-5</span>例題</h2>
<div class="ex lv5"><div class="hd"><span>例 U3-1　用 Latimer 圖判斷歧化</span><span class="stars">★★★★★</span></div><div class="bd">
<p>酸性溶液中的 Latimer 圖：MnO₄⁻ <sup>+0.56</sup>→ MnO₄²⁻ <sup>+2.26</sup>→ MnO₂。問：(1) MnO₄²⁻ 在酸性中穩定嗎？(2) 求 MnO₄⁻ → MnO₂ 的 E°。</p>
<details><summary>詳解</summary><div class="body">
<p><b>(1)</b> MnO₄²⁻ 的 E°<sub>右</sub> = +2.26 V ＞ E°<sub>左</sub> = +0.56 V ⇒ <b>會劇烈歧化</b>（E°<sub>cell</sub> = +1.70 V，K 極大）</p>
<div class="eq">3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂↓ + 2H₂O</div>
<p class="small">所以<b>墨綠色的 MnO₄²⁻ 只能存在於強鹼溶液中</b>（pH &gt; 14）；一旦酸化立刻變回紫色 MnO₄⁻ ＋ 棕黑 MnO₂ 沉澱。</p>
<p><b>(2)</b> 跨步電位用 <b>ΔG 加權平均</b>：</p>
<div class="eq">E°(MnO₄⁻/MnO₂) = (n₁E₁° + n₂E₂°)/(n₁ + n₂) = (1 × 0.56 + 2 × 2.26)/(1 + 2) = (0.56 + 4.52)/3 = <b>+1.69 V</b></div>
<p class="small">（n₁ = 1 因為 Mn +7 → +6；n₂ = 2 因為 Mn +6 → +4）</p>
<div class="key"><b>驗算：</b>MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O 的 E° 應約 +1.69 V（文獻值 1.70 V）✓<br>
<b>這解釋了「中性/弱鹼 KMnO₄ 得 3 電子」的電位依據。</b></div>
</div></details></div></div>
`;

/* ===================== U4 電極動力學 ===================== */
PAGES_B['u-kin'] = () => `
<h1 class="page">U4｜電極動力學・過電位・電分析<span class="tag t-pu" style="margin-left:10px">大學延伸</span></h1>
<p class="page-sub">熱力學告訴你「會不會發生」，動力學告訴你「要多大電壓、多快」。這一節解釋了很多高中「例外」的真正原因。</p>

<h2 class="un"><span class="n">U4-1</span>過電位（Overpotential, η）</h2>
<div class="card">
<div class="eq" style="text-align:center"><b>E<sub>實際</sub> = E<sub>熱力學</sub> + η</b></div>
<p>實際電解時，需要施加的電壓<b>大於</b>熱力學預測值，多出來的部分叫<b>過電位</b>。來源有四：</p>
<ol class="steps">
<li><b>活化過電位</b>：電極表面的電子轉移有活化能（<b>氣體析出時特別大</b>）</li>
<li><b>濃度過電位</b>：電極附近離子被耗盡，濃度與本體不同</li>
<li><b>電阻過電位（IR drop）</b>：溶液與接觸點的歐姆電阻</li>
<li><b>結晶過電位</b>：金屬沉積成核需要的額外能量</li>
</ol>
<div class="tbl-wrap"><table>
<thead><tr><th>反應</th><th class="c">熱力學 E°</th><th class="c">Pt 上的過電位</th><th class="c">Hg 上的過電位</th><th class="c">Zn 上的過電位</th></tr></thead>
<tbody>
<tr><td>2H⁺ + 2e⁻ → H₂</td><td class="c">0.00 V</td><td class="c">~0.01 V（極小）</td><td class="c"><b>~1.0 V（極大）</b></td><td class="c">~0.7 V</td></tr>
<tr><td>2H₂O → O₂ + 4H⁺ + 4e⁻</td><td class="c">−1.23 V</td><td class="c"><b>~0.4–0.7 V</b></td><td class="c">~1.0 V</td><td class="c">~0.8 V</td></tr>
</tbody></table></div>
<div class="key"><b>這解釋了高中兩個「例外」：</b><br>
① <b>為什麼電解濃 NaCl 時陽極出 Cl₂ 而不是 O₂？</b><br>
　熱力學：2H₂O → O₂ + 4H⁺ + 4e⁻，E° = −1.23 V（比 Cl⁻ → Cl₂ 的 −1.36 V <b>容易</b>）⇒ 應該出 O₂。<br>
　但 <b>O₂ 的過電位高達 0.4–0.7 V</b> ⇒ 實際需 −1.7 ~ −2.0 V，反而<b>比 Cl₂ 更難</b> ⇒ 出 Cl₂。<br>
　（在<b>稀</b> NaCl 中 Cl⁻ 濃度低，還是會出 O₂。）<br><br>
② <b>為什麼用汞陰極電解食鹽水可以得到 Na（汞齊）？</b><br>
　Na⁺/Na 的 E° = −2.71 V（比水難還原得多），但<b>H₂ 在汞上的過電位超過 1 V</b> ⇒ 析氫變得很難 ⇒ Na⁺ 反而先放電，形成<b>鈉汞齊</b>。（這是舊式「汞法氯鹼工業」，因汞汙染已被淘汰）</div>
</div>

<h2 class="un"><span class="n">U4-2</span>分解電壓</h2>
<div class="card">
<div class="eq">E<sub>分解</sub> = |E°<sub>cell</sub>| + η<sub>陽極</sub> + |η<sub>陰極</sub>| + I·R</div>
<p><b>例：</b>電解水理論需 1.23 V，但實際用 Pt 電極需要 <b>約 1.6–2.0 V</b> 才有明顯氣泡；加少量 H₂SO₄ 或 NaOH 提高導電度（降 IR）可降低所需電壓。</p>
<div class="note"><b>工業數據：</b>氯鹼工業實際槽電壓 3.0–3.5 V（理論 2.19 V）；電煉鋁槽電壓 4.0–5.0 V，每噸鋁耗電 <b>13,000–15,000 kWh</b>——所以鋁廠都蓋在水電廠旁邊（早年被稱為「固體電力」）。</div>
</div>

<h2 class="un"><span class="n">U4-3</span>Butler–Volmer 方程式（電極動力學核心）</h2>
<div class="card">
<div class="eq" style="text-align:center">j = j₀ [ exp(αnFη/RT) − exp(−(1−α)nFη/RT) ]</div>
<ul class="tight">
<li><b>j</b>：電流密度（A/cm²）；<b>j₀</b>：交換電流密度（平衡時的正逆向速率）</li>
<li><b>η</b>：過電位；<b>α</b>：轉移係數（通常 ≈ 0.5）</li>
<li>η 很大時簡化為 <b>Tafel 方程式</b>：η = a + b log j（b = Tafel 斜率）</li>
<li><b>j₀ 大 ⇒ 電極反應快 ⇒ 過電位小</b>。這就是為什麼 <b>Pt 是最好的氫電極材料</b>（j₀ ~ 10⁻³ A/cm²），而 Hg 最差（j₀ ~ 10⁻¹² A/cm²）。</li>
</ul>
<div class="tip"><b>為什麼燃料電池需要 Pt 催化劑？</b>因為 O₂ 還原反應（ORR）的 j₀ 極小、過電位高達 0.3–0.5 V，是燃料電池效率的主要損失來源。<b>降低 Pt 用量、尋找非貴金屬催化劑（Fe–N–C）</b>是當前燃料電池研究的核心課題。</div>
</div>

<h2 class="un"><span class="n">U4-4</span>電分析化學三大技術</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">技術</th><th>原理</th><th>應用</th></tr></thead>
<tbody>
<tr><td><b>電位分析法</b><br>Potentiometry</td><td>測<b>電位</b>（電流 ≈ 0），用能斯特方程式反推濃度</td><td>pH 計、離子選擇性電極（F⁻、Cl⁻、Ca²⁺、NO₃⁻）、血氣分析</td></tr>
<tr><td><b>庫倫分析法</b><br>Coulometry</td><td>測<b>總電量 Q</b>，用法拉第定反推物質量（<b>絕對法，不需標準品</b>）</td><td>卡爾費休水分測定（Karl Fischer）、電量滴定</td></tr>
<tr><td><b>伏安法</b><br>Voltammetry</td><td>掃描電位、測<b>電流</b>；電流 ∝ 濃度</td><td><b>循環伏安法（CV）</b>研究反應機制、<b>溶出伏安法</b>測 ppb 級重金屬（Pb、Cd、Hg）、葡萄糖感測器、多巴胺偵測</td></tr>
<tr><td><b>電導度法</b></td><td>測溶液導電能力</td><td>水質監測（TDS）、滴定終點判定（電導滴定）</td></tr>
<tr><td><b>阻抗光譜（EIS）</b></td><td>施加交流電、測阻抗隨頻率變化</td><td>電池健康診斷（SOH）、腐蝕速率、塗層品質、生醫感測</td></tr>
</tbody></table></div>

<h2 class="un"><span class="n">U4-5</span>法拉第效率（Current Efficiency）</h2>
<div class="card">
<div class="eq" style="text-align:center">FE = (實際析出量 / 理論析出量) × 100% = (n<sub>實際</sub> × z × F) / Q<sub>總</sub></div>
<p><b>為什麼會 &lt; 100%？</b></p>
<ul class="tight">
<li><b>副反應</b>：電解水溶液中同時析出 H₂ 或 O₂</li>
<li><b>自放電</b>、<b>短路</b>、電極腐蝕</li>
<li><b>產物再反應</b>：如電解 NaCl 時 Cl₂ 與 OH⁻ 反應生成 ClO⁻</li>
</ul>
<div class="tbl-wrap"><table>
<thead><tr><th>工業製程</th><th class="c">典型法拉第效率</th><th>主要損失</th></tr></thead>
<tbody>
<tr><td>電煉鋁（Hall–Héroult）</td><td class="c">90–95%</td><td>陽極效應、鋁再氧化</td></tr>
<tr><td>氯鹼工業（離子膜法）</td><td class="c">95–97%</td><td>OH⁻ 反遷移、O₂ 副產</td></tr>
<tr><td>電鍍（鍍鋅、鍍鎳）</td><td class="c">90–98%（鹼性鍍鋅可低至 60%）</td><td>析氫</td></tr>
<tr><td>電催化 CO₂ 還原（CO₂RR）</td><td class="c"><b>依產物 10–95%</b>（研究前沿）</td><td>析氫競爭、多產物並存</td></tr>
<tr><td>電催化 N₂ 還原合成氨（NRR）</td><td class="c"><b>&lt; 10%</b>（目前瓶頸）</td><td>析氫幾乎全面壓制、N₂ 活化難</td></tr>
</tbody></table></div>
</div>

<h2 class="un"><span class="n">U4-6</span>例題</h2>
<div class="ex lv5"><div class="hd"><span>例 U4-1　法拉第效率計算</span><span class="stars">★★★★★</span></div><div class="bd">
<p>以 10.0 A 電流電解 CuSO₄(aq) 1 小時，陰極實際得到 Cu 10.5 g。求：(1) 理論產量 (2) 法拉第效率 (3) 損失的電流主要用在哪裡？</p>
<details><summary>詳解</summary><div class="body">
<p><b>(1)</b> Q = 10.0 × 3600 = 36,000 C ⇒ n(e⁻) = 36000/96500 = 0.3731 mol<br>
n(Cu)理論 = 0.3731/2 = 0.1865 mol ⇒ m = 0.1865 × 63.55 = <b>11.85 g</b></p>
<p><b>(2)</b> FE = 10.5/11.85 × 100% = <b>88.6%</b></p>
<p><b>(3)</b> 損失的 11.4% 電流主要用於：<br>
・<b>陰極析氫</b>：2H⁺ + 2e⁻ → H₂（尤其 Cu²⁺ 濃度變低時，H⁺ 開始競爭）<br>
・Cu²⁺ + e⁻ → Cu⁺ 的一電子還原（中間產物）<br>
・陽極若用銅則正常；若用惰性電極，陽極析 O₂ 不影響陰極效率但增加槽電壓</p>
<div class="note"><b>提高電流效率的方法：</b>① 維持足夠的 Cu²⁺ 濃度 ② 控制 pH（避免太酸）③ 加<b>添加劑</b>（如明膠、硫脲）抑制析氫 ④ 降低電流密度 ⑤ 攪拌減少濃度過電位。</div>
</div></details></div></div>
`;

/* ===================== U5 尖端應用 ===================== */
PAGES_B['u-app'] = () => `
<h1 class="page">U5｜尖端應用：鋰電・電催化・腐蝕工程<span class="tag t-pu" style="margin-left:10px">大學延伸</span></h1>
<p class="page-sub">電化學是 21 世紀最熱門的化學分支之一：能源轉型（電池、綠氫）、碳中和（CO₂ 電還原）、半導體（電鍍銅）、生醫（感測器）全都靠它。</p>

<h2 class="un"><span class="n">U5-1</span>鋰離子電池的完整化學</h2>
<div class="card">
<div class="tbl-wrap"><table>
<thead><tr><th style="width:110px">部件</th><th>材料</th><th>反應</th></tr></thead>
<tbody>
<tr><td><b>陽極（負極）</b></td><td>石墨 C₆（近年改用 Si–C 複合）</td><td>LiC₆ ⇌ C₆ + Li⁺ + e⁻（<b>嵌入/脫嵌 intercalation</b>，不是氧化還原的「溶解沉積」）</td></tr>
<tr><td><b>陰極（正極）</b></td><td>LiCoO₂（LCO）、LiFePO₄（LFP）、NMC（LiNi<sub>x</sub>Mn<sub>y</sub>Co<sub>z</sub>O₂）、NCA</td><td>Li₁₋ₓCoO₂ + xLi⁺ + xe⁻ ⇌ LiCoO₂</td></tr>
<tr><td><b>電解質</b></td><td>LiPF₆ 溶於 EC/DMC 有機溶劑（<b>非水！</b>因水的電位窗只有 1.23 V）</td><td>只負責傳導 Li⁺，不參與反應</td></tr>
<tr><td><b>隔膜</b></td><td>PE/PP 多孔膜（130 ℃ 熔斷保護）</td><td>隔絕正負極但允許 Li⁺ 通過</td></tr>
</tbody></table></div>
<div class="key"><b>「搖椅式電池（Rocking-chair battery）」：</b>Li⁺ 像坐在搖椅上，充電時從陰極「搖」到陽極嵌入石墨，放電時再搖回去。<b>沒有金屬鋰單質</b>（那叫「鋰金屬電池」，能量密度更高但有<b>鋰枝晶（dendrite）</b>刺穿隔膜導致短路的致命問題）。</div>
<h4>各正極材料比較</h4>
<div class="tbl-wrap"><table>
<thead><tr><th>材料</th><th class="c">電壓</th><th class="c">容量 mAh/g</th><th class="c">能量密度</th><th>優缺點</th></tr></thead>
<tbody>
<tr><td><b>LCO</b>（鈷酸鋰）</td><td class="c">3.7 V</td><td class="c">140</td><td class="c">高</td><td>手機筆電主流；<b>鈷昂貴、有倫理問題（剛果童工）、熱安定性差</b></td></tr>
<tr><td><b>LFP</b>（磷酸鋰鐵）</td><td class="c">3.2 V</td><td class="c">160</td><td class="c">中</td><td><b>安全、循環 &gt;3000 次、便宜、無鈷</b>；能量密度較低、低溫差。Tesla 標準版、電動巴士、儲能站</td></tr>
<tr><td><b>NMC 811</b></td><td class="c">3.7 V</td><td class="c">200+</td><td class="c"><b>最高</b></td><td>長續航電動車；鎳高 ⇒ 熱穩定性下降</td></tr>
<tr><td><b>NCA</b></td><td class="c">3.6 V</td><td class="c">200</td><td class="c">很高</td><td>Tesla 長續航版</td></tr>
<tr><td><b>Li–S（研究中）</b></td><td class="c">2.1 V</td><td class="c"><b>1675</b></td><td class="c">理論極高</td><td>硫便宜、無毒；但有「多硫化物穿梭效應」導致壽命短</td></tr>
<tr><td><b>Li–air（研究中）</b></td><td class="c">2.96 V</td><td class="c"><b>3500</b></td><td class="c">接近汽油</td><td>需解決 O₂ 選擇性、電解質分解、陽極保護</td></tr>
</tbody></table></div>
<div class="note"><b>固態電池（Solid-state battery）：</b>把液態電解質換成<b>固態陶瓷/硫化物/聚合物</b>。優點：不可燃（解決熱失控）、可用<b>鋰金屬陽極</b>（能量密度翻倍）、工作溫度範圍寬。豐田、QuantumScape、輝能科技都在競速，被視為下一代電池。</div>
</div>

<h2 class="un"><span class="n">U5-2</span>電催化與綠氫</h2>
<div class="grid2">
<div class="card"><h4>氫析出反應 HER（陰極）</h4>
<div class="eq rel">酸性：2H⁺ + 2e⁻ → H₂　E° = 0.00 V<br>鹼性：2H₂O + 2e⁻ → H₂ + 2OH⁻　E° = −0.83 V</div>
<ul class="tight">
<li>最佳催化劑：<b>Pt</b>（η ≈ 10–30 mV）</li>
<li>研究熱點：MoS₂、NiMo、單原子催化劑（降低成本）</li>
<li><b>綠氫</b>：用<b>再生能源</b>電解水 ⇒ 全生命週期零碳</li>
<li>目前效率：PEM 電解槽 60–70%（kWh/Nm³ H₂ ≈ 4.5–5.5）</li>
</ul></div>
<div class="card"><h4>氧析出反應 OER（陽極）</h4>
<div class="eq oxl">2H₂O → O₂ + 4H⁺ + 4e⁻　E° = +1.23 V</div>
<ul class="tight">
<li><b>四電子步驟、動力學極慢</b> ⇒ 過電位 300–500 mV，是電解水的主要能量損失</li>
<li>最佳催化劑：<b>IrO₂、RuO₂</b>（酸性）；NiFe-LDH（鹼性）</li>
<li>Ir、Ru 極稀有 ⇒ 降低載量是核心課題</li>
</ul></div>
</div>

<h2 class="un"><span class="n">U5-3</span>CO₂ 電還原（CO₂RR）：把廢氣變燃料</h2>
<div class="card">
<div class="tbl-wrap"><table>
<thead><tr><th style="width:130px">產物</th><th>半反應（酸性）</th><th class="c">E°</th><th class="c">電子數</th><th>催化劑與價值</th></tr></thead>
<tbody>
<tr><td><b>CO</b></td><td>CO₂ + 2H⁺ + 2e⁻ → CO + H₂O</td><td class="c">−0.11 V</td><td class="c">2</td><td>Ag、Au；可做合成氣</td></tr>
<tr><td><b>甲酸 HCOOH</b></td><td>CO₂ + 2H⁺ + 2e⁻ → HCOOH</td><td class="c">−0.20 V</td><td class="c">2</td><td>Sn、Bi、Pb；<b>液態氫載體</b>，最易達成</td></tr>
<tr><td><b>乙烯 C₂H₄</b></td><td>2CO₂ + 12H⁺ + 12e⁻ → C₂H₄ + 4H₂O</td><td class="c">+0.08 V</td><td class="c">12</td><td><b>Cu（唯一）</b>；塑膠原料，價值最高</td></tr>
<tr><td><b>乙醇 C₂H₅OH</b></td><td>2CO₂ + 12H⁺ + 12e⁻ → C₂H₅OH + 3H₂O</td><td class="c">+0.09 V</td><td class="c">12</td><td>Cu 基；燃料</td></tr>
<tr><td><b>甲烷 CH₄</b></td><td>CO₂ + 8H⁺ + 8e⁻ → CH₄ + 2H₂O</td><td class="c">+0.17 V</td><td class="c">8</td><td>Cu；天然氣</td></tr>
</tbody></table></div>
<div class="warn"><b>核心難題：</b>① <b>HER 競爭</b>（水中 H⁺ 太多，大部分電流跑去產 H₂）② <b>選擇性差</b>（Cu 會同時產生 16 種以上產物）③ CO₂ 溶解度低（需氣體擴散電極 GDE）④ 穩定性（催化劑幾小時就衰減）。<br>
<b>為何只有 Cu 能做 C–C 偶聯？</b>因為 Cu 對 *CO 中間體的吸附強度「剛好」——太強（Pt、Ni）會毒化，太弱（Au、Ag）只能停在 CO。這就是著名的<b>Sabatier 原理</b>與<b>火山型曲線（volcano plot）</b>。</div>
</div>

<h2 class="un"><span class="n">U5-4</span>其他前沿電化學技術</h2>
<div class="grid2">
<div class="card tight"><h4>氮還原合成氨（NRR）</h4><p class="small">N₂ + 6H⁺ + 6e⁻ → 2NH₃（E° = +0.06 V）。取代百年<b>Haber–Bosch 法</b>（450 ℃、200 atm、耗全球 1–2% 能源）。目前瓶頸：法拉第效率 &lt; 10%、產率極低。</p></div>
<div class="card tight"><h4>燃料電池車</h4><p class="small">PEMFC（質子交換膜）：80 ℃ 操作、Pt/C 催化劑、需 700 bar 儲氫。Toyota Mirai、現代 Nexo。優勢：3 分鐘加氫、續航 600 km、低溫啟動快。</p></div>
<div class="card tight"><h4>液流電池（Redox Flow）</h4><p class="small">全釩液流電池（VRFB）：V²⁺/V³⁺ 與 VO²⁺/VO₂⁺ 兩對電對。<b>能量與功率解耦</b>（儲能容量 = 槽體積），循環 &gt;20000 次，適合電網級儲能。</p></div>
<div class="card tight"><h4>超級電容器</h4><p class="small">雙電層儲能（EDLC）＋賡電容。功率密度極高（秒級充放電）、循環 &gt;100 萬次，但能量密度低。用於煞車能量回收、電梯、電力品質調節。</p></div>
<div class="card tight"><h4>半導體電鍍銅</h4><p class="small">晶片<b>銅互連</b>靠電鍍完成（Damascene 工藝）。需要在幾十奈米的溝槽中<b>由下往上「超填充」</b>，靠加速劑/抑制劑/整平劑三種添加劑的競態吸附——這是電化學工程的極致。</p></div>
<div class="card tight"><h4>生醫電化學</h4><p class="small">血糖機（葡萄糖氧化酶＋媒介體）、植入式神經刺激電極、DNA 電化學感測器、 wearable 汗液感測。核心是<b>選擇性</b>與<b>生物相容性</b>。</p></div>
<div class="card tight"><h4>金屬–空氣電池</h4><p class="small">Zn–air（助聽器，已商用）、Al–air（軍用、備用電源）、Li–air（理論能量密度 3500 Wh/kg，接近汽油）。瓶頸都在<b>空氣陰極的 ORR/OER 雙功能催化劑</b>。</p></div>
<div class="card tight"><h4>電合成有機化學</h4><p class="small">用<b>電子當作試劑</b>取代危險的氧化劑/還原劑（如 CrO₃、LiAlH₄）。2019 年後爆發性成長，Monsanto 的己二腈製程（丙烯腈電氫化二聚）是最成功的工業案例，年產 10 萬噸級。</p></div>
</div>

<h2 class="un"><span class="n">U5-5</span>腐蝕工程（大學材料/化工必修）</h2>
<div class="card">
<h4>極化曲線與 Tafel 外推</h4>
<p>測量腐蝕速率的標準方法：施加電位掃描，記錄電流，得到<b>陽極極化曲線</b>（金屬溶解）與<b>陰極極化曲線</b>（氧還原或析氫）。兩線交點即為<b>腐蝕電位 E<sub>corr</sub></b> 與<b>腐蝕電流 i<sub>corr</sub></b>。</p>
<div class="eq">腐蝕速率（mm/year）= (K × i<sub>corr</sub> × EW) / ρ　<span class="small">（K = 3.27×10⁻³，EW = 當量重，ρ = 密度）</span></div>
<h4>鈍化（Passivation）的電化學本質</h4>
<p>不鏽鋼的極化曲線有四個區域：<b>活性溶解 → 鈍化躍遷 → 鈍化區（電流極小）→ 過鈍化/孔蝕</b>。<br>
<b>孔蝕電位 E<sub>pit</sub></b> 越高，材料越耐 Cl⁻ 侵蝕。316 不鏽鋼（加 2% Mo）的 E<sub>pit</sub> 比 304 高約 200 mV，所以海事工程用 316。</p>
<div class="note"><b>PREN 值</b>（耐孔蝕當量）= %Cr + 3.3×%Mo + 16×%N。PREN &gt; 40 稱為「超級不鏽鋼」，用於海水淡化廠、油氣平台。</div>
</div>

<h2 class="un"><span class="n">U5-6</span>升學與職涯指引</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:170px">領域</th><th>會用到的電化學</th><th>相關科系</th></tr></thead>
<tbody>
<tr><td><b>能源材料</b></td><td>鋰電、固態電池、燃料電池、電解水、太陽能</td><td>材料科學、化學工程、電機（能源組）、光電</td></tr>
<tr><td><b>分析化學</b></td><td>伏安法、電位滴定、感測器、質譜聯用</td><td>化學系、生化科技、檢驗、環境工程</td></tr>
<tr><td><b>半導體</b></td><td>電鍍銅互連、CMP（化學機械研磨）、蝕刻</td><td>電子工程、材料、化學工程</td></tr>
<tr><td><b>腐蝕與材料保護</b></td><td>陰極保護、塗層、不鏽鋼、失效分析</td><td>材料、海洋工程、土木、機械</td></tr>
<tr><td><b>生醫</b></td><td>生物感測器、植入電極、電穿孔、神經調控</td><td>醫學工程、生醫、牙醫（材料）</td></tr>
<tr><td><b>環境</b></td><td>廢水電化學處理、重金屬回收、電芬頓</td><td>環境工程、環科</td></tr>
<tr><td><b>地球科學</b></td><td>礦床成因（電位地球化學）、大氣化學（臭氧）</td><td>地科、大氣科學</td></tr>
</tbody></table></div>
<div class="tip"><b>推薦的大學教材：</b>Atkins《Physical Chemistry》第 6 章；Bard & Faulkner《Electrochemical Methods》（電分析聖經）；Zumdahl《Chemistry》第 17 章；中文可參考《電化學原理與方法》。<b>MIT OCW 5.310《Electrochemical Analysis》</b>有完整免費課程。</div>
`;

/* ===================== ref-cheat 速查表 ===================== */
PAGES_B['ref-cheat'] = () => `
<h1 class="page">考前一頁速查表</h1>
<p class="page-sub">考場前 30 分鐘看這一頁就夠了。建議用「🖨 列印」輸出成 A4。</p>

<div class="grid2">
<div class="card"><h4>① 氧化數特例（8 個）</h4>
<ul class="tight">
<li>游離態元素 = <b>0</b>；F 永遠 <b>−1</b></li>
<li>H：一般 <b>+1</b>，金屬氫化物 <b>−1</b></li>
<li>O：一般 <b>−2</b>；過氧 <b>−1</b>；超氧 <b>−1/2</b>；OF₂ <b>+2</b>；O₂F₂ <b>+1</b></li>
<li>S₂O₃²⁻ <b>+2</b>；S₄O₆²⁻ <b>+2.5</b>；FeS₂ 中 S <b>−1</b></li>
<li>Fe₃O₄ <b>+8/3</b>；NaN₃ <b>−1/3</b>；NH₂OH 中 N <b>−1</b></li>
<li>NH₄NO₃ 的 N = <b>−3 / +5</b></li>
<li>有機 C：CH₄ −4 → CH₃OH −2 → HCHO 0 → HCOOH +2 → CO₂ +4</li>
<li>Cl：HClO +1、HClO₂ +3、HClO₃ +5、HClO₄ +7、ClO₂ +4</li>
</ul></div>
<div class="card"><h4>② 平衡三步驟</h4>
<ol class="steps">
<li><b>主要元素</b>原子數平衡</li>
<li><b>O 用 H₂O</b>；<b>H 用 H⁺（酸）／OH⁻（鹼）</b></li>
<li><b>電荷</b>用 e⁻ 平衡 → 最後一定檢查<b>總電荷</b></li>
</ol>
<p class="small">鹼性訣竅：先做酸性，兩邊加等量 OH⁻，H⁺+OH⁻→H₂O，消多餘 H₂O。</p>
<div class="warn"><b>鹼性式不可出現 H⁺；酸性式不可出現 OH⁻。</b></div>
</div>
<div class="card"><h4>③ 當量數 n（N = M × n）</h4>
<ul class="tight">
<li>MnO₄⁻：酸 <b>5</b>／中性弱鹼 <b>3</b>／強鹼 <b>1</b></li>
<li>Cr₂O₇²⁻ <b>6</b>｜H₂O₂ <b>2</b>｜O₂ <b>4</b></li>
<li>HNO₃：濃 <b>1</b>／稀 <b>3</b>／極稀 <b>8</b></li>
<li>H₂C₂O₄ <b>2</b>｜Na₂S₂O₃ <b>1</b>｜KI <b>1</b>｜I₂ <b>2</b></li>
<li>Fe²⁺ <b>1</b>｜SO₃²⁻ <b>2</b>｜H₂S→S <b>2</b>｜H₂S→SO₄²⁻ <b>8</b></li>
<li>N₁V₁ = N₂V₂ ⟺ M₁V₁n₁ = M₂V₂n₂</li>
</ul></div>
<div class="card"><h4>④ 電化學口訣</h4>
<ul class="tight">
<li><b>陽氧陰還</b>（電池與電解池都成立）</li>
<li>電池：陽極 = <b>−</b>、陰極 = <b>+</b>｜電解池：陽極 = <b>+</b>、陰極 = <b>−</b></li>
<li>電池：活性大者當<b>陽極</b>被腐蝕</li>
<li>電解：活性陽極<b>自己溶解</b> → 電鍍</li>
<li>電解混合液：<b>離子氧化力大者先在陰極析出</b></li>
<li>1 F = 96500 C = 1 mol e⁻；Q = I × t</li>
<li>電解水：H₂ : O₂ = <b>2 : 1</b>；1 F → H₂ 11.2 L、O₂ 5.6 L</li>
<li>鹽橋：<b>陽離子→陰極、陰離子→陽極</b></li>
<li>E°<sub>cell</sub> = E°<sub>陰</sub> − E°<sub>陽</sub>（<b>相減，不相加，不乘係數</b>）</li>
<li>ΔG° = −nFE°；log K = nE°/0.0592</li>
</ul></div>
<div class="card"><h4>⑤ 活性序列與冶煉</h4>
<ul class="tight">
<li>K Na Ca Mg Al｜C Zn Cr Fe Ni Sn Pb｜<b>H</b>｜Cu Hg Ag Pt Au</li>
<li>K–Al：<b>電解</b>熔融鹽／氧化物</li>
<li>Zn–Cu：<b>C 或 CO 高溫還原</b></li>
<li>Hg、Ag：<b>直接加熱</b>氧化物</li>
<li>Au、Pt：自然界<b>游離態</b></li>
<li>兩性金屬：<b>Al、Zn、Cr、Sn、Pb</b>（溶於酸也溶於鹼，都放 H₂）</li>
<li>鈍化：<b>Al、Fe、Cr</b> 遇<b>冷濃 HNO₃／濃 H₂SO₄</b></li>
<li>K、Ca、Na 入鹽水：<b>先和水反應</b>，得不到金屬</li>
</ul></div>
<div class="card"><h4>⑥ 滴定要點</h4>
<ul class="tight">
<li>KMnO₄：<b>自身指示劑</b>、用<b>稀 H₂SO₄</b>酸化（不可 HCl、不可 HNO₃）、初期<b>慢滴</b>（Mn²⁺ 自動催化）</li>
<li>K₂Cr₂O₇：<b>一級標準試劑</b>、需外加指示劑、綠→紫紅</li>
<li>碘量法：澱粉<b>近終點才加</b>（否則結果偏高）、<b>中性或弱酸性</b></li>
<li>H₂SO₄ 在滴定中<b>不是氧化劑</b>（只提供 H⁺）</li>
<li>KMnO₄、Na₂S₂O₃ <b>需標定</b>（不是一級標準試劑）</li>
</ul></div>
</div>

<h2><span class="n">附</span>標準還原電位 E° 完整表</h2>
<p class="small">依 E° 由大到小（上＝最強氧化劑，下＝最強還原劑）。<b>點列首可排序</b>。</p>
<div id="cheatE"></div>

<h2><span class="n">附</span>常見半反應式（酸／鹼）</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:70px">環境</th><th>半反應式</th><th class="c" style="width:70px">e⁻</th></tr></thead>
<tbody>
<tr><td rowspan="8" class="c re">酸性</td><td>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</td><td class="c">5</td></tr>
<tr><td>Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O</td><td class="c">6</td></tr>
<tr><td>H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O</td><td class="c">2</td></tr>
<tr><td>H₂O₂ → O₂ + 2H⁺ + 2e⁻</td><td class="c">2</td></tr>
<tr><td>NO₃⁻ + 4H⁺ + 3e⁻ → NO + 2H₂O</td><td class="c">3</td></tr>
<tr><td>NO₃⁻ + 2H⁺ + e⁻ → NO₂ + H₂O</td><td class="c">1</td></tr>
<tr><td>O₂ + 4H⁺ + 4e⁻ → 2H₂O</td><td class="c">4</td></tr>
<tr><td>C₂O₄²⁻ → 2CO₂ + 2e⁻</td><td class="c">2</td></tr>
<tr><td rowspan="4" class="c ox">鹼性</td><td>MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂↓ + 4OH⁻</td><td class="c">3</td></tr>
<tr><td>MnO₄⁻ + e⁻ → MnO₄²⁻（強鹼）</td><td class="c">1</td></tr>
<tr><td>ClO⁻ + H₂O + 2e⁻ → Cl⁻ + 2OH⁻</td><td class="c">2</td></tr>
<tr><td>O₂ + 2H₂O + 4e⁻ → 4OH⁻</td><td class="c">4</td></tr>
<tr><td rowspan="4" class="c acc">通用</td><td>Fe²⁺ → Fe³⁺ + e⁻</td><td class="c">1</td></tr>
<tr><td>I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻</td><td class="c">2</td></tr>
<tr><td>2X⁻ → X₂ + 2e⁻（X = Cl、Br、I）</td><td class="c">2</td></tr>
<tr><td>2H₂O + 2e⁻ → H₂ + 2OH⁻（中性/鹼性）</td><td class="c">2</td></tr>
</tbody></table></div>
`;

/* ===================== ref-color 顏色速記 ===================== */
PAGES_B['ref-color'] = () => `
<h1 class="page">顏色・現象速記表</h1>
<p class="page-sub">大考很愛考「溶液顏色變化」與「可觀察現象」。這一頁把它們全部集中。</p>

<h2><span class="n">1</span>離子與化合物的顏色</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">物種</th><th class="c" style="width:120px">顏色</th><th>備註／出現場合</th></tr></thead>
<tbody>
<tr><td>MnO₄⁻</td><td class="c"><b>深紫</b></td><td>KMnO₄ 溶液；滴定時<b>自身指示劑</b></td></tr>
<tr><td>MnO₄²⁻</td><td class="c"><b>墨綠</b></td><td>強鹼中 MnO₄⁻ 得 1e⁻；酸化立即歧化</td></tr>
<tr><td>MnO₂</td><td class="c"><b>棕黑沉澱</b></td><td>中性/弱鹼 KMnO₄ 的還原產物；H₂O₂ 分解的催化劑</td></tr>
<tr><td>Mn²⁺</td><td class="c">極淡粉（近似<b>無色</b>）</td><td>酸性 KMnO₄ 的還原產物 ⇒ 紫色褪去</td></tr>
<tr><td>Cr₂O₇²⁻</td><td class="c"><b>橘紅</b></td><td>K₂Cr₂O₇；酒測、滴定</td></tr>
<tr><td>CrO₄²⁻</td><td class="c"><b>黃</b></td><td>K₂CrO₄；加鹼使 Cr₂O₇²⁻ 轉為 CrO₄²⁻（<b>非氧還</b>）</td></tr>
<tr><td>Cr³⁺</td><td class="c"><b>綠</b>（或紫）</td><td>Cr₂O₇²⁻ 的還原產物；酒測由橘變綠</td></tr>
<tr><td>Cr(OH)₃ / Cr(OH)₄⁻</td><td class="c">灰綠沉澱／綠溶液</td><td><b>兩性</b>：溶於酸也溶於過量鹼</td></tr>
<tr><td>Fe²⁺</td><td class="c"><b>淺綠</b></td><td>FeSO₄ 溶液</td></tr>
<tr><td>Fe³⁺</td><td class="c"><b>黃褐</b></td><td>FeCl₃ 溶液；水解呈酸性</td></tr>
<tr><td>Fe(OH)₂</td><td class="c">白綠沉澱</td><td>迅速被空氣氧化成 Fe(OH)₃</td></tr>
<tr><td>Fe(OH)₃</td><td class="c"><b>紅褐沉澱</b></td><td>鐵鏽的前驅物</td></tr>
<tr><td>Fe(SCN)²⁺</td><td class="c"><b>血紅</b></td><td>Fe³⁺ 的鑑定（<b>只與 Fe³⁺</b>，Fe²⁺ 不顯色）</td></tr>
<tr><td>[Fe(CN)₆]³⁻／Fe²⁺ → 滕氏藍</td><td class="c"><b>深藍沉澱</b></td><td>Fe²⁺ 的鑑定</td></tr>
<tr><td>[Fe(CN)₆]⁴⁻／Fe³⁺ → 普魯士藍</td><td class="c"><b>深藍沉澱</b></td><td>Fe³⁺ 的鑑定</td></tr>
<tr><td>Cu²⁺</td><td class="c"><b>藍</b></td><td>CuSO₄；[Cu(H₂O)₄]²⁺</td></tr>
<tr><td>[Cu(NH₃)₄]²⁺</td><td class="c"><b>深藍（銅氨）</b></td><td>Cu(OH)₂ 溶於過量氨水</td></tr>
<tr><td>Cu⁺</td><td class="c">無色（水中不安定）</td><td>歧化成 Cu + Cu²⁺；穩定於 CuCl、Cu₂O、[Cu(CN)₂]⁻</td></tr>
<tr><td>Cu(OH)₂</td><td class="c"><b>藍絮狀</b></td><td>NaOH + Cu²⁺；加熱變黑（CuO）</td></tr>
<tr><td>CuO / Cu₂O</td><td class="c"><b>黑</b> / <b>紅</b></td><td>多倫試劑、斐林試液與醛反應生成 Cu₂O 紅沉澱</td></tr>
<tr><td>[CuCl₄]²⁻</td><td class="c">黃綠</td><td>濃 HCl 中；加水變回藍色</td></tr>
<tr><td>Ni²⁺</td><td class="c"><b>綠</b></td><td>NiSO₄；[Ni(NH₃)₆]²⁺ 為深藍紫</td></tr>
<tr><td>Co²⁺</td><td class="c"><b>粉紅</b></td><td>[Co(H₂O)₆]²⁺；[CoCl₄]²⁻ 為<b>藍</b>（濕度指示劑）</td></tr>
<tr><td>Ag⁺</td><td class="c">無色</td><td>AgCl 白、AgBr 淡黃、AgI 黃（<b>皆不溶於稀酸</b>）</td></tr>
<tr><td>I₂（水）</td><td class="c"><b>黃褐</b></td><td>溶解度低；加 KI 形成 I₃⁻ 增加溶解度</td></tr>
<tr><td>I₂（有機溶劑/蒸氣）</td><td class="c"><b>紫</b></td><td>CCl₄、己烷層呈紫；蒸氣紅紫</td></tr>
<tr><td>I₂ + 澱粉</td><td class="c"><b>深藍</b></td><td>碘量法指示劑（加熱會褪色，冷卻復現）</td></tr>
<tr><td>Cl₂</td><td class="c"><b>黃綠</b></td><td>刺激氣味、有毒</td></tr>
<tr><td>Br₂</td><td class="c"><b>紅棕</b>（液）</td><td>常溫唯一液態非金屬</td></tr>
<tr><td>NO₂</td><td class="c"><b>紅棕</b></td><td>濃硝酸＋Cu；光化學煙霧</td></tr>
<tr><td>NO</td><td class="c">無色</td><td>稀硝酸＋Cu；<b>遇空氣立即變 NO₂（紅棕）</b></td></tr>
<tr><td>SO₂</td><td class="c">無色</td><td>刺激氣味；能使<b>品紅褪色</b>（加熱復色）</td></tr>
<tr><td>H₂S</td><td class="c">無色</td><td>臭雞蛋味；遇 Pb²⁺ 生<b>黑色 PbS</b></td></tr>
</tbody></table></div>

<h2><span class="n">2</span>十個必背「現象描述」</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:230px">實驗</th><th>可觀察現象</th></tr></thead>
<tbody>
<tr><td>Zn 片放入 CuSO₄(aq)</td><td>鋅片表面附<b>紅棕色銅</b>；溶液<b>藍色變淡</b>（終至無色）；放熱</td></tr>
<tr><td>Cu 線放入 AgNO₃(aq)</td><td>銅線表面長出<b>銀白色樹枝狀結晶</b>；溶液<b>由無色變藍</b></td></tr>
<tr><td>Fe 釘放入 CuSO₄(aq)</td><td>鐵釘附<b>紅銅</b>；溶液由藍變<b>淺綠</b>（FeSO₄）</td></tr>
<tr><td>Na 粒投入水中（加酚酞）</td><td>鈉<b>熔成小球</b>在水面<b>快速游動</b>、嘶嘶聲、產生無色氣體（H₂ 可能燃燒）；溶液<b>變紅</b>（NaOH）</td></tr>
<tr><td>Mg 帶在空氣中點燃</td><td><b>強烈白光</b>（不可直視）、生成白色粉末 MgO</td></tr>
<tr><td>Mg 帶在 CO₂ 中燃燒</td><td>持續燃燒，生成<b>白色 MgO ＋ 黑色碳粒</b> ⇒ CO₂ 滅火器無效</td></tr>
<tr><td>KMnO₄(酸) 滴定 Fe²⁺</td><td><b>紫色滴入即褪</b>；終點時<b>一滴使溶液呈持久淡粉紅</b></td></tr>
<tr><td>KMnO₄(酸) 滴定 H₂C₂O₄</td><td>紫色褪去＋<b>冒氣泡（CO₂）</b>；初期慢、後期快（Mn²⁺ 自動催化）</td></tr>
<tr><td>H₂O₂ + MnO₂</td><td><b>劇烈冒泡（O₂）</b>；帶火星的木條<b>復燃</b>；MnO₂ 質量不變</td></tr>
<tr><td>碘量法滴定</td><td>加澱粉後<b>深藍</b>；滴定至<b>藍色恰好消失（無色）</b></td></tr>
<tr><td>Cu + 濃 HNO₃</td><td>劇烈反應、產生<b>紅棕色 NO₂</b>、溶液變<b>藍綠</b>（Cu(NO₃)₂ 濃時呈綠）</td></tr>
<tr><td>Cu + 稀 HNO₃</td><td>緩慢產生<b>無色 NO</b>，<b>遇瓶口空氣變紅棕</b>；溶液變藍</td></tr>
<tr><td>Cu + 熱濃 H₂SO₄</td><td>產生<b>刺激氣味 SO₂</b>（使品紅褪色）；溶液變藍</td></tr>
<tr><td>電解 KI＋澱粉＋酚酞（U 型管）</td><td>陽極（+）附近<b>變藍</b>（I₂）；陰極（−）附近<b>變紅</b>（OH⁻，酚酞）＋氣泡</td></tr>
<tr><td>電解 CuSO₄（石墨電極）</td><td>陰極附<b>紅銅</b>；陽極<b>冒氣泡（O₂）</b>；溶液藍色變淡、變酸</td></tr>
<tr><td>鋁熱劑（Al + Fe₂O₃）</td><td><b>劇烈火花、白煙</b>，生成<b>熔融鐵水</b>（溫度 &gt;2500 ℃）</td></tr>
</tbody></table></div>
`;

/* ===================== ref-trap 易錯陷阱 ===================== */
PAGES_B['ref-trap'] = () => `
<h1 class="page">二十大易錯陷阱</h1>
<p class="page-sub">每一條都是歷屆大考「錯誤率最高」的選項。考前一晚掃一次，能多拿 5–8 分。</p>

<div class="tbl-wrap"><table>
<thead><tr><th class="c" style="width:44px">#</th><th style="width:250px">錯誤想法</th><th>正確觀念</th></tr></thead>
<tbody>
<tr><td class="c">1</td><td class="ox">「氧化劑是被氧化的物質」</td><td>氧化劑是<b>被還原</b>的物質（自己氧化數<b>下降</b>）。「劑」看它對別人做了什麼。</td></tr>
<tr><td class="c">2</td><td class="ox">「酸鹼中和、沉澱反應也是氧化還原」</td><td>HCl + NaOH、AgNO₃ + NaCl 各元素氧化數<b>全不變</b> ⇒ <b>不是</b>氧化還原。</td></tr>
<tr><td class="c">3</td><td class="ox">「KMnO₄ 滴定中的 H₂SO₄ 是氧化劑」</td><td>H₂SO₄ 中 S 為 +6，反應前後不變 ⇒ <b>只提供酸性環境</b>，不是氧化劑也不是還原劑。</td></tr>
<tr><td class="c">4</td><td class="ox">「2CrO₄²⁻ + 2H⁺ → Cr₂O₇²⁻ + H₂O 是氧化還原」</td><td>Cr 都是 <b>+6</b> ⇒ 這是<b>酸鹼反應</b>（黃 ⇌ 橘）。超經典陷阱。</td></tr>
<tr><td class="c">5</td><td class="ox">「氧化數一定是整數」</td><td>可以是<b>分數</b>（平均值）：S₂O₃²⁻ +2、Fe₃O₄ +8/3、KO₂ −1/2、C₃H₈ −8/3。</td></tr>
<tr><td class="c">6</td><td class="ox">「H₂O₂ 中 O 是 −2」</td><td>過氧化物中 O 是 <b>−1</b>。這正是 H₂O₂ 能歧化的原因。</td></tr>
<tr><td class="c">7</td><td class="ox">「NaH 中 H 是 +1」</td><td>金屬氫化物中 H 是 <b>−1</b> ⇒ KH + H₂O → KOH + H₂ 是<b>歸中反應</b>。</td></tr>
<tr><td class="c">8</td><td class="ox">「Na 放入 CuSO₄ 會置換出 Cu」</td><td>K、Ca、Na <b>先與水反應</b>生成 NaOH，再與 Cu²⁺ 生成 <b>Cu(OH)₂ 藍色沉澱</b>，得不到 Cu。</td></tr>
<tr><td class="c">9</td><td class="ox">「稀酸能氧化 Cu、Ag」</td><td>稀 HCl／稀 H₂SO₄ 的氧化力來自 <b>H⁺</b>，只能氧化<b>氫前金屬</b>。Cu、Ag 需<b>濃/稀 HNO₃、熱濃 H₂SO₄ 或王水</b>。</td></tr>
<tr><td class="c">10</td><td class="ox">「所有 16 mol HCl 都被氧化」</td><td>2KMnO₄ + 16HCl → … + 5Cl₂：只有 <b>10 mol</b> 被氧化，其餘 6 mol 只是提供 Cl⁻ 與酸性環境。</td></tr>
<tr><td class="c">11</td><td class="ox">「平衡式檢查原子數就好」</td><td>離子方程式<b>必須檢查總電荷</b>！很多錯誤只有在電荷檢查時才抓得到。</td></tr>
<tr><td class="c">12</td><td class="ox">「鹼性半反應式可以寫 H⁺」</td><td>鹼性中<b>不可出現 H⁺</b>（會立即與 OH⁻ 反應）；酸性中<b>不可出現 OH⁻</b>。</td></tr>
<tr><td class="c">13</td><td class="ox">「電池的陽極是正極」</td><td>電池的陽極是<b>負極</b>；電解池的陽極才是<b>正極</b>。但「陽極＝氧化」對兩者都成立。</td></tr>
<tr><td class="c">14</td><td class="ox">「電子會通過鹽橋／溶液」</td><td>電子<b>只走外電路（導線）</b>；溶液與鹽橋內是<b>離子</b>移動。</td></tr>
<tr><td class="c">15</td><td class="ox">「E° 可以相加，或乘上係數」</td><td>E° 是<b>強度性質</b>：不可相加、不隨係數改變。E°<sub>cell</sub> = E°<sub>陰</sub> <b>−</b> E°<sub>陽</sub>。跨步電位要用 <b>ΔG° = −nFE°</b> 換算。</td></tr>
<tr><td class="c">16</td><td class="ox">「電解 NaCl 水溶液陽極一定出 O₂」</td><td><b>濃</b> NaCl 時因 O₂ 的<b>過電位大</b>，陽極出 <b>Cl₂</b>；稀溶液才出 O₂。</td></tr>
<tr><td class="c">17</td><td class="ox">「電解 CuSO₄ 陽極出 SO₂」</td><td>SO₄²⁻ 中 S 已是最高價 +6，<b>不能再被氧化</b> ⇒ 陽極由 H₂O 放電出 <b>O₂</b>，溶液變酸。</td></tr>
<tr><td class="c">18</td><td class="ox">「鉛蓄電池放電時硫酸濃度上升」</td><td>Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O ⇒ 放電<b>消耗硫酸、生成水</b> ⇒ 濃度<b>下降</b>、比重降低。</td></tr>
<tr><td class="c">19</td><td class="ox">「馬口鐵刮傷後錫會保護鐵」</td><td>Sn 活性 ＜ Fe ⇒ <b>Fe 當陽極先被腐蝕</b>，刮傷後生鏽<b>更快</b>。（白鐵的 Zn 才有保護效果）</td></tr>
<tr><td class="c">20</td><td class="ox">「E° &gt; 0 的反應一定會很快發生」</td><td>熱力學 ≠ 動力學。2H₂ + O₂ → 2H₂O 的 E° = +1.23 V，但常溫下<b>可放置數年不反應</b>（活化能高）。</td></tr>
</tbody></table></div>

<h2><span class="n">附</span>另外 8 個「細節級」陷阱</h2>
<div class="card">
<ol class="steps">
<li>KMnO₄ 滴定<b>不可用 HCl 酸化</b>：MnO₄⁻（1.51 V）會氧化 Cl⁻（1.36 V）⇒ 結果<b>偏高</b>。</li>
<li>碘量法的澱粉<b>過早加入</b>⇒ 形成難解離錯合物 ⇒ 終點延後 ⇒ 結果<b>偏高</b>。</li>
<li>滴定用的<b>錐形瓶不可用待測液潤洗</b>（會讓待測物變多 ⇒ 結果偏高）；<b>滴定管則必須</b>用待裝液潤洗。</li>
<li>Na₂S₂O₃ <b>不是一級標準試劑</b>（易被空氣、細菌分解），需先標定，並加 Na₂CO₃、存於棕色瓶。</li>
<li>K₂Cr₂O₇ <b>是</b>一級標準試劑（穩定、不吸濕、可直接配製精確濃度）。</li>
<li>「氧化數上升總量 ＝ 下降總量」<b>永遠成立</b>——所以任何選項說「總氧化數改變」都是錯的（102 指考多選 19）。</li>
<li>H₂S、I⁻、SO₃²⁻、Fe²⁺ <b>不能與</b> MnO₄⁻、Cr₂O₇²⁻、NO₃⁻(酸)、Fe³⁺ <b>共存</b>（會反應）。</li>
<li>「歧化」要求該元素處於<b>中間價</b>；處於<b>最高價</b>（如 SO₄²⁻、HClO₄）只能當氧化劑、<b>最低價</b>（如 S²⁻、I⁻）只能當還原劑。</li>
</ol>
</div>
`;

/* ===================== ref-check 檢核清單 ===================== */
PAGES_B['ref-check'] = () => `
<h1 class="page">自我檢核清單</h1>
<p class="page-sub">點一下方框打勾，進度會自動儲存。全部能回答就代表這一章 OK 了。</p>

<h2><span class="n">Part A</span>氧化還原（12 項）</h2>
<div class="card"><ul class="chk" data-checklist="redox">
<li>能在 30 秒內說出氧化數的 5 條規則與 O、H、Cl、S 的所有例外</li>
<li>能計算分數氧化數（S₂O₃²⁻、Fe₃O₄、KO₂、C₃H₈）並說明是「平均值」</li>
<li>能用「逐碳法」計算有機物中各碳的氧化數</li>
<li>看到任何反應式，能判斷是否為氧化還原，並指出氧化劑／還原劑／氧化產物／還原產物</li>
<li>能分辨歧化與歸中反應，並各舉 3 例</li>
<li>能說明 H₂O₂ 的三重身份與判斷依據</li>
<li>能列出 HNO₃ 濃／稀／極稀的還原產物，並解釋鈍化與王水</li>
<li>能用半反應法在酸性與鹼性條件下平衡任意離子方程式，並檢查電荷</li>
<li>能用氧化數法（升降交叉）快速平衡反應式，包含有機物</li>
<li>能背出 MnO₄⁻、Cr₂O₇²⁻、H₂O₂、NO₃⁻、ClO⁻ 在各條件下的還原產物與電子數</li>
<li>能解釋 KMnO₄ 滴定的三大操作要點（自身指示劑、稀 H₂SO₄ 酸化、初期慢滴）</li>
<li>能完成碘量法的莫耳換算鏈（氧化劑 → I₂ → S₂O₃²⁻）並計算有效氯</li>
</ul></div>

<h2 class="ec"><span class="n">Part B</span>電化學（14 項）</h2>
<div class="card"><ul class="chk" data-checklist="ec">
<li>能默寫金屬活性序列，並說明「元素還原力」與「其離子氧化力」的反向關係</li>
<li>能由活性序列推導冶煉方法（電解／還原／加熱／游離態）</li>
<li>能預測置換反應是否發生，並說明 K、Ca、Na 投入鹽水的結果</li>
<li>能畫出鋅銅電池，標出陽極／陰極／正負極／電子流向／鹽橋離子流向</li>
<li>能說明鹽橋的三大功能，以及抽掉鹽橋會怎樣</li>
<li>能正確書寫電池符號（cell notation），包含需要 Pt 惰性電極的情況</li>
<li>能寫出標準還原電位表的讀法，並用 E°<sub>cell</sub> = E°<sub>陰</sub> − E°<sub>陽</sub> 判斷自發性</li>
<li>能用 ΔG° = −nFE° 與 log K = nE°/0.0592 完成三量互換</li>
<li>能用 Q = I×t 與 1 F = 96500 C 完成電解、電鍍的定量計算（含串聯）</li>
<li>能列出電解 CuSO₄、NaCl、稀 H₂SO₄、熔融 NaCl、熔融 Al₂O₃ 的兩極產物</li>
<li>能說明電鍍三原則，並區分「電鍍」與「用惰性陽極電解」的濃度變化</li>
<li>能寫出鉛蓄電池、乾電池、鹼性電池、鋰離子、氫氧燃料電池（酸/鹼）的兩極半反應</li>
<li>能說明充電時的接線方式（負接負、正接正）與硫酸比重變化</li>
<li>能解釋生鏽機制、五種防蝕方法，以及白鐵與馬口鐵刮傷後的差異</li>
</ul></div>

<h2 class="un"><span class="n">大學延伸</span>（6 項）</h2>
<div class="card"><ul class="chk" data-checklist="uni">
<li>能寫出能斯特方程式的三種形式，並說明 Q 的寫法（純固液不列入、氣體用分壓）</li>
<li>能計算濃度電池的 E，並說明稀端是陽極、濃端是陰極</li>
<li>能解釋 pH 對 MnO₄⁻ 氧化力的影響（pH 每 +1，E 降約 0.095 V）</li>
<li>能用 ΔG° 相加求「跨步電位」，並說明為什麼 E° 不能直接相加</li>
<li>能讀 Latimer 圖判斷歧化（右 E° ＞ 左 E°），並用 Frost 圖找出最穩定物種與凸點</li>
<li>能說明過電位的四個來源，並用它解釋「電解濃 NaCl 出 Cl₂ 而非 O₂」</li>
</ul></div>

<h2><span class="n">總</span>學習進度總覽</h2>
<div class="card" id="checkSummary"></div>
`;
