document.addEventListener('keypress', e => {
    let key = e.key.toUpperCase();
    let keys = "ASDFGHJWETYU";
    if(keys.includes(key)){
        let audio = new Audio(`sounds/${key}.mp3`);
        return audio.play();
    }
})