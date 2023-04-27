const http = require("http");

// 1.创建一个http服务器(只是创建，服务器并不会自动开启
const server = http.createServer((req, res) => {
  // 手动处理逻辑
  const url = req.url;
  const method = req.method;

  if (url === "/login") {
    if (method === "POST") {
      res.end("登录成功~");
    } else {
      res.end("不支持的请求方式，请检测你的请求方式");
    }
  } else if (url === "/products") {
    res.end("商品列表~");
  } else if (url === "/lyric") {
    res.end("天空好想下雨");
  }
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
