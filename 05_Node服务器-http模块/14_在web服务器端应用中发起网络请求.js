const http = require("http");

// // 1.使用http模块发送get请求
// http.get("http://localhost:8000", (res) => {
//   // 从可读流中
//   res.on("data", (data) => {
//     console.log(data.toString());
//   });
// });

// 2.使用http模块发生post请求
const req = http.request(
  {
    method: "POST",
    hostname: "localhost",
    port: 8000,
  },
  (res) => {
    res.on("data", (data) => {
      console.log(data);
    });
  }
);

req.end();
