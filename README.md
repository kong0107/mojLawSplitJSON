# mojLawSplitJSON

從[全國法規資料庫 Open API](https://law.moj.gov.tw/api/swagger/ui/index) 切出的 JSON 檔。

* 將原始資料切開，每個法規為獨立檔案。
* 僅依語系區分資料夾，不區分法律與命令。
* 其他整合處理請見[本庫的 arranged 分支](https://github.com/kong0107/mojLawSplitJSON/tree/arranged)。

可利用 jsDelivr 等 CDN 服務進行應用，例如：

```js
fetch('https://cdn.jsdelivr.net/gh/kong0107/mojLawSplitJSON@split/ch/A0000001.json')
.then(res => res.json())
.then(law => {
    //...
});
```
