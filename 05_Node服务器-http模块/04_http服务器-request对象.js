const http = require("http");

// 1.创建一个http服务器(只是创建，服务器并不会自动开启
const server = http.createServer((request, response) => {
  console.log("服务器被访问了~");

  response.end("hellow world aaa");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
