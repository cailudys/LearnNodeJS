const express = require("express");

const app = express();

// 一次注册多个中间件
// app.get( 路径， 中间件1， 中间件2， 中间件3 ...)
app.post(
  "/login",
  (req, res, next) => {
    console.log("normal middleware 01");
    next();
  },
  (req, res, next) => {
    console.log("normal middleware 02");
    next();
  },
  (req, res, next) => {
    console.log("normal middleware 03");
    next();
  },
  (req, res, next) => {
    console.log("normal middleware 04");
    next();
  }
);

app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
