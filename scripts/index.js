// constants to get data from html using query selector
const search = document.querySelector(".searchInput");
const submitButton = document.querySelector("#submitButton");
const tableBody = document.querySelector("#tableBody");

// create our base url and the api key
const baseURL = 'https://lamp.computerstudi.es/~PriyanshPriyansh001/java/week14/posts.json';
const apiKey =  "200529109";

// Proxy URL
const proxyURL = 'http://localhost:3000/proxy';

// generate complete url n do a fetch request
function fetchDataFromJson() {
    // generate the complete url
    let searchData = search.value;
    let url = `${proxyURL}?url=${encodeURIComponent(baseURL)}&api_key=${apiKey}&s=${searchData}`;
    console.log(url);

    // create a fetch request n call other function
    fetch(url)
        .then(response => response.json())
        .then(json => displayData(json))
        .catch(error => console.error('Error fetching data:', error));
}

// a function to display data to page
function displayData(json) {
    console.log(json);
}

// add event listener on the submit button to call fetchDataFromJson
 submitButton.addEventListener("click", fetchDataFromJson);
