/* 1. Estruturas condicionais */

const mensagem = 'Olá, mundo!';

if (mensagem.includes('Olá')) {
    console.log('Mensagem contém Olá!');
} else {
    console.log('Mensagem não contém Olá!');
}

// Ternário
// (verificação lógica) ? resultado se verdadeiro : resultado se falso;
const mensagemComTernario = mensagem.includes('Olá') ? 'Mensagem contém Olá!' : 'Mensagem contém Olá!';
console.log(mensagemComTernario);

/* 2. Funções */

// Função que retorna um boolean
function verificarSeImpar(numero) {
    return !(numero % 2 === 0);
}

console.log(verificarSeImpar(11));

// Quando uma função não tem um retorno, dizemos que o seu retorno é do tipo void;
function imprimirNome(nome) {
    console.log(nome);
}

imprimirNome('Layane');

/* A execução desse conjunto é seguido de forma Síncrona, ou seja, ele não irá esperar nenhum trecho
terminar, para executar o próximo.*/

// console.log('Layane');
// function executarSync() {
//      setTimeout(() => {
//      console.log('Preste a atenção!');
//      }, 2000);
// }
// executarSync();
// console.log('KKKKKKKKK');

/* */


/*
A execução desse conjunto é seguido de forma Asincrona, ou seja, se quisermos obter um resultado
de uma "promessa", devemos "esperar".

Ilustração: Alguém lhe dá uma moeda dizendo que vale 1 milhão daqui a um ano,
você só saberá se ela vale 1 milhão se esperar 1 ano, correto?
Agora suponha que você quer vender a moeda antes de 1 ano para outra pessoa,
se a pessoa comprar, ela está comprando 1 milhão ou "uma promessa"?
*/

async function verificarSeImpar(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const resultado = !(numero % 2 === 0);

            if (resultado === true) {
                // Resolve é parecido com o return de uma function, nesse caso
                // ele retorna o valor da promessa;
                resolve('O número é ímpar!');
            } else {
                // O reject é usa para rejeitar a operação da promessa
                reject('O número é par!');
            }
        }, 5000);
    })
}

async function execute() {
    try {
        // Para obter o resultado da promessa, é necessário esperar (await);
        console.log(`${await verificarSeImpar(10)}`);
    } catch (error) {
        // Em caso de esperar a promessa e o resultado não for o que espera,
        // Então é lançado um erro;
        console.log(error);
    }
}

execute();


