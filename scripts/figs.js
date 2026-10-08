/* figs.js — 全站共用的 SVG 圖表（純字串，無外部相依） */
export const FIGS = {};

/* 0-1 全章心智圖 */
FIGS.mindmap = `<figure><svg viewBox="0 0 940 470" width="940" role="img" aria-label="全章心智圖">
<defs><marker id="a0" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto"><path d="M0,0 L7,3.2 L0,6.4 z" fill="#8492a6"/></marker></defs>
<rect x="318" y="192" width="304" height="80" rx="16" fill="#12263a"/>
<text x="470" y="224" text-anchor="middle" fill="#fff" font-size="19" font-weight="700">氧化還原反應 × 電化學</text>
<text x="470" y="250" text-anchor="middle" fill="#a9c6da" font-size="13">失 e⁻ 總數 ＝ 得 e⁻ 總數</text>
<g stroke="#8492a6" stroke-width="2" fill="none" marker-end="url(#a0)">
<path d="M318,214 C246,190 208,142 176,112"/><path d="M318,238 C240,248 200,254 166,258"/>
<path d="M318,258 C248,300 210,350 180,382"/><path d="M622,214 C700,190 732,142 762,112"/>
<path d="M622,238 C700,248 740,254 774,258"/><path d="M622,258 C700,300 738,350 768,382"/></g>
<g font-size="14" text-anchor="middle">
<rect x="16" y="60" width="200" height="62" rx="11" fill="#fdeeec" stroke="#eec7c1"/>
<text x="116" y="84" font-weight="700" fill="#c0392b">① 氧化數</text><text x="116" y="107" font-size="12.5" fill="#7a3f38">判斷工具・電子帳本</text>
<rect x="16" y="212" width="200" height="76" rx="11" fill="#f2ecfc" stroke="#cdb8ee"/>
<text x="116" y="236" font-weight="700" fill="#6d3bd1">② 平衡反應式</text><text x="116" y="257" font-size="12.5" fill="#4b3a72">半反應法（酸／鹼）</text><text x="116" y="276" font-size="12.5" fill="#4b3a72">氧化數法</text>
<rect x="16" y="352" width="200" height="76" rx="11" fill="#fff5e2" stroke="#eed6a6"/>
<text x="116" y="376" font-weight="700" fill="#9a5b00">③ 滴定・定量</text><text x="116" y="397" font-size="12.5" fill="#6f4a13">KMnO₄／K₂Cr₂O₇</text><text x="116" y="416" font-size="12.5" fill="#6f4a13">碘量法・當量濃度 N</text>
<rect x="724" y="60" width="200" height="62" rx="11" fill="#e9f2fb" stroke="#bcd8ef"/>
<text x="824" y="84" font-weight="700" fill="#1f6fb2">④ 活性序列・電化序</text><text x="824" y="107" font-size="12.5" fill="#2f5273">置換反應・E° 電位</text>
<rect x="724" y="212" width="200" height="76" rx="11" fill="#e2f6f2" stroke="#a9ddd5"/>
<text x="824" y="236" font-weight="700" fill="#0f766e">⑤ 電池・電解・電鍍</text><text x="824" y="257" font-size="12.5" fill="#255e57">自發 vs 非自發</text><text x="824" y="276" font-size="12.5" fill="#255e57">法拉第定律</text>
<rect x="724" y="352" width="200" height="76" rx="11" fill="#eef3f8" stroke="#dde3eb"/>
<text x="824" y="376" font-weight="700" fill="#1d5f8a">⑥ 生活・大學延伸</text><text x="824" y="397" font-size="12.5" fill="#3f5567">漂白・防鏽・冶煉</text><text x="824" y="416" font-size="12.5" fill="#3f5567">能斯特・Latimer・ΔG</text>
</g></svg>
<figcaption>圖 0-1　全章心智圖：一個核心（電子守恆），六條支線。</figcaption></figure>`;

/* 1-1 氧化數判定流程 */
FIGS.onflow = `<figure><svg viewBox="0 0 920 480" width="920" role="img" aria-label="氧化數判定流程">
<defs><marker id="a1" markerWidth="9" markerHeight="9" refX="7" refY="3.2" orient="auto"><path d="M0,0 L7,3.2 L0,6.4 z" fill="#5d6878"/></marker></defs>
<g stroke="#5d6878" stroke-width="2" fill="none" marker-end="url(#a1)">
<path d="M460,62 L460,84"/><path d="M460,144 L460,166"/><path d="M460,226 L460,248"/>
<path d="M460,308 L460,330"/><path d="M460,390 L460,412"/></g>
<g text-anchor="middle" font-size="14">
<rect x="290" y="16" width="340" height="46" rx="11" fill="#12263a"/>
<text x="460" y="45" fill="#fff" font-size="15" font-weight="700" class="lt">要求某原子的氧化數</text>
<rect x="250" y="86" width="420" height="58" rx="11" fill="#fdeeec" stroke="#eec7c1"/>
<text x="460" y="110" font-weight="700" fill="#c0392b">① 是「游離態元素」嗎？(Na、O₂、Cl₂、S₈、O₃、P₄)</text>
<text x="460" y="132" font-size="13" fill="#7a3f38">是 → 氧化數 ＝ 0</text>
<rect x="250" y="168" width="420" height="58" rx="11" fill="#e9f2fb" stroke="#bcd8ef"/>
<text x="460" y="192" font-weight="700" fill="#1f6fb2">② 是「單原子離子」嗎？(Na⁺、Cl⁻、Fe³⁺)</text>
<text x="460" y="214" font-size="13" fill="#2f5273">是 → 氧化數 ＝ 離子電荷</text>
<rect x="228" y="250" width="464" height="58" rx="11" fill="#e2f6f2" stroke="#a9ddd5"/>
<text x="460" y="272" font-weight="700" fill="#0f766e">③ 有「固定規則」的元素？先寫死它</text>
<text x="460" y="294" font-size="12.5" fill="#255e57">IA＝+1｜IIA＝+2｜Al＝+3｜Zn＝+2｜Ag＝+1｜F＝−1（永遠）</text>
<rect x="228" y="332" width="464" height="58" rx="11" fill="#fff5e2" stroke="#eed6a6"/>
<text x="460" y="354" font-weight="700" fill="#9a5b00">④ 再看 H 與 O（各有例外！）</text>
<text x="460" y="376" font-size="12.5" fill="#6f4a13">H：一般 +1、金屬氫化物 −1｜O：一般 −2、過氧 −1、超氧 −1/2、OF₂ +2</text>
<rect x="228" y="414" width="464" height="48" rx="11" fill="#f2ecfc" stroke="#cdb8ee"/>
<text x="460" y="444" font-weight="700" fill="#6d3bd1">⑤ 用「總和 ＝ 0（分子）或 離子電荷」解出未知元素</text>
</g></svg>
<figcaption>圖 A1-1　氧化數判定流程：越晚登場的元素越「彈性」（S、N、C、Cl 通常就是要求解的未知數）。</figcaption></figure>`;

