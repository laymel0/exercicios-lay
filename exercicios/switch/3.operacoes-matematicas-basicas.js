/**
 * 3. Crie uma função que receba dois números e uma string com a operação (+, -, *, /) e utilize switch para calcular e imprimir o resultado.
 */

function calcular(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      console.log("Resultado:", num1 + num2);
      break;
    case "-":
      console.log("Resultado:", num1 - num2);
      break;
    case "*":
      console.log("Resultado:", num1 * num2);
      break;
    case "/":
      console.log("Resultado:", num1 / num2);
      break;
    default:
      console.log("Operação inválida.");
  }
}

calcular(8, 2, "+");
