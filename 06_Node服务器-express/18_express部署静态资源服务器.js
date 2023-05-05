const express = require("express");

// 创建app 对象
const app = express();

// 内置中间件-将某个路径转为静态资源
app.use(express.static("./upload"));

// 编写中间件
app.post("/login", (req, res, next) => {});

// 启动服务器
app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
