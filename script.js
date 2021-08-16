let weather = {
    apikay: "de9e23599dcbe264f17907038a081420",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid=" 
        + this.apikay 
        + "&lang=pt_br"
        )
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const {temp, humidity } = data.main;
        const {speed } = data.wind;
        document.querySelector(".Cidade").innerText = "Clima em " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temp").innerText =  temp.toFixed (0) + "°C";
        document.querySelector(".description").innerText = titleize(description) ;
        document.querySelector(".humidity").innerText = "Humidade:  " + humidity + "%"
        document.querySelector(".wind").innerText = "Velocidade do Vento: " + speed.toFixed (1) + "Km/h";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}
// Primeira letra Maiuscula
function titleize(text) {
    var words = text.toLowerCase().split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];
        words[a] = w[0].toUpperCase() + w.slice(1);
    }
    return words.join(" ");
}
document
    .querySelector(".search button")
    .addEventListener("click", function () {
        weather.search();

})
// botao enter ser selcionado como buscador tambem
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})



weather.fetchWeather("Sao Paulo")









