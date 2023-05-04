const express = require("express");

const app = express();

// 不管使用那种方式注册中间件，她们执行的权重都是完全一样的，执行顺序只按照写代码的顺序依次执行。

// 1. 注册两个普通中间件
app.use((req, res, next) => {
  console.log("normal middleware01");
  next();
});

app.use((req, res, next) => {
  console.log("normal middleware02");
  next();
});

// 2. 两个 get /home
app.get(
  "/home",
  (req, res, next) => {
    console.log("/home get middleware01");
  },
  (req, res, next) => {
    console.log("/home get middleware02");
  }
);

app.post("/login", (req, res, next) => {
  console.log("/login post middleware01");
});

app.use((req, res, next) => {
  console.log("normal middleware03");
  next();
});

app.use((req, res, next) => {
  console.log("normal middleware04");
});

app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
