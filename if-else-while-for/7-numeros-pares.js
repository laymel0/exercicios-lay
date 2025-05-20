/**
 * 7. Números pares de 1 a 50 (usando while)
 * Mostre todos os números pares de 1 até 50.
 *
 * Dica: Verificar se o resto da divisão de um número por 2 resulta em 0, caso sim, ele é par.
 *
 * operação: numero % 2 === 0
 */

let number = 1;

while(number <= 50) {
    if (number % 2 === 0) {
        console.log(`${number} é par!`);
    }
    number++;
}