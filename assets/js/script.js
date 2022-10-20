// var apiKey = "b458229dd20c3c6d9b84f4e82ac7388a";
// var city;

var searchForm = document.querySelector('#searchForm');


// actions for activating submit button
function searchFormSubmit(event) {
    event.preventDefault();
    
    // get the value from the input field
    var cityInputVal = document.querySelector('#cityInput').value;

    // checks if value 
    if (!cityInputVal) {
        alert("Please input a city name.");
    } else {
        var prevSearch = document.createElement('p');
        prevSearch.textContent = cityInputVal;

        var prevList = document.getElementById("prevSearch");
        prevList.appendChild(prevSearch);

        console.log(localStorage);
    
    document.getElementById('cityInput').value = '';
}
}


searchForm.addEventListener('submit', searchFormSubmit);