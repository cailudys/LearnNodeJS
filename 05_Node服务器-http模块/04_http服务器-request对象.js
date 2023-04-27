const http = require("http");

// 1.创建一个http服务器(只是创建，服务器并不会自动开启
const server = http.createServer((req, res) => {
  // request 对象中包含哪些信息
  // 1.url 信息
  console.log(req.url);
  // 2.method 信息
  console.log(req.method);
  // 3.headers 信息
  console.log(req.headers);

  res.end("hellow world aaa");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
