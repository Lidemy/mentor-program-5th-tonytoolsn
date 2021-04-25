## hw3：教你朋友 CLI

### Command Line 是什麼？
另外一種操作電腦的方法，基本上可以將電腦操作分成兩種，一種是圖形化介面GUI(Graphical User Interface)，就是現在電腦的使用方式，點點桌面上的圖案就能操作電腦，如沒有這樣的介面，那如何跟電腦溝通，就會用文字的視窗，這文字的視窗就叫CLI(Command Line Interface)
___
### 環境設置
Windows（git-bash），想要在 Windows 上面執行 command line 指令，推薦先安裝 git-bash 這個東西，安裝方式很簡單，只要到 [Git 官網](https://git-scm.com/)，右邊的 Download 點下去，然後安裝的時候一直下一步就行了。
___
### 最基本的四個指令
#### pwd：我在哪裡？
```
//Print Working Directory(印出所在位置)
pwd
```
#### ls：列出檔案清單
```
//LiSt(印出現在資料夾下檔案)
//有些指令後面，還能加參數
ls
ls -al   //印出更多詳細內容
```
#### cd：我要帶你到處去飛翔
```
//Change Directory(切換資料夾)
cd 子目錄
cd .. //回到上一層
cd ~  //回到home目錄 
cd /  //回到根目錄

clear //清光畫面
exit  //關閉Terminal
```
#### man：指令使用手冊
```
//MANual(使用說明書)
man 指令 //後面加指令，查詢指令用法
```
> 補充：
在 Windows 上面的話是沒有這個指令可以用的喔，會出現指令不存在的錯誤
___
### 檔案操作相關指令
#### touch：建立檔案與更改檔案時間
```
//touch(建立檔案或是更改時間)
touch 檔名
```
#### rm：把你刪光光
```
//ReMove(刪除檔案)
rm 檔名
rm -rf         //刪除整個檔案或整個資料夾
rmdir 資料夾名稱 //刪除空資料夾
```
#### mkdir：建立資料夾
```
//MaKe DIRectory(建立資料夾)
mkdir 資料夾名稱
```
#### mv：移動檔案或是改名
```
//MoVe(移動檔案或是改名)
mv 檔名 新檔名  //改名
mv 檔名 路徑    //路徑，相對路徑或絕對路徑
mv 檔名 ..     //移動到上一層
```
#### cp：複製人大戰
```
//CoPy(複製檔案)
cp 檔名 新檔名               //複製檔案
cp -r 原資料夾名稱 新資料名稱  //複製資料夾
```
___
### 把你困在裡面一輩子的編輯器：Vim
```
//vim(文字編輯器)

vim 檔名

//按i 進入編輯模式
//按esc 進入普通模式
:q 退出
:wq 存檔後退出
:q! 不存檔直接退出

cat 檔名 //由第一行開始顯示檔案內容
```
___
```
//h0w 哥的要求:建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案
```
`mkdir wifi` : 建立一個叫做 wifi 的資料夾
`cd wifi/` : 進入資料夾
`touch afu.js` : 建立一個叫 afu.js 的檔案
```
