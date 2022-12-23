# mojLawSplitJSON
從全國法規資料庫轉換出的許多 JSON 檔

* 欄位名稱維持原始資料使用的文字。
* 摘要檔 `index.json` 中，法規編號的欄位名稱為 `PCode` 。（歷史因素）

關於資料來源及格式，請見 [mojLawSplit](https://github.com/kong0107/mojLawSplit) 。

2019 年起，全國法規資料庫沒有再更新「歷史法規」，因此本專案刪除 `HisMingLing` 資料夾。
如仍有需要，可從 [release](https://github.com/kong0107/mojLawSplitJSON/releases) 頁籤找 2018 年的資料進行下載。
（提醒：「歷史法規」僅包含部分行政命令層級的歷次版本，並沒有法律層級的歷次版本。）