/* 2-1 電子轉移 */
FIGS.et = `<figure><svg viewBox="0 0 900 250" width="900" role="img" aria-label="電子轉移示意">
<defs><marker id="a2" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 z" fill="#c0392b"/></marker></defs>
<circle cx="150" cy="118" r="62" fill="#fdeeec" stroke="#c0392b" stroke-width="2.5"/>
<text x="150" y="106" text-anchor="middle" font-size="20" font-weight="700" fill="#c0392b">Zn</text>
<text x="150" y="130" text-anchor="middle" font-size="13" fill="#7a3f38">0 → +2</text>
<text x="150" y="150" text-anchor="middle" font-size="13" fill="#7a3f38">氧化數 ↑</text>
<text x="150" y="204" text-anchor="middle" font-size="14" font-weight="700" fill="#c0392b">被氧化（失 2e⁻）</text>
<text x="150" y="227" text-anchor="middle" font-size="13" fill="#8a4b43">＝ 還原劑</text>
<circle cx="750" cy="118" r="62" fill="#e9f2fb" stroke="#1f6fb2" stroke-width="2.5"/>
<text x="750" y="106" text-anchor="middle" font-size="20" font-weight="700" fill="#1f6fb2">Cu²⁺</text>
<text x="750" y="130" text-anchor="middle" font-size="13" fill="#2f5273">+2 → 0</text>
<text x="750" y="150" text-anchor="middle" font-size="13" fill="#2f5273">氧化數 ↓</text>
<text x="750" y="204" text-anchor="middle" font-size="14" font-weight="700" fill="#1f6fb2">被還原（得 2e⁻）</text>
<text x="750" y="227" text-anchor="middle" font-size="13" fill="#3a6288">＝ 氧化劑</text>
<path d="M218,94 C380,28 560,28 686,90" stroke="#c0392b" stroke-width="3.5" fill="none" marker-end="url(#a2)"/>
<rect x="392" y="32" width="116" height="34" rx="17" fill="#fff" stroke="#c0392b" stroke-width="1.5"/>
<text x="450" y="55" text-anchor="middle" font-size="16" font-weight="700" fill="#c0392b">2 e⁻ →</text>
<text x="450" y="118" text-anchor="middle" font-size="15" class="lt">Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)</text>
<text x="450" y="143" text-anchor="middle" font-size="12.5" fill="#8492a6">電子由「還原劑」流向「氧化劑」</text>
</svg><figcaption>圖 A2-1　電子永遠由<b>還原劑</b>（被氧化者）流向<b>氧化劑</b>（被還原者）。</figcaption></figure>`;

