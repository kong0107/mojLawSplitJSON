# mojLawSplitJSON

從[全國法規資料庫 Open API](https://law.moj.gov.tw/api/swagger/ui/index) 切出 JSON 檔並轉換。

* 將原始資料切開，每個法規為獨立檔案。
* 編章節為巢狀。
* 中文法規的條文內容為巢狀。（英文仍為純文字）
  * 有表格或算式的條文，其 `content` 鍵之值為 `[{"table": /* 純文字表格 */ }]` 。
  * 所得稅法(G0340003)第14條中，部分類、款有 `postText` 鍵。
* 嘗試修正部分錯誤字元。
* 鍵名格式為 UpperCamelCase 的即與原始資料相同；若格式為 lowerCamelCase 則是由 [mojLawSplit](https://github.com/kong0107/mojLawSplit) 專案轉換過的。
* 僅依語系區分資料夾，不區分法律與命令。
* 未轉換的資料請見[本庫的 split 分支](https://github.com/kong0107/mojLawSplitJSON/tree/split)。

可利用 jsDelivr 等 CDN 服務進行應用，例如：

```js
fetch('https://cdn.jsdelivr.net/gh/kong0107/mojLawSplitJSON@arrange/ch/A0000001.json')
.then(res => res.json())
.then(law => {
    //...
});
```
