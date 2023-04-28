const http = require("http");

// 1.创建一个http服务器(只是创建，服务器并不会自动开启)
const server = http.createServer((req, res) => {
  // 获取参数：body参数
  req.setEncoding("utf-8");

  let isLogin = false;
  let dataChunks = [];

  // 这边可能被多吃调用
  req.on("data", (data) => {
    dataChunks.push(data);
  });

  req.on("end", () => {
    const dataString = dataChunks.join("");
    const loginInfo = JSON.parse(dataString);

    if (loginInfo.name === "coderwhy" && loginInfo.password === "123456") {
      isLogin = true;
      res.end("欢迎回来");
    } else {
      isLogin = false;
      res.end("登录失败");
    }
  });
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
