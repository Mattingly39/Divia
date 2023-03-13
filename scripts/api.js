import geoFindMe from "./findme.js";

// api url
const api_url = "https://bo-api.divia.fr/api/reseau/type/json"; 
// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url); 
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    geoFindMe(data);
}
// Calling that async function
getapi(api_url);
// Function to hide the loader
function hideloader() {
document.getElementById('loading').style.display = 'none';
}



  



  