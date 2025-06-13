/**
 * 8. Crie uma função que receba um número inteiro positivo e retorne seu fatorial.
 */

function calculate(num) {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}
const result1 = calculate(4);
const result2 = calculate(5);
const result3 = calculate(6);
const result4 = calculate(7);
const result5 = calculate(0);
const result6 = calculate(1);

console.log(
  `O resultado do fatorial de: \n ${result1} \n ${result2} \n ${result3} \n ${result4} \n ${result5} \n ${result6}`
);




