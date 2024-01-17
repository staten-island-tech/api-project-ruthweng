import "../styles/style.css";
import { DOMselectors } from "./dom";

const API = "https://valorant-api.com/v1/maps";

async function getData(API) {
    try {
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        createCard(data.data);
    } catch (error) {
        console.error(error);
        errorMessage('Error 404: Youre done');
    }
}

getData(API);

function createCard(arr) {
    arr.forEach((item) => {
        DOMselectors.container.insertAdjacentHTML("beforeend", 
        `
        <div class="card">
            <h2 class="name">${item.displayName}</h2>
            <img class="card-img" src="${item.displayIcon}" alt="img of map">
            <h5 class="description">${item.narrativeDescription}</h5>
            <h5 class="coordinates">${item.coordinates}</h5>
            <h5 class="tacticalDescription">${item.tacticalDesciption}</h5>
        </div>`
        );
    });
}

function clearCards() {
    DOMselectors.container.innerHTML = '';
}

function errorMessage(message) {
    alert(message);
}

DOMselectors.form.addEventListener("submit", async function (event) {
    event.preventDefault();
    findMaps(DOMselectors.input.value);
    DOMselectors.input.value = "";
    clear();
  });

async function findMaps() {
    try {
        const ok = DOMselectors.input.value.toLowerCase();
        const API = `https://valorant-api.com/v1/maps?name=${ok}`
        const response = await fetch(API);
        const data = await response.json();
        await search(data, ok);
    } catch (error) {
        console.log("You're Done", error);
        DOMselectors.cards.insertAdjacentHTML(
            "beforeend"
            `
            <div class="card">
                <h2 class="name">${item.displayName}</h2>
                <img class="card-img" src="${item.displayIcon}" alt="img of map">
                <h5 class="description">${item.narrativeDescription}</h5>
                <h5 class="coordinates">${item.coordinates}</h5>
                <h5 class="tacticalDescription">${item.tacticalDesciption}</h5>
            </div>`
            
        );
    }
}

async function search(data, ok) {
    if (data.error) {
        throw new error(
            "No map here!"
        );
    } else {
        const blah = data.results.filter((maps) =>
        maps.name.toLowerCase().includes(ok)
        );
        if (blah.length > 0) {
            blah.forEach((item) => {
                DOMselectors.cards.insertAdjacentHTML (
                    "beforeend"
            `
            <div class="card">
                <h2 class="name">${item.displayName}</h2>
                <img class="card-img" src="${item.displayIcon}" alt="img of map">
                <h5 class="description">${item.narrativeDescription}</h5>
                <h5 class="coordinates">${item.coordinates}</h5>
                <h5 class="tacticalDescription">${item.tacticalDesciption}</h5>
            </div>`
                );
            } );
        } else {
            throw new error(
                "No map here!"
            );
        }
    }
}

DOMselectors.submit.addEventListener("click", function (event) {
    event.preventDefault();
    clearCards();
});

function clear() {
    DOMselectors.cards.innerHTML = "";
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