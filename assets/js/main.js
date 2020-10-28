// inizio fetch

const urls = [
    "./criminali.json",
    "./guardie.json"
]

/* DEFINIZIONE VARIABILI */
myBtn = document.getElementById("myBtn");

var aCriminali = new Array()
var aGuardie = new Array()

/* DEFINIZIONE CLASSI */

class Criminale {
    constructor(id, nome, razza, livelloDiPericolo,
        coloreOcchi, coloreCapelli, altezza, peso,
        dataC, dataS, reato, stato) {
        //proprietà Criminale
        this.id = id;
        this.nome = nome;
        this.razza = razza;
        this.livelloDiPericolo = livelloDiPericolo;
        //caratteristiche fisiche
        this.coloreOcchi = coloreOcchi;
        this.coloreCapelli = coloreCapelli;
        this.altezza = altezza;
        this.peso = peso;
        //proprietà fascicolo
        this.dataC = dataC; //data carcerazione
        this.dataS = dataS; //data scarcerazione
        this.reato = reato; //reato
        this.stato = stato; //Evaso / Deceduto / Prigioniero
    }
    visualizza() {
        /* funzione che deve interfacciarsi con il DOM per restituire this.id ... this. livellopericolo
        appendendo gli elementi html */
    }

    /*aggiungiCriminalezzz(c){
       aCriminali.push(c)
       return "Ok criminale aggiunto"
    }*/

    modificaCriminale(c) {
        const index = aCriminali.indexOf(c.id);
        if (index != -1) {
            aCriminali.splice(index, 1, c);
            return "Ok criminale sostituito"
        }
        else return "Criminale non trovato"
    }

    eliminaCriminale(c) {
        const index = aCriminali.indexOf(c.id);
        if (index != -1) {
            aCriminali.splice(index, 1);
            return "Ok criminale eliminato"
        }
        else return "Criminale non trovato"
    }

    //restituisce un oggetto fascicolo, utile per stampa a video o inserimento DOM
    //può essere anche gestita diversamente come funzione
    getFascicolo() {
        const fascicolo = {
            idCriminale: this.idCriminale,
            dataC: this.dataC,
            dataS: this.dataS,
            reato: this.reato,
            stato: this.stato,
        }
        return fascicolo
    }

}

class Guardia {
    constructor(id, nome, dataNascita, dataAssunzione) {
        this.id = id;
        this.nome = nome;
        this.dataNascita = dataNascita;
        this.dataAssunzione = dataAssunzione;
    }
}

/*Fascicoli {
    -	data di carcerazione
    -	data di scarcerazione 
    -	reato commesso
    -	Stato(Evaso / Morto / Prigioniero (controllo con data))
    -	Inserisci Fascicolo/cancellazione/modifica TODO
    *	Ricerca fascicolo TODO
    *   Visualizza fascicolo
*/



class App {

    static aggiungiCriminale(e) {
        e.preventDefault(); //target sbagliato, restituisce strong

        // controllare se i campi non sono vuoti e controllo sull'ID
        
        const cr = new Criminale(formP_id, formP_nome, formP_razza,
            formP_livelloDiPericolo, formP_coloreOcchi, formP_coloreCapelli,
            formP_altezza, formP_peso, formP_dataC, formP_dataS, formP_reato, formP_stato)
        
        aCriminali.push(cr)
        
        this.stampaCriminali()
    }
    
    //fetch
    static async init() {
        const [criminali, guardie] = await Promise.all(urls.map(url => {
            try {
                return fetch(url).then(response => response.json())
            } catch (error) {
                console.log(error)
                throw new Error('Errore')
            }
        }
        ))

        aCriminali = this.estraiCriminali(criminali); //JSON -> array
        this.stampaCriminali();   //array -> DOM

        aGuardie = this.estraiGuardie(guardie);
        this.stampaGuardie();

        //const aGuardie = this.initGuardie(guardie); //array che contiene tutte le guardieinitPrigionieri()


    }

    
    static estraiCriminali(criminali) {
        const arr = new Array();
        criminali.forEach(el => {
            //creazione elemento array criminali
            const cr = new Criminale(el.id, el.nomePersonaggio, el.razza, el.livelloDiPericolo, el.coloreOcchi, el.coloreCapelli, el.altezza, el.peso, el.dataCarcerazione, el.dataScarcerazione, el.reatoCommesso, el.stato)
            arr.push(cr)
        })
        return arr;
    }

    static estraiGuardie(guardie) {
        const arr = new Array();
        guardie.forEach(el => {
            //creazione elemento array criminali
            const cr = new Guardia(el.id, el.nomeGuardia, el.dataNascita, el.dataAssunzione)
            arr.push(cr)
        })
        return arr;
    }

