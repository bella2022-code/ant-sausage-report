# 017：火腿腸報告

第一個可玩垂直切片：偵查蟻 017 找到火腿腸、回巢留下氣味，並招募同伴繞過石頭與水窪搬回蟻巢。

直接用瀏覽器開啟 `index.html` 即可遊玩。手機以拖曳操作；電腦可拖曳、使用方向鍵或 WASD。控制採用實體鍵位，因此在英文、中文注音與日文輸入法下都能使用。

## Poki 準備

- 使用原生 HTML5、CSS、JavaScript；沒有外部字型、廣告、分析工具或第三方素材請求。
- 遊戲畫面採 16:9，能隨容器縮放。
- `poki-adapter.js` 已預留 `gameLoadingFinished`、`gameplayStart`、`gameplayStop` 事件；送 Poki 前只需按官方文件把 Poki SDK 載入在它之前。
- 目前沒有保存資料；未來若加入 `localStorage`，須以 `try/catch` 包住，讓無痕模式能正常遊玩。
