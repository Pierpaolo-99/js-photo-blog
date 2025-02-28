// inserisco la chiamata AJAX all'API

fetch('https://lanciweb.github.io/demo/api/pictures/')
.then(response => response.json())
.then(data => {
    console.log(data);

    data.forEach(element => {
        console.log(element);
    });
})