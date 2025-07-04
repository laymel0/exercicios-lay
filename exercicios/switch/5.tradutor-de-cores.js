/**
 * 5. Receba uma string com uma cor em inglês ("red", "blue", "green") e imprima sua tradução em português. Use return diretamente nos casos.
 */

function traduzirCor(cor) {
  switch (cor) {
    case "red":
      return "vermelho";

    case "blue":
      return "azul";

    case "green":
      return "verde";
  }
}

console.log(traduzirCor("red"));
console.log(traduzirCor("blue"));
console.log(traduzirCor("green"));
