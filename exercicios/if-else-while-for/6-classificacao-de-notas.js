/**
 * 6. Classificação de notas
 * Peça uma nota (0 a 100) e use if, else if, else para classificar:
 * A (90 a 100)
 * B (80 a 89)
 * C (70 a 79)
 * D (60 a 69)
 * F (abaixo de 60)
 */

const nota = 50;

if(nota >= 90 && nota <= 100) {
    console.log("Nota A");
} else if (nota >= 80 && nota <= 89) {
    console.log("Nota B");
} else if (nota >= 70 && nota <= 79) {
    console.log("Nota C");
} else if (nota >= 60 && nota <= 69) {
    console.log("Nota D");
} else {
    console.log("Nota F");
}