var http = require("http"); // 노드 모듈 요청

var hostname = "127.0.0.1";
var port = "8080";
// 서버생성
const server = http.createServer((req, res) => {
  const path = req.url;
  const method = req.method;
  if (path == "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = JSON.stringify([
        {
          name: "배변패드",
          price: 50000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
      res.end("생성되었습니다.");
    }
  }
  res.end("Good Bye");
});

server.listen(port, hostname);
console.log("mangoshop server on");
