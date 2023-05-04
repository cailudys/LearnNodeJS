const express = require("express");

const app = express();

// 给express创建的app传入一个回调函数
// 传入的这个回调函数就称之为 中间件 （middleware）
// 中间件（回调函数）可以接收到三个参数 request ， response, next

app.post("/login", (req, res, next) => {});

app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
