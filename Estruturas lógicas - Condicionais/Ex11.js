//11 - Crie um programa que leia dois números e informe qual é o maior ou se são iguais.

let n1 = Number(prompt("Insira o n1: "))
let n2 = Number(prompt("Insira o n2: "))

if (n1 > n2){
    alert("O n1 é o maior")
} else if (n2 > n1){
    alert("O n2 é o maior")
} else if (n1 == n2){
    alert("Os dois são iguais")
} else{
    alert("ERRO")
}