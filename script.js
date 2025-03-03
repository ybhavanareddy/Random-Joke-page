let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");
let jokeBtnEl = document.getElementById("jokeBtn");



function getRandomJoke() {
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value;
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");



            jokeTextEl.textContent = randomJoke;
        })
}
jokeBtnEl.addEventListener("click", getRandomJoke);