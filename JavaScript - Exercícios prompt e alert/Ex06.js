//6 - Elaborar um programa em javascript que apresente o valor da conversão em real (R$) de um valorlido em dólar (US$).
//O programa deve solicitar o valor da cotação do dólar.

let valorEntrada = Number(prompt("Insira o valor em dóllar: "))
let valorCot = Number(prompt("Insira o valor da cotação do dóllar: "))
let conversao = valorEntrada * valorCot

alert("O valor convertido em real é: " + conversao + " BRL");