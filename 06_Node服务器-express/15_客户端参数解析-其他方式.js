const express = require("express");

// 创建app 对象
const app = express();

// 1.解析query参数
app.get("/home/list", (req, res, next) => {
  // express默认解析 query 参数；直接通过req的query属性就可以拿到
  const queryInfo = req.query;

  console.log(queryInfo);

  res.end("data list数据");
});

// 2.解析 path 变量
app.get("/user/:id", (req, res, next) => {
  const id = req.params.id;
  res.end(`获取到${id}的数据`);
});

// 启动服务器
app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
