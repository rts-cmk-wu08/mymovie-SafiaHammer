document.addEventListener("DOMContentLoaded", () => {

    let baseURL = "https://api.themoviedb.org/3"
    let apikey = "6ed921f549eb9260453606f4cbb22279"


    let wrapperelm = document.querySelector(".wrapper")

    let headerelm = document.createElement("header")
    headerelm.classList.add("header")
    wrapperelm.append(headerelm)

    let mainelm = document.createElement("main")
    wrapperelm.append(mainelm)

    let footerelm = document.createElement("footer")
    wrapperelm.append(footerelm)






    headerelm.innerHTML = `

    <h1>MyMovies</h1>
    <button class="toggle">switch</button>

     `

    const button = headerelm.querySelector(".toggle");
    button.addEventListener('click', () => {
        function toggle() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }
    })






    //now showing logic here!

    let popularelm = document.createElement("section")
    popularelm.classList.add("popular")
    mainelm.append(popularelm)

    let popularheader = document.createElement("header")
    popularheader.innerHTML = `
<h2>popular</h2>
<a href="#">Show more</a>
`
    popularelm.append(popularheader)

    let popularmovies = document.createElement("div")
    popularmovies.classList.add("moviediv")
    popularelm.append(popularmovies)

    fetch(`${baseURL}/movie/popular?api_key=${apikey}`)
        .then(response => response.json())
        .then(data => {

            data.results.forEach(movie => {
                let article = document.createElement("article")
                article.classList.add("movie-article")
                article.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.tile} poster">
                <div>
                    <h3>${movie.title}</h3>
                    <p>${movie.vote_average}/10 IMdB</p>
                    <p class="genres"></p>

                </div>

                `
                popularmovies.append(article)
                let genreelm = article.querySelector(".genres")
                movie.genre_ids.forEach(id => {
                    let currentgenre = genres.find(genre => genre.id == id)
                    let genrespan = document.createElement("span")
                    genrespan.innerText = currentgenre.name
                    genreelm.append(genrespan)
                })


            })
        })




    //now showing logic here!

    let nowelm = document.createElement("section")
    nowelm.classList.add("popular")
    mainelm.append(nowelm)

    let nowheader = document.createElement("header")
    nowheader.innerHTML = `
<h2>now playing</h2>
<a href="#">Show more</a>
`
    nowelm.append(nowheader)

    let nowmovies = document.createElement("div")
    nowmovies.classList.add("nowmoviediv")
    nowelm.append(nowmovies)

    fetch(`${baseURL}/movie/now_playing?api_key=${apikey}`)
        .then(response => response.json())
        .then(data => {

            data.results.forEach(movie => {
                let article2 = document.createElement("article2")
                article2.classList.add("movie-article")
                article2.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.tile} poster">
                <div>
                    <h3>${movie.title}</h3>
                    <p>${movie.vote_average}/10 IMdB</p>
                    <p class="genres"></p>

                </div>

                `
                nowmovies.append(article2)
                let genreelm2 = article2.querySelector(".genres")
                movie.genre_ids.forEach(id => {
                    let currentgenre2 = genres.find(genre => genre.id == id)
                    let genrespan2 = document.createElement("span")
                    genrespan2.innerText = currentgenre2.name
                    genreelm2.append(genrespan2)
                })


            })
        })




})