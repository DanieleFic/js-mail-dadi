
let dadoUtente = (Math.floor (Math.random()*6+1));
let  dadoAI =  (Math.floor (Math.random()*6+1));

console.log(dadoUtente)
console.log(dadoAI)

if(dadoUtente > dadoAI){
    document.getElementById("risultato").innerHTML = "Hai vinto"
}
if(dadoUtente == dadoAI){
    document.getElementById("risultato").innerHTML = "Pari, ritentate"
}
else{
    document.getElementById("risultato").innerHTML = "AI ha vinto"
}