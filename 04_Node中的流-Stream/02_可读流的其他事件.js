const fs = require("fs");

// 创建一个可读流 (所有流都是eventEmitter的实例)
const readStream = fs.createReadStream("./aaa.txt", {
  // 从第几个字节开始读
  start: 8,
  // 读到第几个字节结束
  end: 22,
  // 每读多少个字节之后就触发一次 ‘data’ 事件 ，默认是 64 kb
  highWaterMark: 3,
});

/**事件是流内部来触发的 */

// 1. 流会去打开文件，当文件被打开时，流会触发 'open' 事件，
readStream.on("open", (fd) => {
  console.log("文件被打开了", fd);
});

// 2.监听读取到的数据，当流读取到数据的时候会触发 'data' 事件
readStream.on("data", (data) => {
  console.log(data.toString());
});

// 3.当读取完所以数据，流会触发 'end' 事件
readStream.on("end", () => {
  console.log("流读取结束了");
});

// 4.当文件被关闭掉的时候,流会触发 'close' 事件
readStream.on("close", () => {
  console.log("文件被关闭掉了");
});