/* 3-1 歧化/歸中 */
FIGS.dispro = `<figure><svg viewBox="0 0 900 340" width="900" role="img" aria-label="歧化與歸中">
<defs><marker id="a3" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill="#c0392b"/></marker>
<marker id="a4" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill="#1f6fb2"/></marker></defs>
<text x="20" y="28" font-size="15" font-weight="700" fill="#6d3bd1">(A) 歧化：同一元素，一部分升、一部分降</text>
<line x1="60" y1="88" x2="860" y2="88" stroke="#b9c3d0" stroke-width="2"/>
<g font-size="12.5" fill="#8492a6" text-anchor="middle"><text x="110" y="110">−1</text><text x="260" y="110">0</text><text x="410" y="110">+1</text><text x="560" y="110">+3</text><text x="710" y="110">+5</text><text x="830" y="110">+7</text></g>
<g stroke="#b9c3d0" stroke-width="1.5"><line x1="110" y1="82" x2="110" y2="94"/><line x1="260" y1="82" x2="260" y2="94"/><line x1="410" y1="82" x2="410" y2="94"/><line x1="560" y1="82" x2="560" y2="94"/><line x1="710" y1="82" x2="710" y2="94"/><line x1="830" y1="82" x2="830" y2="94"/></g>
<circle cx="410" cy="88" r="9" fill="#6d3bd1"/>
<text x="410" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="#6d3bd1">Cl₂ 中 Cl＝0</text>
<path d="M400,96 C330,138 200,138 118,100" stroke="#1f6fb2" stroke-width="2.5" fill="none" marker-end="url(#a4)"/>
<path d="M420,96 C490,138 640,138 702,100" stroke="#c0392b" stroke-width="2.5" fill="none" marker-end="url(#a3)"/>
<text x="228" y="158" text-anchor="middle" font-size="13" fill="#1f6fb2" font-weight="700">還原 → Cl⁻ (−1)</text>
<text x="598" y="158" text-anchor="middle" font-size="13" fill="#c0392b" font-weight="700">氧化 → ClO⁻ (+1)</text>
<text x="450" y="186" text-anchor="middle" font-size="14" class="lt">Cl₂ + 2NaOH → NaCl + NaClO + H₂O</text>
<text x="20" y="232" font-size="15" font-weight="700" fill="#0f766e">(B) 歸中：高價＋低價 → 中間價（不可交叉越過）</text>
<line x1="60" y1="290" x2="860" y2="290" stroke="#b9c3d0" stroke-width="2"/>
<g font-size="12.5" fill="#8492a6" text-anchor="middle"><text x="130" y="312">−2</text><text x="410" y="312">0</text><text x="700" y="312">+4</text></g>
<circle cx="130" cy="290" r="8" fill="#c0392b"/><circle cx="700" cy="290" r="8" fill="#1f6fb2"/><circle cx="410" cy="290" r="9" fill="#0f766e"/>
<path d="M140,282 C230,240 320,240 402,282" stroke="#c0392b" stroke-width="2.5" fill="none" marker-end="url(#a3)"/>
<path d="M690,282 C600,240 510,240 420,282" stroke="#1f6fb2" stroke-width="2.5" fill="none" marker-end="url(#a4)"/>
<text x="130" y="262" text-anchor="middle" font-size="13" font-weight="700" fill="#c0392b">H₂S (−2)</text>
<text x="700" y="262" text-anchor="middle" font-size="13" font-weight="700" fill="#1f6fb2">SO₂ (+4)</text>
<text x="410" y="256" text-anchor="middle" font-size="13" font-weight="700" fill="#0f766e">S (0)</text>
</svg><figcaption>圖 A3-1　歧化（一個變兩個）與歸中（兩個變一個）。</figcaption></figure>`;

/* 4-1 半反應法步驟 */
FIGS.halfsteps = `<figure><svg viewBox="0 0 900 430" width="900" role="img" aria-label="半反應法步驟">
<defs><marker id="a5" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill="#5d6878"/></marker></defs>
<g stroke="#5d6878" stroke-width="2" fill="none" marker-end="url(#a5)"><path d="M450,58 L450,76"/><path d="M450,136 L450,154"/><path d="M450,214 L450,232"/><path d="M450,292 L450,310"/></g>
<g text-anchor="middle" font-size="14">
<rect x="225" y="14" width="450" height="44" rx="11" fill="#12263a"/>
<text x="450" y="42" fill="#fff" font-size="15" font-weight="700">Step 1｜拆兩個半反應（先算氧化數，誰升誰降）</text>
<rect x="175" y="78" width="550" height="58" rx="11" fill="#eef3f8" stroke="#dde3eb"/>
<text x="450" y="102" font-weight="700" fill="#1d5f8a">Step 2｜平衡主要元素（O、H 以外）</text>
<text x="450" y="124" font-size="12.5" fill="#4c6276">Cr₂O₇²⁻ → <tspan font-weight="700" fill="#c0392b">2</tspan>Cr³⁺</text>
<rect x="175" y="156" width="550" height="58" rx="11" fill="#e2f6f2" stroke="#a9ddd5"/>
<text x="450" y="180" font-weight="700" fill="#0f766e">Step 3｜用 H₂O 平衡 O（缺 O 那邊加 H₂O）</text>
<text x="450" y="202" font-size="12.5" fill="#255e57">Cr₂O₇²⁻ → 2Cr³⁺ + <tspan font-weight="700" fill="#c0392b">7H₂O</tspan></text>
<rect x="175" y="234" width="550" height="58" rx="11" fill="#fff5e2" stroke="#eed6a6"/>
<text x="450" y="258" font-weight="700" fill="#9a5b00">Step 4｜酸：用 H⁺ 平衡 H｜鹼：先照酸性做再兩邊加 OH⁻</text>
<text x="450" y="280" font-size="12.5" fill="#6f4a13">Cr₂O₇²⁻ + <tspan font-weight="700" fill="#c0392b">14H⁺</tspan> → 2Cr³⁺ + 7H₂O</text>
<rect x="175" y="312" width="550" height="58" rx="11" fill="#f2ecfc" stroke="#cdb8ee"/>
<text x="450" y="336" font-weight="700" fill="#6d3bd1">Step 5｜用 e⁻ 平衡電荷（加在電荷較正的一邊）</text>
<text x="450" y="358" font-size="12.5" fill="#4b3a72">Cr₂O₇²⁻ + 14H⁺ + <tspan font-weight="700" fill="#c0392b">6e⁻</tspan> → 2Cr³⁺ + 7H₂O</text>
<rect x="140" y="384" width="620" height="38" rx="11" fill="#fdeeec" stroke="#eec7c1"/>
<text x="450" y="409" font-size="13.5" font-weight="700" fill="#c0392b">Step 6｜兩式 × 係數使 e⁻ 相等 → 相加消 e⁻ → 檢查原子與電荷</text>
</g></svg><figcaption>圖 A4-1　半反應法六步驟（以酸性 Cr₂O₇²⁻ → Cr³⁺ 示範）。</figcaption></figure>`;

