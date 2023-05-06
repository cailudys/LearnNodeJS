const Koa = require("koa");
const KoaRouter = require("@koa/router");
// 创建app对象
const app = new Koa();
// 创建userRouter对象
const userRouter = new KoaRouter({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  const isAuth = false;
  if (isAuth) {
    ctx.body = "user list data ~";
  } else {
    ctx.app.emit("error", -1003, ctx);
  }
});

// 让路由里的中间件生效，并且有提升 method not allowed
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// 统一错误处理 独立的文件 error-hadle.js
app.on("error", (code, ctx) => {
  const errorCode = code;
  let message = "";

  switch (errorCode) {
    case -1001:
      message = "账号或者密码错误~";
      break;
    case -1002:
      message = "请求参数不正确~";
      break;
    case -1003:
      message = "未授权,请检查你的token信息";
      break;
  }

  ctx.body = message;
});

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
