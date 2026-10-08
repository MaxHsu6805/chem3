/* content-a.js — 首頁 ＋ Part A 氧化還原（A0–A6） */
import { FIGS } from './figs.js';

export const PAGES_A = {};

/* ===================== HOME ===================== */
PAGES_A.home = () => `
<div class="hero">
  <h1>氧化還原反應 × 電化學</h1>
  <p>高中「選修化學 Ⅳ 第 1 章」完整互動教材：<b>氧化還原</b>與<b>電化學</b>各占一半，附 102 學年度以來大考真題、38 題分級題庫、71 張閃卡、8 個互動工具，以及大學普通化學延伸（能斯特方程式、ΔG–E–K、Latimer／Frost 圖、電極動力學）。</p>
  <div class="badges">
    <span class="badge">📖 20 個知識單元</span>
    <span class="badge">🎨 14 張 SVG 圖解</span>
    <span class="badge">📝 10 題大考真題＋38 題題庫</span>
    <span class="badge">🃏 71 張閃卡</span>
    <span class="badge">🧮 8 個互動工具</span>
    <span class="badge">🎓 5 個大學延伸單元</span>
  </div>
</div>

<h2><span class="n">◎</span>學習儀表板</h2>
<div class="stat-row" id="homeStats"></div>

<div class="card">
<h4>💡 建議學習路徑</h4>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:70px">階段</th><th>做什麼</th><th style="width:190px">對應頁面</th></tr></thead>
<tbody>
<tr><td><b>① 打底</b></td><td>先讀 A0 章地圖＋A1 氧化數，把「氧化數 5 規則＋例外」練到 30 秒內能答</td><td>A0、A1 ＋ <b>氧化數訓練器</b></td></tr>
<tr><td><b>② 觀念</b></td><td>A2 四劑辨析（最容易搞混）、A3 歧化歸中，用訓練器驗證自己是否真的分得清楚</td><td>A2、A3 ＋ <b>四劑辨識訓練</b></td></tr>
<tr><td><b>③ 技術</b></td><td>A4 半反應法逐步練，先用「分步訓練器」把 10 個半反應做到全對</td><td>A4 ＋ <b>半反應式訓練器</b></td></tr>
<tr><td><b>④ 電化學</b></td><td>B0–B7 一次讀完，特別注意「陽氧陰還」與「正負極相反」這兩件事</td><td>B0–B7 ＋ <b>電池互動圖</b></td></tr>
<tr><td><b>⑤ 定量</b></td><td>A6 滴定 ＋ B4 法拉第，用兩個計算機反覆練到不用計算機也能估</td><td>A6、B4 ＋ <b>滴定／法拉第計算機</b></td></tr>
<tr><td><b>⑥ 實戰</b></td><td>先做 10 題大考真題（有官方答案），再做 38 題分級題庫</td><td>歷屆試題兩頁</td></tr>
<tr><td><b>⑦ 延伸</b></td><td>想衝醫學系／化學系／材料系：讀 U1–U5，能斯特與 ΔG 是分科測驗的天花板題</td><td>大學延伸 U1–U5</td></tr>
</tbody></table></div>
</div>

<div class="grid2">
<div class="card"><h4>Part A｜氧化還原（7 單元）</h4>
<ul class="tight">
<li><b>A0</b> 章地圖・關鍵字・三大口訣</li>
<li><b>A1</b> 氧化數：5 規則＋O/H/Cl/S 全部例外</li>
<li><b>A2</b> 氧化劑・還原劑・四劑辨析</li>
<li><b>A3</b> 歧化・歸中・H₂O₂ 三重身份・硝酸產物</li>
<li><b>A4</b> 平衡：半反應法（酸/鹼）・氧化數法</li>
<li><b>A5</b> 活性序列與置換反應</li>
<li><b>A6</b> 氧化還原滴定（KMnO₄／K₂Cr₂O₇／碘量法）</li>
</ul></div>
<div class="card"><h4>Part B｜電化學（8 單元）</h4>
<ul class="tight">
<li><b>B0</b> 電化學全景：陽氧陰還・自發 vs 非自發</li>
<li><b>B1</b> 電化序與標準還原電位 E°</li>
<li><b>B2</b> 電池：構造・鹽橋・電池符號</li>
<li><b>B3</b> 電池電壓・ΔG°・K（含大學延伸）</li>
<li><b>B4</b> 電解與法拉第定律</li>
<li><b>B5</b> 電鍍與精煉</li>
<li><b>B6</b> 商用電池與燃料電池</li>
<li><b>B7</b> 腐蝕與防蝕工程</li>
</ul></div>
</div>

<div class="key"><b>🔑 全章只有一句話：</b><span class="ox">氧化＝失去電子（氧化數上升）</span>，<span class="re">還原＝得到電子（氧化數下降）</span>；兩者必定同時發生，且<b>失去電子總數＝得到電子總數</b>。<br>
不管是平衡反應式、滴定計算、電池電壓、電解產量，全部都是這句話的數學化。</div>
`;

/* ===================== A0 章地圖 ===================== */
PAGES_A['r-over'] = () => `
<h1 class="page">A0｜章地圖・關鍵字・口訣</h1>
<p class="page-sub">先建立全局觀，再往下鑽。這一頁是「目錄頁」，讀完只要 5 分鐘。</p>
${FIGS.mindmap}

<h2><span class="n">A0-1</span>氧化還原與電化學是「同一件事的兩面」</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">面向</th><th>氧化還原（Part A）</th><th>電化學（Part B）</th></tr></thead>
<tbody>
<tr><td><b>關注點</b></td><td>電子「轉了多少」——氧化數變化、反應式平衡、莫耳計量</td><td>電子「往哪流」——電極、電路、電壓、電量</td></tr>
<tr><td><b>核心工具</b></td><td>氧化數、半反應法、活性序列</td><td>標準還原電位 E°、法拉第常數 F、能斯特方程式</td></tr>
<tr><td><b>能量</b></td><td>反應熱、放熱/吸熱</td><td>ΔG = −nFE，可轉換成電功</td></tr>
<tr><td><b>典型考題</b></td><td>「求係數」「指出氧化劑」「滴定濃度」</td><td>「哪一極質量增加」「析出幾克」「E° 多少」</td></tr>
<tr><td><b>共通點</b></td><td colspan="2"><b>陽極永遠氧化、陰極永遠還原；得失電子數永遠相等</b>——這兩條在兩部分都適用</td></tr>
</tbody></table></div>

<h2><span class="n">A0-2</span>關鍵字雲（考卷高頻詞）</h2>
<div class="card">
<span class="pill">氧化數 oxidation number</span><span class="pill">氧化劑 oxidizing agent</span><span class="pill">還原劑 reducing agent</span>
<span class="pill">被氧化 oxidized</span><span class="pill">被還原 reduced</span><span class="pill">半反應 half-reaction</span>
<span class="pill">歧化 disproportionation</span><span class="pill">歸中 comproportionation</span><span class="pill">活性序列 activity series</span>
<span class="pill">電化序 electrochemical series</span><span class="pill">標准還原電位 E°</span><span class="pill">置換反應 displacement</span>
<span class="pill">氧化還原滴定</span><span class="pill">當量莫耳濃度 N</span><span class="pill">自身指示劑</span><span class="pill">陽極 anode</span>
<span class="pill">陰極 cathode</span><span class="pill">鹽橋 salt bridge</span><span class="pill">電池符號 cell notation</span>
<span class="pill">法拉第常數 96500 C</span><span class="pill">電解 electrolysis</span><span class="pill">電鍍 electroplating</span>
<span class="pill">鈍化 passivation</span><span class="pill">犧牲陽極</span><span class="pill">陰極保護</span><span class="pill">燃料電池</span>
<span class="pill">能斯特方程式</span><span class="pill">Latimer／Frost 圖</span>
</div>

<h2><span class="n">A0-3</span>必背五大口訣</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:170px">口訣</th><th>意思</th><th style="width:230px">什麼時候用</th></tr></thead>
<tbody>
<tr><td><b>OIL RIG</b></td><td><u>O</u>xidation <u>I</u>s <u>L</u>oss／<u>R</u>eduction <u>I</u>s <u>G</u>ain（失電子＝氧化、得電子＝還原）</td><td>任何時候的定義題</td></tr>
<tr><td><b>升失氧還原劑</b></td><td>氧化數<b>升</b>高 → <b>失</b>電子 → 被<b>氧</b>化 → 自己是<b>還原劑</b></td><td>找四劑（最常錯）</td></tr>
<tr><td><b>陽氧陰還</b></td><td>陽極永遠氧化、陰極永遠還原（電池與電解池都一樣）</td><td>所有電化學題</td></tr>
<tr><td><b>劑看別人，被看自己</b></td><td>「氧化<b>劑</b>」＝讓別人氧化＝自己被還原；「<b>被</b>氧化」＝自己氧化數上升</td><td>文字敘述題</td></tr>
<tr><td><b>酸加 H⁺、鹼加 OH⁻；缺 O 加 H₂O</b></td><td>半反應法補原子的規則</td><td>平衡反應式</td></tr>
</tbody></table></div>

<h2><span class="n">A0-4</span>這一章在大考占多少分？</h2>
<div class="card">
<p>依翰林出版對 <b>108–112 年指考／分科測驗</b>的統計，「選修化學 Ⅳ 第 1 章 氧化還原反應與電化學」配分如下：</p>
<div class="tbl-wrap"><table>
<thead><tr><th>年度</th><th class="c">108</th><th class="c">109</th><th class="c">110</th><th class="c">111</th><th class="c">112</th><th class="c">五年平均</th></tr></thead>
<tbody>
<tr><td><b>本章配分（滿分 100）</b></td><td class="c">15</td><td class="c">8</td><td class="c">14</td><td class="c">12</td><td class="c">10</td><td class="c"><b>11.8</b></td></tr>
</tbody></table></div>
<p class="small">資料來源：翰林出版《112 分科測驗化學科精彩解析》試題分析表（依大考中心公布內容）。<br>
<b>解讀：</b>本章平均占 <b>約 12%</b>，是選修化學中配分第二高的章節（僅次於有機化學的 22.4%），且<b>幾乎每年必考 2–4 題</b>。學測端則以「氧化還原判斷＋活性序列＋電解」為主，難度中等但陷阱多。</p>
<div class="note"><b>命題趨勢：</b>108 課綱後，本章常與<b>探究與實作</b>結合（如 112 分科第 20–22 題：不同電極材料電解水的產氣效率、鹼性溶液中 NO₃⁻ 還原成 NH₂OH 的半反應式）。<b>會畫圖、會讀表、會寫半反應式</b>比死背更重要。</div>
</div>
`;

