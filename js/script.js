/* */
let allBoutonLink = document.getElementsByTagName ("a");
let statut = document.getElementById('statut');
//generation d'un nombre aleatoire
let randomNumber = Math.floor(Math.random() * 10) + 1;
let nbrEssais = 3;


for (let i=0; i<allBoutonLink.length; i++) { //pour acceder aux contenus du tableau il faut parcourir une boucle
    allBoutonLink[i].addEventListener ("click", () => {            
        if (nbrEssais >= 0) {
            if(allBoutonLink[i].textContent == randomNumber) {
                allBoutonLink[i].getAttribute('href');
                allBoutonLink[i].setAttribute('href','congrats.html');
                    /*
                        on peut l'ecrire également comme ceci
                        allBoutonLink[i].href = 'congrats.html';
                    */
            } else {
                do {
                    let n = nbrEssais + 1;
                    statut.innerHTML = n + " chances left";
                    nbrEssais--;
                } while(nbrEssais > 0);
            }
        } else {
            if(allBoutonLink[i].textContent == randomNumber) {
                allBoutonLink[i].getAttribute('href');
                allBoutonLink[i].setAttribute('href','congrats.html');
            } else {                    
                allBoutonLink[i].getAttribute('href');
                allBoutonLink[i].setAttribute('href','game over.html');
            }                       
        }            
    });
}





