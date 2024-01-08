import "../styles/style.css";


async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.status < 200 || response.status > 299) {
            console.log(response.status);
            throw error(response);
        } else {
            const data = await response.json();
            console.log(data);
            createCard(data.data)
        }
    } catch (error) {
        console.log(error);
    }
}

//getData("https://valorant-api.com/v1/maps");

function create(uuid) {
    const api =`https://valorant-api.com/v1/maps/${uuid}`;
    getData(api);
}

const createCard = function (maps) {
    document.querySelector("api-response").innerHTML = `<div class="class-col1">
        <h3>${maps.displayName}</h3>
        <h4>${maps.narrativeDescription}</h4>
        <h4>${maps.coordinates}</h4>
        <h4>${maps.tacticalDesciption}
        </div>
        <div class="card-col2">
            <img class="images" src="${maps.displayIcon}" alt="img of map" ${
                maps.displayName
            }
            </div>`;
};



/*
async function getData() {
let res = await fetch (
    "https://valorant-api.com/v1/maps"
    );

let data = await res.json();
console.log(data);
//data.results.forEach((object)) => console.log((object));
    }
getData();
*/