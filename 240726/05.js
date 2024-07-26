//해당 문제를 forEach로 변경하여 풀어주세요
// 1.
var arr = [10, 20, 30];

// 해당 로직을 작성하세요
let array = [];
arr.forEach((element) => {
    array.push(element * 10);
});

// 결과 값: [100, 200, 300] 출력해주세요
console.log(array);

// 2.
var arr = [10, 22, 33];
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요
array = [];
arr.forEach((element) => {
    if (element % 5 === 0) array.push(element);
});

// 결과값 [10]
console.log(array);
