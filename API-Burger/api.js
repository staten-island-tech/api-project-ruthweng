const = URL =
async function getData() {
    let res =await fetch (
    "https://collectionapi.metmuseum.org/public/collection/v1/objects"
    );

let data = await res.json();
console.log(data);
//data.results.forEach((object)) => console.log((object));
    }
getData();