//8 - Escreva um programa que leia um número e verifique se ele é múltiplo de 5.

let numero = Number(prompt("Insira o número: "))
let verificar = numero % 10;

if (verificar == 0 || verificar == 5){
    alert("Este numero é multiplo de 5")
} else{
    alert("Não é multiplo de 5")
}

