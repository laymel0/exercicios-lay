/**
 * 10. Crie uma função que receba dois números e retorne o maior deles.
 */

function retornarNumeroMaior(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "São iguais!";
  }
}
console.log(retornarNumeroMaior(10, 10));
