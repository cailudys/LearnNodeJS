const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  // 1.请求对象
  console.log(ctx.request); // request是 Koa封装的请求对象
  console.log(ctx.req); // req 是Node封装的请求对象

  // 2. 响应对象
  console.log(ctx.response); // response Koa封装的请求对象
  console.log(ctx.res); // res 是Node封装的请求对象

  ctx.body = "xxxx";

  next();
});

app.use((ctx, next) => {
  console.log("第二个中间件");
});

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
