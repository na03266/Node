const url = require("url");
const express = require("express"); // express 모듈 불러오기
const { link } = require("fs");
const app = express(); // express를 초기화 후 app에 할당
const port = 3000;

app.listen(port, () => {
    console.log("익스프레스로 라우터 리팩터링 하기");
});

//GET 메서드의 라우팅 설정, urlMap만 길어지는 것보다 효율적으로 코드 관리 가능
app.get("/", (req, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) { //const가 아니라 function으로 선언시 호이스팅 사용 가능
    const user = url.parse(req.url, true).query;

    //결과값으로 유저명과 나이 제공, res.json으로 res.end 보다 간단하게 한글처리나, json타입으로 전환 가능
    res.json(`[user]name: ${user.name}, age: ${user.get}`);
}

// /feed로 요청이 들어오면 실행되는 함수수정
function feed(_, res) {  // _기호는 사용하지 않는 변수는 빼는 것이 원칙이나, 함수 인터페이스 구조상 넣을수 밖에 없을때의 관례임
    res.json(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    </ul>
    `);
}

