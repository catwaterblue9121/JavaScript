//9 - Crie um programa que leia o nome de um dia da semana e informe se é dia útil ou fim de semana.
let dia = prompt("Insra o dia da semana: ")

if (dia == "segunda" || dia == "terça" || dia == "quarta" || dia == "quinta" || dia == "sexta"){
    alert("Dia útil")
} else if (dia == "sábado" || dia == "domingo"){
    alert("Fim de semana")
} else{
    alert("ERRO")
}