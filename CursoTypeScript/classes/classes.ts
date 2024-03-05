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
            

        }

    }
}