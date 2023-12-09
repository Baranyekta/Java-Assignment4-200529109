// constants to get data from html using query selector
const search = document.querySelector(".searchInput");
const submitButton = document.querySelector("#submitButton");
const tableBody = document.querySelector("#tableBody");

// create our base url and the api key
const baseURL = 'https://lamp.computerstudi.es/~PriyanshPriyansh001/java/week14/posts.json';
const apiKey =  "200529109";

// proxy URL to access info from the lamp.compuerstudie.es website (i downloaded node and all of the required tools in order to access the info)
const proxyURL = 'http://localhost:3000/proxy'; // my localhost

// generate complete url and do a fetch request
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
            let tagsData = document.createElement("td");

            tableRow.setAttribute("class", "table-success");
            // add data in all the td tags
            titleData.textContent = storyData[i].title;
            idData.textContent = storyData[i].id;
            bodyData.textContent = storyData[i].body;

            // Handle tags array
            let tagsArray = storyData[i].tags;
            if (tagsArray && tagsArray.length > 0) {
                tagsData.textContent = tagsArray.join(', '); // Display tags as a comma-separated string
            } else {
                tagsData.textContent = 'No tags';
            }

            // appending all the data to tr tags n adding tr to tbody tag
            tableRow.appendChild(idData);
            tableRow.appendChild(titleData);
            tableRow.appendChild(bodyData);
            tableRow.appendChild(tagsData);

            tableBody.appendChild(tableRow);
        }
    } else {
    console.error('No Data Has Been Found!');
    }
}

// add event listener on the submit button to call fetchDataFromJson
 submitButton.addEventListener("click", fetchDataFromJson);
