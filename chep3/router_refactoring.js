const http = require("http");
const url = require("url");

http
    .createServer((req, res) => {
        const path = url.parse(req.url, true).pathname; //패스 명 할당
        res.setHeader("Content-Type", "text/html; charset=utf-8");

        if (path == "/user") {
            user(req, res);
        } else if (path == "/feed") {
            feed(req, res);
        } else {
            notFound(req, res);
        }
    }).listen("3000", () => console.log("라우터를 만들어보자!"))

const user = (req, res) => {
    res.end("[user] name ㅎㅎ: andy, age : 30"); // /user 결과값 설정
};

const feed = (req, res) => {
    res.end(`<ul>
    <li>prcture1</li>
    <li>prcture2</li>
    <li>prcture3</li>
    </ul>`); //  /feed에 대한 결과값 설정
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
};