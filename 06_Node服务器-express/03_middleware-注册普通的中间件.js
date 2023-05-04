const express = require("express");

const app = express();

// 总结：

// 通过use方法注册的中间件是最普通/最简单的中间件。
// 通过use注册的中间件，无论是什么请求方式都可以匹配上。
app.use((req, res, next) => {
  console.log("normal middleware 01");
  next();
});

app.use((req, res, next) => {
  console.log("normal middleware 02");
});

app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
