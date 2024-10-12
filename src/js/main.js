let button = document.querySelector(".button")
let monkey = document.querySelector(".monkey")

let change = false
button.addEventListener('click',()=>{

    change?

    monkey.src = "./images/lunar-radiance-clear-background-moon-free-png.webp":
    monkey.src = "./images/Monkey-Selfie.webp"

    change = !change

})