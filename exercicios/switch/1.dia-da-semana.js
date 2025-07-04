/**
 * 1. Escreva uma função que recebe um número de 1 a 7 e imprime o nome do dia correspondente da semana.
 */

const Diadasemana = {
  Domingo: 1,
  Segunda: 2,
  Terça: 3,
  Quarta: 4,
  Quinta: 5,
  Sexta: 6,
  Sabado: 7,
};

function numeroDoDiaDaSemana(dia) {
  switch (dia) {
    case 1:
      console.log("Domingo");
      break;
    case 2:
      console.log("Segunda-feira");
      break;
    case 3:
      console.log("Terça-feira");
      break;
    case 4:
      console.log("Quarta-feira");
      break;
    case 5:
      console.log("Quinta-feira");
      break;
    case 6:
      console.log("Sexta-feira");
      break;
    case 7:
      console.log("Sábado");
      break;
    default:
      console.log("Número inválido");
  }
}
numeroDoDiaDaSemana(Diadasemana.Sexta);
console.log (Diadasemana.Sexta);