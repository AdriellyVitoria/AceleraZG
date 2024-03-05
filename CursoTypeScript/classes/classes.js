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
        }
    }
}
//# sourceMappingURL=classes.js.map