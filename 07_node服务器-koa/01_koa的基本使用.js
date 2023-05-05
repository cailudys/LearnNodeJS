const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  console.log("匹配到koa路由");
  ctx.body = "哈哈哈哈";
});

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
