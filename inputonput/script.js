var nameSpan = document.querySelector("#name");
var foodToOrder = "Pizza";

function setName(element) {
    console.log(element.value); //prints value to console log rather than the whole html script
    nameSpan.innerText = element.value;
}

function pickFood(element) {
    console.log("You picked " + element.value)
    foodToOrder = element.value;
}

function order() {
    alert("Ordering a " + foodToOrder);
}

