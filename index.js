const colors = ["red", "green" , "blue" , "#ff8000" , "rgb(0, 255, 255)"];
const color = document.getElementById("color");
const btn = document.querySelector(".btn");
btn.addEventListener("click", btnclick => {
let randomNumber = creatRandomItem();
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});
function creatRandomItem(){
    return Math.floor( Math.random() * colors.length);
 
}