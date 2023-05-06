const Koa = require("koa");
const KoaRouter = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const multer = require("@koa/multer");

// 创建app对象
const app = new Koa();

// 使用第三方中间件解析application/json格式的数据
app.use(bodyParser());
const formParser = multer();

// 创建userRouter对象
const userRouter = new KoaRouter({ prefix: "/users" });

/**解析5中数据
 * 1. 查询字符串
 * 2. 路径变量
 * 3. application/json格式的数据 传递json字符串，可以解析成：对象、数组、字符串等
 * 4. application/x-www-form-urlencoded格式的数据
 * 5. multipart/form-data格式的数据
 */

// 1.param 路径变量
userRouter.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  ctx.body = "user list data" + id;
});

// 2.query 查询字符串
userRouter.get("/", (ctx, next) => {
  const query = ctx.query;
  console.log(query);
  ctx.body = "用户的query信息" + JSON.stringify(query);
});

// 3.application/json格式的数据（koa没有自动解析这个格式的数据）
userRouter.post("/json", (ctx, next) => {
  // 注意事项：不能从 ctx.body中获取前端传输来的application/json格式的数据
  console.log(ctx.request.body);

  // ctx.body 是用于像客户端返回数据的，所以前端传来的body请求体里面数据不可能会被放到ctx.body上
  ctx.body = "用户的json信息";
});

// 4.application/x-www-form-urlencoded格式的数据  (也是bodyParser插件帮我们解析的)
userRouter.post("/urlencoded", (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "用户的urlencoded信息" + JSON.stringify(ctx.request.body);
});

// 5.multipart/form-data格式的数据 （使用第三方库 koa-multer来解析）
userRouter.post("/formdata", formParser.any(), (ctx, next) => {
  console.log(ctx.request.body);
  ctx.body = "用户的formdata信息" + JSON.stringify(ctx.request.body);
});

// 让路由里的中间件生效，并且有提升 method not allowed
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
