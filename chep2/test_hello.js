import http from "k6/http";

export const options = { //테스트 옵션
    vus: 2000,  // 가상유저를 설정하는 항목
    duration: "10s", // 몇초동안 테스트할지 선택
};

export default function(){
    http.get("http://localhost:8000"); // http get 메서드를 사용해서 요청을 보냄
}