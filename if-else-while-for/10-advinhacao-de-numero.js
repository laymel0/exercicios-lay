/**
 * 10. Adivinhação de número
 * Gere um número aleatório de 1 a 10. Peça ao usuário um palpite e diga se ele acertou ou não. Dê até 3 tentativas (use while ou do...while).
 *
 * OBS: aproveite o trecho de código abaixo, a variável "numeroAleatorioGerado" gera um número aleatório de 0 - 10, caso queira aumentar, basta colocar o valor máximo
 * na variável "numeroMaximoPermitido".
 */

const numeroMaximoPermitido = 10;
const numeroAleatorioGerado = Math.floor(Math.random() * numeroMaximoPermitido);
const palpiteDoUsuario = 5;
let tentativas = 3;

while (tentativas > 0) {
    if (palpiteDoUsuario === numeroAleatorioGerado) {
        console.log(`Parabéns! Você acertou o número aleatório. O número gerado foi ${numeroAleatorioGerado}.`);
        break;
    }

    tentativas--;
    if (tentativas === 0) {
        console.log('Você errou, suas tentativas acabaram.');
    } else {
        console.log(`Você errou o número aleatório, você tem ${tentativas} restantes.`);
    }
}