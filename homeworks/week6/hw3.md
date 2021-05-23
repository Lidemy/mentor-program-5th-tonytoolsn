## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
```
<option> : 作用為下拉列表中的一個選項
<select> : 作用為一個提供下拉列表選項的控制元素，與<option>一起使用。
<address> : 作用為提供某個人或某個組織（等等）的聯繫信息。
```

## 請問什麼是盒模型（box modal）
```
box model 盒子模型也稱為區塊模型，我們可以想像， html 的每一個標籤，都是一個盒子，分別有4個區塊 content (盒子內容)、 padding (盒子邊框到內容的距離)、 border (盒子邊框)、 margin (盒子與盒子的距離)，透過控制內距的 padding、控制外距的 margin 以及控制元素邊框的 border 屬性來調整盒子的展現結果，透過控制 box model 來做網頁排板。

padding：用來設計元素內容與元素本身邊框間的距離。
border：用來設計元素邊框的顏色、粗細與樣式。
margin：用來設計元素與外部元素的距離。
```

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
```
Inline行內元素
* 元素可在同一行內呈現，圖片或文字均不換行，也不會影響其版面配置
* 不可設定長寬，元素的寬高由它的內容撐開

使用時機點 : 假設，在段落中，如要改變某段文字顏色，可以使用<span>(Inline行內元素)，將某段文字，放入<span>中，文字可在同一行內呈現，也不會影響其版面配置

Block區塊元素
* 元素寬度預設會撐到最大，使其占滿整個容器
* 可以設定長寬/margin/padding，但仍會占滿一整行

使用時機點 : 假設，在段落中，需挑整段落文字，占滿一整行，就可以使用 Block 區塊元素。

inline-block行內區塊
* 以inline的方式呈現，但同時擁有block的屬性
* 可設定元素的寬高/margin/padding
* 可水平排列

使用時機點 : 假設，有多個段落，需挑整可以並排在同一行，又可以調整區塊寬高，就可以使用 inline-block行內區塊。
```

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
```
static: 預設定位，無法定義 top、left、bottom 與 right。

static 舉例 : 為預設定位。

relative: 元素與 static 位置相同，可定義 top、left、bottom 與 right。(元素實際位置還是在 static的位置，非偏移過後的位置)

relative 舉例 : 可以與 absolute 搭配使用，如需挑整子元素，定位到父元素區塊，父元素區塊設 relative。

absolute: 以上層非 static(預設定位)的父元素為定位基準。(若上層所有父元素都是預設的 static 定位，則會根據 body 定位)

absolute 舉例 : 可以與 relative 搭配使用，如需挑整元素，定位到父元素區塊，元素區塊設 absolute。

fixed: 以目前瀏覽器視窗定位，固定在瀏覽視窗的固定位置，不隨滾動捲軸拉動。

fixed 舉例 : 當頁面捲軸滾動時，如要將導覽列固定在瀏覽視窗的上方固定位置，可以使用fixed。
```
