"use strict";
// class Data {
//     // public por padrão
//     public dia: number
//     mes: number
//     ano: number
//     constructor(dia: number = 1, mes: number = 1, ano: number = 1220) {
//         this.dia = dia
//         this.mes = mes
//         this.ano = ano
//     }
// }
// const aniversario = new Data(3, 6, 789)
// aniversario.dia = 4
// console.log(aniversario.dia)
// console.log(aniversario)
// const casamento = new Data()
// console.log(casamento)
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1220) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperada = new DataEsperta(3, 6, 789);
aniversarioEsperada.dia = 4;
console.log(aniversarioEsperada.dia);
console.log(aniversarioEsperada);
const casamentoEsperada = new DataEsperta();
console.log(casamentoEsperada);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * ((1 - this.desconto));
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()}  (${this.desconto * 100}% off)`;
    }
}
const mercado = new Produto('nor', 4.30);
mercado.desconto = 0.05;
console.log(mercado.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const carro1 = new Carro('for', 'ka', 23);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('ferr', modelo, velocidadeMaxima);
    }
}
const f40 = new Ferrari("dd", 344);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
//Get e Set
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
pessoa1.idade = -3;
console.log(pessoa1.idade);
// Atributos e métodos estáticos
class Matematica {
    constructor() {
        this.PI = 3.1416;
    }
    areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
const m1 = new Matematica();
m1.PI = 4.2;
console.log(m1.areaCirc(4));
//console.log(Matematica().areaCirc(4))
// Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
//console.log(new X())
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
//const errado = new Unico()
console.log(Unico.getInstance().agora());
// Somente Leitura
class Avião {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
//# sourceMappingURL=classes.js.map