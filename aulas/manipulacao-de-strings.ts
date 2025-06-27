/**
 * Manipulação de strings;
 * Manipulação de arrays;
 * Manipulação de objetos;
 */

const text = "Hello, world!";
const textNumbers = " 123456 ";
const number = 55555;

// console.log(text.search('d!')) -> Busca o index do início de um termo;
// console.log(text.concat(' How are you?')) -> Junta/concatena duas strings;
// console.log(text.startsWith('FAZFORTE_')); -> Verifica se um texto começa com um termo;
// console.log(text.endsWith("world!")); -> Verifica se uma string termina com um determinado valor;
// console.log(text.includes('wor')); -> Verifica se um termo está presente na string;
// console.log(text.length); -> Verifica o tamanho de um texto;
// console.log(textNumbers.padStart(10, '0')); -> Completa/acrescenta um termo/caracter na frente de um texto se o tamanho do texto não for atingido;
// console.log(textNumbers.padEnd(10, '0')); -> Completa/acrescenta um termo/caracter no final de um texto se o tamanho do texto não for atingido;
// console.log(textNumbers.repeat(10)); -> Repete um texto;
// console.log(text.replace(', ', ' - ')); -> Substitui um conteúdo do texto;
// console.log(text.slice(0, 5)); -> Pega uma parte do texto com base no index;
// console.log(text.substring(0, 5)) -> Funciona parecido com o slice, porém com um pouco mais de precisão;
// console.log(text.split(', ')); -> Quebra um texto em vários elementos em um array;
// console.log(text.toUpperCase()) -> Transforma um texto para maiusculo;
// console.log(text.toLowerCase()) -> Transforma um texto para minúsculo;

// @ts-ignore
// if (text.toLowerCase() === 'hello, world!') {
//     console.log('é igual');
// } else {
//     console.log('diferente')
// }

// console.log(textNumbers.trim()) -> Remove os espaços iniciais e finais de um texto;
// console.log(number.toString()) -> Transforma um elemento em uma string;
