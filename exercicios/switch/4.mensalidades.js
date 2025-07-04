/**
 * 4. Receba o nome de um plano ("planoA", "planoB", "planoC") e imprima o valor mensal:
 * planoA: R$100
 * planoB: R$80
 * planoC: R$50
 */

function mostrarValor(plano) {
  switch (plano) {
    case "planoA":
      console.log("O valor do planoA é R$ 100");
      break;
    case "planoB":
      console.log("O valor do planoB é R$ 80");
      break;
    case "planoC":
      console.log("O valor do planoC é R$ 50");
      break;
    default:
      console.log("Plano inválido, tenta de novo!");
  }
}

mostrarValor("planoA");
mostrarValor("planoB");
mostrarValor("planoC");
