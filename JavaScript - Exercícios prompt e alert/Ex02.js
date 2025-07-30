//2 - Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais.
//Construa um programa em javascript em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda,
//e a máquina informe quanto será o valor arrecadado.

const camp = 10;
const camm = 12;
const camg = 15;
let qtdp = Number(prompt("Quantas camisetas pequenas você quer?: "));
let qtdm = Number(prompt("Quantas camisetas médias você quer?: "));
let qtdg = Number(prompt("Quantas camisetas grandes você quer?: "));
let total = camp * qtdp + camm * qtdm + camg * qtdg;
console.log("O preço total de sua compra é de: " + total + "R$");
alert("O preço total de sua compra é de: " + total + "R$");