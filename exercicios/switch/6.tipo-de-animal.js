/**
 * 6. Receba o nome de um animal e imprima a classe biológica a que ele pertence:
 *
 * "cachorro", "gato" → Mamífero
 * "cobra", "lagarto" → Réptil
 * "sapo" → Anfíbio
 * "pomba", "águia" → Ave
 *
 */

function classeBiologica(animal) {
  switch (animal) {
    case "cachorro":
    case "gato":
      console.log(`${animal} → Mamífero`);
      break;
    case "cobra":
    case "lagarto":
      console.log(`${animal} → Réptil`);
      break;
    case "sapo":
      console.log(`${animal} → Anfíbio`);
      break;
    case "pomba":
    case "águia":
      console.log(`${animal} → Ave`);
      break;
  }
}

classeBiologica("cachorro");
classeBiologica("cobra");
classeBiologica("sapo");
classeBiologica("pomba");
classeBiologica("gato");
classeBiologica("lagarto");
classeBiologica("águia");
