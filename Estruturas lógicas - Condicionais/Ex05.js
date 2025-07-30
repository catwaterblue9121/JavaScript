//5 - Crie um programa que leia uma nota de 0 a 10 e classifique como: Reprovado, Recuperação ou Aprovado.

let nota = Number(prompt("Insira a nota de 0 a 10: "))

if (nota >= 6){
    alert("Voce passou")
} else if (nota < 6){
    alert("Reprovado")
} else{
    alert("Erro")
}