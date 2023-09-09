const url = require("url");
const express = require("express"); // express 모듈 불러오기
const { link } = require("fs");
const app = express(); // express를 초기화 후 app에 할당
const port = 3000;

app.listen(port, () => {
    console.log("익스프레스로 라우터 리팩터링 하기");
});

//GET 메서드의 라우팅 설정
app.get("/", (req, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
    const user = url.parse(req.url, true).query;

    //결과값으로 유저명과 나이 제공
    res.json(`[user]name: ${user.name}, age: ${user.get}`);
}

function feed(_, res) { // /feed로 요청이 들어오면 실행되는 함수
    res.json(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    </ul>
    `);
}

