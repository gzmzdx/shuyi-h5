import Mock from "mockjs"
function settime(data,success=true,statusCode=200) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success,
                data,//数据
                statusCode,//状态码
                header: {
                    "Content-Type": "application/json",
                    "Transfer-Encoding": "chunked",
                    "Date": "Wed, 04 Nov 2020 09:19:49 GMT",
                    "Keep-Alive": "timeout=60",
                    "Connection": "keep-alive",
                },
                cookies: [],
                errMsg: "request:ok",
            });
        }, 1000);
    });
}


export default{
    getTestDate:(params) => settime(
        {a:"123"}
    )
}
