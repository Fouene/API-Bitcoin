//----------------------------------------------------API
const url = 'https://blockchain.info/ticker';

function recupererPrix() {
// créer de l'objet requête
let requete = new XMLHttpRequest();
requete.open('GET',url) //Premier paramètre GET or POST et 2ème paramètre : url
requete.responseType = 'json' //nous attendons du JSON
requete.send(); // nous envoyons notre requete

//dés qu'on recoit une réponse, cette fonction est exécutée
requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) { //lorqueque la requete est terminée, vérifier que c'est une réponse de même type
        if (requete.status === 200) {
            let reponse = requete.response; // on stock la réponse
            let prixEnEuros = reponse.EUR.last;
            document.querySelector('#price_label').textContent = prixEnEuros;

        }
        else {
            alert('Un problème est intervenu, merci de revenir plus tard ! ');
        }
    }
}
console.log("prix actualisé")
}

setInterval(recupererPrix,5000);