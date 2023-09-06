const http = require("http");
const url = require("url");

http
.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname; //패스 명 할당
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (path == "/user"){
        res.end("[user] name ㅎㅎ: andy, age : 30"); // /user 결과값 설정
    } else if (path == "/feed"){
        res.end(`<ul>
        <li>prcture1</li>
        <li>prcture2</li>
        <li>prcture3</li>
        </ul>`); //  /feed에 대한 결과값 설정
    } else{
        res.statusCode = 404;
        res.end("404 page not found");
    }
}).listen("3000", ()=> console.log("라우터를 만들어보자!"))