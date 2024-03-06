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
    constructor( public dia: number = 1, public mes: number = 1, public ano: number = 1220) {
    }
}


const aniversarioEsperada = new DataEsperta(3, 6, 789)
aniversarioEsperada.dia = 4
console.log(aniversarioEsperada.dia)
console.log(aniversarioEsperada)


const casamentoEsperada = new DataEsperta()
console.log(casamentoEsperada)


class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) {
    }

    public precoComDesconto(): number{
        return this.preco * ((1 - this.desconto))

    }

    public resumo(): string{
        return `${this.nome} custa R$${this.precoComDesconto()}  (${this.desconto * 100}% off)`
    }
}

const mercado = new Produto('nor', 4.30)
mercado.desconto = 0.05

console.log(mercado.resumo())

class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {

    }

    private alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velocidadeMaxima
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const carro1 = new Carro('for', 'ka', 23)

Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())


class Ferrari extends Carro {
    constructor(modelo: string, velocidadeMaxima: number) {
        super('ferr', modelo, velocidadeMaxima)
    }
} 

const f40 = new Ferrari("dd", 344)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

//Get e Set
class Pessoa {
    private _idade: number = 0
    
    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if(valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)


// Atributos e métodos estáticos

class Matematica {
    PI: number = 3.1416

    areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

const m1 = new Matematica()
m1.PI = 4.2
console.log(m1.areaCirc(4))

//console.log(Matematica().areaCirc(4))

// Classe abstrata
abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}
//console.log(new X())

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }
}

let c1 = new Soma()
c1.executar(2,3,4,5)
console.log(c1.getResultado())


class Unico {
    private static instance: Unico = new Unico
    private constructor() {}

    static getInstance() {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

//const errado = new Unico()

console.log(Unico.getInstance().agora())


// Somente Leitura

class Avião {
    public readonly modelo: string

    constructor(modelo: string, 
        public readonly prefixo: string) {
            this.modelo = modelo
        }
}

const turboHelice = new Aviao('hdguduh', 'jdbisn')
turboHelice.modelo = 'dad'
