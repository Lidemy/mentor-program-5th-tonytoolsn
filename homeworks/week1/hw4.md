
> GIT版控中的三種區域
> 一、工作目錄(Working Directory)
> 工作目錄(WD)，就是你在本端程式儲存的資料夾，這個資料夾底下的所有子資料夾及檔案都會套用GIT版控
> 
>二、暫存區(Staging Area或Index Area)
>這是工作目錄(WD)和儲存庫(Repo)的中介區域。當工作目錄新增、修改、刪除完成後，要先把這些更改過的檔案新增(add)到暫存區。
>
>三、儲存庫(Repository)
>儲存庫就是每次提交(commit)版本放置的區域。當程式在工作目錄(WD)修改到一個階段，也把更改的檔案放到暫存區(Stage)，此時便可以將資料提交(commit)到儲存庫(Repo)建立新的版本。

1. 先去[git下載](https://git-scm.com/)，安裝完以後可以在開啟git-bash 試著輸入：git --version 並且按 enter，看有沒有印出git的版本號就知道是否成功了！
2. `git init` : 初始化，此指令會將此資料夾，加入Git版本控制。
3. `git status` : 查看版本控制時，各檔案在甚麼狀態，工作目錄區或暫存區，決定用`git add <file>`或`git commit -m"msg"`指令。
4. `git add <file>` : 將修改過的檔案從工作目錄區加入到暫存區。
5. `git commit -m"msg"` : 新建一個版本，並加入敘述。
6. `git log` : 看commitID跟歷史紀錄。
7. `git checkout <版本號>`: 回到某一個版本。
8. `touch .gitignore` : 要忽略的檔案。

