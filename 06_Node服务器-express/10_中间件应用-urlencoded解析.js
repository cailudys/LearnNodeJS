const express = require("express");

// 创建app 对象
const app = express();

// 应用一些中间件
app.use(express.json()); // 解析 multipart/form-data 格式的数据
// 解析传递过来urlencoded的时候，默认使用的node的内置querystring模块
// {extended: true} 作用是，不再使用内置的qs，而是使用第三方库qs（这个第三方库是集成在了express中，不需要我们手动下载了。）
app.use(express.urlencoded({ extended: true })); // 解析 application/x-www-form-urlencoded 格式的数据

// 编写中间件
app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("登录成功，欢迎回来~");
});

// 启动服务器
app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
