/* DEFINIZIONE VARIABILI */

    /* form Criminale */
    formP_button = document.getElementById("formP_button");
    formP_id = document.getElementById("formP_id");
    formP_nome = document.getElementById("formP_nome");
    formP_razza = document.getElementById("formP_razza");
    formP_livelloDiPericolo = document.getElementById("formP_livelloDiPericolo");
    formP_coloreOcchi = document.getElementById("formP_coloreOcchi");
    formP_coloreCapelli = document.getElementById("formP_coloreCapelli");
    formP_altezza = document.getElementById("formP_altezza");
    formP_peso = document.getElementById("formP_peso");
    formP_dataC = document.getElementById("formP_dataC");
    formP_dataS = document.getElementById("formP_dataS");
    formP_reato = document.getElementById("formP_reato");
    formP_stato = document.getElementById("formP_stato");
    formP_id = document.getElementById("formP_id");
    
    cardContainerPrigionieri = document.querySelector('.cardContainerPrigionieri')
    

function showModalCriminale(){
    formP_id.value=aCriminali.length+1

    const modal = document.getElementById("myModal");

    const span = document.getElementsByClassName("close")[0];

    myBtn.onclick = function () {
        modal.style.display = "block";
    }

    formP_button.onclick = function () {
        modal.style.display = "none";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
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