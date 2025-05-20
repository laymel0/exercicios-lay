/**
 * São trechos de códigos que são executados somente após a sua chamada.
 * As funções podem receber parâmetros para serem processados no trecho de código dentro delas
 * As funções podem retornar valores;
 */


function fazerAndar(numeroDeCasas, nome) {
    console.log(`${nome} está andando ${numeroDeCasas} casas.`);
}

function verificarSePar(numero) {
    if (numero % 2 === 0) {
        return true; 
    } else {
        return false;
    }
} 

let number = 50;

while(number >= 0) {
    console.log(`${number} é par? ${verificarSePar(number) ? 'Verdadeiro' : 'Falso'}`);
    number--;
}


const advinharNumeroAleatorio = (numero) => {
    const numeroAleatorioGerado = Math.floor(Math.random() * 10);

    if (numero === numeroAleatorioGerado) {
        return true;
    } else {
        return false;
    }
}


console.log(`Palpite de Layane: ${advinharNumeroAleatorio(3) ? 'Acertou' : 'Errou'}`)
console.log(`Palpite de Layane: ${advinharNumeroAleatorio(7) ? 'Acertou' : 'Errou'}`)

console.log(`Palpite de Lucas: ${advinharNumeroAleatorio(5) ? 'Acertou' : 'Errou'}`);
console.log(`Palpite de Lucas: ${advinharNumeroAleatorio(10)? 'Acertou' : 'Errou'}`);