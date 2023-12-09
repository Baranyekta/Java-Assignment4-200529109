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

    const storyData = json.posts;

    // Check if storyData is defined before looping through it
    if (storyData && storyData.length > 0) {
        // looping through each object from the array
        for (let i = 0; i < storyData.length; i++) {
            console.log(storyData[i]);

            // tr and td elements for the body tag
            let tableRow = document.createElement("tr");
            let titleData = document.createElement("td");
            let idData = document.createElement("td");
            let bodyData = document.createElement("td");

            // add data in all the td tags
            titleData.textContent = storyData[i].title;
            idData.textContent = storyData[i].id;
            bodyData.textContent = storyData[i].body;

            // appending all the data to tr tags n adding tr to tbody tag
            tableRow.appendChild(idData);
            tableRow.appendChild(titleData);
            tableRow.appendChild(bodyData);

            tableBody.appendChild(tableRow);
        }
    } else {
    console.error('No Data Has Been Found!');
    }
}

// add event listener on the submit button to call fetchDataFromJson
 submitButton.addEventListener("click", fetchDataFromJson);
