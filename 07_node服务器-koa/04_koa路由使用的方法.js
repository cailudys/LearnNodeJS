const userRouter = require("./router/userRouter");

const Koa = require("koa");

const app = new Koa();

// 3.把路由对象映射成中间件注入到app中(让路由中的中间件生效)
app.use(userRouter.routes());
// 使用这个中间件，当使用没有配置的请求方法使，会返回 Method Not Allowed
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
