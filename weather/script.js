    // //json
// console.log("===houjr 1:JSON Basics ===");

// let student ={
//     name:"Mona",
//     age:19,
//     marks:[85,90,89]
// };

// //convert object to JSON string
// let jsonstring = JSON.stringify(student);
// console.log("JSON String:",jsonstring);
// console.log("Type of jsonstring:",typeof jsonstring);
// //convert JSON string back to object
// let jsonobject = JSON.parse(jsonstring);
// console.log("JSON Object:",jsonobject);
// console.log("Type of jsonobject:",typeof jsonobject);
// //variables of books atleast 3 books
// let books =[
//     {title:"harry potter",author:"R K Rowling",year:2001},
//     {title:"The Great Gatsby ",author:" F. Scott Fitzgerald",year:2005},
//     {title:"Midnight's Children ",author:" Salman Rushdie",year:2010}
// ];
// console.log("Books Array:",books);
// //convert books array to JSON string
// let booksJsonString = JSON.stringify(books);
// console.log("Books JSON String:",booksJsonString);
// //convert JSON string back to array
// let booksArray = JSON.parse(booksJsonString);
// console.log("Books Array from JSON String:",booksArray);


// //hour 2: AJEX with fetch
// console.log("===hour 2: AJEX with fetch ===");
// //fetch sample Json from API
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => console.log("Fetcheed Data:",data))
// .catch(error => console.error("Error fetching data:",error));

//predefined city -> coordinates
const cityCoords = {
    "bangalore": { lat: 12.97, lon: 77.59 },
    "delhi": { lat: 28.61, lon: 77.23 },
    "mumbai": { lat: 19.07, lon: 72.87 },
    "london": { lat: 51.51, lon: -0.13 },
    "new york": { lat: 40.71, lon: -74.01 }
};

// Event listener for button
document.getElementById("fetchBtn").addEventListener("click", () => {
    let city = document.getElementById("cityInput").value.toLowerCase();

    if (!cityCoords[city]) {
        document.getElementById("weather").innerHTML = "⚠️ City not in list!";
        return;
    }

    let coords = cityCoords[city];
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;

    // AJAX Fetch
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.current_weather) {
                document.getElementById("weather").innerHTML = `
                    <h3>Weather in ${city}</h3>
                    <p>🌡️ Temp: ${data.current_weather.temperature}°C</p>
                    <p>🍃 Wind: ${data.current_weather.windspeed} km/h</p>
                    <p>⏲️ Time: ${data.current_weather.time}</p>
                `;
            } else {
                document.getElementById("weather").innerHTML = "⚠️ Weather data not available!";
            }
        })
        .catch(err => {
            console.error(err);
            document.getElementById("weather").innerHTML = "⚠️ Error fetching weather data!";
        });
});