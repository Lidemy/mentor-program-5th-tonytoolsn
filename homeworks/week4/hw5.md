## 請以自己的話解釋 API 是什麼
API(應用程式介面)，重要在介面兩個字，透過 API ，可以讓雙方交換資料，分為使用 API 跟提供 API ， 簡單來說 API 就是 當你要跟它要資料時，沒辦法直接跟它要時，那你就要透過它提供的 API 跟它要東西，或假設你是提供資料的一方，那你當然不希望它人來直接存取你的資料庫，將存取資料庫的權限給它，所以你提供 API ，一個介面給它，讓它來存取你的資料，那在這個介面你就可以定義那些資料可以給它，那些東西不給它，你就可以把控這部分。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
417 Expectation Failed - 執行失敗。
503 Service Unavailable - 服務無法使用。 這是 IIS 6.0 專用的錯誤碼。
505 HTTP Version Not Supported - 不支援的 HTTP 版本。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://tonytoolsn-restaurants.com

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取所有餐廳 | GET    | /restaurants     | _limit:限制回傳資料數量           | /restaurants?_limit=5 |
| 獲取單一餐廳 | GET    | /restaurants/:id | 無                    | /restaurants/10      |
| 新增餐廳   | POST   | /restaurants     | name: 餐廳名 | 無              |
| 刪除餐廳   | DELETE   | /restaurants/:id     | 無 | 無              |
| 更改餐廳資訊   | PATCH   | /restaurants/:id     | name: 餐廳名 | 無              |
