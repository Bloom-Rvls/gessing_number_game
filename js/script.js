/* */
let allBoutonLink = document.getElementsByTagName ("a");
let statut = document.getElementById('statut');
//generation d'un nombre aleatoire
let randomNumber = Math.floor(Math.random() * 10) + 1;
let nbrEssais = 0;


for (let i=0; i<allBoutonLink.length; i++) { //pour acceder aux contenus du tableau il faut parcourir une boucle
    allBoutonLink[i].addEventListener ("click", () => {            
        if (nbrEssais <= 3) {
            if(allBoutonLink[i].textContent == randomNumber) {
                allBoutonLink[i].getAttribute('href');
                allBoutonLink[i].setAttribute('href','congrats.html');
                    /*
                        on peut l'ecrire également comme ceci
                        allBoutonLink[i].href = 'congrats.html';
                    */
            } else {
                do {
                    statut.innerHTML = "Il vous reste : " + nbrEssais + " chances";
                    nbrEssais++;
                } while(nbrEssais < 3);
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



            /**
                if(allBoutonLink[i].textContent == randomNumber) {
                allBoutonLink[i].getAttribute('href');
                allBoutonLink[i].setAttribute('href','congrats.html');  
                } else {
                    do {
                        if(nbrEssais <= 3) {
                            statut.innerHTML = "Il vous reste : " + nbrEssais + " chances";
                        } else {
                            allBoutonLink[i].getAttribute('href');
                            allBoutonLink[i].setAttribute('href','game over.html');
                        }
                        nbrEssais++;
                    } while(nbrEssais < 3);
                }
             */
            
    });
}





