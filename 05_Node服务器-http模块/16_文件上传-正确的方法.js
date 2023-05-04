const http = require("http");
const fs = require("fs");

// 1.创建一个http服务器(只是创建，服务器并不会自动开启
const server = http.createServer((req, res) => {
  // 编码格式
  req.setEncoding("binary");

  const boundary = req.headers["content-type"]
    .split("; ")[1]
    .replace("boundary=", "");

  // console.log(boundary);

  let formData = "";
  req.on("data", (data) => {
    formData += data;
  });

  req.on("end", () => {
    //1. 截取从image/jpeg位置开始后面所有的数据
    const imageType = "image/jpeg";
    const imageTypePosition = formData.indexOf(imageType) + imageType.length;
    console.log("imageTypePosition", imageTypePosition);
    let imageData = formData.substring(imageTypePosition);

    //2. imageData开始位置会有两个空格
    imageData = imageData.replace(/^\s\s*/, "");

    //3. 替换最后的boundary
    imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`));

    console.log(imageData);

    //4. 将imageData的数据存储到文件中
    fs.writeFile("./bar.jpg", imageData, "binary", () => {
      console.log("文件存储成功");
      res.end("文件上传完成");
    });
  });
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
