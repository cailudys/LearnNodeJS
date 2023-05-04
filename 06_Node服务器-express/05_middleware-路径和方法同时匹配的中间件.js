const express = require("express");

const app = express();

// 注册路径匹配的中间件
app.post("/login", (req, res, next) => {
  console.log("normal middleware 01");
  res.end("login 数据");
});

app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
