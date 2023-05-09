const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "a10086A.",
  database: "music_db",
  connectionLimit: 5,
});

const statement = "SELECT * FROM `products` WHERE price > ? AND score > ?;";

// connectionPool.promise().execute() 这样执行后拿到的结果就是一个promise
connectionPool
  .promise()
  .execute(statement, [1000, 8])
  .then((res) => {
    const [values, fields] = res;
    console.log(values);
    console.log(fields);
  });
