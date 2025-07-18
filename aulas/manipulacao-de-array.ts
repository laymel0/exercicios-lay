const listaDeComprasSegunda = ['Arroz', 'Feijao', 'Oleo', 'Macarrao', 'Cebola', 'Alho'];
const listaDeComprasTerca = ['Carne', 'Frango', 'Peixe', 'Ovo'];

// Conta quantos itens tem na lista;
console.log(listaDeComprasTerca.length);

// Retorna o valor de um item da lista no index;
console.log(listaDeComprasSegunda.at(2))

// Junta duas ou mais listas em uma única;
console.log(listaDeComprasSegunda.concat(listaDeComprasSegunda, listaDeComprasTerca));

// Verifica se todos os itens de uma lista atende a um critério;
console.log(listaDeComprasSegunda.every((palavra: string) => palavra.toLocaleUpperCase().includes('o')));

// Verifica se um item está incluso na lista;
console.log(listaDeComprasSegunda.includes('Arroz'));

// Reverte a lista de trás pra frente;
console.log(listaDeComprasSegunda.reverse());

// Filtra os items que atende ao critério passado;
console.log(listaDeComprasSegunda.filter((nome, index) => {
    return nome.startsWith('A');
}))

// Busca e retorna o item se atender ao critério;
console.log(listaDeComprasSegunda.find(item => {
    return item === 'Alho'
}));

// Navega/Itera sobre os itens;
listaDeComprasTerca.forEach(item => {
    console.log(item);
})

// Junta os itens da lista tudo em uma única string, o parâmetro passado é o separador escolhido;
console.log(listaDeComprasTerca.join(', '))

// Modifica cada item da lista e retorna o valor modificado;
listaDeComprasTerca.map(item => {
    return `Comprar ${item}`
});

// Adiciona um elemento no final da lista;
listaDeComprasTerca.push('Cenoura');

// Remove o último elemento da lista;
listaDeComprasTerca.pop();

// Ordena a lista com base em um critério;
listaDeComprasTerca.sort((nome, proximoNomeDaLista) => nome.localeCompare(proximoNomeDaLista));

// Cria uma cópia da lista a partir de um (indexInicial, indexFinal);
listaDeComprasTerca.slice(0, 4);

// Verifica se algum item da lista atende a um critério e retorna um booleano indicando;
listaDeComprasTerca.some(nome => nome.startsWith('A'));

// Recorta elementos da lista a partir de um index e retorna os itens removidos;
listaDeComprasTerca.splice(3, 2);



// Navega sobre cada item da lista manipula e salva em um acumulador
// 1º parâmetro se refere ao acumulador;
// 2º parâmetro se refere a cada item da lista;
const listaDeNomes = ['Alan', 'Maria', 'Layane', 'João', 'Almeida'];
const listaDeNomesModificados = listaDeNomes.reduce((listaDeNomeCompleto, nomeAtual) => {
    if (nomeAtual === 'Alan') {
        listaDeNomeCompleto.push(`${nomeAtual} Silva`);
    } else if (nomeAtual === 'Maria') {
        listaDeNomeCompleto.push(`${nomeAtual} do Socorro`);
    } else if (nomeAtual === 'Layane') {
        listaDeNomeCompleto.push(`${nomeAtual} Gatinha`);
    } else if (nomeAtual === 'João') {
        listaDeNomeCompleto.push(`${nomeAtual} Pão`);
    } else {
        listaDeNomeCompleto.push(`${nomeAtual} de Castro`);
    }

    return listaDeNomeCompleto;
}, [] as string[]);

console.log(listaDeNomesModificados) // Imprime a lista modificada

const numeros = [0, 1, 2, 3, 4];
const numerosSomado = numeros.reduce((contador, itemDaLista) => {
    contador += itemDaLista;

    return contador;
}, 0);

console.log(numerosSomado);