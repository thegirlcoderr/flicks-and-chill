const state = {
    currentPage: window.location.pathname
};

//display popular movies
async function displayPopularMovies() {
    const { results } = await fetchAPIData('movie/popular');
    results.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('card')
        movieDiv.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
         ${
            movie.poster_path
            ?  `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
            :` <img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
            
         }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;

        document.querySelector('#popular-movies').appendChild(movieDiv);
    });
}

//display popular tv shows
async function displayPopularShows() {
    const { results } = await fetchAPIData('tv/popular');
    results.forEach(show => {
        const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
          <a href="tv-details.html?id=${show.id}">
         ${
            show.poster_path
            ?  `<img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />`
            :` <img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
            
         }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">Air Date: ${show.first_air_date}</small>
            </p>
          </div>
        `;

        document.querySelector('#popular-shows').appendChild(div);
    });
}

// FETCH data from TMDB 

 async function fetchAPIData(endpoint) {
     const API_KEY = 'e3bcd3ddedc1aeb5f13eda82709a14e1';
     const API_URL = 'http://api.themoviedb.org/3';
     

     showSpinner();

     const response = await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`);
     const data = await response.json();
   


     hideSpinner();
     return data;
 }


//adding and hiding spinner
function showSpinner() {
     document.querySelector('.spinner').classList.add('show')
}
 function hideSpinner() {
     document.querySelector('.spinner').classList.remove('show')
 }

//show active link
function  showActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href')=== state.currentPage) {
            link.classList.add('active');
        }
    });
}





//initialize app

function init() {
    switch (state.currentPage) {
        case '/':
        case '/index.html':
           displayPopularMovies();   
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/shows.html':
            displayPopularShows();
            break;
        case '/tv-details.html':
            console.log('TV Details');
            break;
        case '/search.html':
            console.log('Search');
            break; 
    }

    showActiveLink();
}

document.addEventListener('DOMContentLoaded', init);








































//e3bcd3ddedc1aeb5f13eda82709a14e1

