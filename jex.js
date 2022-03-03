const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexCode = document.getElementById("color");
const btn = document.querySelector(".btn");
btn.addEventListener("click",myFunction => {
    let result = "#";
    for(let i=0; i<6; i++){
    let randomHex = getRandom();
    result += hexCharacters[randomHex];
    }
    hexCode.textContent = result;
    document.body.style.backgroundColor = result;
});
