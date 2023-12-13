async function getData() {
let res = await fetch (
    "https://emojihub.yurace.pro/api/random"
    );

let data = await res.json();
console.log(data);
//data.results.forEach((object)) => console.log((object));
    }
getData();