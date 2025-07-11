/**
 * 8. Receba um número e uma operação ("dobro", "triplo", "quadrado", "raiz"). Aplique a transformação usando switch, e permita que "dobro" também execute "quadrado" em seguida, sem break.
 */

function calcular(numero, operacao) {
  switch (operacao.toLowerCase()) {
    case "dobro":
    case "quadrado":
      console.log("O dobro é:", numero * 2);
      console.log("O quadrado é:", numero ** 2);
      break;
    case "triplo":
      console.log("O triplo é:", numero * 3);
      break;
    case "raiz":
      console.log("A Raiz é:", Math.sqrt(numero));
      break;
    default:
      console.log("operação inválida");
  }
}

calcular(4, "dobro");
calcular(4, "quadrado");
calcular(4, "triplo");
calcular(4, "raiz");
calcular(4, "nada");
