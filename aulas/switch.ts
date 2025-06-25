/**
 * switch -> Estrutura de verificação
 * switch(param) -> Recebe um parâmetro/variável a ser comparada nos casos de execução
 * break -> Palavra reservada para pausar/quebrar um bloco de execução do switch;
 * 
 * switch (PARAM) {
 *  case VALUE:
 *      ...
 *      break;
 *  case VALUE2:
 *      ...
 *      break;
 *  default:
 *      ....
 * }
 */

enum Fruit {
    APPLE = 'APPLE',
    BANANA = 'BANANA',
    ORANGE = 'ORANGE',
    PINEAPPLE = 'PINEAPPLE'
}

function getMenuWithIf(fruit: string) {
    if (fruit === Fruit.APPLE) {
        console.log('Você escolheu uma maçã!');
    } else if (fruit === Fruit.BANANA) {
        console.log('Você escolheu uma banana');
    } else if (fruit === Fruit.PINEAPPLE) {
        console.log('Você escolheu um abacaxi');
    } else if (fruit === Fruit.PINEAPPLE) {
        console.log('Você escolheu uma laranja!');
    } else {
        console.log('Fruta não reconhecida');
    }
}

getMenuWithIf('PINEAPPLE');


function getMenuWithSwitch(fruit: string) {
    switch (fruit) {
        case Fruit.APPLE:
                console.log('Você escolheu uma maçã!');
                break; 
        case Fruit.BANANA:
        case Fruit.PINEAPPLE:
                console.log('Você escolheu banana e abacaxi');
                break;
        case Fruit.ORANGE:
                console.log('Você escolheu uma laranja!');
                break;
        default:
            console.log('Fruta não reconhecida');
    }
}

getMenuWithSwitch('PINEAPPLE');