/* ===================== A1 氧化數 ===================== */
PAGES_A['r-on'] = () => `
<h1 class="page">A1｜氧化數（Oxidation Number）</h1>
<p class="page-sub">氧化數是全章的「記帳工具」。算得又快又準，後面所有題目都贏一半。</p>

<h2><span class="n">A1-1</span>定義與三個觀念</h2>
<div class="card">
<p><b>定義：</b>假定化合物中<b>鍵結電子全部分配給電負度較大的原子</b>後，該原子所帶的「假想電荷數」。</p>
<ul class="tight">
<li>它<b>不是真實電荷</b>，只是記帳工具；可以是整數、<b>分數</b>（平均值）或 0。</li>
<li>同一化合物中，同一元素<b>可以有不同的氧化數</b>（NH₄NO₃ 的 N：−3 與 +5）。</li>
<li>分子中所有原子氧化數總和 ＝ <b>0</b>；多原子離子 ＝ <b>離子電荷</b>。</li>
</ul>
</div>
${FIGS.onflow}

<h2><span class="n">A1-2</span>規則總表（含所有例外）</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:118px">元素</th><th style="width:100px">一般值</th><th>例外（必考）</th><th style="width:230px">範例</th></tr></thead>
<tbody>
<tr><td>游離態元素</td><td class="c"><b>0</b></td><td>—</td><td>Na、Mg、O₂、O₃、Cl₂、S₈、P₄、C(石墨)、Au</td></tr>
<tr><td>單原子離子</td><td class="c">＝電荷</td><td>—</td><td>Na⁺=+1、S²⁻=−2、Fe³⁺=+3</td></tr>
<tr><td>IA 鹼金屬</td><td class="c"><b>+1</b></td><td>無例外</td><td>NaCl、K₂Cr₂O₇、LiAlH₄ 中 Li</td></tr>
<tr><td>IIA 鹼土金屬</td><td class="c"><b>+2</b></td><td>無例外</td><td>CaCO₃、MgO、BaSO₄</td></tr>
<tr><td>Al / Zn / Ag</td><td class="c">+3 / +2 / +1</td><td>無例外</td><td>Al₂O₃、ZnSO₄、AgNO₃</td></tr>
<tr><td><b>H</b></td><td class="c"><b>+1</b></td><td>與<b>金屬</b>結合（金屬氫化物）＝ <b>−1</b></td><td>NaH、CaH₂、LiAlH₄、NaBH₄ 中 H = −1</td></tr>
<tr><td><b>O</b></td><td class="c"><b>−2</b></td><td>① 過氧化物 <b>−1</b> ② 超氧化物 <b>−1/2</b> ③ 與 F 結合為<b>正</b></td><td>H₂O₂、Na₂O₂、BaO₂（−1）；KO₂（−1/2）；<b>OF₂ 中 O=+2</b>、O₂F₂ 中 O=+1</td></tr>
<tr><td><b>F</b></td><td class="c"><b>−1</b></td><td>永遠 −1（電負度最大，無例外）</td><td>HF、CaF₂、SF₆、NF₃</td></tr>
<tr><td>Cl、Br、I</td><td class="c">−1</td><td>與<b>氧</b>或<b>更電負元素</b>結合時為<b>正</b>，且有多種價態</td><td>HClO(+1)、HClO₂(+3)、HClO₃(+5)、HClO₄(+7)、ClO₂(+4)、ICl 中 I=+1、Cl=−1</td></tr>
<tr><td>S</td><td class="c">−2（硫化物）</td><td>含氧酸根中為正；<b>連四硫酸根、硫代硫酸根有分數</b></td><td>SO₂(+4)、SO₄²⁻(+6)、<b>S₂O₃²⁻(+2)</b>、<b>S₄O₆²⁻(+2.5)</b>、FeS₂ 中 S=−1</td></tr>
<tr><td>N</td><td class="c">−3（NH₃、NH₄⁺）</td><td>−3 → +5 全部都有</td><td>N₂O(+1)、NO(+2)、N₂O₃(+3)、NO₂(+4)、N₂O₅(+5)、NH₂OH(−1)、NaN₃(−1/3)</td></tr>
<tr><td>C</td><td class="c">依計算</td><td>有機物需<b>逐碳分別計算</b></td><td>CH₄(−4)、CH₃OH(−2)、HCHO(0)、HCOOH(+2)、CO₂(+4)、C₂O₄²⁻(+3)</td></tr>
<tr><td>Fe</td><td class="c">+2 / +3</td><td><b>Fe₃O₄ ＝ FeO·Fe₂O₃</b>，平均 <b>+8/3</b></td><td>FeSO₄(+2)、Fe₂(SO₄)₃(+3)、K₃[Fe(CN)₆](+3)、K₄[Fe(CN)₆](+2)</td></tr>
<tr><td>P</td><td class="c">+5（磷酸）</td><td>磷化物 −3、單質 P₄ = 0</td><td>PH₃(−3)、H₃PO₃(+3)、H₃PO₂(+1)</td></tr>
</tbody></table></div>

<h2><span class="n">A1-3</span>分數氧化數＝「平均值」</h2>
<div class="card">
<div class="tbl-wrap"><table>
<thead><tr><th>物質</th><th class="c">平均氧化數</th><th>實際上各原子的氧化數</th></tr></thead>
<tbody>
<tr><td>S₂O₃²⁻（硫代硫酸根）</td><td class="c"><b>+2</b></td><td>中心 S = <b>+6</b>、端 S = <b>−2</b>（結構類似 SO₄²⁻，一個 O 被 S 取代）</td></tr>
<tr><td>S₄O₆²⁻（連四硫酸根）</td><td class="c"><b>+2.5</b></td><td>兩個端 S = 0、兩個中心 S = +5</td></tr>
<tr><td>Fe₃O₄</td><td class="c"><b>+8/3</b></td><td>1 個 Fe²⁺ ＋ 2 個 Fe³⁺</td></tr>
<tr><td>C₃H₈（丙烷）</td><td class="c"><b>−8/3</b></td><td>兩個端 C = −3、中間 C = −2</td></tr>
<tr><td>KO₂（超氧化鉀）</td><td class="c"><b>O = −1/2</b></td><td>O₂⁻ 超氧離子，含一個未成對電子（順磁性）</td></tr>
<tr><td>NaN₃（疊氮化鈉）</td><td class="c"><b>N = −1/3</b></td><td>N₃⁻ 中三個 N 不等價，平均 −1/3</td></tr>
</tbody></table></div>
<div class="warn"><b>考題若問「個別原子」</b>就要小心：例如問 S₂O₃²⁻ 中「與 O 相連的 S」，答案是 +6 而不是 +2。</div>
</div>

<h2><span class="n">A1-4</span>有機物的「逐碳」計算法</h2>
<div class="card">
<p><b>規則：</b>與 C 相連的 <b>H 記 +1</b>（C 記 −1）、<b>O 記 −2</b>（單鍵 C 記 +1、雙鍵 C 記 +2）、<b>C–C 鍵記 0</b>、與 N 相連 C 記 0（N 電負度 3.04 &gt; C 2.55，故 C–N 單鍵 C 記 +1）。</p>
<div class="tbl-wrap"><table>
<thead><tr><th>物質</th><th>逐碳</th><th class="c">平均</th><th>物質</th><th>逐碳</th><th class="c">平均</th></tr></thead>
<tbody>
<tr><td>CH₄</td><td>−4</td><td class="c"><b>−4</b></td><td>CH₃CH₂OH</td><td>CH₃−：<b>−3</b>；−CH₂OH：<b>−1</b></td><td class="c"><b>−2</b></td></tr>
<tr><td>CH₃OH</td><td>−2</td><td class="c"><b>−2</b></td><td>CH₃CHO</td><td>CH₃−：<b>−3</b>；−CHO：<b>+1</b></td><td class="c"><b>−1</b></td></tr>
<tr><td>HCHO（甲醛）</td><td>0</td><td class="c"><b>0</b></td><td>CH₃COOH</td><td>CH₃−：<b>−3</b>；−COOH：<b>+3</b></td><td class="c"><b>0</b></td></tr>
<tr><td>HCOOH（甲酸）</td><td>+2</td><td class="c"><b>+2</b></td><td>C₂H₄（乙烯）</td><td>各 C = −2</td><td class="c"><b>−2</b></td></tr>
<tr><td>CO₂</td><td>+4</td><td class="c"><b>+4</b></td><td>C₂H₂（乙炔）</td><td>各 C = −1</td><td class="c"><b>−1</b></td></tr>
</tbody></table></div>
<div class="note"><b>醇 → 醛 → 羧酸 的氧化階梯：</b>−CH₂OH（−1）→ −CHO（+1）→ −COOH（+3），每升一階失去 2 個電子。這正是 K₂Cr₂O₇ 或 KMnO₄ 氧化乙醇的歷程，也是<b>酒駕偵測</b>的化學基礎。</div>
</div>

<h2><span class="n">A1-5</span>例題演練</h2>
<div class="ex lv1"><div class="hd"><span>例 A1-1　求氧化數（10 小題）</span><span class="stars">★☆☆☆☆</span></div><div class="bd">
<p class="mono">求下列底線元素的氧化數：(1) K<u>Mn</u>O₄ (2) K₂<u>Cr</u>₂O₇ (3) <u>S</u>₂O₃²⁻ (4) <u>Fe</u>₃O₄ (5) <u>N</u>H₄<u>N</u>O₃ (6) Na<u>H</u> (7) K<u>O</u>₂ (8) <u>O</u>F₂ (9) <u>C</u>₂H₅OH (10) Na₂<u>S</u>₄O₆</p>
<details><summary>詳解</summary><div class="body">
<div class="tbl-wrap"><table><thead><tr><th>物質</th><th>計算</th><th class="c">答案</th></tr></thead><tbody>
<tr><td>KMnO₄</td><td>+1 + Mn + 4(−2) = 0</td><td class="c"><b>Mn = +7</b></td></tr>
<tr><td>K₂Cr₂O₇</td><td>2(+1) + 2Cr + 7(−2) = 0 ⇒ 2Cr = +12</td><td class="c"><b>Cr = +6</b></td></tr>
<tr><td>S₂O₃²⁻</td><td>2S + 3(−2) = −2 ⇒ 2S = +4</td><td class="c"><b>S = +2</b></td></tr>
<tr><td>Fe₃O₄</td><td>3Fe + 4(−2) = 0 ⇒ 3Fe = +8</td><td class="c"><b>Fe = +8/3</b></td></tr>
<tr><td>NH₄NO₃</td><td>NH₄⁺：N+4(+1)=+1 ⇒ −3；NO₃⁻：N+3(−2)=−1 ⇒ +5</td><td class="c"><b>−3 / +5</b></td></tr>
<tr><td>NaH</td><td>H 與金屬結合 ⇒ 金屬氫化物</td><td class="c"><b>H = −1</b></td></tr>
<tr><td>KO₂</td><td>+1 + 2O = 0 ⇒ 2O = −1</td><td class="c"><b>O = −1/2</b></td></tr>
<tr><td>OF₂</td><td>F 永遠 −1 ⇒ O + 2(−1) = 0</td><td class="c"><b>O = +2</b></td></tr>
<tr><td>C₂H₅OH</td><td>2C + 6(+1) + (−2) = 0 ⇒ 2C = −4</td><td class="c"><b>C = −2</b>（平均）</td></tr>
<tr><td>Na₂S₄O₆</td><td>2(+1) + 4S + 6(−2) = 0 ⇒ 4S = +10</td><td class="c"><b>S = +2.5</b></td></tr>
</tbody></table></div>
</div></details></div></div>

<div class="ex lv2"><div class="hd"><span>例 A1-2　碘酸碘（105 指考題型）</span><span class="stars">★★★☆☆</span></div><div class="bd">
<p>「碘酸碘」中碘的氧化數分別為 +3 與 +5，其化學式為何？</p>
<details><summary>詳解</summary><div class="body">
<p>「碘酸根」是 IO₃⁻，其中 I = <b>+5</b> ✓。另一個 I 為 <b>+3</b> ⇒ 陽離子為 I³⁺。<br>
電荷中和：I³⁺ + 3 IO₃⁻ → <b>I(IO₃)₃ = I₄O₉</b>。<br>
驗算：4 個 I = (+3) + 3×(+5) = +18；9 個 O = −18 ⇒ 總和 0 ✓</p>
<div class="note"><b>同系列：</b>I₂O₄（I 為 +3 與 +5）、<b>I₂O₅</b>（I 全 +5，用於檢測 CO：I₂O₅ + 5CO → I₂ + 5CO₂）。</div>
</div></details></div></div>

<div class="tip"><b>🎯 立刻去練：</b>側欄「互動工具 → <b>氧化數訓練器</b>」有 60 題隨機抽題，支援負數與分數（如 8/3、-1/2）輸入，會即時批改並顯示計算過程。</div>
`;

