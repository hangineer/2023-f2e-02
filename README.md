<div align="center">
  <h1>2023 F2E 關卡二：總統即時開票全台地圖</h1>
  <img width="100%" src="public/images/thumbnail.jpg" alt="project overview"/>
</div>

### [DEMO](hangineer.github.io/2023-f2e-02/)

---

## 專案介紹
「總統即時開票全台地圖」能夠即時展示全台總統和立法委員的選舉戰況，並且地圖可以細分到各縣市、區鄉鎮市的投票結果。首頁左側展示投資概況，包含總投票數、無效/有效票數以及各政黨之前的得票比率，同時用戶可以透過台灣地圖來查看歷年全台各地的投票結果

## 使用技術及版本
### 版本
Node.js `v18.17.1`

### 使用技術
1. `Vue 3 Composition API` JS 框架
2. `Chart.js` 圓餅圖表呈現
3. `D3.js` 台灣地圖區塊劃分
4. `Axios` API 串接
5. `Tailwind Elements` 客製化元件
6. `Vite` 建構工具 + `Github Pages` 部署

### 資料

- 使用中選會選舉及公投 API https://db.cec.gov.tw/ElecTable/Election?type=President

---
## 初次使用

---

## 運行專案
```sh
npm install
npm run dev
```

or

```sh
yarn install
yarn run dev
```
---

## 尚未完成（持續優化中
1. 介面優化(含 RWD)
2. API串接

