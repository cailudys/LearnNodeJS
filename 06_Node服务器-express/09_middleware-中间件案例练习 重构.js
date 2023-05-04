const express = require("express");

const app = express();

// // 手动创建一个解析,客户端请求数据的中间件，解析好之后直接放到req的body属性上。
// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/json") {
//     req.on("data", (data) => {
//       const jsonInfo = JSON.parse(data.toString());
//       req.body = jsonInfo;
//     });

//     req.on("end", () => {
//       next();
//     });
//   } else {
//     next();
//   }
// });

// 直接使用express提供给我们的中间件
app.use(express.json());

app.post("/login", (req, res, next) => {
  console.log(req.body);
});

app.post("/register", (req, res, next) => {
  console.log(req.body);
});

app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
