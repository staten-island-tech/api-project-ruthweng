const URL = "https://emojihub.yurace.pro/api/all";

async function getData(URL) {
    const res = await fetch (URL);
    console.log(res);



    }
getData(URL);