/**
 * 9. Calculadora simples
 * Peça dois números (pode ser criando variáveis) e uma operação (+, -, *, /). Execute a operação correspondente usando if...else if.
 */

// Entradas do usuário
const firstNumber = 2;
const secondNumber = 3;
const operation = '/'

if (operation === '+') {
    console.log(`A soma de ${firstNumber} + ${secondNumber} é = ${firstNumber + secondNumber}`);
} else if (operation === '-') {
    console.log(`A subtração de ${firstNumber} - ${secondNumber} é = ${firstNumber - secondNumber}`);
} else if (operation === '*') {
    console.log(`A multiplicação de ${firstNumber} * ${secondNumber} é = ${firstNumber * secondNumber}`);
} else if (operation === '/') {
    console.log(`A divisão de ${firstNumber} / ${secondNumber} é = ${firstNumber / secondNumber}`);
} else {
    console.log('Operação desconhecida, tente novamente!');
}