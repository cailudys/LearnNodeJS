const Koa = require("koa");
const KoaRouter = require("@koa/router");
const fs = require("fs");

// 创建app对象
const app = new Koa();
// 创建userRouter对象
const userRouter = new KoaRouter({ prefix: "/users" });

userRouter.get("/", (ctx, next) => {
  // 1.body 的类型是string
  //   ctx.body = "user list data ~";
  // 2.body 的类型是Buffer类型 （字节流，相当于字节数组，在postman里会被解析成数据）
  //   ctx.body = Buffer.from("你好啊，李银河~");
  // 3.body类型是stream 流
  //   const readStream = fs.createReadStream("./uploads/1683351965132_下载.jpg");
  //   ctx.type = "image/jpeg";
  //   ctx.body = readStream;
  // 4.body的类型是(array object 等)
  //   ctx.body = {
  //     code: 0,
  //     data: [],
  //   };
  // 5.body类型为 null （设置响应为null的时候会自动设置状态码为204）
  ctx.body = null;

  // 如果response.status没有设置，Koa会自动将状态设置为 200 或 204
  //   ctx.status = 200;
});

// 让路由里的中间件生效，并且有提升 method not allowed
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
