const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "a10086A.",
  database: "music_db",
});

// 编写一个预处理语句
const statement = "SELECT * FROM `products` WHERE price > ? AND score > ?;";

// 执行这个预处理语句
connection.execute(statement, [1000, 8], (err, values, fields) => {
  console.log(
    "🚀 ~ file: 03_mysql2-预处理语句.js:16 ~ connection.execute ~ err:",
    err
  );
  console.log(
    "🚀 ~ file: 03_mysql2-预处理语句.js:16 ~ connection.execute ~ values:",
    values
  );
});
