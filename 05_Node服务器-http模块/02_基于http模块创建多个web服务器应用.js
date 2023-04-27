const http = require("http");

// 创建一个http服务器(只是创建，服务器并不会自动开启)
const server1 = http.createServer((request, response) => {
  response.end("端口server1-7000返回的结果");
});

const server2 = http.createServer((request, response) => {
  response.end("端口server8-8000返回的结果");
});

server1.listen(7000, () => {
  console.log(" 7000服务器开启成功了");
});

server2.listen(8000, () => {
  console.log("8000服务器开启成功了");
});
