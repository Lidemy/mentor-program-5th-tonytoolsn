1. 什麼是 DOM？

文件物件模型 (DOM)，（Document Object Model, DOM），簡單的解釋是將 Document 轉換成 Object，DOM 是指在 html 的那些內容，可以想像把 html 文件的這結構，變成很多節點，並有階層關係，可以把標籤轉換成下圖，轉換成下圖其實感覺就跟物件差不多，所以 JS 怎麼改變介面，就是透過 DOM ，會透過 JS 去拿到 DOM ，意思就是可以拿到這個節點(元素)，並去做改變，儘管你寫的是 JS ，瀏覽器會幫助你去改變瀏覽器上的東西。

2. 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

順序 : 先捕獲再冒泡

事件傳遞機制總共分為三大階段：
* 捕獲階段 (Capture Phase)
* 目標階段 (Target Phase)
* 冒泡階段 (Bubbling Phase)

捕獲階段 :
在捕獲階段，DOM 的事件會從祖先層 (window) 開始往下尋找目標 (target)，這個過稱稱為捕獲階段 (CAPTURING_PHASE)。

目標階段 :	
在找到目標的時候，就會是目標階段 (AT_TARGET)。

冒泡階段 :
循著原路回去的過程，就是冒泡階段 (BUBBLING_PHASE)。

3. 什麼是 event delegation，為什麼我們需要它？

event delegation (事件代理)，請回憶起 事件傳遞機制詳解：捕獲與冒泡
* 將事件綁在上層
* 常用，比較有效率，節省許多資源，不用加那麼多 function ，浪費那麼多 function，去監聽每一個事件，因為每一個是事件做的事情都差不多，所以可以只使用一個 EventListener 去做管理就好
* 可以處理，動態新增的情形，動態還是可以抓到，特過冒泡機制，傳遞上去，所以即使底下新增的元素，還是可以接到他的事件。

4. vent.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
event.preventDefault() 是終止預設行為 event.stopPropgation() 是阻止事件往後繼續傳遞

範例 : 取消，<a>預設行為
```
<a id="link" href="https://www.google.com">Google</a>
```
```
var link = document.querySelector('#link');

// 在 evend handler 加上 e.preventDefault();
link.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Google!');
}, false);
```