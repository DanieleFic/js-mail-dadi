const valoriArray = ["pincopallo@outlook.it", "marcopallo@virgilio.com", "pallopinco@gmail.it", "emailacaso@outlook.it", "mattia@virgilio.com", "pallopinco@gmail.it" ];
//array di Email

const mail = prompt (" Inserici Email "); //Inserisco il prompt in cui l'utente inserisce l'email


let checkMail = false;

for(let i = 0; i < mail.length; i++){ //creiamo un ciclo for e sperifichiamo che 
    if(mail == valoriArray[i]){  //settiamo la condizione di SE il valore di mail è uguale a valoreArray 
        checkMail = true;
    }
}

if(checkMail){
    document.getElementById("verificaMail").innerHTML = "Email giusta" //settiamo la condizione di SE l'email che inserisce l'utente è uguale a uno delle nostre mail del valore Array da il risultato positivo
}else{
    document.getElementById("verificaMail").innerHTML = "Email errata" // SE la mail che inserisce l'utente è non è giusta da risultato negativo
}

console.log(valoriArray);
console.log(mail);
console.log(checkMail);


