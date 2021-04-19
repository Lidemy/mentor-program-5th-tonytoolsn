## hw1：交作業流程
```
如何教作業

1.設定Github 
2.寫作業
3.交作業發PR
```

1. 點GitHub classroom 連結， 點Accept this assignment，接受邀請後，會新增一個repository，按F5重新整理，會產生此連結 https://github.com/Lidemy/mentor-program-5th-tonytoolsn ，這會在Lidemy底下，後面是你的帳號，這是你專屬的第五期，交作業的倉庫。

2. 先 clone github上的資料到電腦內 : git clone https://github.com/Lidemy/mentor-program-5th-tonytoolsn.git ，可以先用 **ls** 看 mentor-program-5th-tonytoolsn 存放的位置。

3. 打開mentor-program-5th-tonytoolsn資料夾，將作業寫在homework底下。

### 寫作業之前務必先開一個新的branch

4. 到mentor-program-5th-tonytoolsn的資料夾後 建立一個新的branch：git branch week1 ，接著使用：git checkout week1（切換到branch上），可以用 git status 確認是否已經在 week1 的branch 上，分支名稱，就取當週。

5. 寫作業，寫在homework底下week1(找到當週)，去直接寫在裡的檔案就好。

6. 寫完記得存檔，ctrl+s

7. git status 可以看到 hw1.md~hw5.md 內容被新增

8. 接著使用 ：git commit -am "week1" ，可以用git status查看作業是否完成 commit

### 交作業之前務必先檢查作業是否都沒有問題
9.  git push origin week1 (將本地的資料推到ruofan的遠端)
  
10. 到 github 介面點選 pull request

11. 點選 compare & pull request

12. 接著按 create pull request

13. 看過自我檢測後才可以交作業

14. 接著到Lidemy系統的d課程總覽，點繳交作業 貼上PR連結

15. 助教看完作業後會merge branch 到master上

16. 讓遠端的master跟本地的master同步，在做這一步之前用 git checkout master ，回到master的位置上之後

17. 使用 git pull origin master 讓遠端的master跟本地的master同步

18. 同步之後就可以把本地的week1 branch刪掉了 ：git branch -d "week1"

### 更新到最新狀態，與我的 master 同步

1. 寫完作業發了 PR，助教 code review 完並 merge 了。
 
2. 此時遠端 repo 的 master 的進度會是最新的，於是你會在 local 端 `git checkout` 到 master，用 `git pull origin master` 把 local 端的 master 和你遠端的 repo 同步。（到這裡都是一般交作業流程）

