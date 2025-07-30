//4 - Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. Faça umprograma em javascript para ler uma temperatura Celsius
//e exibi-la em Fahrenheit (pesquise como fazer este tipo de conversão).

let celsius = Number(prompt("Insira o valor em celsius: "))
const conversao = (celsius * 9/5) + 32

alert("A temperatura convertida para Fahrenheit é: " + conversao);