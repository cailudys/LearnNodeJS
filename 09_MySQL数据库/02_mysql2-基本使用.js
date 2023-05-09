const mysql = require("mysql2");

// 1.创建一个连接（连接数据库）
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "a10086A.",
  database: "music_db",
});

// 问题： 这个connection对象到底是一个什么东西？怎么理解它？
// 是否可以理解为数据库实例？

// 在ndoe应用中编写sql语句
const statement = "SELECT * FROM `students`;";

// 在node中执行sql语句,connection中的query 指的是一个大的范围，不仅仅是可以执行查询语句还可以执行修改等其他语句。
connection.query(statement, (err, values, fields) => {
  if (err) {
    console.log("查询失败", err);
    return;
  }

  console.log(
    "🚀 ~ file: 02_mysql2-基本使用.js:20 ~ connection.query ~ fields:",
    fields
  );
  console.log(
    "🚀 ~ file: 02_mysql2-基本使用.js:20 ~ connection.query ~ values:",
    values
  );
});
