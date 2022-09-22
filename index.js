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
    <button>Switch</button>
     `

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


})