const fs = require("fs");

// // 1.从文件中读取buffer, readFile方法不传入编码拿到的就是 buffer
// fs.readFile("./aaa.txt", (err, data) => {
//   console.log(data);
// });

// // 2. 不传入编码方式的时候，可以直接使用toString()方法拿到文本
// fs.readFile("./aaa.txt", (err, data) => {
//   console.log(data.toString());
// });

// // 可以直接操作buffer中的一项  也就是一个字节
// fs.readFile("./aaa.txt", (err, data) => {
//   data[0] = 0x6d;
//   console.log(data.toString());
// });

// 2. 读取一个图片的二进制 (一般通过已经存在的库来操作二进制)
fs.readFile("./kobi.png", (err, data) => {
  console.log(data);
});
