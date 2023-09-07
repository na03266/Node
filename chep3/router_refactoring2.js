const http = require("http");
const url = require("url");

http
    .createServer((req, res) => {
        const path = url.parse(req.url, true).pathname; //패스 명 할당
        res.setHeader("Content-Type", "text/html; charset=utf-8");

        if (path in urlMap) { // urlMap에 path가 있는지 확인
            urlMap(req, res); // urlMap에 path값으로 매핑된 함수 실행
        } else { 
            notFound(req, res);
        }
    }).listen("3000", () => console.log("라우터를 만들어보자!"))

const user = (req, res) => {
    const userInfo = url.parse(req.url, true).query; //쿼리 스트링 데이터를 userInfo에 할당
    res.end(`[user] name : ${userInfo.name}, age : ${userInfo.age}`); // /결과 값으로 이름과 나이 설정
};
//접속시 localhost:3000/user?name=뭐시기&abe=몇십살 이렇게 접속하면 결과 보임!

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

// 라우터 규칙 매핑 키로 path가 들어가고 싶은 값에 함수를 할당
const urlMap = {
 "/": (req, res) => res.end("HOME"),
 "/user":user,
 "/feed": feed,
};