//1 - Escreva um programa que leia a idade de uma pessoa e informe se ela é maior ou menor de idade.

let idade = Number(prompt("Insira sua idade: "))

if (idade >= 18){
    alert("Voce é maior de idade")
} else if (idade < 18){
    alert("Voce é menor de idade")
} else{
    alert("ERRO")
}