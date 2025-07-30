//5 -  Elaborar um programa em javascript que calcule e apresente o valor do volume de uma caixaretangular,
//utilizando a fórmula VOLUME <- COMPRIMENTO * LARGURA * ALTURA.

let comprimento = Number(prompt("Insira o comprimento da caixa: "))
let largura = Number(prompt("Insira a largura da caixa: "))
let altura = Number(prompt("Insira a altura da caixa: "))
const volume = comprimento * largura * altura
alert("O volume da caixa é: " + volume + " metros cúbicos")
