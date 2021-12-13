
let dadoUtente = (Math.floor (Math.random()*6+1)); //facciamo la variabile del lancio del dado da 1 a 6 
let  dadoAI =  (Math.floor (Math.random()*6+1));   //facciamo la variabile del lancio del dado da 1 a 6 

console.log(dadoUtente) //stampiamo sulla console log il risultato del lancio dei dadi dell utente e dell AI
console.log(dadoAI)

document.getElementById("utente").innerHTML = "Utente" +" "+ dadoUtente;
document.getElementById("AI").innerHTML = "Utente" +" "+ dadoAI;


let risulatoDadi = document.getElementById("vincitore") //faccio una variabile con quello che va nel container del html per non ripetere piu volte lo stesso codice nella parte sottostante

if(dadoUtente > dadoAI){    //specificiamo che se  il risultato del lancio del dado dell utente è maggiore del numero del dado dell AI vince l'utente 
    risulatoDadi.innerHTML = "Utente ha vinto"
}
else if(dadoUtente == dadoAI){ //se il risultato del lancio del dado è pari nessuno vince 
    risulatoDadi.innerHTML = "Pareggio"
}
else{ //se il risultato dei dadi è a favore dell AI vince lei
    risulatoDadi.innerHTML = "AI ha vinto"
}

let risultatoDadi = (dadoUtente +" "+ dadoAI)

console.log(risultatoDadi)