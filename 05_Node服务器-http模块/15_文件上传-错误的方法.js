const http = require("http");

// 1.创建一个http服务器(只是创建，服务器并不会自动开启
const server = http.createServer((req, res) => {
  // 创建writable的stream
  const writeStream = fs.createWriteStream("./foo.png", {
    flags: "a+",
  });

  // 这种方法是错误的，客户端传来的数据，除了图片还有其他信息，不能直接全部放到文件里。
  req.pipe(writeStream);

  //   req.on("data", (data) => {
  //     console.log(data);
  //     writeStream.write(data);
  //   });

  req.on("end", () => {
    // console.log("数据传输完成~");
    // writeStream.close();
    res.end("文件上传完成");
  });
});

// 2.开启server服务器
server.listen(8000, () => {
  console.log("服务器开启成功~");
});
