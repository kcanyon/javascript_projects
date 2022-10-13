var cookies =
    document.querySelector(".cookie");

function removeCookies() {
    cookies.remove();
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function degreeChange(element) {
    for(var i=1; i<9; i++) {
        var currentTemp = document.querySelector("#temp" + i);
        var tempVal = parseInt(currentTemp.innerText);
        if(element.value == "°C") {
            currentTemp.innerText = f2c(tempVal);
        } 
        else {
            currentTemp.innerText = c2f(tempVal);
        } 
    }
}






