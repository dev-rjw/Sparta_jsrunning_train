// 1. 출력값과 출력되는 값의 이유를 설명해주세요
// 출력값: yuno2 / 이유: 상위 스코프의 값을 가져옵니다.
var name = "yuno";

function myName() {
    var name = "yuno2";
    function a() {
        console.log(name);
    }
    return a();
}

myName();

// 2. 출력값과 출력되는 값의 이유를 설명해주세요
// 출력값: 2 / 이유: var는 if로 감싸도 변수 값이 블록 스코프 밖에도 유효합니다.
function test() {
    var x = 1;

    if (true) {
        var x = 2;
    }

    console.log(x);
}

test();

// 3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 화살표 함수는 this를 바인딩하지 않고, 일반 함수는 this를 바인딩합니다.
// 따라서 function() 함수가 바인딩 한 값을 화살표 함수에서 받아와서 name 값이 출력되고,
// 일반 함수는 바인딩하여 전역 객체를 출력합니다.

const nameObj = {
    name: "yuno",
    method: function () {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    },
};

nameObj.method();
