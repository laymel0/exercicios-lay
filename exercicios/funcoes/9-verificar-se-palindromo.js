/**
 * 9. Crie uma função que receba uma palavra e retorne true se ela for um palíndromo, ou false caso contrário.
 */
function verificarSePalindromo(palavra = "") {
  let listaDeLetras = palavra.split("");
  let listaDeLetrasReversas = listaDeLetras.reverse();
  let palavraReversa = listaDeLetrasReversas.join("");
  let ePalindromo = palavra === palavraReversa;
  return ePalindromo;
}

let resultado = verificarSePalindromo("LAYANE");

console.log(`É palidromo? ${resultado}`);