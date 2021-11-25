## Controller
一般来说，Controller(控制器) 经常做“页面”与“数据库”的“中间人”  
比如，有个页面需要展示用户信息:
+ 页面给后台发起请求：“给我用户信息”
+ 在后台的 controller 马上就收到请求
+ 它（controller）会找到对应的代码（handler）来处理
+ 一般，这个“处理”过程，就是从数据库里拿数据
+ 取到数据后，再由 controller 送到页面上

下面的案例，是 ```userController``` 和 ```bookController```:
+ [index.js](https://github.com/ppz-pro/Resh/blob/main/docs/controller/index.js)
+ [user.js](https://github.com/ppz-pro/Resh/blob/main/docs/controller/user.js)
+ [book.js](https://github.com/ppz-pro/Resh/blob/main/docs/controller/book.js)