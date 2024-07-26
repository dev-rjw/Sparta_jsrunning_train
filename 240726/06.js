// 1.
const students = [
    { name: "이재상", scores: [80, 90] },
    { name: "김준현", scores: [90, 95] },
    { name: "정윤오", scores: [75, 70] },
];

// 여기에 코드를 작성해주세요
// 예상 출력: ["이재상", "김준현"]
let result1 = [];
students
    .filter((value) => {
        return (value.scores[0] + value.scores[1]) / 2 >= 80;
    })
    .forEach((value) => {
        result1.push(value.name);
    });
console.log(result1);

// 2.
const numbers = [5, 10, 15, 20, 25];
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
let result2 = numbers.map((value) => value * 2).filter((value) => value <= 30);
console.log(result2);
