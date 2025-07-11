/**
 * 9. Receba um valor e uma unidade ("minuto", "hora", "dia") e converta para segundos.
 * Ex: 2 horas → 7200 segundos.
 */

function converterParaSegundos(valor, unidade) {
  switch (unidade) {
    case "minuto":
      console.log(valor * 60);
      break;
    case "hora":
       console.log(valor * 60 * 60); // 60 equivale a 1 minuto e 1 hora tem 60 minutos
      break;
    case "dia":
      console.log(valor * 60 * 60 * 24); // 60 equivale a 1 minuto, 1 hora tem 60 minutos e 1 dia tem 24 horas
      break;
    default:
      console.log("Unidade inválida");
  }
}

converterParaSegundos(2, "hora");
converterParaSegundos(5, "minuto");
converterParaSegundos(1, "dia");