/* ===================== A2 四劑 ===================== */
PAGES_A['r-role'] = () => `
<h1 class="page">A2｜氧化與還原・四劑辨析</h1>
<p class="page-sub">「氧化劑、還原劑、被氧化、被還原」四個詞，是全章<b>錯誤率最高</b>的地方。這一頁把它徹底釘死。</p>
${FIGS.et}

<h2><span class="n">A2-1</span>四種等價的判斷角度</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:120px">角度</th><th class="c ox" style="width:190px">氧化（Oxidation）</th><th class="c re" style="width:190px">還原（Reduction）</th><th>範例</th></tr></thead>
<tbody>
<tr><td><b>電子</b></td><td class="c ox">失去 e⁻</td><td class="c re">得到 e⁻</td><td>Zn → Zn²⁺ + 2e⁻</td></tr>
<tr><td><b>氧化數</b></td><td class="c ox">上升 ↑</td><td class="c re">下降 ↓</td><td>Fe²⁺(+2) → Fe³⁺(+3)</td></tr>
<tr><td><b>氧</b></td><td class="c ox">得氧</td><td class="c re">失氧</td><td>2Mg + CO₂ → 2MgO + C</td></tr>
<tr><td><b>氫</b></td><td class="c ox">失氫</td><td class="c re">得氫</td><td>N₂ + 3H₂ → 2NH₃（N 被還原）</td></tr>
</tbody></table></div>

<h2><span class="n">A2-2</span>四種角色對照表（背這張就好）</h2>
<div class="tbl-wrap"><table>
<thead><tr><th class="c" style="width:150px"></th><th class="c ox">還原劑 Reducing agent</th><th class="c re">氧化劑 Oxidizing agent</th></tr></thead>
<tbody>
<tr><td class="c"><b>自己發生</b></td><td class="c ox">氧化反應（被氧化）</td><td class="c re">還原反應（被還原）</td></tr>
<tr><td class="c"><b>氧化數</b></td><td class="c ox">上升</td><td class="c re">下降</td></tr>
<tr><td class="c"><b>電子</b></td><td class="c ox">失去（給出去）</td><td class="c re">得到（搶過來）</td></tr>
<tr><td class="c"><b>對對方</b></td><td class="c ox">使對方被還原</td><td class="c re">使對方被氧化</td></tr>
<tr><td class="c"><b>自己的產物叫</b></td><td class="c">氧化產物</td><td class="c">還原產物</td></tr>
<tr><td class="c"><b>活性／電位</b></td><td class="c">活性大、E° 小（負）</td><td class="c">氧化性強、E° 大（正）</td></tr>
</tbody></table></div>
<div class="key"><b>🔑 考題問法破解：</b><br>
「下列變化<b>需要氧化劑</b>參與？」→ 找<b>氧化數上升</b>的那一個（它需要被別人氧化）。<br>
「下列變化<b>需要還原劑</b>參與？」→ 找<b>氧化數下降</b>的那一個。<br>
「下列何者<b>只能當還原劑</b>？」→ 找<b>已處於最低氧化數</b>的物種（如 S²⁻、I⁻、Na）。<br>
「下列何者<b>只能當氧化劑</b>？」→ 找<b>已處於最高氧化數</b>的物種（如 SO₄²⁻ 中 S⁺⁶、HClO₄ 中 Cl⁺⁷、F⁻ 不行因為已是 −1… 注意 F⁻ 是「只能當還原產物」）。</div>

<h2><span class="n">A2-3</span>常見氧化劑與「還原產物」</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">氧化劑</th><th style="width:110px">條件</th><th>還原產物</th><th class="c" style="width:80px">得 e⁻</th><th class="c" style="width:90px">顏色變化</th></tr></thead>
<tbody>
<tr><td rowspan="3"><b>MnO₄⁻</b><br><span class="small">Mn = +7</span></td><td><b>酸性</b></td><td>Mn²⁺</td><td class="c re">5</td><td class="c">紫 → 無色</td></tr>
<tr><td>中性／弱鹼</td><td>MnO₂（沉澱）</td><td class="c re">3</td><td class="c">紫 → 棕黑</td></tr>
<tr><td><b>強鹼</b></td><td>MnO₄²⁻</td><td class="c re">1</td><td class="c">紫 → 墨綠</td></tr>
<tr><td><b>Cr₂O₇²⁻</b><br><span class="small">Cr = +6</span></td><td>酸性</td><td>Cr³⁺</td><td class="c re">6（每 mol）</td><td class="c">橘 → 綠</td></tr>
<tr><td><b>H₂O₂</b></td><td>酸／鹼</td><td>H₂O ／ OH⁻</td><td class="c re">2</td><td class="c">—</td></tr>
<tr><td><b>HNO₃ 濃</b></td><td>—</td><td>NO₂</td><td class="c re">1</td><td class="c">紅棕氣體</td></tr>
<tr><td><b>HNO₃ 稀</b></td><td>—</td><td>NO</td><td class="c re">3</td><td class="c">無色（遇空氣變紅棕）</td></tr>
<tr><td><b>HNO₃ 極稀</b>＋活性金屬</td><td>—</td><td>NH₄⁺</td><td class="c re">8</td><td class="c">—</td></tr>
<tr><td><b>H₂SO₄ 濃熱</b></td><td>—</td><td>SO₂</td><td class="c re">2</td><td class="c">刺激氣味</td></tr>
<tr><td><b>O₂</b></td><td>酸性</td><td>H₂O</td><td class="c re">4</td><td class="c">—</td></tr>
<tr><td><b>O₂</b></td><td>鹼性／中性</td><td>OH⁻</td><td class="c re">4</td><td class="c">—</td></tr>
<tr><td>Cl₂ / Br₂ / I₂</td><td>—</td><td>Cl⁻ / Br⁻ / I⁻</td><td class="c re">2（每 mol X₂）</td><td class="c">褪色</td></tr>
<tr><td>ClO⁻（漂白水）</td><td>酸／鹼</td><td>Cl⁻</td><td class="c re">2</td><td class="c">—</td></tr>
<tr><td>Fe³⁺</td><td>—</td><td>Fe²⁺</td><td class="c re">1</td><td class="c">黃褐 → 淺綠</td></tr>
<tr><td>[Ag(NH₃)₂]⁺（多倫試劑）</td><td>鹼性</td><td>Ag（銀鏡）</td><td class="c re">1</td><td class="c">銀鏡</td></tr>
</tbody></table></div>

<h2><span class="n">A2-4</span>常見還原劑與「氧化產物」</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:190px">還原劑</th><th>氧化產物</th><th class="c" style="width:110px">失 e⁻</th><th class="c" style="width:90px">n（當量）</th></tr></thead>
<tbody>
<tr><td>活性大金屬（K → Pb）</td><td>金屬離子</td><td class="c ox">視價數</td><td class="c">價數</td></tr>
<tr><td>H₂</td><td>H₂O ／ H⁺</td><td class="c ox">2</td><td class="c">2</td></tr>
<tr><td>C（焦炭）</td><td>CO₂ 或 CO</td><td class="c ox">4 或 2</td><td class="c">4 或 2</td></tr>
<tr><td>CO</td><td>CO₂</td><td class="c ox">2</td><td class="c">2</td></tr>
<tr><td>H₂C₂O₄ / C₂O₄²⁻（C = +3）</td><td>CO₂（C = +4）</td><td class="c ox">2</td><td class="c">2</td></tr>
<tr><td>Fe²⁺</td><td>Fe³⁺</td><td class="c ox">1</td><td class="c">1</td></tr>
<tr><td>SO₂ / HSO₃⁻ / SO₃²⁻（S = +4）</td><td>SO₄²⁻（S = +6）</td><td class="c ox">2</td><td class="c">2</td></tr>
<tr><td>H₂S / S²⁻（S = −2）</td><td>S（0）或 SO₄²⁻（+6）</td><td class="c ox">2 或 8</td><td class="c">2 或 8</td></tr>
<tr><td>I⁻ / Br⁻ / Cl⁻</td><td>I₂ / Br₂ / Cl₂</td><td class="c ox">2（每 mol X₂）</td><td class="c">1</td></tr>
<tr><td>S₂O₃²⁻（S 平均 +2）</td><td>S₄O₆²⁻（平均 +2.5）</td><td class="c ox">1（每 mol）</td><td class="c">1</td></tr>
<tr><td>H₂O₂（O = −1）</td><td>O₂（0）</td><td class="c ox">2</td><td class="c">2</td></tr>
<tr><td>Sn²⁺</td><td>Sn⁴⁺</td><td class="c ox">2</td><td class="c">2</td></tr>
<tr><td>NO₂⁻ / NO</td><td>NO₃⁻</td><td class="c ox">2 / 3</td><td class="c">2 / 3</td></tr>
<tr><td>醇、醛（有機）</td><td>醛、羧酸、CO₂</td><td class="c ox">視碳數</td><td class="c">—</td></tr>
<tr><td>維他命 C（抗壞血酸）</td><td>去氫抗壞血酸</td><td class="c ox">2</td><td class="c">2</td></tr>
</tbody></table></div>

<h2><span class="n">A2-5</span>氧化力／還原力強弱與「對角線規則」</h2>
<div class="card">
<div class="eq rel"><b>氧化力：</b>F₂ ＞ MnO₄⁻(酸) ＞ Cl₂ ＞ Cr₂O₇²⁻ ＞ Br₂ ＞ Fe³⁺ ＞ I₂ ＞ S</div>
<div class="eq oxl"><b>還原力：</b>活性金屬(K、Na、Mg、Al、Zn) ＞ H₂ ＞ C ＞ SO₃²⁻ ＞ Fe²⁺ ＞ I⁻ ＞ Br⁻ ＞ Cl⁻ ＞ F⁻</div>
<div class="key"><b>對角線規則（判斷反應是否自發）：</b><br>
<b>強的氧化劑 ＋ 強的還原劑 → 弱的氧化劑 ＋ 弱的還原劑</b><br>
✅ Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂（Cl₂ 在 Br₂ 上方，氧化力較強）<br>
❌ Br₂ + 2Cl⁻ → 不反應<br>
✅ MnO₄⁻(酸) 能把 Cl⁻ 氧化成 Cl₂（1.51 V &gt; 1.36 V）⇒ 所以 KMnO₄ 滴定<b>不可用 HCl 酸化</b>！</div>
<div class="note"><b>互補關係：</b>越強的氧化劑，其還原產物的還原力越弱。所以 F⁻、Au 幾乎沒有還原力（真金不怕火煉）；反之 Na 還原力極強，Na⁺ 幾乎不是氧化劑。</div>
</div>

<h2><span class="n">A2-6</span>例題演練</h2>
<div class="ex lv2"><div class="hd"><span>例 A2-1　誰需要氧化劑？</span><span class="stars">★★☆☆☆</span></div><div class="bd">
<p>下列變化，哪些<b>需要加入氧化劑</b>才能完成？<br>
<span class="mono">(A) HI → I₂ (B) Cr₂O₇²⁻ → CrO₄²⁻ (C) MnO₄⁻ → Mn²⁺ (D) SO₂ → SO₃²⁻ (E) C₂O₄²⁻ → CO₂ (F) Fe³⁺ → Fe²⁺</span></p>
<details><summary>詳解</summary><div class="body">
<p><b>答案：(A)(E)</b></p>
<div class="tbl-wrap"><table><thead><tr><th>變化</th><th>氧化數</th><th>結論</th></tr></thead><tbody>
<tr><td>(A) HI → I₂</td><td>I：−1 → 0（升）</td><td class="ox">需<b>氧化劑</b> ✅</td></tr>
<tr><td>(B) Cr₂O₇²⁻ → CrO₄²⁻</td><td>Cr：+6 → +6（不變）</td><td>只需加<b>鹼</b>（酸鹼反應）❌</td></tr>
<tr><td>(C) MnO₄⁻ → Mn²⁺</td><td>Mn：+7 → +2（降）</td><td class="re">需<b>還原劑</b> ❌</td></tr>
<tr><td>(D) SO₂ → SO₃²⁻</td><td>S：+4 → +4（不變）</td><td>只需加<b>鹼</b> ❌</td></tr>
<tr><td>(E) C₂O₄²⁻ → CO₂</td><td>C：+3 → +4（升）</td><td class="ox">需<b>氧化劑</b> ✅</td></tr>
<tr><td>(F) Fe³⁺ → Fe²⁺</td><td>Fe：+3 → +2（降）</td><td class="re">需<b>還原劑</b> ❌</td></tr>
</tbody></table></div>
<div class="warn"><b>(B)(D) 是最陰險的選項：</b>看起來「有變化」，其實 Cr、S 的氧化數完全沒變，只是<b>酸鹼型態轉換</b>。做這題一定要真的算氧化數，不能只看外表。</div>
</div></details></div></div>

<div class="ex lv3"><div class="hd"><span>例 A2-2　部分參與的陷阱</span><span class="stars">★★★☆☆</span></div><div class="bd">
<p>2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂ + 8H₂O。問：(1) 氧化劑、還原劑、氧化產物、還原產物各為何？(2) 16 mol HCl 中有多少 mol 被氧化？佔幾 %？</p>
<details><summary>詳解</summary><div class="body">
<p><b>(1)</b> Mn：+7 → +2（降）⇒ <b>KMnO₄ 是氧化劑</b>，MnCl₂ 是<b>還原產物</b>。<br>
Cl：−1 → 0（升）⇒ <b>HCl 是還原劑</b>，Cl₂ 是<b>氧化產物</b>。</p>
<p><b>(2)</b> 5Cl₂ 含 10 個 Cl 原子 ⇒ <b>10 mol HCl 被氧化</b>。剩下 6 mol 的 Cl⁻ 進入 KCl（2 mol）與 MnCl₂（4 mol），氧化數不變。<br>
比例 = 10/16 = <b>62.5%</b></p>
<div class="note"><b>同型題：</b>Cu + 4HNO₃(濃) → Cu(NO₃)₂ + 2NO₂ + 2H₂O，4 mol HNO₃ 中只有 <b>2 mol</b> 被還原（50%）；3Cu + 8HNO₃(稀) → 3Cu(NO₃)₂ + 2NO + 4H₂O，8 mol 中只有 <b>2 mol</b> 被還原（25%）。</div>
</div></details></div></div>

<div class="tip"><b>🎯 立刻去練：</b>「互動工具 → <b>四劑辨識訓練</b>」有 14 個反應，要你點出氧化劑與還原劑，包含「這根本不是氧化還原反應」的陷阱題。</div>
`;

