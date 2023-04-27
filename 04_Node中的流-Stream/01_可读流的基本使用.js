const fs = require("fs");

// 1.一次性读取
// 缺点一：没有办法精准控制，从哪开始读取，以及读取到什么位置停止。
// 缺点二：没有办法中间暂停读取，之后再恢复读取。
// 缺点三：文件非常大的时候，没法分割后然后多吃读取。
// fs.readFile("./aaa.txt", (err, data) => {
//   console.log(data);
// });

// 2.通过流来读取问题
// 2.1 创建一个可读流 (所有流都是eventEmitter的实例)
// start （闭合区间,包含start也包含end） 从第几个字节开始读。
const readStream = fs.createReadStream("./aaa.txt", {
  // 从第几个字节开始读
  start: 8,
  // 读到第几个字节结束
  end: 22,
  // 每读多少个字节之后就调用一次监听函数
  highWaterMark: 3,
});

readStream.on("data", (data) => {
  console.log(data.toString());

  readStream.pause();

  setTimeout(() => {
    readStream.resume();
  }, 2000);
});
