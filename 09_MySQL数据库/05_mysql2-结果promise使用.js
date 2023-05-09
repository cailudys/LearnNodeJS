const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "a10086A.",
  database: "music_db",
  connectionLimit: 5,
});

// 编写一个预处理语句
const statement = "SELECT * FROM `products` WHERE price > ? AND score > ?;";

// 执行这个预处理语句
connectionPool.execute(statement, [1000, 8], (err, values, fields) => {});
