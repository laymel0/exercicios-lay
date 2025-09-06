// Entidade/Objeto -> Representa algo do mundo real;
// Propriedades -> Dados/caracteristicas dos objetos;
// Construtor -> É um método que constrói uma endidade quando ela é instanciada;
// Instância -> é um objeto criado;
// this -> acessar propriedades e métodos dentro de uma classe;

class Pessoa {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Método de uma classe;
    falar(text) {
        console.log(text);
    }

    cantar() {
        console.log('Cantando...');
    }

    correr() {
        console.log('Correndo...');
    }

    async receberEncomenda() {
        setTimeout(() => {
            console.log('Recebendo...');
        }, 1000);
    }
}