/* 5-1 氧化數法 */
FIGS.onmethod = `<figure><svg viewBox="0 0 900 250" width="900" role="img" aria-label="氧化數法">
<g font-size="14">
<rect x="20" y="28" width="380" height="88" rx="13" fill="#fdeeec" stroke="#eec7c1"/>
<text x="210" y="56" text-anchor="middle" font-weight="700" fill="#c0392b">還原劑：氧化數上升</text>
<text x="210" y="82" text-anchor="middle" fill="#7a3f38">C₂O₄²⁻ → CO₂</text>
<text x="210" y="104" text-anchor="middle" font-size="13" fill="#7a3f38">每 C：+3→+4（升1）× 2 個 C ＝ 共升 2</text>
<rect x="500" y="28" width="380" height="88" rx="13" fill="#e9f2fb" stroke="#bcd8ef"/>
<text x="690" y="56" text-anchor="middle" font-weight="700" fill="#1f6fb2">氧化劑：氧化數下降</text>
<text x="690" y="82" text-anchor="middle" fill="#2f5273">MnO₄⁻ → Mn²⁺</text>
<text x="690" y="104" text-anchor="middle" font-size="13" fill="#2f5273">Mn：+7→+2（降5）× 1 ＝ 共降 5</text>
<text x="450" y="158" text-anchor="middle" font-size="17" font-weight="700" fill="#0f766e">升幅 × 個數 ＝ 降幅 × 個數</text>
<text x="450" y="190" text-anchor="middle" font-size="15" class="lt">2 × <tspan font-weight="700" fill="#c0392b">5</tspan> ＝ 5 × <tspan font-weight="700" fill="#1f6fb2">2</tspan>　→　C₂O₄²⁻ 係數 5、MnO₄⁻ 係數 2</text>
<text x="450" y="222" text-anchor="middle" font-size="13" fill="#8492a6">再用觀察法補 H⁺／H₂O（酸）或 OH⁻／H₂O（鹼），最後檢查電荷</text>
</g></svg><figcaption>圖 A4-2　氧化數法：交叉相乘決定係數。</figcaption></figure>`;

/* 6-1 活性序列 */
FIGS.activity = `<figure><svg viewBox="0 0 900 530" width="900" role="img" aria-label="活性序列">
<defs><marker id="a6" markerWidth="12" markerHeight="12" refX="8" refY="4.5" orient="auto"><path d="M0,0 L10,4.5 L0,9 z" fill="#c0392b"/></marker>
<marker id="a7" markerWidth="12" markerHeight="12" refX="8" refY="4.5" orient="auto"><path d="M0,0 L10,4.5 L0,9 z" fill="#1f6fb2"/></marker></defs>
<text x="450" y="24" text-anchor="middle" font-size="15" font-weight="700" class="lt">金屬活性序列（還原力由上而下遞減）</text>
<rect x="415" y="40" width="70" height="446" rx="11" fill="#eef3f8" stroke="#dde3eb"/>
<g font-size="14" text-anchor="middle" font-weight="700">
<text x="450" y="66" fill="#c0392b">K</text><text x="450" y="93" fill="#c0392b">Na</text><text x="450" y="120" fill="#c0392b">Ca</text>
<text x="450" y="147" fill="#c0392b">Mg</text><text x="450" y="174" fill="#c0392b">Al</text><text x="450" y="201" fill="#6d3bd1">C</text>
<text x="450" y="228" fill="#c0392b">Zn</text><text x="450" y="255" fill="#c0392b">Cr</text><text x="450" y="282" fill="#c0392b">Fe</text>
<text x="450" y="309" fill="#c0392b">Ni</text><text x="450" y="336" fill="#c0392b">Sn</text><text x="450" y="363" fill="#c0392b">Pb</text>
<text x="450" y="396" fill="#0f766e">H</text><text x="450" y="424" fill="#1f6fb2">Cu</text><text x="450" y="447" fill="#1f6fb2">Hg</text>
<text x="450" y="474" fill="#1f6fb2">Ag　Pt　Au</text></g>
<line x1="392" y1="386" x2="508" y2="386" stroke="#0f766e" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M388,58 C296,180 296,350 388,476" stroke="#c0392b" stroke-width="3" fill="none" marker-end="url(#a6)"/>
<g text-anchor="middle" font-size="12.5" fill="#8a4b43"><text x="180" y="240" font-size="14" font-weight="700" fill="#c0392b">活性（還原力）大</text>
<text x="180" y="264">易失去電子</text><text x="180" y="284">易被氧化</text><text x="180" y="304">好的還原劑</text><text x="180" y="324">氧化物安定・難冶煉</text></g>
<path d="M512,476 C604,350 604,180 512,58" stroke="#1f6fb2" stroke-width="3" fill="none" marker-end="url(#a7)"/>
<g text-anchor="middle" font-size="12.5" fill="#3a6288"><text x="720" y="240" font-size="14" font-weight="700" fill="#1f6fb2">其「離子」氧化力大</text>
<text x="720" y="264">Au³⁺＞Pt²⁺＞Ag⁺＞Hg²⁺＞Cu²⁺</text><text x="720" y="284">易得電子・易被還原</text><text x="720" y="304">可直接加熱氧化物取得</text><text x="720" y="324">E° 越大 ⇒ 氧化力越強</text></g>
<text x="450" y="510" text-anchor="middle" font-size="12.5" fill="#8492a6">速記：鉀鈉鈣鎂鋁｜碳鋅鉻鐵鎳錫鉛｜氫｜銅汞銀鉑金</text>
</svg><figcaption>圖 A5-1　活性序列：左＝元素還原力，右＝其離子的氧化力，兩者順序相反。</figcaption></figure>`;

