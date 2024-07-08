const api = "api_key=cc86568bc7b87ec1b8e042d4eb654c06"

const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

//requests for movie data

const requests = {
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginal: `${base_url}/discover/tv?${api}&with_networks=123`,
    fetchActionMovie: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovie: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovie: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovie: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDramaMovie: `${base_url}/discover/movie?${api}&with_genres=99`,
}

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}

fetch(requests.fetchNetflixOriginal)
    .then(res => res.json())

    .then((data) => {
        
        const setMovie = data.results[Math.floor(Math.random() * data.results.length)];
        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner_title");
        var banner_desc = document.getElementById("banner_description");

        banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
        banner_title.innerText = setMovie.name;
        banner_desc.innerText = truncate(setMovie.overview, 150);
    });

fetch(requests.fetchNetflixOriginal)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("head_row");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Netflix Originals"

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterL";

            var s = movie.name.replace(/\s+/g, "");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

    fetch(requests.fetchTrending)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("head_row");
        const row = document.createElement("div");

        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Popular Movie"

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterL";

            var s = movie.id
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });


fetch(requests.fetchActionMovie)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("head_row");
        const row = document.createElement("div");

        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Action Movie"

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterL";

            var s = movie.id
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

fetch(requests.fetchHorrorMovie)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("head_row");
        const row = document.createElement("div");

        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Horror Movie"

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterL";

            var s2 = movie.id;
            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

fetch(requests.fetchDramaMovie)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("head_row");
        const row = document.createElement("div");

        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Drama Movie"

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterL";

            var s = movie.id
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

fetch(requests.fetchRomanceMovie)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("head_row");
        const row = document.createElement("div");

        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Romance Movie"

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterL";

            var s = movie.id
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });

    fetch(requests.fetchComedyMovie)
    .then(res => res.json())

    .then((data) => {
        const headrow = document.getElementById("head_row");
        const row = document.createElement("div");

        row.className = "row";

        headrow.appendChild(row);

        const title = document.createElement("h2");

        title.className = "row_title";
        title.innerText = "Comedy Movie"

        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row_posters";
        row.appendChild(row_posters);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row_posterL";

            var s = movie.id
            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_posters.appendChild(poster);
        });
    });
