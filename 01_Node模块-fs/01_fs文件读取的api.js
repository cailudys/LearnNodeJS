// commonjs
const fs = require("fs");

// 1.同步读取
// const res1 = fs.readFileSync("./abc.txt", {
//   // 告诉api当前的二进制文件是以什么方式进行编码的
//   encoding: "utf-8",
// });

// console.log(res1);

// console.log("后续代码");

// 2.异步读取：回调函数
// fs.readFile(
//   "./abc.txt",
//   {
//     encoding: "utf-8",
//   },
//   (err, data) => {
//     if (err) {
//       console.log("读取文件错误");
//       return;
//     }

//     console.log("读取文件结果：", data);
//   }
// );

// console.log("后续代码");

// 3.异步读取：Promise
fs.promises
  .readFile("./abc.txt", {
    // encoding: "utf-8",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("发生了错误", err);
  });
