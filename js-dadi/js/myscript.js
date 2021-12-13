
let dadoUtente = (Math.floor (Math.random()*6+1)); //facciamo la variabile del lancio del dado da 1 a 6 
let  dadoAI =  (Math.floor (Math.random()*6+1));   //facciamo la variabile del lancio del dado da 1 a 6 

console.log(dadoUtente) //stampiamo sulla console log il risultato del lancio dei dadi dell utente e dell AI
console.log(dadoAI)


if(dadoUtente > dadoAI){    //specificiamo che se  il risultato del lancio del dado dell utente è maggiore del numero del dado dell AI vince l'utente 
    document.getElementById("risultato").innerHTML = "Utente rolla"  +" ,"+ dadoUtente +" "+  "AI rolla"  +" "+ dadoAI  +" ,"+ "Utente ha vinto"
}
else if(dadoUtente == dadoAI){ //se il risultato del lancio del dado è pari nessuno vince 
    document.getElementById("risultato").innerHTML = "Utente rolla"  +" ,"+ dadoUtente +" "+  "AI rolla"  +" "+ dadoAI  +" ,"+ "Pari, ritenta"
}
else{ //se il risultato dei dadi è a favore dell AI vince lei
    document.getElementById("risultato").innerHTML = "Utente rolla"  +" ,"+ dadoUtente +" "+ "AI rolla"  +" "+ dadoAI  +" ,"+ "AI ha vinto"
}