let idade = parseInt(prompt("Qual sua idade?: "));
if (idade < 13) {
    document.write("Você receberá um desconto de 15%");
} else if (idade < 18) {
    document.write("Você receberá um desconto de 9%");
} else if (idade < 60) {
    document.write("Você receberá um desconto de 6%");
} else {
    document.write("Você receberá um desconto de 15%");
}