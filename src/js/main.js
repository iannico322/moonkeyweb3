let button = document.querySelector(".button")
let monkey = document.querySelector(".monkey")
let text = document.querySelector(".text")


let change = false
button.addEventListener('click',()=>{

    if (!change) {
        text.textContent = "Moon"
        monkey.src = "./images/lunar-radiance-clear-background-moon-free-png.webp"
        
    } else {
        text.textContent = "Nico"
        monkey.src = "./images/1720229730763.jpg"
    }
    

    change = !change

})