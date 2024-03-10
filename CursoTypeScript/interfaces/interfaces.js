"use strict";
function saudarComOla(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'anaq';
}
const pessoa = {
    nome: 'joao',
    idade: 23,
    saudar(sobremn) {
        console.log("Olá, meu nome é "
            + this.nome + ' ' + sobremn);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({ nome: 'joana', idade: 27, x: true})
pessoa.saudar("Adriell");
// usando Class
class Cliente {
    constructor() {
        this.nome = ' ';
        this.ultimaComprar = new Date;
    }
    saudar(sobremn) {
        console.log("Olá, meu nome é "
            + this.nome + ' ' + sobremn);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaComprar);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 3;
const y = 3;
const z = 3;
x.log();
//# sourceMappingURL=interfaces.js.map