    static stampaCriminali() {
        const cardContainer = document.getElementById('containerPrigionieri');

        aCriminali.forEach(el => {
            //creazione DOM
            const cardPrigioniero = document.createElement('div');
            cardPrigioniero.classList.add("cardPrigionieri");

            const div_info = document.createElement('div');
            div_info.classList.add("informazioniPrigioniero");

            const div_caratteristiche = document.createElement('div');
            div_caratteristiche.classList.add("caratteristichePrigioniero");

            const div_fascicolo = document.createElement('div');
            div_fascicolo.classList.add("fascicoloPrigioniero");

            const div_buttonList = document.createElement('div');
            div_buttonList.id = "buttonList"; // TODO button list come id?

            div_info.innerHTML = `
                <div id="idPrigioniero"><strong>ID:</strong> ${el.id}</div>
                <div id="nomePrigioniero"><strong>Nome:</strong> ${el.nome}</div>
                <div id="razzaPrigioniero"><strong>Razza:</strong> ${el.razza}</div>
                <div id="livelloDiPericolo"><strong>Livello di pericolo:</strong> ${el.livelloDiPericolo} </div><hr>`

            div_caratteristiche.innerHTML = `
                <div id="occhiPrigionieri"><strong>Colore occhi:</strong> ${el.coloreOcchi}</div>
                <div id="capelliPrigionieri"><strong>Colore capelli:</strong> ${el.coloreCapelli}</div>
                <div id="altezzaPrigionieri"><strong>Altezza:</strong> ${el.altezza}</div>
                <div id="pesoPrigionieri"><strong>Peso:</strong> ${el.peso}</div><hr>`

            div_fascicolo.innerHTML = `
                <div id="dataC"><strong>Data carc.:</strong> ${el.dataC}</div>
                <div id="dataS"><strong>Data scarc.:</strong> ${el.dataS}</div>
                <div id="reato"><strong>Reato:</strong> ${el.reato}</div>
                <div id="stato"><strong>Stato:</strong> ${el.stato}</div>`

            div_buttonList.innerHTML = `
                <button type="button" id="btnDelete"><i class="fas fa-trash-alt tooltip"><span class="tooltiptext">Delete</span></i></button>
                <button type="button" id="btnModifica"><i class="fas fa-exclamation tooltip"><span class="tooltiptext">Modifica</span></i></button>
                <button type="button" onclick="myFunction()" id="btnViewFascicolo" ><i class="fas fa-book-dead tooltip"><span class="tooltiptext">Fascicolo</span></i></button>`

            cardPrigioniero.appendChild(div_info)
            cardPrigioniero.appendChild(div_caratteristiche)
            cardPrigioniero.appendChild(div_fascicolo)
            cardPrigioniero.appendChild(div_buttonList)

            cardContainer.appendChild(cardPrigioniero)

        })
        document.getElementById('numeroPrigionieri').innerHTML = `Il numero di prigionieri è: ${aCriminali.length}`

    }

    static stampaGuardie() {
        const cardContainer = document.getElementById('containerGuardie');

        aGuardie.forEach(el => {
            //creazione DOM
            const cardGuardia = document.createElement('div');
            cardGuardia.classList.add("cardGuardie");

            const div_info = document.createElement('div');
            div_info.classList.add("informazioniGuardia");

            const div_buttonList = document.createElement('div');
            div_buttonList.id = "buttonList"; // TODO button list come id?

            div_info.innerHTML = `
                    <div id="idGuardia"><strong>ID:</strong> ${el.id}</div>
                    <div id="nomeGuardia"><strong>Nome:</strong> ${el.nomeGuardia}</div>
                    <div id="dataNascitaGuardia"><strong>Data nascita:</strong> ${el.dataNascita}</div>
                    <div id="dataAssunzioneGuardia"><strong>Data assunzione:</strong> ${el.dataAssunzione} </div><hr>`

            div_buttonList.innerHTML = `
                    <button type="button" id="btnDelete"><i class="fas fa-trash-alt tooltip"><span class="tooltiptext">Delete</span></i></button>
                    <button type="button" id="btnModifica"><i class="fas fa-exclamation tooltip"><span class="tooltiptext">Modifica</span></i></button>
                    <button type="button" onclick="myFunction()" id="btnViewFascicolo" ><i class="fas fa-book-dead tooltip"><span class="tooltiptext">Fascicolo</span></i></button>`

            cardGuardia.appendChild(div_info)
            cardGuardia.appendChild(div_buttonList)

            cardContainer.appendChild(cardGuardia)

        })
        document.getElementById('numeroGuardie').innerHTML = `Il numero di guardie è: ${aGuardie.length}`

    }



}

myBtn.addEventListener('click', showModalCriminale)
formP_button.addEventListener('click', App.aggiungiCriminale)

//myBtn2.addEventListener('click', App.aggiungiGuardia)
App.init();

/*
Criminali{
-	ID (generiamo automaticamente, indice array)
-	nome Personaggio
-	razza
-	caratteristiche Fisiche
    -	colore Occhi
    -	colore Capelli
    -	altezza
    -	peso
-	livelloDiPericolo
*	Visualizza detenuto ()
*	Inserisci detenuto/cancellazione/modifica ()
    Fascicoli {
    -	data di carcerazione
    -	data di scarcerazione
    -	reato commesso
    -	Stato (Prigioniero controllo con data)
    -	Stato2(Evaso / Morto)
    -	Inserisci Fascicolo/cancellazione/modifica
    *	Ricerca fascicolo
    *   Visualizza fascicolo

*/

