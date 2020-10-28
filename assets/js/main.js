// inizio fetch

const urls = [
    "criminali.json",
    "Guardie.json"
]


class Card{
    static async getData(){
        const [criminali, guardie] = await Promise.all(urls.map( url =>{
            try {
                return fetch(url).then( response => response.json() )
            } catch (error){
                console.log(error)
                throw new Error('Errore')
            }
        }))
    }
}

/* DEFINIZIONE VARIABILI */
const cardCriminale = document.getElementById("cardCriminale") //da verificare
var aCriminali = []; //array che contiene tutti i criminali
var aGuardie = []; //array che contiene tutte le guardie

/* DEFINIZIONE CLASSI */


class Criminale {
    constructor(id,nome,razza,livelloDiPericolo,
        coloreOcchi,coloreCapelli,altezza,peso,
        dataC, dataS, reato, stato){
        //proprietà Criminale
            this.id = id;
            this.nome = nome;
            this.razza = razza;
            this.livelloDiPericolo = livelloDiPericolo;
        //caratteristiche fisiche
            this.coloreOcchi;
            this.coloreCapelli;
            this.altezza;
            this.peso;
        //proprietà fascicolo
            this.dataC = dataC;
            this.dataS = dataS;
            this.reato = reato;
            this.stato = stato; // Evaso / Deceduto / Prigioniero
    }
    visualizza(){
        /* funzione che deve interfacciarsi con il DOM per restituire this.id ... this. livellopericolo
        appendendo gli elementi html */
    }
    
    aggiungiCriminale(c){
       aCriminali.push(c)
       return "Ok criminale aggiunto"
    }
    
    modificaCriminale(c){
        const index = aCriminali.indexOf(c.id);
        if ( index != -1 ){
            aCriminali.splice(index, 1, c);
            return "Ok criminale sostituito"
          }
        else return "Criminale non trovato"
        }
    }

    eliminaCriminale(c){
        const index = aCriminali.indexOf(c.id);
        if ( index != -1 ){
            aCriminali.splice(index, 1);
            return "Ok criminale eliminato"
          }
        else return "Criminale non trovato"
        }
    
    }  

}
    
    
    /*Fascicoli {
        -	data di carcerazione
        -	data di scarcerazione 
        -	reato commesso
        -	Stato(Evaso / Morto / Prigioniero (controllo con data))
        -	Inserisci Fascicolo/cancellazione/modifica
        *	Ricerca fascicolo
        *   Visualizza fascicolo
*/


class Guardie{
    constructor(id,nome,dataNascita,dataAssunzione){
        this.id= id;
        this.nome = nome;
        this.dataNascita = dataNascita;
        this.dataAssunzione= dataAssunzione;
        }
}


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



/*

class Card{
    constructor(name,cognome,eta,img){
        this.name = name;
        this.cognome = cognome;
        this.eta = eta;
        this.img = img
    }
}

class CardItem{
    constructor(card){
        this.card = card
    }
    removeItem(){
        App.removeCard(this.card);
    }
    render(){
        console.log(this.card.name)
        const singleCard = document.createElement('li');
        singleCard.id='listaPersonaggi'
        singleCard.className ='card';
        singleCard.innerHTML =`<div>
                <h2>${this.card.name}</h2>
                <p>${this.card.species}</p>
                <button>rimuovi card</button>
        </div> `;
        const removeCardButton = singleCard.querySelector('button');
        removeCardButton.addEventListener('click',this.removeItem.bind(this))
        return singleCard
    }
}









class CardList{
    cardsArray = [
        new Card('nome','cognome','tipo','immagine'),
        new Card('nome','cognome','tipo','immagine'),
        new Card('nome','cognome','tipo','immagine'),
        new Card('nome','cognome','tipo','immagine'),
        new Card('Pippo','cognome','tipo','immagine'),
    ]

    constructor(){}
    render(){
        console.log(this.cardsArray)
        
        const cardList = document.createElement('ul');
        cardList.className = 'cardList';
        cardList.id ='container'

        for ( const crd of this.cardsArray){
            const cardItem = new CardItem(crd);
            const crdEl = cardItem.render();
            cardList.append(crdEl);
        }
        return cardList;
    }
}

class Page{
    render(){
        const page = document.getElementById('app');
        const cardList = new CardList();
        const cardListElm = cardList.render();
        page.append(cardListElm)
    }
}

class App{
    static card;
    static init(){
        const page = new Page();
        page.render();
        console.log(page)
    }
}

App.init();

*/