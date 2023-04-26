// commonjs
const fs = require("fs");

fs.open("./bbb.txt", (err, fd) => {
  if (err) {
    console.log("打开文件错误", err);
    return;
  }

  // 1.获取文件描述符
  console.log(fd);

  // 2.读取到文件的信息
  fs.fstat(fd, (err, states) => {
    console.log(states);
  });

  // 3.手动关闭文件
  fs.close(fd);
});
