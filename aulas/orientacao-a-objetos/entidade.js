/* PROGRAMAÇÃO ORIENTADA A OBJETOS (entidades) - POO */

// Representamos um objeto/entidade real através das classes (class).

/* Objeto/Entidade -> Algo do mundo real */
class Pessoa {
    /* Propriedades de um objeto/entidade -> Características de algo do mundo real */
    nome;
    idade;

    /* Método construtor da classe (objeto/entidade) */
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('João', 15);
console.log(`Nome: ${pessoa1.nome}`);
console.log(`Idade: ${pessoa1.idade}`);

const pessoa2 = new Pessoa('Maria', 15);
console.log(`Nome: ${pessoa2.nome}`);
console.log(`Idade: ${pessoa2.idade}`);


class Cachorro {
    nomeDoDono;
    idade;
    raca;
    cor;

    constructor(nomeDoDono, idade, raca, cor) {
        this.nomeDoDono = nomeDoDono;
        this.idade = idade;
        this.raca = raca;
        this.cor = cor;
    }
}

const border = new Cachorro('Nós', 3, 'Border Collie', 'Caramelo');
console.log(`
- Nome do dono: ${border.nomeDoDono},
- Idade: ${border.idade},
- Raça: ${border.raca},
- Cor: ${border.cor}
`)
