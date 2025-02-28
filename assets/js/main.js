// prendo gli elementi dall'HTML

const rowEl = document.querySelector('.row')

// inserisco la chiamata AJAX all'API

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(data => {
    console.log(data);

    // ciclo gli elementi nell'array ottenuto
    data.forEach(element => {
        console.log(element);
        console.log(element.url);
        console.log(element.title);
        console.log(element.date);
        // creo il markup da inserire in pagina
        const markup = `
                    <div class="col">
                        <div class="card" style="width:18rem;">
                            <img src="${element.url}"
                                class="card-img-top" alt="...">
                            <img id="pin" src="./assets/img/pin.svg" alt="">
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-muted ">${element.date}</h6>
                                <h5 class="card-title">${element.title}</h5>
                            </div>
                        </div>
                    </div>
        `
        console.log(markup);

        rowEl.insertAdjacentHTML('beforeend',markup)
        
    });
})