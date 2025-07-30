let num1 = parseInt(prompt("Qual o primeiro número?: "));
let num2 = parseInt(prompt("Qual o segundo número?: "));
let num3 = parseInt(prompt("Qual o terceiro número?: "));
if (num1 > num2 && num1 > num3) {
    document.write("O primeiro número é o maior.");
} else if (num2 > num1 && num2 > num3) {
    document.write("O segundo número é o maior.");
} else if (num3 > num2 && num3 > num1) {
    document.write("O terceiro número é o maior.");
} else if (num1 == num2 || num1 == num3 || num2 == num3) {
    document.write("Alguns ou todos os números são iguais!");
}        