const http = require("http");

// 1.创建一个http服务器(只是创建，服务器并不会自动开启)
const server = http.createServer((req, res) => {
  console.log(req.headers);

  res.end("查看header的信息~");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
