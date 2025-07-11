/**
 * 7. Receba um comando em string como "abrir", "fechar", "salvar", "enviar" e imprima uma ação correspondente. Se o comando for inválido, imprima uma mensagem de erro.
 */

const Comando = {
  Abrir: 1,
  Fechar: 2,
  Salvar: 3,
  Enviar: 4,
};
function receberComando(codigo) {
  switch (codigo) {
    case 1:
      console.log("Abrindo...");
      break;
    case 2:
      console.log("Fechando...");
      break;
    case 3:
      console.log("Salvando...");
      break;
    case 4:
      console.log("Enviando...");
      break;
    default:
      console.log("Comando inválido");
  }
}

receberComando(Comando.Enviar);
console.log(Comando.Enviar);
