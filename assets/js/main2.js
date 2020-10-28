
const modal = document.getElementById("myModal");

const btnAddPrigioniere = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

btnAddPrigioniere.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// const modal2 = document.getElementById("myModal2");

// const btn2 = document.getElementById("myBtn2");

// const span2 = document.getElementsByClassName("close2")[0];

// btnAddPrigioniere.onclick = function() {
// modal2.style.display = "block";
// }

// span.onclick = function() {
// modal2.style.display = "none";
// }

// window.onclick = function(event) {
// if (event.target == modal) {
//     modal2.style.display = "none";
// }
// }