/* 7-1 碘量法流程 */
FIGS.iodo = `<figure><svg viewBox="0 0 900 360" width="900" role="img" aria-label="碘量法流程">
<defs><marker id="a8" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill="#5d6878"/></marker></defs>
<g font-size="13.5" text-anchor="middle">
<rect x="20" y="38" width="205" height="104" rx="13" fill="#e2f6f2" stroke="#a9ddd5"/>
<text x="122" y="64" font-weight="700" fill="#0f766e">① 待測氧化劑</text><text x="122" y="88" fill="#255e57">ClO⁻（漂白水）</text>
<text x="122" y="108" fill="#255e57">Cu²⁺、KIO₃、H₂O₂</text><text x="122" y="130" font-size="12" fill="#255e57">＋ 過量 KI（酸性）</text>
<rect x="348" y="38" width="205" height="104" rx="13" fill="#f2ecfc" stroke="#cdb8ee"/>
<text x="450" y="64" font-weight="700" fill="#6d3bd1">② 定量釋出 I₂</text><text x="450" y="88" fill="#4b3a72">ClO⁻ + 2I⁻ + 2H⁺</text>
<text x="450" y="108" fill="#4b3a72">→ Cl⁻ + I₂ + H₂O</text><text x="450" y="130" font-size="12" fill="#4b3a72">溶液呈黃褐色</text>
<rect x="676" y="38" width="205" height="104" rx="13" fill="#fff5e2" stroke="#eed6a6"/>
<text x="778" y="64" font-weight="700" fill="#9a5b00">③ Na₂S₂O₃ 滴定</text><text x="778" y="88" fill="#6f4a13">I₂ + 2S₂O₃²⁻</text>
<text x="778" y="108" fill="#6f4a13">→ 2I⁻ + S₄O₆²⁻</text><text x="778" y="130" font-size="12" fill="#6f4a13">澱粉（近終點才加）</text>
<g stroke="#5d6878" stroke-width="2" fill="none" marker-end="url(#a8)"><path d="M227,90 L344,90"/><path d="M555,90 L672,90"/></g>
<rect x="180" y="198" width="540" height="72" rx="13" fill="#fdeeec" stroke="#eec7c1"/>
<text x="450" y="224" font-weight="700" fill="#c0392b">④ 終點：深藍色（I₂–澱粉）→ 恰好褪色（無色）</text>
<text x="450" y="250" font-size="13" fill="#7a3f38">1 mol 氧化劑 ≡ n mol I₂ ≡ 2n mol S₂O₃²⁻</text>
<path d="M778,144 C778,180 700,194 640,204" stroke="#5d6878" stroke-width="2" fill="none" marker-end="url(#a8)"/>
<text x="450" y="312" font-size="14" font-weight="700" class="lt">換算鏈：n(待測) × 得 e⁻ 數 ＝ n(I₂) × 2 ＝ n(S₂O₃²⁻) × 1</text>
<text x="450" y="338" font-size="12.5" fill="#8492a6">I₂ + 2e⁻ → 2I⁻；2S₂O₃²⁻ → S₄O₆²⁻ + 2e⁻</text>
</g></svg><figcaption>圖 A6-1　碘量法（間接滴定）：氧化劑 → 釋出 I₂ → 硫代硫酸鈉滴定 I₂。</figcaption></figure>`;

