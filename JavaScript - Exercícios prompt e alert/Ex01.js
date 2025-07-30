//1 - Um motorista deseja colocar no seu tanque X reais de gasolina.Escreva um programa em javascript  para ler o preço do litro da
//gasolina e o valor do pagamento, e exibir quantos litros ele conseguiu colocar no tanque.

let dindinpl = Number(prompt("Qual o preço do litro da gasolina?:  "));
let dinheirogasto = Number(prompt("Quanto em dinheiro você quer de gasolina?:  "));
let gasolina = dinheirogasto / dindinpl;
console.log("Você ira receber: " + gasolina + " litros de gasolina em troca");
alert("Você ira receber: " + gasolina + " litros de gasolina em troca");
