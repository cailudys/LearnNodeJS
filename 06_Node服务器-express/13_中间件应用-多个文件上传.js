const express = require("express");
const multer = require("multer");

// 创建app 对象
const app = express();

// 应用 第三方 multer 中间件
const upload = multer({
  // 目的地
  //   dest: "./uploads",
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, "./uploads");
    },
    filename(req, file, callback) {
      callback(null, Date.now() + "_" + file.originalname);
    },
  }),
});

// 上传单文件:
app.post("/avatar", upload.single("avatar"), (req, res, next) => {
  console.log(req.file);
  res.end("文件上传成功");
});

// 多文件上传:
app.post("/photos", upload.array("photos"), (req, res, next) => {
  console.log(req.files);
  res.end("文件上传成功");
});

// 启动服务器
app.listen(9000, () => {
  console.log("express服务器启动成功~");
});
