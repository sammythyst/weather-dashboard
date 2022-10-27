var apiKey = "b458229dd20c3c6d9b84f4e82ac7388a";
var searchForm = document.getElementById("searchForm"); 
var cityEl = document.getElementById("cityInput");
var cityList = document.getElementById("prevSearch");  
var searchBtn = document.getElementById("searchBtn");
var clearBtn = document.getElementById("clearBtn"); 

// array for searched cities
var cities = [];

// render items in search history as paragraph elements
function renderLocal() {
    // clear list each input to prevent duplicates
    cityList.innerHTML = "";

    // create new element for each entry
    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];

        var li = document.createElement("p");
        li.textContent = city;
        li.setAttribute("data-index", i);

        cityList.appendChild(li);
    }
}

// loads localstorage on page load
function init() {
    // gets stored cities from localstorage
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    // update array with new entry
    if (storedCities !== null) {
        cities = storedCities;
    }
    renderLocal();
}

function storeCities() {
    //set key in localstorage and city array
    localStorage.setItem("cities", JSON.stringify(cities));
}

// submits form 
searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // defines input value
    var cityInput = cityEl.value.trim();

    // 
    if (cityInput === "") {
        return;
    }

    // adds new city text to array and clears input
    cities.push(cityInput);
    cityEl.value = "";

    // stores update city list and re-renders array
    storeCities();
    renderLocal();
});

// clears search history on page and in localstorage
clearBtn.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

// calls funtion to run on page load
init();