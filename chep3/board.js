const express = require("express");
const app = express();
let posts[];        // 게시글 리스트로 사용할 posts에 빈 리스트 할당

// req.body를 사용하려면 JSON 미들웨어를 사용해야함
// 사용하지 않으면 undefined로 반환
app.use(express.json()); // 미들웨어 활성화

//POST 요청 시 컨텐츠 타입이 application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({ extended: true })); //json 미들웨어와 함꼐 사용

app.get("/", (req, res) => { // /로 요청이 오면 실행
    res.json(posts);        // 게시글 리스트를 json 형식으로 보여줌
});

app.post("/posts", (req, res) => {       // /post로 요청이 오면 실행
    const { title, name, text } = req.body; //http 요청의 body 데이터를 변수에 할당

    //게시글 리스트에 새로운 게시글 정보 추가
    posts.push({ id: posts.length + 1, title, name, text, createdDt: Date() });
    res.json({ title, name, text });
});

app.delete("")