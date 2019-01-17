# mojLawSplitJSON
從全國法規資料庫轉換出的許多 JSON 檔

* 欄位名稱為英文
* 摘要檔 `index.json` 中，法規編號的欄位名稱為 `pcode` 。（因應 2019 年起全國法規資料庫的變數名稱統一）
* 章節物件為巢狀。
* 章節與法條編號使用立法院法律系統的記法，將「第四章之一」的編號記為 401 ，「第七十七條之二十七」則記為 7727 ，以利排序。

關於資料來源及格式，請見 [mojLawSplit](https://github.com/kong0107/mojLawSplit) 。

2019 年起，全國法規資料庫沒有再更新「歷史法規」，因此本專案刪除 `HisMingLing` 資料夾。
如仍有需要，可從 [release](https://github.com/kong0107/mojLawSplitJSON/releases) 頁籤找 2018 年的資料進行下載。
（提醒：「歷史法規」僅包含部分行政命令層級的歷次版本，並沒有法律層級的歷次版本。）