/* ===================== A3 歧化歸中 ===================== */
PAGES_A['r-spec'] = () => `
<h1 class="page">A3｜歧化・歸中・H₂O₂ 的兩面性</h1>
<p class="page-sub">「中間價」的元素最不安分：它既可以往上、也可以往下。</p>
${FIGS.dispro}

<h2><span class="n">A3-1</span>歧化反應（Disproportionation）</h2>
<div class="card">
<p><b>條件：</b>該元素的氧化數<b>既不是最高也不是最低</b>（中間價），且「右側 E° ＞ 左側 E°」（大學判準，見 U3）。</p>
<div class="eq">2H₂O₂ → 2H₂O + O₂　<span class="small">O：−1 → −2 與 0</span></div>
<div class="eq">Cl₂ + 2OH⁻（冷稀）→ Cl⁻ + ClO⁻ + H₂O　<span class="small">Cl：0 → −1 與 +1</span></div>
<div class="eq">3Cl₂ + 6OH⁻（熱濃）→(Δ) 5Cl⁻ + ClO₃⁻ + 3H₂O　<span class="small">Cl：0 → −1 與 +5</span></div>
<div class="eq">3NO₂ + H₂O → 2HNO₃ + NO　<span class="small">N：+4 → +5 與 +2</span></div>
<div class="eq">2Cu⁺ → Cu + Cu²⁺　<span class="small">Cu⁺ 在水中不安定</span></div>
<div class="eq">S₂O₃²⁻ + 2H⁺ → S↓ + SO₂↑ + H₂O　<span class="small">S：+2 → 0 與 +4</span></div>
<div class="eq">4KClO₃ →(Δ) 3KClO₄ + KCl　<span class="small">Cl：+5 → +7 與 −1</span></div>
<div class="eq">3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O　<span class="small">Mn：+6 → +7 與 +4</span></div>
</div>

<h2><span class="n">A3-2</span>歸中反應（Comproportionation）</h2>
<div class="card">
<p><b>規則：</b>高價 ＋ 低價 → <b>中間價</b>；氧化數變化<b>不可「交叉越過」</b>（就近原則）。</p>
<div class="eq">2H₂S + SO₂ → 3S↓ + 2H₂O　<span class="small">−2 與 +4 → 0</span></div>
<div class="eq">H₂SO₄(濃) + H₂S → SO₂ + S↓ + 2H₂O　<span class="small">+6 與 −2 → +4 與 0（不交叉成 −2/+6 互換）</span></div>
<div class="eq">KH + H₂O → KOH + H₂↑　<span class="small">H：−1 與 +1 → 0</span></div>
<div class="eq">Fe + 2Fe³⁺ → 3Fe²⁺　<span class="small">0 與 +3 → +2</span></div>
<div class="eq">2NH₃ + 3Cl₂ → N₂ + 6HCl　<span class="small">N：−3 → 0；Cl：0 → −1</span></div>
<div class="eq">5NH₄NO₃ →(Δ) 4N₂ + 2HNO₃ + 9H₂O　<span class="small">−3 與 +5 → 0</span></div>
<div class="note"><b>硝酸銨爆炸</b>就是歸中反應：NH₄NO₃ 中 −3 的 N 與 +5 的 N 一起變成 N₂（0）。（112 學測曾以此為題，考「氮皆被氧化產生 N₂」是<b>錯誤</b>敘述——是<b>一部分氧化、一部分還原</b>。）</div>
</div>

<h2><span class="n">A3-3</span>H₂O₂ 的三重身份</h2>
<div class="tbl-wrap"><table>
<thead><tr><th class="c" style="width:130px">角色</th><th>半反應式</th><th style="width:190px">典型對手</th><th>現象</th></tr></thead>
<tbody>
<tr><td class="c re"><b>氧化劑</b><br><span class="small">（較常見）</span></td><td>H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O<br>H₂O₂ + 2e⁻ → 2OH⁻（鹼性）</td><td>KI、Fe²⁺、PbS、SO₃²⁻</td><td>H₂O₂ + 2I⁻ + 2H⁺ → I₂ + 2H₂O（澱粉變藍）</td></tr>
<tr><td class="c ox"><b>還原劑</b></td><td>H₂O₂ → O₂ + 2H⁺ + 2e⁻</td><td>KMnO₄(酸)、K₂Cr₂O₇(酸)、Cl₂、O₃、Ag₂O</td><td>2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂↑ + 8H₂O（紫褪＋氣泡）</td></tr>
<tr><td class="c pu"><b>自身歧化</b></td><td>2H₂O₂ → 2H₂O + O₂</td><td>MnO₂、Fe³⁺、Pt、過氧化氫酶（catalase）</td><td>迅速冒 O₂ 氣泡，催化劑質量不變</td></tr>
</tbody></table></div>
<div class="warn"><b>判斷訣竅：</b>遇到<b>比它更強的氧化劑</b>（MnO₄⁻、Cr₂O₇²⁻、Cl₂、O₃）→ H₂O₂ 只能<b>當還原劑</b>；遇到<b>較弱的氧化劑或還原劑</b>（I⁻、Fe²⁺、S²⁻）→ <b>當氧化劑</b>；遇到 MnO₂、catalase 等<b>催化劑</b> → <b>歧化</b>。</div>

<h2><span class="n">A3-4</span>硝酸的還原產物（濃度決定）</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:170px">硝酸條件</th><th style="width:120px">金屬</th><th class="c" style="width:110px">產物</th><th>反應式</th></tr></thead>
<tbody>
<tr><td><b>濃 HNO₃</b></td><td>Cu、Ag</td><td class="c">NO₂（紅棕）</td><td>Cu + 4HNO₃(濃) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O</td></tr>
<tr><td><b>稀 HNO₃</b></td><td>Cu、Ag</td><td class="c">NO（無色）</td><td>3Cu + 8HNO₃(稀) → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O</td></tr>
<tr><td>稀 HNO₃</td><td>Zn、Mg</td><td class="c">N₂O 或 N₂</td><td>4Zn + 10HNO₃ → 4Zn(NO₃)₂ + N₂O↑ + 5H₂O</td></tr>
<tr><td>極稀 HNO₃</td><td>Zn、Mg</td><td class="c">NH₄NO₃</td><td>4Zn + 10HNO₃ → 4Zn(NO₃)₂ + NH₄NO₃ + 3H₂O</td></tr>
<tr><td><b>冷濃 HNO₃／濃 H₂SO₄</b></td><td>Al、Fe、Cr</td><td class="c">不反應</td><td>表面生成緻密氧化物膜 → <b>鈍化</b>（可用鐵桶裝濃硫酸、鋁罐裝濃硝酸）</td></tr>
<tr><td><b>王水</b>（濃 HCl : 濃 HNO₃ = 3:1）</td><td>Au、Pt</td><td class="c">—</td><td>Au + HNO₃ + 4HCl → HAuCl₄ + NO↑ + 2H₂O（Cl⁻ 形成錯離子拉動平衡）</td></tr>
</tbody></table></div>
<div class="note"><b>關鍵觀念：</b>濃 HNO₃、濃 H₂SO₄ 的氧化力來自<b>中心原子 N⁺⁵、S⁺⁶</b>（不是 H⁺），所以能氧化<b>氫後金屬</b>（Cu、Ag、Hg）；稀 HCl、稀 H₂SO₄ 的氧化力來自 <b>H⁺</b>，只能氧化<b>氫前金屬</b>，產物<b>只有 H₂</b>。</div>

<h2><span class="n">A3-5</span>例題</h2>
<div class="ex lv2"><div class="hd"><span>例 A3-1　分辨歧化與歸中</span><span class="stars">★★☆☆☆</span></div><div class="bd">
<p>下列哪些是歧化反應？<span class="mono">(A) 2Cu⁺ → Cu + Cu²⁺ (B) 3KClO → 2KCl + KClO₃ (C) 3I₂ + 6OH⁻ → 5I⁻ + IO₃⁻ + 3H₂O (D) CaCO₃ → CaO + CO₂ (E) S + 2H₂SO₄ → 3SO₂ + 2H₂O (F) Fe + 2Fe³⁺ → 3Fe²⁺</span></p>
<details><summary>詳解</summary><div class="body">
<p><b>答案：(A)(B)(C)</b></p>
<ul class="tight">
<li>(A) Cu⁺(+1) → Cu(0) 與 Cu²⁺(+2)：<b>歧化</b> ✅</li>
<li>(B) Cl(+1) → Cl(−1) 與 Cl(+5)：<b>歧化</b> ✅</li>
<li>(C) I₂(0) → I⁻(−1) 與 IO₃⁻(+5)：<b>歧化</b> ✅</li>
<li>(D) 各元素氧化數不變 ⇒ <b>不是氧化還原</b> ❌</li>
<li>(E) S(0) 與 S(+6) → S(+4)：<b>歸中</b> ❌</li>
<li>(F) Fe(0) 與 Fe(+3) → Fe(+2)：<b>歸中</b> ❌</li>
</ul>
</div></details></div></div>

<div class="ex lv4"><div class="hd"><span>例 A3-2　102 指考 多選 19（真題）</span><span class="stars">★★★★☆</span></div><div class="bd">
<p>硫代硫酸鈉與鹽酸在含少量界面活性劑的水溶液中反應，下列敘述哪些正確？（詳見「歷屆試題」頁）</p>
<div class="eq">Na₂S₂O₃ + 2HCl → 2NaCl + <b>S↓</b> + <b>SO₂↑</b> + H₂O</div>
<details><summary>詳解</summary><div class="body">
<p>S₂O₃²⁻ 中 S 平均 <b>+2</b> → 產物 S（<b>0</b>）與 SO₂（<b>+4</b>）⇒ <b>歧化反應</b>。</p>
<ul class="tight">
<li>界面活性劑的作用：<b>穩定奈米硫膠體、防止凝集</b>（不是清潔容器）。</li>
<li>析出的膠體硫粒徑 1–100 nm，氧化數 <b>0</b> ⇒ 有<b>廷得耳效應</b>（光的<b>散射</b>，不是折射）。</li>
<li>歧化反應中<b>得失電子數相等</b> ⇒ 含硫物質總氧化數<b>不變</b>（+2×2 = 0+4）。</li>
</ul>
</div></details></div></div>
`;

