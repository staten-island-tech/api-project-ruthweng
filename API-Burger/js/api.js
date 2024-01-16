import "./styles/style.css";
import { DOMselectors } from "./dom";

const API = "https://valorant-api.com/v1/maps";

async function getData(API) {
    try {
        const response = await fetch(API);
        if (response.status !=200) {
            throw new Error(response.statusText);
        }
            const data = await response.json();
            console.log(data);
            createCard(data.items);
        
    } catch (error){
        console.log(error)
        if (error.message === 'Error');
        errorMessage('Error 404: Failed to Load Resource')
    }
}

getData(API);


function createCard(arr){
    DOMselectors.container.innerHTML= ' ';
    arr.forEach((items) => {
        DOMselectors.container.insertAdjacentHTML("beforeend", 
        `
        <div class="card">
        <h2 class="name"> ${items.displayName}</h2>
        <img class="card-img" src="${items.displayIcon}" alt="img of map"> </img>
        <h5 class="description" > ${items.narrativeDescription}</h5>
        <h5 class="coordinates" > ${items.coordinates}</h5>
        <h5 class="tacticalDescription" > ${items.tacticalDesciption}</h5>
        </div>`

    );
    });
}







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