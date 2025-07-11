/**
 * 10. Receba uma data (ex: "07/09", "25/12") e diga qual feriado é. Se não for nenhum feriado conhecido, retorne "Data comum".
 */

function verificarFeriado(data) {
  switch (data) {
    case "21/04":
      console.log("Tiradentes");
      break;
    case "01/05":
      console.log("Dia do Trabalhador");
      break;
    case "09/07":
      console.log("Revolução Constitucionalista");
      break;
    case "20/11":
      console.log("Dia da Consciência Negra");
      break;
    default:
      console.log("Data comum");
  }
}

verificarFeriado("20/11");
