const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html"); // 응답의 헤더 설정
    res.end("OK");
});

server.listen("3000", () => console.log("OK, 서버 시작!")); // 접속 대기