// 1. let uninitialized;
// console.log(uninitialized); // 결과값 undefined
// 이유: 값이 할당되지 않았기 때문입니다.

// 2. let apple = "사과";
// apple = "바나나"; // TypeError: Assignment to constant variable
// 이유: var나 let을 쓸 수 있는데, 자유로운 var보다는 좀 더 폐쇄적인 let을 썼습니다.(안전성 증가)

// 3. let lotto = [3, 8, 13, 19, 21, 32];
// console.log(lotto[3]); // 결과값 19
// 이유: 배열은 0번째부터 시작하고, 이 규칙을 통해 3번째 자리를 찾아보면 19라는 값이 나옵니다.

// 4.
// let mySchedule = "";
// console.log(mySchedule || false); // false
// console.log(!!mySchedule); // false
// 이유: ""값은 falsy한 값이므로 false 또는 false는 false이고, false를 두번 not(!)하면 false입니다.
