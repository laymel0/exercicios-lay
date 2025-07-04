/**
 * 2. Receba uma nota de 0 a 10 e use switch para imprimir:
 *  A para notas 9 e 10
 *  B para notas 7 e 8
 *  C para notas 5 e 6
 *  D para notas 3 e 4
 *  F para notas 0 a 2
 */

function avaliarNota(nota) {
  switch (nota) {
    case 10:
    case 9:
      console.log("Nota A");
      break;
    case 8:
    case 7:
      console.log("Nota B");
      break;
    case 6:
    case 5:
      console.log("Nota C");
      break;
    case 4:
    case 3:
      console.log("Nota D");
      break;
    case 2:
    case 1:
    case 0:
      console.log("Nota F");
      break;
    default:
      console.log("Nota inválida. Digite um valor de 0 a 10.");
  }
}

avaliarNota(0);
