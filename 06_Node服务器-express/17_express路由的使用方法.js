const userRouter = require("./router/userRouter");
const express = require("express");

// 创建app 对象
const app = express();

app.use("/users", userRouter);

// 启动服务器
app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
