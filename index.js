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
<div class = "phone_info">

    <p>09:41</p>

    <div class = "phone_icons">
<i class="fa-solid fa-signal"></i>
<i class="fa-solid fa-wifi"></i>
<i class="fa-solid fa-battery-full"></i>
</div>

</div>


<div class = top_info>
<i class="fa-solid fa-bars"></i>
    <h1>MyMovies</h1>

    <button class="toggle-btn">switch</button>

</div>



     `

    //FOOTER

    footerelm.innerHTML = `

<div class="footer_icons">
<i class="fa-solid fa-tape"></i>
<i class="fa-solid fa-ticket-simple"></i>
<i class="fa-regular fa-bookmark"></i>
</div>

<div class="home_indicator"><hr></div>
`



    //variabel der henter knappen på klassenavn

    const button = document.querySelector(".toggle-btn");



    //et click event på den variable der lige er lavet

    button.addEventListener("click", () => {

        console.log("test");

        //når du klikker på knappen kører det her if/else statement igennem

        if (document.body.classList == "dark-mode") {

            document.body.classList.remove("dark-mode");

        } else {

            document.body.classList.add("dark-mode");

        }

    });





    //Now playing




    let popularelm = document.createElement("section")
    popularelm.classList.add("popular")
    mainelm.append(popularelm)

    let popularheader = document.createElement("header")
    popularheader.innerHTML = `
<div class="movie_header"><h2>Now playing</h2>
<a href="#">See more</a>
</div>
`
    popularelm.append(popularheader)

    let popularmovies = document.createElement("div")
    popularmovies.classList.add("moviediv")
    popularelm.append(popularmovies)


    fetch(`${baseURL}/movie/now_playing?api_key=${apikey}`)
        .then(response => response.json())
        .then(data => {

            data.results.forEach(movie => {
                let article = document.createElement("article")
                article.classList.add("movie-article")
                article.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.tile} poster">
                <div class="movie_info">
                    <h3>${movie.title}</h3>
                    <p><i class="fa-solid fa-star"></i>${movie.vote_average}/10 IMdB</p>
                

                </div>

                `
                popularmovies.append(article)




            })
        })




    //Popular

    let nowelm = document.createElement("section")
    nowelm.classList.add("popular")
    mainelm.append(nowelm)

    let nowheader = document.createElement("header")
    nowheader.innerHTML = `

<div class="movie_header"><h2>Popular</h2>
<a href="#">See more</a>
    </div>
`
    nowelm.append(nowheader)

    let nowmovies = document.createElement("div")
    nowmovies.classList.add("nowmoviediv")
    nowelm.append(nowmovies)

    fetch(`${baseURL}/movie/popular?api_key=${apikey}`)
        .then(response => response.json())
        .then(data => {

            data.results.forEach(movie => {
                let article2 = document.createElement("article2")
                article2.classList.add("movie-article")
                article2.innerHTML = `
                <img class="img_column" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.tile} poster">
                <div class="movie_info">
                    <h3>${movie.title}</h3>
    
                    <p><i class="fa-solid fa-star"></i>${movie.vote_average}/10 IMdB</p>
                   <div class="genre_div"> <p class="genres"></p> </div>

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