/* ===================== A4 平衡 ===================== */
PAGES_A['r-bal'] = () => `
<h1 class="page">A4｜平衡氧化還原反應式</h1>
<p class="page-sub">兩種方法：<b>半反應法</b>（水溶液離子反應首選）與<b>氧化數法</b>（快速、適用非水體系）。</p>

<h2><span class="n">A4-1</span>兩個「不滅」＋一個守恆</h2>
<div class="card">
<ul class="tight">
<li><b>原子不滅</b>：反應前後各元素原子數相等。</li>
<li><b>電荷不滅</b>：反應前後<b>總電荷數</b>相等（離子方程式一定要檢查！）。</li>
<li><b>電子守恆</b>：氧化半反應失去的 e⁻ ＝ 還原半反應得到的 e⁻。</li>
</ul>
</div>
${FIGS.halfsteps}

<h2><span class="n">A4-2</span>酸性 vs 鹼性</h2>
<div class="grid2">
<div class="card"><h4 class="re">酸性溶液（用 H⁺、H₂O）</h4>
<ul class="tight">
<li>缺 <b>O</b> 的一邊：<b>加 H₂O</b>（每個 O 加 1 個 H₂O）</li>
<li>缺 <b>H</b> 的一邊：<b>加 H⁺</b></li>
<li>最後加 e⁻ 平衡電荷</li>
</ul>
<p class="small">示範：MnO₄⁻ → Mn²⁺</p>
<div class="eq rel">MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</div>
<p class="small">檢查電荷：−1 + 8 − 5 = <b>+2</b> ＝ 右邊 +2 ✓</p>
</div>
<div class="card"><h4 class="ox">鹼性溶液（用 OH⁻、H₂O）</h4>
<p><b>方法 A（最不容易錯，推薦）：</b>先<b>完全照酸性做法</b>平衡好，再<b>兩邊同加與 H⁺ 等量的 OH⁻</b>，令 H⁺ + OH⁻ → H₂O，最後消去多餘 H₂O。</p>
<p class="small">示範：MnO₄⁻ → MnO₂<br>
① 酸性：MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O<br>
② 兩邊 +4OH⁻：MnO₄⁻ + 4H₂O + 3e⁻ → MnO₂ + 2H₂O + 4OH⁻<br>
③ 消 2H₂O：</p>
<div class="eq oxl">MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻</div>
<p><b>方法 B（口訣）：</b>鹼性中「<b>多一個 O 就在那邊加 H₂O，另一邊加 2OH⁻</b>」。</p>
</div>
</div>

<h2><span class="n">A4-3</span>必背半反應式（10 條）</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:80px">環境</th><th>半反應式</th><th class="c" style="width:80px">e⁻</th><th class="c" style="width:70px">n（當量）</th></tr></thead>
<tbody>
<tr><td rowspan="6" class="c re">酸性</td><td>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</td><td class="c">5</td><td class="c">5</td></tr>
<tr><td>Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O</td><td class="c">6</td><td class="c">6</td></tr>
<tr><td>H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O</td><td class="c">2</td><td class="c">2</td></tr>
<tr><td>NO₃⁻ + 4H⁺ + 3e⁻ → NO + 2H₂O</td><td class="c">3</td><td class="c">3</td></tr>
<tr><td>NO₃⁻ + 2H⁺ + e⁻ → NO₂ + H₂O</td><td class="c">1</td><td class="c">1</td></tr>
<tr><td>C₂O₄²⁻ → 2CO₂ + 2e⁻（氧化）</td><td class="c">2</td><td class="c">2</td></tr>
<tr><td rowspan="4" class="c ox">鹼性</td><td>MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂↓ + 4OH⁻</td><td class="c">3</td><td class="c">3</td></tr>
<tr><td>MnO₄⁻ + e⁻ → MnO₄²⁻（強鹼，墨綠）</td><td class="c">1</td><td class="c">1</td></tr>
<tr><td>ClO⁻ + H₂O + 2e⁻ → Cl⁻ + 2OH⁻</td><td class="c">2</td><td class="c">2</td></tr>
<tr><td>O₂ + 2H₂O + 4e⁻ → 4OH⁻</td><td class="c">4</td><td class="c">4</td></tr>
</tbody></table></div>
<div class="warn"><b>三條鐵律：</b>① 鹼性式子裡<b>不能出現 H⁺</b>；② 酸性式子裡<b>不能出現 OH⁻</b>；③ 寫完一定<b>檢查電荷</b>（不是只檢查原子數）。</div>

<h2><span class="n">A4-4</span>氧化數法</h2>
${FIGS.onmethod}
<div class="tbl-wrap"><table>
<thead><tr><th style="width:110px">項目</th><th>半反應法</th><th>氧化數法</th></tr></thead>
<tbody>
<tr><td><b>適用</b></td><td><b>水溶液離子反應</b>（含 H⁺/OH⁻/H₂O 者最方便）</td><td>任何反應，尤其<b>非水溶液、高溫、氣體</b>（冶煉、燃燒）</td></tr>
<tr><td><b>關鍵</b></td><td>先分兩半，各自平衡原子 → 電荷</td><td>直接比氧化數升降總量，交叉定係數</td></tr>
<tr><td><b>優點</b></td><td>不易漏 H₂O/H⁺；可直接看出電極反應</td><td>快速；不需拆式</td></tr>
<tr><td><b>缺點</b></td><td>步驟多</td><td>同一元素出現在多種物質時易錯；有機物需逐碳計算</td></tr>
<tr><td><b>歧化反應</b></td><td>可用但麻煩</td><td><b>較快</b>（把升幅當還原產物係數、降幅當氧化產物係數）</td></tr>
</tbody></table></div>

<h2><span class="n">A4-5</span>例題演練</h2>
<div class="ex lv3"><div class="hd"><span>例 A4-1　酸性：MnO₄⁻ + C₂O₄²⁻</span><span class="stars">★★★☆☆</span></div><div class="bd">
<p>平衡酸性溶液中 MnO₄⁻ 與 C₂O₄²⁻（草酸根）的反應。</p>
<details><summary>詳解</summary><div class="body">
<ol class="steps">
<li><span class="tag t-ox">氧化</span>C₂O₄²⁻ 中 C = +3 → CO₂ 中 C = +4：<div class="eq oxl">C₂O₄²⁻ → 2CO₂ + 2e⁻　<span class="small">電荷：−2 = 0 + (−2) ✓</span></div></li>
<li><span class="tag t-re">還原</span>MnO₄⁻ 中 Mn = +7 → +2：<div class="eq rel">MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</div></li>
<li>e⁻ 取 LCM = 10 ⇒ 氧化式 ×5、還原式 ×2</li>
<li>相加消 e⁻：<div class="eq"><b>2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂↑ + 8H₂O</b></div></li>
<li>檢查電荷：左 2(−1)+5(−2)+16(+1) = <b>+4</b>；右 2(+2) = <b>+4</b> ✓<br>
檢查原子：Mn 2=2、C 10=10、O 8+20=28 vs 8+20=28、H 16=16 ✓</li>
</ol>
</div></details></div></div>

<div class="ex lv4"><div class="hd"><span>例 A4-2　鹼性：ClO⁻ + Cr(OH)₄⁻</span><span class="stars">★★★★☆</span></div><div class="bd">
<p>鹼性溶液中，ClO⁻ 把 Cr(OH)₄⁻ 氧化成 CrO₄²⁻，本身還原成 Cl⁻。平衡之。</p>
<details><summary>詳解</summary><div class="body">
<ol class="steps">
<li>氧化數：Cr(OH)₄⁻ 中 Cr = <b>+3</b>（4×OH⁻ = −4，離子 −1）；CrO₄²⁻ 中 Cr = <b>+6</b> ⇒ 升 3。ClO⁻ 中 Cl = +1 → Cl⁻ = −1 ⇒ 降 2。</li>
<li>氧化半反應（鹼性直接用 OH⁻ 較乾淨）：<div class="eq oxl">Cr(OH)₄⁻ + 4OH⁻ → CrO₄²⁻ + 4H₂O + 3e⁻<br><span class="small">電荷：−1−4 = −5；−2−3 = −5 ✓</span></div></li>
<li>還原半反應：<div class="eq rel">ClO⁻ + H₂O + 2e⁻ → Cl⁻ + 2OH⁻</div></li>
<li>LCM = 6 ⇒ ×2 與 ×3，相加：<br>2Cr(OH)₄⁻ + 8OH⁻ + 3ClO⁻ + 3H₂O → 2CrO₄²⁻ + 8H₂O + 3Cl⁻ + 6OH⁻</li>
<li>消去 6 OH⁻ 與 3 H₂O：<div class="eq"><b>2Cr(OH)₄⁻ + 3ClO⁻ + 2OH⁻ → 2CrO₄²⁻ + 3Cl⁻ + 5H₂O</b></div></li>
<li>電荷：左 −2−3−2 = <b>−7</b>；右 −4−3 = <b>−7</b> ✓</li>
</ol>
<div class="note"><b>延伸：</b>Cr 的三色——Cr³⁺（綠/紫）、CrO₄²⁻（黃）、Cr₂O₇²⁻（橘）。而 <b>2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O</b> 是<b>酸鹼反應</b>（Cr 都是 +6），<b>不是氧化還原</b>！</div>
</div></details></div></div>

<div class="ex lv4"><div class="hd"><span>例 A4-3　有機物：乙醇 + Cr₂O₇²⁻（酒測原理）</span><span class="stars">★★★★★</span></div><div class="bd">
<p>平衡：<span class="mono">C₂H₅OH + Cr₂O₇²⁻ + H⁺ → CH₃COOH + Cr³⁺ + H₂O</span></p>
<details><summary>詳解</summary><div class="body">
<ol class="steps">
<li>逐碳算：乙醇 CH₃−（−3）＋ −CH₂OH（<b>−1</b>）；乙酸 CH₃−（−3）＋ −COOH（<b>+3</b>）⇒ CH₃− 不變，另一碳 −1 → +3，<b>升 4</b>。</li>
<li>Cr₂O₇²⁻ 中 2 個 Cr：+6 → +3，<b>降 6</b>（每 mol）。</li>
<li>升降相等：4 × 3 = 6 × 2 ⇒ <b>C₂H₅OH 係數 3、Cr₂O₇²⁻ 係數 2</b>。</li>
<li>補 Cr³⁺（4 個）、H⁺、H₂O：<div class="eq"><b>3C₂H₅OH + 2Cr₂O₇²⁻ + 16H⁺ → 3CH₃COOH + 4Cr³⁺ + 11H₂O</b></div></li>
<li>檢查：C 6=6、Cr 4=4、O 3+14=17 vs 6+11=17 ✓、H 18+16=34 vs 12+22=34 ✓、電荷 −4+16=<b>+12</b> vs 4(+3)=<b>+12</b> ✓</li>
</ol>
<div class="key"><b>顏色變化：橘紅（Cr₂O₇²⁻）→ 綠（Cr³⁺）</b>，這就是早期呼吸酒精偵測器的原理。</div>
</div></details></div></div>

<div class="tip"><b>🎯 立刻去練：</b>「互動工具 → <b>半反應式分步訓練器</b>」把 10 個常考半反應拆成 4 個步驟，每步填係數、即時批改，錯了會給提示。</div>
`;

