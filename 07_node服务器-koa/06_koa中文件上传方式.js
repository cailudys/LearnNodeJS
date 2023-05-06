const Koa = require("koa");
const KoaRouter = require("@koa/router");
const multer = require("@koa/multer");
// 创建app对象
const app = new Koa();

// const upload = multer({
//   dest: "./uploads",
// });

// 自定义文件的名字
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./uploads");
    },
    filename(req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
  dest: "./uploads",
});

// 创建userRouter对象
const uploadRouter = new KoaRouter({ prefix: "/upload" });

uploadRouter.post("/avatar", upload.single("avatar"), (ctx, next) => {
  console.log(ctx.request.file);
  ctx.body = "文件上传成功";
});

uploadRouter.post("/photos", upload.array("photos"), (ctx, next) => {
  console.log(ctx.request.files);
  ctx.body = "文件上传成功";
});

// 让路由里的中间件生效，并且有提升 method not allowed
app.use(uploadRouter.routes());
// app.use(uploadRouter.allowedMethods());

app.listen(6000, () => {
  console.log("服务器启动成功~");
});
