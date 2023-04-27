const http = require("http");

// 创建一个http服务器(只是创建，服务器并不会自动开启)
const server = http.createServer((request, response) => {
  // 1.request对象（读取流）中包含本次客户端请求的所有信息
  // 请求的url
  // 请求的方式
  // 请求头
  // 请求携带的数据
  // ......

  // 2.resquest对象（写入流）用于给客户端返回结果
  response.end("hello world");
});

// 开启服务器，并且告知需要监听的端口
// 监听端口时，约定俗成监听1024以上的端口，可以理解为操作系统已经分配给特殊的服务了。 以及65535之下的端口。
// 两个字节能保持最大的十进制数是 0 ~ 65534
server.listen(8000, () => {
  console.log("服务器开启成功了");
});
