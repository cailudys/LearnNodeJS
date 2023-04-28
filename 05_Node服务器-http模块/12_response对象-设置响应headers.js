const http = require("http");

// 1.创建一个http服务器(只是创建，服务器并不会自动开启
const server = http.createServer((req, res) => {
  //1.单独设置某一个header
  res.setHeader("Content-Type", "text/plain;charset=utf8;");

  //2.和http status code 一起设置
  res.writeHead(200, {
    "Content-Type": "text/plain;charset=utf8;",
  });

  res.end("你哈啊");
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
