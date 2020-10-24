var x = prompt("Digite o primeiro número");
var y = prompt("Digite o segundo número");
var resultado = Number(x) + Number(y);

alert("O resultado da soma é: " + resultado);

if (resultado > 10) {
    alert("Essa caluladora atingiu seu límite de caracteres");
}