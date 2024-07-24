function oddEven(num) {
    if (num % 2 === 0) {
        return "짝수";
    } else {
        return "홀수";
    }
}

console.log(oddEven(10)); // 결과값 "짝수";
console.log(oddEven(7)); // 결과값 "홀수";
