/**
 * 8. Soma de números ímpares entre 1 e 100
 * Use um laço para somar todos os números ímpares de 1 a 100 e exiba o resultado.
 * 
 * Dica 1: Verificar se o resto da divisão de um número por 2 resulta em um valor diferente de 0, caso sim, ele é ímpar.
 * 
 * operação: numero % 2 !== 0
 */

let number = 1;
let count = 0;

while (number <= 100) {
    if (number % 2 !== 0) {
        count += number;
    }
    number ++
}
console.log(`A soma de todos os números impares de 1 a 100 é ${count}`);