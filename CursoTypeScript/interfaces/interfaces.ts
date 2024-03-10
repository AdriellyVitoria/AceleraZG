interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobremn: string): void
}

function saudarComOla(pessoa: Humano ) {
    console.log("Olá, " + pessoa.nome)
}
function mudarNome( pessoa: Humano ) {
    pessoa.nome = 'anaq'
}
const pessoa: Humano = {
    nome: 'joao',
    idade: 23,
    saudar(sobremn: string) {
        console.log("Olá, meu nome é "
        + this.nome + ' ' + sobremn)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)

//saudarComOla({ nome: 'joana', idade: 27, x: true})
pessoa.saudar("Adriell")


// usando Class

class Cliente implements Humano {
    nome: string = ' '
    ultimaComprar: Date = new Date
    saudar(sobremn: string): void {
        console.log("Olá, meu nome é "
        + this.nome + ' ' + sobremn)
    }
}


const meuCliente = new Cliente()
meuCliente.nome = "han"
saudarComOla(meuCliente)
meuCliente.saudar("Solo")
console.log(meuCliente.ultimaComprar)


// Interface funcao

interface FuncaoCalculao {
    (a: number, b: number): number
}

let potencia: FuncaoCalculao

potencia = function(base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a)
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)


// Herança

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}
interface Object {
    log() : void
}

Object.prototype.log = function() {
    console.log(this.toString())
}
const x = 3
const y = 3
const z = 3

x.log()