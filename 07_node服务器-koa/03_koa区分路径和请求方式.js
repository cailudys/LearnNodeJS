const Koa = require("koa");

const app = new Koa();

// 中间件 koa里 不能通过 app.get()这样的形式注册中间件；也不支持 app.use('/user',()=>{})这样的方式来匹配路径
app.use((ctx, next) => {
  if (ctx.path === "/users") {
    if (ctx.method === "GET") {
      ctx.body = "user data list";
    }
    if (ctx.method === "POST") {
      ctx.body = "CREATE URER SUCCESS";
    }
  } else if (ctx.path === "/home") {
    ctx.body = "home data list ~";
  } else if (ctx.path === "/login") {
    ctx.body = "登录成功，欢迎回来~";
  }
});

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
