const fs = require("fs");

// 1.
const content = "hello oirld, my name is coderwhy";

// 2.文件的写入操作
fs.writeFile(
  "./ccc.txt",
  content,
  {
    encoding: "utf-8",
    flag: "w",
  },
  (err) => {
    if (err) {
      console.log("文件写入错误：", err);
    } else {
      console.log("文件写入成功");
    }
  }
);
