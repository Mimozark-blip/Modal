var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

window.onload = function() {
    modal.style.display = "none";
}

btn.onclick = function() {
    modal.classList.add("show");
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 300);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(function() {
            modal.style.display = "none";
        }, 300);
    }
}
