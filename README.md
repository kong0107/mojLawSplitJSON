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
## Structure
標示刪除線的為原始資料有，但因另處理過故改名的。
以問號開頭的表示未必存在。

* pcode(`string./[A-Z]\d{7}/`): 法規代號
* LawLevel(`string./(憲法|法律|命令)/`): 法規位階
* ~~LawName: 法規名稱（末尾可能有括號）~~
* name(`string`): 法規名稱
* ~~LawURL: 法規網址~~
* ~~LawCategory: 法規類別~~
* category(`Array.<string>`): 法規類別
* LawModifiedDate(`string./\d{8}/`): 法規異動日期
* ?LawEffectiveDate(`string./\d{8}/`): 生效日期
* ~~?LawEffectiveNote: 生效內容~~
* ?effectiveNote(`string`): 生效內容
* ~~?LawAbandonNote: 廢止註記~~
* ?discarded(`true`): 廢止註記
* ~~LawHasEngVersion: 是否英譯註記~~
* ?EngLawName: 英文法規名稱
* ~~LawAttachements: 附件（注意拼字錯誤）~~
  * ~~FileName: 檔案名稱~~
  * ~~FileURL: 下載網址~~
* attachments(`Object.<string,string>`): 附件（下載ID為鍵，檔名為值）
* ~~LawHistories: 沿革內容~~
* histories(`Array.<string>`): 沿革內容
* ~~?LawForeword: 前言（含排版用空格）~~
* ?foreword(`string`): 前言
* ~~LawArticles: 法條~~
  * ~~ArticleType: 條文型態~~
  * ~~ArticleNo: 條號~~
  * ~~ArticleContent: 條文內容~~
* ?divisions(`Array.<Object>`): 編章節
  * type(`string./[編章節款目]/`): 編章節位階
	* number(`uint`): 章節編號，以數字 1201 代表「第十二Ｘ之一」
	* title(`string`): 章節標題
	* start(`uint`): 起始條號
  * end(`uint`): 末條條號
  * ?children(`Array.<Object>`): 子區資訊（巢狀）
* articles(`Array.<Object>`): 條文
  * number(`uint`): 條文編號，以數字 1201 代表「第十二條之一」
  * content(`Array.<Object>`): 條文內容
    * text(`string`): 「項」內文
    * ?children(`Array.<Object>`): 款目內容（巢狀）