/* ===================== A5 活性序列 ===================== */
PAGES_A['r-act'] = () => `
<h1 class="page">A5｜活性序列與置換反應</h1>
<p class="page-sub">活性序列是「氧化還原」與「電化學」之間的橋樑——它就是標準還原電位 E° 的排序。</p>
${FIGS.activity}

<h2><span class="n">A5-1</span>金屬與氧、水、酸</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:150px">位置</th><th>與 O₂</th><th>與 H₂O</th><th>與酸</th></tr></thead>
<tbody>
<tr><td><b>K、Na、Ca</b><br><span class="small">極活性</span></td><td>常溫即劇烈氧化，需存於煤油中</td><td><b>常溫冷水劇烈反應</b>放 H₂（Na 熔成小球四處游動）</td><td>劇烈甚至爆炸（實務不這么做）</td></tr>
<tr><td><b>Mg、Al、Zn、Cr、Fe</b></td><td>加熱可燃（Mg 發強白光；Al 粉作鋁熱劑）</td><td>Mg 與<b>熱水/水蒸氣</b>；Al、Zn、Cr 因<b>緻密氧化膜</b>鈍化；Fe 需紅熱＋水蒸氣：<br>3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂</td><td>與<b>稀 HCl／稀 H₂SO₄</b> 放 H₂</td></tr>
<tr><td><b>Sn、Pb</b></td><td>加熱緩慢氧化</td><td>不反應</td><td>與稀酸緩慢反應放 H₂</td></tr>
<tr><td><b>H</b>（分界）</td><td colspan="3">氫前金屬可自「非氧化性酸」置換出 H₂；氫後金屬不可</td></tr>
<tr><td><b>Cu、Hg、Ag</b></td><td>Cu 加熱生黑色 CuO；Hg、Ag 加熱可氧化但高溫又分解</td><td>不反應</td><td>與稀 HCl／稀 H₂SO₄ <b>不反應</b>；可被<b>濃/稀 HNO₃、熱濃 H₂SO₄、王水</b>氧化</td></tr>
<tr><td><b>Pt、Au</b></td><td>不氧化（真金不怕火煉）</td><td>不反應</td><td>只有<b>王水</b>可溶</td></tr>
</tbody></table></div>

<h2><span class="n">A5-2</span>三個最常錯的點</h2>
<div class="warn">
<ul class="tight">
<li><b>K、Ca、Na 投入鹽溶液「不會」置換出金屬</b>：先與<b>水</b>劇烈反應。<br>
Na 放入 CuSO₄(aq)：2Na + 2H₂O → 2NaOH + H₂↑，接著 2NaOH + CuSO₄ → <b>Cu(OH)₂↓（藍色絮狀）</b>，<b>得不到 Cu</b>。</li>
<li><b>兩性金屬（Al、Zn、Cr、Sn、Pb）</b>溶於酸也溶於鹼，<b>兩邊都放 H₂</b>：<br>
<span class="mono">2Al + 6HCl → 2AlCl₃ + 3H₂↑</span>；<span class="mono">2Al + 2NaOH + 6H₂O → 2NaAl(OH)₄ + 3H₂↑</span></li>
<li><b>氧化物安定性與金屬活性同向</b>：活性大 ⇒ 氧化物安定 ⇒ 難還原冶煉。</li>
</ul>
</div>

<h2><span class="n">A5-3</span>冶煉方法對應表</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:130px">金屬</th><th style="width:160px">冶煉方法</th><th>反應式與說明</th></tr></thead>
<tbody>
<tr><td>K、Na、Ca、Mg、Al</td><td><b>電解法</b></td><td>電解<b>熔融</b>鹽或氧化物。2NaCl(l) →(電解) 2Na + Cl₂↑；2Al₂O₃(l) →(電解，加冰晶石) 4Al + 3O₂↑</td></tr>
<tr><td>Zn、Fe、Sn、Pb</td><td><b>C／CO 高溫還原</b></td><td>Fe₂O₃ + 3CO → 2Fe + 3CO₂（高爐）；ZnO + C → Zn + CO；SnO₂ + 2C → Sn + 2CO₂</td></tr>
<tr><td>Cu</td><td>焙燒＋還原＋<b>電解精煉</b></td><td>2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂；Cu₂S + O₂ → 2Cu + SO₂；再用電解精煉至 99.99%</td></tr>
<tr><td>Hg、Ag</td><td><b>直接加熱氧化物</b></td><td>2HgO →(Δ) 2Hg + O₂↑；HgS + O₂ → Hg + SO₂</td></tr>
<tr><td>Pt、Au</td><td>自然界<b>游離態</b>，物理方法分離</td><td>淘金（比重差）；Au 溶於王水後再還原</td></tr>
</tbody></table></div>

<h2><span class="n">A5-4</span>置換反應判斷</h2>
<div class="card">
<div class="eq">Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)　✅（溶液藍→無色，鋅片附紅銅）</div>
<div class="eq">Cu(s) + ZnSO₄(aq) → ❌ 不反應</div>
<div class="eq">Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s)　✅（銅線變銀白、溶液變藍）</div>
<div class="eq">Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)　✅（「曾青得鐵則化為銅」＝濕法煉銅）</div>
<div class="eq">Cl₂(g) + 2NaBr(aq) → 2NaCl(aq) + Br₂(l)　✅（<b>鹵素也適用</b>：F₂＞Cl₂＞Br₂＞I₂）</div>
<div class="eq">2Mg + CO₂ →(點燃) 2MgO + C　✅（<b>Mg 火不可用 CO₂ 滅火</b>）</div>
<div class="eq">2Al + Fe₂O₃ →(點燃) Al₂O₃ + 2Fe　✅ <b>鋁熱劑</b>（焊接鐵軌）</div>
<div class="eq">Cl₂ + H₂O ⇌ HCl + HClO　✅（歧化，自來水消毒）</div>
</div>

<h2><span class="n">A5-5</span>例題</h2>
<div class="ex lv5"><div class="hd"><span>例 A5-1　由四種實驗推活性順序</span><span class="stars">★★★★★</span></div><div class="bd">
<p>四種金屬 W、X、Y、Z：<br>
① X 投入 W(NO₃)₂ 溶液 → X 表面析出 W。<br>
② Y 投入稀鹽酸產生氣泡；W 投入稀鹽酸無反應。<br>
③ Z 與 Y 用導線連接後浸入稀鹽酸，<b>Z 極產生氣泡</b>、Y 極逐漸溶解。<br>
④ 電解 Z(NO₃)₂ 與 X(NO₃)₂ 的混合液，<b>陰極先析出 Z</b>。<br>
求活性順序。</p>
<details><summary>詳解</summary><div class="body">
<p><b>答案：Y ＞ X ＞ W ＞ Z</b></p>
<ol class="steps">
<li>① X 置換 W ⇒ <b>X ＞ W</b></li>
<li>② Y 在<b>氫前</b>、W 在<b>氫後</b> ⇒ <b>Y ＞ H ＞ W</b></li>
<li>③ 兩金屬相連構成<b>原電池</b>：<b>較活潑者當陽極被氧化（溶解）</b>，較不活潑者當陰極（H⁺ 在其表面還原放 H₂）。Y 溶解 ⇒ <b>Y ＞ Z</b>，且 Z 上出 H₂ ⇒ Z 在<b>氫後</b></li>
<li>④ 電解混合液時，<b>離子氧化力大者（元素活性小者）優先在陰極析出</b>。Z 先析出 ⇒ Z²⁺ 氧化力 ＞ X²⁺ ⇒ <b>X ＞ Z</b></li>
<li>整合：X＞W、Y＞H＞W、Y＞Z、X＞Z，且 W、Z 都在氫後而 Y 在氫前 ⇒ 唯一自洽排序 <b>Y ＞ X ＞ W ＞ Z</b></li>
</ol>
<div class="note"><b>四條線索工具：</b>①置換反應 ②與酸/水反應（判氫前氫後）③<b>原電池：溶解者＝陽極＝活性大</b> ④<b>電解：先析出者＝離子氧化力大＝元素活性小</b>。③④ 最常被忽略。</div>
</div></details></div></div>

<div class="ex lv2"><div class="hd"><span>例 A5-2　氧化物活性排序</span><span class="stars">★★☆☆☆</span></div><div class="bd">
<p>已知：X + WO → XO + W（可反應）；Y + ZO → 無作用；XO + Y → X + YO（可反應）。求四者對氧的活性順序。</p>
<details><summary>詳解</summary><div class="body">
<p>X + WO → XO + W ⇒ <b>X ＞ W</b><br>
Y + ZO → 無作用 ⇒ <b>Z ＞ Y</b><br>
XO + Y → X + YO ⇒ <b>Y ＞ X</b></p>
<p>⇒ <b>Z ＞ Y ＞ X ＞ W</b></p>
<div class="key"><b>氧化物活性順序與金屬活性相反</b>：金屬活性 Z＞Y＞X＞W，則氧化物安定性 ZO＞YO＞XO＞WO，也就是「氧化物活性」WO＞XO＞YO＞ZO（越不安定越容易被搶走氧）。</div>
</div></details></div></div>

<div class="tip"><b>🎯 立刻去練：</b>「互動工具 → <b>置換反應預測器</b>」可任選兩種金屬＋鹽溶液，即時判斷是否反應、寫出方程式與現象。</div>
`;

