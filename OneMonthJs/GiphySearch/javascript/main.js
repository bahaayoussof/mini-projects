/* 1. Grab the input value */

document.querySelector(".js-go").addEventListener('click', () => {
    pushToDOM();
    getUrl();
})

document.querySelector(".js-userinput").addEventListener('keyup', (e) => {
    // if the key ENTER is pressed...
    if(e.which === 13) {
        pushToDOM();
        getUrl();
    }
})

/* 2. do the data stuff with the API */

let getUrl = () => {
    let input = document.querySelector("input").value;
    let url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";
    

    // AJAX Request...
    let GiphyCall = new XMLHttpRequest();
    GiphyCall.open("GET", url);
    GiphyCall.send();

    GiphyCall.addEventListener('load', (e) => {
        let data = e.target.response;
        let response = JSON.parse(data);
        let imageUrls = response.data;
        
        imageUrls.forEach(image => {
            let src = image.images.fixed_height.url;
            let container = document.querySelector(".js-container");
            container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
        });

    });
}


/* 3. Show me the GIFs */

function pushToDOM(input) {

    var cont = document.querySelector(".var-container");
    cont.innerHTML = " ";
}