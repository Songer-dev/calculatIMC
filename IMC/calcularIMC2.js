function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        return `IMC: ${imc.toFixed(2)} - Bajo peso`;
    } else if (imc >= 18.5 && imc < 24.9) {
        return `IMC: ${imc.toFixed(2)} - Peso normal`;
    } else if (imc >= 25 && imc < 29.9) {
        return `IMC: ${imc.toFixed(2)} - Sobrepeso`;
    } else if (imc >= 30 && imc < 39.9) {
        return `IMC: ${imc.toFixed(2)} - Obesidad`;
    } else  {
        return `IMC: ${imc.toFixed(2)} - Obesidad extrema`;
    }
}
const peso = 102;
const altura = 1.65;
console.log(calcularIMC(peso, altura));