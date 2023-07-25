const state = {
    currentPage: window.location.pathname
};


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
            console.log('Home');   
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/shows.html':
            console.log('Shows');
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

