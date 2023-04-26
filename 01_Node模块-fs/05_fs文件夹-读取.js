const fs = require("fs");

// // 1.读取文件夹，获取的是字符串数组
// fs.readdir("./why", (err, files) => {
//   console.log(files);
// });

// // 2.读取文件夹，获取到文件夹里内容的具体信息
// fs.readdir("./why", { withFileTypes: true }, (err, files) => {
//   files.forEach((item) => {
//     if (item.isDirectory()) {
//       console.log(`${item.name} 是一个文件夹`);

//       fs.readdir(
//         `./why/${item.name}`,
//         { withFileTypes: true },
//         (err, files) => {
//           console.log(files);
//         }
//       );
//     } else {
//       console.log(`${item.name} 是一个文件`);
//     }
//   });
// });

//3.

function traverseDir(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    files.forEach((item) => {
      if (item.isDirectory()) {
        console.log("文件夹：", item.name);
        traverseDir(`${dir}/${item.name}`);
      } else {
        console.log("文件", item.name);
      }
    });
  });
}

traverseDir("./why");