/* B0-1 電池 vs 電解池 */
FIGS.cell = `<figure><svg viewBox="0 0 900 440" width="900" role="img" aria-label="電池與電解池對比">
<text x="215" y="26" text-anchor="middle" font-size="15.5" font-weight="700" fill="#0f766e">(A) 電池 Galvanic：化學能 → 電能（自發）</text>
<path d="M95,82 L95,60 L335,60 L335,82" stroke="#3b4757" stroke-width="3" fill="none"/>
<rect x="170" y="46" width="90" height="28" rx="6" fill="#fff5e2" stroke="#9a5b00"/>
<text x="215" y="66" text-anchor="middle" font-size="13.5" font-weight="700" fill="#9a5b00">伏特計</text>
<text x="132" y="98" text-anchor="middle" font-size="13" font-weight="700" fill="#c0392b">e⁻ →</text>
<rect x="82" y="82" width="26" height="128" rx="4" fill="#9aa7b8"/><text x="95" y="230" text-anchor="middle" font-size="13" font-weight="700" fill="#5d6878">Zn 片</text>
<rect x="322" y="82" width="26" height="128" rx="4" fill="#c98a52"/><text x="335" y="230" text-anchor="middle" font-size="13" font-weight="700" fill="#8a5a2b">Cu 片</text>
<path d="M45,152 L45,320 L185,320 L185,152" stroke="#7f92a8" stroke-width="3" fill="#e9f2fb"/>
<path d="M250,152 L250,320 L390,320 L390,152" stroke="#7f92a8" stroke-width="3" fill="#eaf6ee"/>
<text x="115" y="302" text-anchor="middle" font-size="12.5" fill="#2f5273">ZnSO₄(aq)</text>
<text x="320" y="302" text-anchor="middle" font-size="12.5" fill="#2f5e40">CuSO₄(aq)</text>
<path d="M150,152 C150,110 285,110 285,152" stroke="#6d3bd1" stroke-width="13" fill="none" opacity=".5"/>
<path d="M150,152 C150,110 285,110 285,152" stroke="#6d3bd1" stroke-width="2.5" fill="none"/>
<text x="217" y="112" text-anchor="middle" font-size="12.5" font-weight="700" fill="#4b2a94">鹽橋</text>
<text x="160" y="174" font-size="11" fill="#4b2a94">陰離子→左</text><text x="252" y="174" font-size="11" fill="#4b2a94">陽離子→右</text>
<rect x="33" y="340" width="170" height="76" rx="10" fill="#fdeeec" stroke="#eec7c1"/>
<text x="118" y="362" text-anchor="middle" font-size="13" font-weight="700" fill="#c0392b">陽極（−）＝ 氧化</text>
<text x="118" y="383" text-anchor="middle" font-size="12" fill="#7a3f38">Zn → Zn²⁺ + 2e⁻</text><text x="118" y="403" text-anchor="middle" font-size="12" fill="#7a3f38">質量減少</text>
<rect x="238" y="340" width="170" height="76" rx="10" fill="#e9f2fb" stroke="#bcd8ef"/>
<text x="323" y="362" text-anchor="middle" font-size="13" font-weight="700" fill="#1f6fb2">陰極（＋）＝ 還原</text>
<text x="323" y="383" text-anchor="middle" font-size="12" fill="#2f5273">Cu²⁺ + 2e⁻ → Cu</text><text x="323" y="403" text-anchor="middle" font-size="12" fill="#2f5273">質量增加</text>
<line x1="445" y1="18" x2="445" y2="424" stroke="#dde3eb" stroke-width="2" stroke-dasharray="6 5"/>
<text x="675" y="26" text-anchor="middle" font-size="15.5" font-weight="700" fill="#9a5b00">(B) 電解池 Electrolytic：電能 → 化學能（非自發）</text>
<path d="M560,82 L560,60 L790,60 L790,82" stroke="#3b4757" stroke-width="3" fill="none"/>
<rect x="620" y="44" width="110" height="30" rx="6" fill="#fff5e2" stroke="#9a5b00"/>
<text x="675" y="65" text-anchor="middle" font-size="13" font-weight="700" fill="#9a5b00">直流電源</text>
<text x="672" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="#5d6878">＋　　　−</text>
<text x="596" y="98" text-anchor="middle" font-size="13" font-weight="700" fill="#c0392b">← e⁻</text>
<rect x="547" y="82" width="26" height="128" rx="4" fill="#9aa7b8"/><text x="560" y="230" text-anchor="middle" font-size="12.5" font-weight="700" fill="#5d6878">惰性電極</text>
<rect x="777" y="82" width="26" height="128" rx="4" fill="#9aa7b8"/><text x="790" y="230" text-anchor="middle" font-size="12.5" font-weight="700" fill="#5d6878">惰性電極</text>
<path d="M505,152 L505,320 L845,320 L845,152" stroke="#7f92a8" stroke-width="3" fill="#f3ecfb"/>
<text x="675" y="302" text-anchor="middle" font-size="12.5" fill="#4b3a72">CuCl₂(aq)、NaCl(aq) 或熔融鹽</text>
<rect x="488" y="340" width="174" height="76" rx="10" fill="#fdeeec" stroke="#eec7c1"/>
<text x="575" y="362" text-anchor="middle" font-size="13" font-weight="700" fill="#c0392b">陽極（＋）＝ 氧化</text>
<text x="575" y="383" text-anchor="middle" font-size="12" fill="#7a3f38">2Cl⁻ → Cl₂↑ + 2e⁻</text><text x="575" y="403" text-anchor="middle" font-size="12" fill="#7a3f38">接電源正極</text>
<rect x="688" y="340" width="174" height="76" rx="10" fill="#e9f2fb" stroke="#bcd8ef"/>
<text x="775" y="362" text-anchor="middle" font-size="13" font-weight="700" fill="#1f6fb2">陰極（−）＝ 還原</text>
<text x="775" y="383" text-anchor="middle" font-size="12" fill="#2f5273">Cu²⁺ + 2e⁻ → Cu</text><text x="775" y="403" text-anchor="middle" font-size="12" fill="#2f5273">接電源負極</text>
</svg><figcaption>圖 B0-1　電池與電解池對比。<b>共同點：陽極永遠氧化、陰極永遠還原</b>；<b>不同點：正負極定義相反</b>。</figcaption></figure>`;

/* B1-1 標準還原電位尺 */
FIGS.potential = `<figure><svg viewBox="0 0 900 300" width="900" role="img" aria-label="標準還原電位尺">
<defs><marker id="a9" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 z" fill="#1f6fb2"/></marker>
<marker id="a10" markerWidth="11" markerHeight="11" refX="8" refY="4" orient="auto"><path d="M0,0 L9,4 L0,8 z" fill="#c0392b"/></marker></defs>
<line x1="70" y1="140" x2="840" y2="140" stroke="#8492a6" stroke-width="2.5"/>
<line x1="540" y1="118" x2="540" y2="162" stroke="#0f766e" stroke-width="3"/>
<text x="540" y="184" text-anchor="middle" font-size="13" font-weight="700" fill="#0f766e">SHE ＝ 0.00 V</text>
<g font-size="11.5" text-anchor="middle" fill="#5d6875">
<text x="120" y="106">Li −3.04</text><text x="205" y="122">K −2.93</text><text x="290" y="106">Na −2.71</text><text x="368" y="122">Al −1.66</text>
<text x="436" y="106">Zn −0.76</text><text x="496" y="122">Fe −0.44</text><text x="600" y="106">H₂ 0.00</text><text x="668" y="122">Cu +0.34</text>
<text x="736" y="106">Ag +0.80</text><text x="806" y="122">F₂ +2.87</text></g>
<path d="M110,214 C300,258 620,258 810,214" stroke="#1f6fb2" stroke-width="2.5" fill="none" marker-end="url(#a9)"/>
<text x="460" y="284" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1f6fb2">E° 越大 → 越易得電子 → <tspan>氧化力越強</tspan>（F₂ 最強氧化劑）</text>
<path d="M810,60 C620,20 300,20 110,60" stroke="#c0392b" stroke-width="2.5" fill="none" marker-end="url(#a10)"/>
<text x="460" y="18" text-anchor="middle" font-size="13.5" font-weight="700" fill="#c0392b">E° 越小（越負）→ 越易失電子 → 還原力越強（Li 最強還原劑）</text>
</svg><figcaption>圖 B1-1　標準還原電位尺：越右越容易被還原（氧化力強）；越左的元素越容易被氧化（還原力強）。</figcaption></figure>`;

