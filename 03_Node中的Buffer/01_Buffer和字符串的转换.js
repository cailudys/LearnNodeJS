// // 1.创建Buffer
// const buf = new Buffer("hello");

// console.log(buf);

// // 2.另一种更推荐的方式创建Buffer实例
// const buf2 = Buffer.from("world");
// console.log(buf2);

// const buf3 = Buffer.from("你好啊");
// console.log(buf3);
// console.log(buf3.toString());

// 4.手动指的Buffer创建过程的编码 （默认是utf-8）
// 编码操作
const buf4 = Buffer.from("哈哈哈");
console.log(buf4);

// 解码操作
console.log(buf4.toString());
