console.log("page loaded...");


function accept(id) {
    var element = document.querySelector(id);
    element.remove()
}

function remove(id) {
    var element = document.querySelector(id);
    element.remove()
}

var user = document.querySelector("#user")

function edit(id) {
    user.innerText = "Johnny Lapida"
}