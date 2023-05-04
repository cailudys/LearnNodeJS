const express = require("express");

// 1.创建express服务器
const app = express();

//
app.post("/login", (req, res) => {
  // 处理login请求

  res.end("登录成功，欢迎回来");
});

app.get("/home", (req, res) => {
  res.end("首页的轮播图/推荐数据列表~ ");
});

app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
