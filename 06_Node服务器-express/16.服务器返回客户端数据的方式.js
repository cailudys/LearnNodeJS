const express = require("express");

// 创建app 对象
const app = express();

// 编写中间件
app.post("/login", (req, res, next) => {
  // 1.res.end方法（比较少）
  res.end("登录成功，欢迎回来");

  // 2.res.json 方法(最多)
  res.json([1, 2, 3]);

  // 3.res.status 方法：设置http状态码
  res.status(201);
  res.json("场景用户成功");
});

// 启动服务器
app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
