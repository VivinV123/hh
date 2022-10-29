const bttn = document.getElementById('turn')
var image = document.getElementById('bulb')
bttn.addEventListener('click',() => {
    if(bttn.textContent=="Turn ON")
    {
        image.src = "/img/bulbon.jpg"
        bttn.textContent = "Turn OFF"
    }
    else
    {
        image.src = "/img/bulboff.jpg"
        bttn.textContent = "Turn ON"
    }

})