/* B3-1 ΔG-E-K 三角 */
FIGS.tri = `<figure><svg viewBox="0 0 760 330" width="760" role="img" aria-label="ΔG E K 三角關係">
<defs><marker id="a11" markerWidth="10" markerHeight="10" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 z" fill="#8492a6"/></marker></defs>
<g text-anchor="middle">
<circle cx="380" cy="60" r="56" fill="#e2f6f2" stroke="#0f766e" stroke-width="2.5"/>
<text x="380" y="56" font-size="19" font-weight="800" fill="#0f766e">ΔG°</text><text x="380" y="78" font-size="12" fill="#255e57">自發性</text>
<circle cx="150" cy="240" r="56" fill="#e9f2fb" stroke="#1f6fb2" stroke-width="2.5"/>
<text x="150" y="236" font-size="19" font-weight="800" fill="#1f6fb2">E°</text><text x="150" y="258" font-size="12" fill="#2f5273">電池電壓</text>
<circle cx="610" cy="240" r="56" fill="#f2ecfc" stroke="#6d3bd1" stroke-width="2.5"/>
<text x="610" y="236" font-size="19" font-weight="800" fill="#6d3bd1">K</text><text x="610" y="258" font-size="12" fill="#4b3a72">平衡常數</text>
<g stroke="#8492a6" stroke-width="2" fill="none" marker-end="url(#a11)">
<path d="M336,104 C280,150 216,180 178,198"/><path d="M424,104 C480,150 544,180 582,198"/>
<path d="M206,254 L554,254"/></g>
<text x="240" y="150" font-size="14" font-weight="700" fill="#0f766e">ΔG° = −nFE°</text>
<text x="520" y="150" font-size="14" font-weight="700" fill="#6d3bd1">ΔG° = −RT ln K</text>
<text x="380" y="244" font-size="14" font-weight="700" fill="#1f6fb2">E° = (RT/nF) ln K</text>
<text x="380" y="288" font-size="13" fill="#8492a6">25 ℃：E° = (0.0592 / n) · log K</text>
<text x="380" y="318" font-size="13" fill="#5d6878">E° &gt; 0 ⟺ ΔG° &lt; 0 ⟺ K &gt; 1 ⟺ 反應自發（電池可用）</text>
</g></svg><figcaption>圖 B3-1　熱力學三角：E°、ΔG°、K 三者可互相換算，n 是轉移電子莫耳數。</figcaption></figure>`;

/* U3-1 Latimer 圖（銅） */
FIGS.latimer = `<figure><svg viewBox="0 0 860 240" width="860" role="img" aria-label="Latimer 圖：銅">
<g text-anchor="middle" font-size="15">
<rect x="60" y="90" width="140" height="56" rx="12" fill="#e9f2fb" stroke="#bcd8ef"/>
<text x="130" y="118" font-weight="800" fill="#1f6fb2">Cu²⁺</text><text x="130" y="138" font-size="12.5" fill="#2f5273">+2</text>
<rect x="360" y="90" width="140" height="56" rx="12" fill="#fff5e2" stroke="#eed6a6"/>
<text x="430" y="118" font-weight="800" fill="#9a5b00">Cu⁺</text><text x="430" y="138" font-size="12.5" fill="#6f4a13">+1</text>
<rect x="660" y="90" width="140" height="56" rx="12" fill="#fdeeec" stroke="#eec7c1"/>
<text x="730" y="118" font-weight="800" fill="#c0392b">Cu</text><text x="730" y="138" font-size="12.5" fill="#7a3f38">0</text>
<line x1="204" y1="118" x2="356" y2="118" stroke="#5d6878" stroke-width="2.5"/>
<text x="280" y="106" font-size="15" font-weight="800" fill="#0f766e">+0.15 V</text>
<line x1="504" y1="118" x2="656" y2="118" stroke="#5d6878" stroke-width="2.5"/>
<text x="580" y="106" font-size="15" font-weight="800" fill="#0f766e">+0.52 V</text>
<path d="M360,168 C430,214 500,214 570,168" stroke="#c0392b" stroke-width="2.5" fill="none" stroke-dasharray="6 4"/>
<text x="465" y="220" font-size="14" font-weight="700" fill="#c0392b">右 ＞ 左 ⇒ Cu⁺ 自發歧化！</text>
<text x="430" y="46" font-size="15" font-weight="800" class="lt">酸性水溶液中的 Latimer 圖（銅）</text>
<text x="430" y="70" font-size="12.5" fill="#8492a6">2Cu⁺(aq) → Cu(s) + Cu²⁺(aq)　E°cell = 0.52 − 0.15 = +0.37 V ＞ 0</text>
</g></svg><figcaption>圖 U3-1　Latimer 圖判讀：某物種「右邊 E° ＞ 左邊 E°」時，它會<b>自發歧化</b>。</figcaption></figure>`;

