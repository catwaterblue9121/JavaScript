//7 - Desenvolva um programa que leia uma temperatura e informe se está frio, agradável ou quente.

let temperatura = Number(prompt("Insira a temperatura em celcius: "))

if (temperatura > 20 && temperatura < 26){
    alert("Agradável")
} else if(temperatura < 15){
    alert("Frio")
} else if (temperatura > 25){
    alert("Quente")
} else{
    alert("ERRO")
}