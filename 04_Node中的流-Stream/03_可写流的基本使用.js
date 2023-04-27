const fs = require("fs");

// 创建一个写入流
const writeStream = fs.createWriteStream("./ccc.txt", {
  flags: "w+",
});

writeStream.on("open", (fd) => {
  console.log("文件被打开了", fd);
});

writeStream.on("close", () => {
  console.log("文件被关闭了");
});

writeStream.on("finish", () => {
  console.log("finish了");
});

writeStream.write("coderwhy");
writeStream.write("aaaa");
// writeStream.write("bbbb", (err) => {
//   console.log("写入完成：", err);
// });

// writeStream.close();

// end方法：1.将最后的内容写入到文件中2.并且关闭文件

writeStream.end("哈哈哈");
