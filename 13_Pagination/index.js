
const grid = document.querySelector('#card-grid');
let currentPage = 1;
let Searcht = "Batman";
const apiKey = 'c90b5df8';
async function LoadMovies(i,SearchT) {
    const response = await fetch(`https://www.omdbapi.com/?s=${SearchT}&apikey=c90b5df8&page=${i}`);
    const data = await response.json();
    console.log(data);
    data.Search.forEach((item) => {
        renderMovies(item);
    }
    );
}
const SearchBtn = document.getElementById("SearchBtn");
SearchBtn.onclick = (e) => {
    e.preventDefault();
    grid.innerHTML = "";
    pagination.page = 1; 
    
    Searcht = document.getElementById("InputText").value;
    console.log(Searcht)
    LoadMovies(pagination.page,Searcht);
}

function renderMovies(i) {
    grid.innerHTML += `<div class="col" style="width: 250px;  padding: 10px;">
                        <div class="card h-100" style="padding: 10px;">
                            <img height="300" src="${i.Poster}"
                                class="card-img-top" alt="${i.Title}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${i.Title}</h5>
                            </div>
                        </div>
                    </div> `;
}


const pagination = {
    page: 1,

    next() {
        this.page++;
    },
  
}
loadMoreBtn.onclick = () => {
    pagination.next();
    LoadMovies(pagination.page, Searcht);
}
document.addEventListener('DOMContentLoaded', () => {
    LoadMovies(pagination.page, Searcht);



});

