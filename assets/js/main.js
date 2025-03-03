// prendo gli elementi dall'HTML

const rowEl = document.querySelector('.row')
const overlayEl = document.getElementById('overlay')

// creo la funzione per inserire il markup nella pagina
function renderMarkup (url,date,title){

    const markup = `
    <div class="col">
        <div class="card" style="width:18rem;">
            <img src="${url}"
                class="card-img-top" alt="...">
            <img id="pin" src="./assets/img/pin.svg" alt="">
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted ">${date}</h6>
                <h5 class="card-title">${title}</h5>
            </div>
        </div>
    </div>
    `
    console.log(markup);

    rowEl.insertAdjacentHTML('beforeend',markup)
}

// inserisco la chiamata AJAX all'API

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(data => {
    console.log(data);

    // ciclo gli elementi nell'array ottenuto
    data.forEach(element => {
        console.log(element);
        // richiamo la funzione per inserire il markup
        renderMarkup(element.url,element.date,element.title)
        
    });

    // prendo gli elementi card dalla pagina
    const cardEl = document.querySelectorAll('.card')
    const headerEl = document.getElementById('site_header')

    cardEl.forEach(card => {
        
        card.addEventListener('click', function(){
            console.log(card);
            overlayEl.classList.add('overlay')
            cardEl.classList.add('index')
            headerEl.classList.add('index')
        })
    })
})





