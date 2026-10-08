# 氧化還原 × 電化學｜互動學習網

高中**選修化學 Ⅳ 第 1 章「氧化還原反應與電化學」**的完整互動式學習網站。
純靜態、零外部依賴（無 CDN、無字型、無 MathJax），化學式一律使用 Unicode 上下標 ＋ inline SVG，
因此可離線執行，也可部署到任何靜態站台。

## 內容範圍

| 區塊 | 頁數 | 說明 |
|---|---|---|
| **Part A 氧化還原** | 7 | 章地圖・氧化數・氧化劑與還原劑・歧化/歸中/H₂O₂・平衡反應式・活性序列・滴定 |
| **Part B 電化學** | 8 | 電化序與 E°・電池・電池電壓/ΔG/K・電解與法拉第・電鍍與精煉・商用電池與燃料電池・腐蝕防蝕 |
| **歷屆試題** | 2 | 102 學年度起大考真題 10 題（含官方答案與詳解）＋分級題庫 38 題互動作答 |
| **大學延伸** | 5 | 能斯特方程式・ΔG°=−nFE°・Latimer/Frost 圖・電極動力學與過電位・鋰電/電催化/腐蝕工程 |
| **互動工具** | 8 | 見下表 |
| **速查** | 4 | 考前一頁速查・顏色現象速記・二十大易錯陷阱・自我檢核清單 32 項 |

**共 35 頁**。氧化還原與電化學的比重約為 1:1。

### 八個互動工具

| id | 名稱 | 重點 |
|---|---|---|
| `t-on` | 氧化數訓練器 | 67 題題庫，含分數與負值 |
| `t-role` | 四劑辨識訓練 | 14 題，含歧化、歸中與「假氧化還原」陷阱 |
| `t-half` | **半反應式分步訓練** | 10 題，每步只填一個係數，附即時電荷檢查 |
| `t-cards` | 閃卡記憶 | 71 張，9 個主題，記錄熟練度 |
| `t-far` | 法拉第電解計算機 | 13 種產物，含電流效率與氣體體積換算 |
| `t-tit` | 滴定計算機 | N₁V₁ = N₂V₂，18 種試劑自動帶入當量數 n |
| `t-disp` | 置換反應預測器 | 活性序列 20 種，含鈍化、王水等例外 |
| `t-cell` | 電池／電解池互動圖 | 電化電池・電解池・電鍍・電解精煉四模式 |

### `t-half` 十題（化學標準答案）

```
酸性  MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O      鹼性  MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻
酸性  Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O   鹼性  ClO⁻ + H₂O + 2e⁻ → Cl⁻ + 2OH⁻
酸性  NO₃⁻ + 4H⁺ + 3e⁻ → NO + 2H₂O          鹼性  O₂ + 2H₂O + 4e⁻ → 4OH⁻
酸性  H₂O₂ + 2H⁺ + 2e⁻ → 2H₂O               鹼性  NO₃⁻ + 5H₂O + 6e⁻ → NH₂OH + 7OH⁻
氧化  C₂O₄²⁻ → 2CO₂ + 2e⁻                   氧化  Fe²⁺ → Fe³⁺ + e⁻
```

## 本機執行

需要任何靜態伺服器（**不可直接雙擊 `index.html`**，因為使用 ES module）。

```bash
cd redox-app
python3 -m http.server 3000 --bind 0.0.0.0
# 開 http://localhost:3000
```

## 檔案結構

```
index.html          SPA 外殼（側欄、頂欄、#view 掛點、#scrim、#toast）
styles.css          樣式系統（247 條規則，含深色模式與列印樣式）
scripts/
  data.js           全站資料：EXAMS 10｜QUIZ 38｜CARDS 71｜ON_BANK 67｜HALF_RX 10｜
                    ROLE_BANK 14｜E_TABLE 35｜FARADAY｜ACTIVITY 20｜NAV
  figs.js           FIGS：14 張共用 inline SVG
  content-a.js      PAGES_A：home + A0–A6
  content-b.js      PAGES_B：B0–B7 + U1–U5 + ref-*
  tools.js          TOOLS：8 個互動工具
  app.js            路由、導覽、全站搜尋、主題、進度儲存
tests/
  full.test.mjs     多檔版端到端測試（51 項）
  single.test.mjs   單檔版測試（25 項，以 file:// 載入）
tools/
  _bundle.py        打包成單一 HTML 檔
  _build_half.py    產生 HALF_RX 資料（站位明確的 sp[] 結構）
單檔版.html          全部 inline 的單檔版，雙擊即可開啟
```

### `HALF_RX` 資料結構

半反應式的站位由資料明確指定，不靠推測：

```js
{id:'h1', title:'MnO₄⁻ → Mn²⁺（酸性）', env:'acid',
 sp:[{n:'MnO₄⁻', sd:'L', ci:0}, {n:'H⁺', sd:'L', ci:1}, {n:'e⁻', sd:'L', ci:2},
     {n:'Mn²⁺', sd:'R', ci:4}, {n:'H₂O', sd:'R', ci:7}],
 target:[1,8,5,0, 1,0,0,4],
 steps:[{name:'步驟1｜平衡 Mn', coefs:[1,0,0,0, null,0,0,0], hint:'…'}, …]}
```

- `sd` = 站位（`'L'` 反應物／`'R'` 產物）
- `ci` = 該物種係數在 `target`／`coefs` 中的索引（0–3 左、4–7 右）
- 每個 step 的 `coefs` 恰好一個 `null`，就是那一步要填的空格；最後一步與 `target` 相同

## 產生單檔版

```bash
python3 tools/_bundle.py
```

每個模組包進獨立 IIFE（各檔都各自宣告 `$`/`$$`/`esc`，直接串接會撞名），
跨檔共用的 export 透過 `globalThis` 傳遞，`type="module"` 改為傳統 `<script>` 以支援 `file://`。

## 測試

```bash
npm install jsdom        # 僅測試需要，網站本身無依賴
node tests/full.test.mjs     # 多檔版：應為 51 ✓ / 0 ✗ / ERRORS 0
node tests/single.test.mjs   # 單檔版：應為 25 ✓ / 0 ✗ / ERRORS 0
```

## 部署

純靜態，任何站台皆可。

- **GitHub Pages**：Settings → Pages → Source 選 `Deploy from a branch` → `/root` → Save
  網址為 `https://<username>.github.io/<repo>/`
- **Netlify Drop**：把整個資料夾拖進 `app.netlify.com/drop`
- **Cloudflare Pages / Vercel**：連接 repo 即可，無需建置指令

repo 根目錄已放 `.nojekyll`，避免 GitHub Pages 用 Jekyll 處理而漏掉檔案。

## 進度儲存

答題紀錄、閃卡熟練度、深色模式存在瀏覽器 localStorage（key `redox-app-v1`）。
`file://` 下 localStorage 會被封鎖，此時自動降級為記憶體儲存（不報錯，但重新整理即歸零）。

## 出處

內容依據 108 課綱「選修化學 Ⅳ 第 1 章」編製。
歷屆試題取材自大學入學考試中心公布之試題與答案（102 學年度起），題目文字僅供個人學習使用，
正式題幹請以大考中心公告原文為準。
