// http 모듈을 불러와서 http 변수에 할당. 변수명과 모델명은 달라도 문제는 없으나 특별한 경우가 없으면 이렇게 이름 짓는게 관행
const http = reqrire("http");                   //http 객체 생성
let count = 0;

/*서버 인스턴스 생성, 인수로 함수를 콜백 받는데 http서버로 요청이 들어오면 해당 요청을 처리할 함수를 설정
콜백 함수는 요청 처리에 사용할 요청req과 응답res을 객체로 받음*/
const server = http.createServer((req,res) =>{  //서버 객체 생성

    //전역 변수로 로그 남기기
log(count);                                     //카운트 1 증가

//성공 = 200
res.statusCode = 200;                           //결과값 200

/*부가정보를 헤더에 설정, 콘텐츠의 타입을 text/plain으로 설정
text/plain : 텍스트를 평문으로 해석 (ex, text/html 텍스트를 html로 해석)
HTTP프로토콜 헤더 필드 정의(https://www.w3.org/Protocols/rfc2616/rgc2616-sec14.html)*/
res.setHeader("Content-Type", "text/plain");    //헤더 설정

//2000밀리초 후 응답 전송, 이후 http 커넥션을끝냄
res.write("hello\n");                           //응답 설정
setTimeout(()=> {                               //2초 후 Node.js 출력
    res.end("Node.js");
}, 2000);
});


function log(count) {
    console.log((count += 1));
}

//포트 번호는 0~1023까지는 루트 권한이 필요함. 자유사용 구간은 49152~65535임
server.listen(8000);                            //8000번 포트로 서버 실행
