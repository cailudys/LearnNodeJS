const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  // 1.参数一：query params 类型参数
  const urlString = req.url;
  // 1.1 解析url
  const urlInfo = url.parse(urlString);
  const queryString = urlInfo.query;

  // 1.2 解析query
  const queryInfo = qs.parse(queryString);

  console.log(queryInfo);

  res.end("hellow world aaa");
});

server.listen(8000, () => {
  console.log("服务器开启成功~");
});