/* ===================== A6 滴定 ===================== */
PAGES_A['r-tit'] = () => `
<h1 class="page">A6｜氧化還原滴定</h1>
<p class="page-sub">把「得失電子守恆」變成可測量的濃度——這是分析化學的核心技術之一。</p>
${FIGS.iodo}

<h2><span class="n">A6-1</span>三大滴定系統</h2>
<div class="tbl-wrap"><table>
<thead><tr><th style="width:130px">系統</th><th>反應式（酸性）</th><th style="width:130px">指示劑</th><th style="width:170px">終點判定</th></tr></thead>
<tbody>
<tr><td><b>過錳酸鉀法</b><br>KMnO₄</td><td>MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O<br>2MnO₄⁻ + 5H₂C₂O₄ + 6H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O</td><td><b>不用</b>（自身指示劑）</td><td>滴入的紫色<b>恰好不褪</b>（持久淡粉紅）</td></tr>
<tr><td><b>重鉻酸鉀法</b><br>K₂Cr₂O₇</td><td>Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O</td><td>外加<br>（二苯胺磺酸鈉）</td><td>綠 → <b>紫紅</b>；<b>一級標準試劑</b>，可直接配製標準液</td></tr>
<tr><td><b>碘量法</b><br>I₂／Na₂S₂O₃</td><td>I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻</td><td><b>澱粉</b>（近終點才加）</td><td>直接法：無色 → <b>藍色</b><br>間接法：<b>藍色 → 無色</b></td></tr>
<tr><td>碘酸鉀法<br>KIO₃</td><td>IO₃⁻ + 5I⁻ + 6H⁺ → 3I₂ + 3H₂O（先釋出 I₂）</td><td>澱粉</td><td>常用於維他命 C 定量</td></tr>
<tr><td>溴酸鉀法<br>KBrO₃</td><td>BrO₃⁻ + 6I⁻ + 6H⁺ → Br⁻ + 3I₂ + 3H₂O</td><td>澱粉</td><td>一級標準試劑</td></tr>
</tbody></table></div>

<h2><span class="n">A6-2</span>兩種計算路徑</h2>
<div class="grid2">
<div class="card"><h4>路徑 A｜莫耳比（推薦）</h4>
<ol class="steps">
<li>寫出<b>已平衡</b>的離子反應式</li>
<li>n(滴定劑) = M × V(L)</li>
<li>用<b>係數比</b>換算待測物莫耳數</li>
<li>換算成濃度、質量、%、ppm</li>
</ol>
</div>
<div class="card"><h4>路徑 B｜當量莫耳濃度 N</h4>
<p><b>N = M × n</b>（n = 每莫耳轉移電子莫耳數）</p>
<ul class="tight">
<li>KMnO₄(酸) n=5 ⇒ 0.020 M = <b>0.100 N</b></li>
<li>K₂Cr₂O₇(酸) n=6 ⇒ 0.0167 M = <b>0.100 N</b></li>
<li>H₂C₂O₄ n=2；Na₂S₂O₃ n=1；KI n=1；Fe²⁺ n=1</li>
</ul>
<div class="eq" style="text-align:center">N₁V₁ = N₂V₂　⟺　M₁V₁n₁ = M₂V₂n₂</div>
</div>
</div>

<h2><span class="n">A6-3</span>操作細節（實驗題必考）</h2>
<ul class="chk" data-checklist="titration">
<li>KMnO₄ 要用<b>酸式滴定管</b>（玻璃活塞），不可用鹼式（橡皮管會被氧化）</li>
<li>酸化用<b>稀 H₂SO₄</b>：<b>不可用 HCl</b>（Cl⁻ 被氧化成 Cl₂，結果偏高）、<b>不可用 HNO₃</b>（本身是氧化劑）</li>
<li>KMnO₄ 滴定初期要<b>慢滴</b>：產物 Mn²⁺ 是<b>自動催化劑</b>，累積後反應才變快</li>
<li>KMnO₄、Na₂S₂O₃ <b>不是一級標準試劑</b>（易分解），需先<b>標定</b>；K₂Cr₂O₇、KIO₃、KBrO₃ 可直接配製</li>
<li>碘量法的澱粉要<b>近終點才加</b>：太早加會形成難解離的 I₂–澱粉錯合物 ⇒ 終點延後 ⇒ 結果偏高</li>
<li>碘量法需在<b>中性或弱酸性</b>：強鹼中 I₂ 會歧化、S₂O₃²⁻ 分解；強酸中 S₂O₃²⁻ → S + SO₂</li>
<li>Na₂S₂O₃ 標準液需加少量 <b>Na₂CO₃</b> 抑制細菌分解，存於<b>棕色瓶</b>避光</li>
<li>讀滴定管讀<b>凹液面底部</b>，精確至 <b>0.01 mL</b>；重複 2–3 次取平均（誤差 ≤ 0.1 mL）</li>
<li>滴定前需<b>潤洗</b>：滴定管用待裝液潤洗、錐形瓶<b>只能用蒸餾水</b>洗（不可用待測液，否則偏高）</li>
</ul>

<h2><span class="n">A6-4</span>例題演練</h2>
<div class="ex lv4"><div class="hd"><span>例 A6-1　KMnO₄ 滴定 Fe²⁺</span><span class="stars">★★★☆☆</span></div><div class="bd">
<p>取 25.0 mL 含 Fe²⁺ 的酸性水樣，以 0.0200 M KMnO₄ 滴定，終點消耗 20.0 mL。求：(1) [Fe²⁺] (2) 250 mL 水樣含 Fe 幾克？(3) 轉移電子幾莫耳？（Fe = 55.85）</p>
<details><summary>詳解</summary><div class="body">
<div class="eq">MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</div>
<p><b>(1)</b> n(MnO₄⁻) = 0.0200 × 0.0200 = 4.00×10⁻⁴ mol ⇒ n(Fe²⁺) = 5 × 4.00×10⁻⁴ = 2.00×10⁻³ mol<br>
[Fe²⁺] = 2.00×10⁻³ ÷ 0.0250 = <b>0.0800 M</b></p>
<p><b>(2)</b> 250 mL 中 n = 0.0800 × 0.250 = 0.0200 mol ⇒ 質量 = 0.0200 × 55.85 = <b>1.117 g ≈ 1.12 g</b></p>
<p><b>(3)</b> n(e⁻) = 5 × 4.00×10⁻⁴ = <b>2.00×10⁻³ mol</b>（由 Fe²⁺ 端算：2.00×10⁻³ × 1 也相同 ✓ <b>兩端必相等</b>）</p>
<div class="note"><b>N 法驗算：</b>N(MnO₄⁻) = 0.0200 × 5 = 0.100 N；0.100 × 20.0 = N₂ × 25.0 ⇒ N₂ = 0.080 N；Fe²⁺ 的 n = 1 ⇒ M = <b>0.080 M</b> ✓</div>
</div></details></div></div>

<div class="ex lv4"><div class="hd"><span>例 A6-2　碘量法測漂白水有效氯</span><span class="stars">★★★★☆</span></div><div class="bd">
<p>取 10.0 mL 漂白水稀釋至 100.0 mL，取 25.0 mL 加過量 KI 並酸化，釋出的 I₂ 用 0.100 M Na₂S₂O₃ 滴定，終點消耗 25.0 mL。求原液 [ClO⁻] 與終點顏色變化。</p>
<details><summary>詳解</summary><div class="body">
<div class="eq">ClO⁻ + 2I⁻ + 2H⁺ → Cl⁻ + I₂ + H₂O　；　I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻</div>
<p><b>莫耳鏈：1 ClO⁻ ≡ 1 I₂ ≡ 2 S₂O₃²⁻</b></p>
<p>n(S₂O₃²⁻) = 0.100 × 0.0250 = 2.50×10⁻³ ⇒ n(I₂) = 1.25×10⁻³ = n(ClO⁻)<br>
稀釋液濃度 = 1.25×10⁻³ ÷ 0.0250 = 0.0500 M ⇒ <b>原液 = 0.500 M</b>（稀釋 10 倍）</p>
<p>有效氯質量（25 mL 稀釋液中）= 1.25×10⁻³ × 35.45 = 0.0443 g ⇒ 原液每 100 mL 含 <b>1.77 g 有效氯</b>（≈1.77% w/v）</p>
<p><b>終點：</b>加澱粉後呈<b>深藍色</b>，滴定至 I₂ 全變回 I⁻ 時<b>藍色恰好消失（無色）</b>。</p>
<div class="warn"><b>常見錯誤：</b>① 忘了「稀釋 10 倍」漏乘 ② 把 ClO⁻ : S₂O₃²⁻ 誤當 1:1（其實是 <b>1:2</b>）③ 澱粉過早加入造成結果偏高。</div>
</div></details></div></div>

<div class="ex lv4"><div class="hd"><span>例 A6-3　雙氧水濃度測定</span><span class="stars">★★★★☆</span></div><div class="bd">
<p>取 20.0 mL 雙氧水稀釋成 200.0 mL，取 25.0 mL 以稀 H₂SO₄ 酸化後用 0.0200 M KMnO₄ 滴定，終點消耗 24.0 mL。求原雙氧水濃度（M 與 % w/v，H₂O₂ = 34.0）。</p>
<details><summary>詳解</summary><div class="body">
<div class="eq">2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂↑ + 8H₂O</div>
<p>n(MnO₄⁻) = 0.0200 × 0.0240 = 4.80×10⁻⁴ ⇒ n(H₂O₂) = (5/2) × 4.80×10⁻⁴ = 1.20×10⁻³ mol<br>
稀釋液 = 1.20×10⁻³ ÷ 0.0250 = 0.0480 M ⇒ <b>原液 = 0.480 M</b><br>
質量濃度 = 0.480 × 34.0 = 16.3 g/L = <b>1.63 % (w/v)</b></p>
<p><b>終點判定：</b>KMnO₄ 深紫、Mn²⁺ 近無色 ⇒ <b>自身指示劑</b>，再滴入一滴使溶液呈<b>持久淡粉紅</b>即為終點。</p>
<div class="tip"><b>「體積濃度」換算：</b>藥局標示「10 體積雙氧水」表示 1 mL 雙氧水分解可得 10 mL O₂（STP）。<br>2H₂O₂ → 2H₂O + O₂ ⇒ 10 mL O₂ = 10/22400 mol ⇒ n(H₂O₂) = 2 × 10/22400 mol/mL = <b>0.893 M</b> ≈ 3% w/v。</div>
</div></details></div></div>

<div class="tip"><b>🎯 立刻去練：</b>「互動工具 → <b>滴定計算機</b>」支援 KMnO₄／K₂Cr₂O₇／碘量法三種系統，輸入任一未知量即可反算。</div>
`;