/* U3-2 Frost 圖（錳，酸性） */
FIGS.frost = `<figure><svg viewBox="0 0 760 400" width="760" role="img" aria-label="Frost 圖：錳（酸性）">
<g font-size="12.5">
<line x1="70" y1="330" x2="700" y2="330" stroke="#8492a6" stroke-width="2"/>
<line x1="70" y1="330" x2="70" y2="40" stroke="#8492a6" stroke-width="2"/>
<text x="390" y="368" text-anchor="middle" font-size="13.5" font-weight="700" class="lt">氧化數 N</text>
<text x="26" y="190" text-anchor="middle" font-size="13.5" font-weight="700" class="lt" transform="rotate(-90 26 190)">N·E°（伏特）</text>
<g stroke="#dde3eb" stroke-width="1">
<line x1="180" y1="330" x2="180" y2="44"/><line x1="290" y1="330" x2="290" y2="44"/>
<line x1="400" y1="330" x2="400" y2="44"/><line x1="510" y1="330" x2="510" y2="44"/><line x1="620" y1="330" x2="620" y2="44"/></g>
<g text-anchor="middle" fill="#5d6878" font-size="12"><text x="70" y="350">0</text><text x="180" y="350">+2</text><text x="290" y="350">+3</text><text x="400" y="350">+4</text><text x="510" y="350">+6</text><text x="620" y="350">+7</text></g>
<polyline points="70,330 180,241 400,157 620,101" fill="none" stroke="#1f6fb2" stroke-width="3"/>
<g fill="#1f6fb2"><circle cx="70" cy="330" r="6"/><circle cx="180" cy="241" r="7"/><circle cx="400" cy="157" r="7"/><circle cx="620" cy="101" r="7"/></g>
<g text-anchor="middle" font-weight="700" fill="#1f6fb2" font-size="13">
<text x="70" y="316">Mn</text><text x="180" y="226">Mn²⁺</text><text x="400" y="142">MnO₂</text><text x="620" y="86">MnO₄⁻</text></g>
<text x="290" y="196" text-anchor="middle" font-size="12" fill="#8492a6">（Mn³⁺ 點位於連線上方 ⇒ 凸點 ⇒ 會歧化）</text>
<circle cx="290" cy="188" r="6" fill="#c0392b"/><text x="290" y="176" text-anchor="middle" font-size="12.5" font-weight="700" fill="#c0392b">Mn³⁺</text>
<text x="390" y="26" text-anchor="middle" font-size="14.5" font-weight="800" class="lt">Frost 圖（酸性・錳）：最低點最穩定，凸點會歧化</text>
</g></svg><figcaption>圖 U3-2　Frost 圖：縱軸 nE°（相對元素單質）。<b>連線最低點＝最穩定物種</b>；<b>位於相鄰兩點連線「上方」的點＝凸點＝會歧化</b>。</figcaption></figure>`;

/* B7-1 腐蝕與防蝕 */
FIGS.corrosion = `<figure><svg viewBox="0 0 900 300" width="900" role="img" aria-label="犧牲陽極防蝕">
<g font-size="13">
<rect x="30" y="200" width="380" height="60" rx="10" fill="#eef3f8" stroke="#dde3eb"/>
<text x="220" y="226" text-anchor="middle" font-weight="700" fill="#5d6878">地下鐵管（Fe）</text>
<text x="220" y="248" text-anchor="middle" font-size="12" fill="#8492a6">陰極 → 受保護，不腐蝕</text>
<rect x="180" y="90" width="80" height="110" rx="8" fill="#c9d3de" stroke="#8492a6"/>
<text x="220" y="150" text-anchor="middle" font-weight="800" fill="#3b4757">Mg 塊</text>
<text x="220" y="80" text-anchor="middle" font-size="12.5" font-weight="700" fill="#c0392b">陽極：Mg → Mg²⁺ + 2e⁻（被犧牲）</text>
<path d="M260,150 C330,150 330,190 330,206" stroke="#c0392b" stroke-width="2.5" fill="none"/>
<text x="330" y="176" font-size="12" fill="#c0392b" font-weight="700">e⁻</text>
<text x="220" y="286" text-anchor="middle" font-size="12" fill="#8492a6">土壤中的水分＝電解質，構成原電池</text>
<rect x="490" y="200" width="380" height="60" rx="10" fill="#fdeeec" stroke="#eec7c1"/>
<text x="680" y="226" text-anchor="middle" font-weight="700" fill="#c0392b">馬口鐵（鍍錫鐵）刮傷後</text>
<text x="680" y="248" text-anchor="middle" font-size="12" fill="#8a4b43">Fe 活性 ＞ Sn ⇒ Fe 當陽極 ⇒ 加速生鏽</text>
<rect x="490" y="90" width="380" height="60" rx="10" fill="#e2f6f2" stroke="#a9ddd5"/>
<text x="680" y="116" text-anchor="middle" font-weight="700" fill="#0f766e">白鐵（鍍鋅鐵）刮傷後</text>
<text x="680" y="138" text-anchor="middle" font-size="12" fill="#255e57">Zn 活性 ＞ Fe ⇒ Zn 當陽極 ⇒ Fe 仍受保護</text>
</g></svg><figcaption>圖 B7-1　犧牲陽極法與「白鐵 vs 馬口鐵」的對比。</figcaption></figure>`;
