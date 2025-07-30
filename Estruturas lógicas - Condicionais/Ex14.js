let idade = parseInt(prompt("Você tem qual idade?: "));
let documento = Number(prompt("Você tem um documento? não = 1 ou sim = 2: "));
if (documento > 2 || documento < 1) {
    document.write("Por favor digite o número refernte a sim ou não!");
}
if (idade < 18) {
    document.write("Você não tem a idade para acessar este site!");
} else if (documento == 1) {
    document.write("Por favor adquira o documento para acessar!");
} else {
    document.write("Acesso permitido.");
}