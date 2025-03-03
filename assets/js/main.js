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

    // ciclo gli elementi card
    cardEl.forEach(card => {
        
        // ad ogni card assegno event listener
        card.addEventListener('click', function(e){
            console.log(card);

            // rendo visibile overlay
            overlayEl.classList.remove('d-none')

            // prendo l'elemento image delle card
            const img = card.querySelector('.card-img-top');

            // stampo in pagina il markup della foto cliccata
            const markupImage = `
            <img class="overlay_img" src="${img.src}" alt="">
            `
            overlayEl.insertAdjacentHTML('beforeend',markupImage)

            // prendo l'elemento button dalla pagina
            const buttonEl = document.querySelector('.overlay_btn')
            buttonEl.classList.remove('d-none')

            // assegno event listener al button che fa scomparire l'overlay
            buttonEl.addEventListener('click', function(){
                overlayEl.classList.add('d-none')
            })
            
        })
    })
})


