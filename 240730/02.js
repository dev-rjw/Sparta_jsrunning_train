const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

async function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    try {
        const returnValue = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === "https://open.api.com/v1/data") {
                    resolve("성공");
                } else {
                    reject("실패");
                }
            }, 3000);
        });
        const data = await returnValue;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// 각각 성공과 실패에 대한 처리를 코드작성해주세요.
getData(API_URL);
getData(WRONG_URL);
