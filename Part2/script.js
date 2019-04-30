console.log("The house always win!")

var idInputs = document.getElementById("idInput")
var colorInputs = document.getElementById("colorInput")

console.log(idInputs)
console.log(colorInputs)

function setCard(){
    var card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
    console.log(card);
    console.log(card.style.color)
}

function reset(){
    const resetCard = document.getElementsByTagName('section');
    if(resetCard === true){
        colorInput.value = grey;
    }
}