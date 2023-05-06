const Koa = require("koa");
const static = require("koa-static");

// 创建app对象
const app = new Koa();

app.use(static("./uploads"));

app.listen(5000, () => {
  console.log("服务器启动成功~");
});
