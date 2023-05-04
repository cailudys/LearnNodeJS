const express = require("express");

const app = express();

app.post("/login", (req, res, next) => {
  // 1.获取本次请求过程中传递过来的json数据
  let isLogin = false;
  req.on("data", (data) => {
    const dataString = data.toString();
    const dataInfo = JSON.parse(dataString);
    if (dataInfo.username === "coderwhy" && dataInfo.password === "123456") {
      isLogin = true;
    }
  });

  req.on("end", () => {
    if (isLogin) {
      res.end("登录成功，欢迎回来~");
    } else {
      res.end("登录失败");
    }
  });
});

app.post("/register", (req, res, next) => {
  let isRegister = false;
  req.on("data", (data) => {
    const dataString = data.toString();
    const dataInfo = JSON.parse(dataString);

    // 查询数据库中该用户是否已经注册过
    isRegister = true;
  });

  req.on("end", () => {
    if (isRegister) {
      res.end("注册成功~");
    } else {
      res.end("注册失败，您输入的用户名已经被注册");
    }
  });
});

app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
