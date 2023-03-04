/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let UserEmailEL = document.getElementById ("UserEmail");
let UserButtonEL = document.getElementById ("UserButton");
let UserOutputEL = document.getElementById ("UserOutput")

const AccessList = ["Francesco@gmail.com", "Mario@gmail.com", "Luigi@gmail.com"];

let isMailFound = false;


UserButtonEL.addEventListener("click", function() {
    
    
    for (let i = 0; i < AccessList.length; i++) {
        
        if (UserEmailEL.value == AccessList[i]) {
            isMailFound = true;
        }
    };

    if(isMailFound){
        UserOutputEL.innerHTML = "Email Corretta";
    } else {
        UserOutputEL.innerHTML = "Email Errata";
    };
    
});

