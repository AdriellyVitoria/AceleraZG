// funções
function retornaMeuNome(): string {
    // return minhaIdade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
    // return minhaIdade
}

// digaOi()

// function multiplicar(numA: any, numB: any): number {
//     return numA * numB
// }

// // console.log(multiplicar(2, 'Bia'))
// console.log(multiplicar(4.7, 9))

// // tipo função
// let calculo: (x: number, y: number) => number
// // calculo = digaOi
// // calculo()
// // calculo = {}

// calculo = multiplicar
// console.log(calculo(5, 6))

// // objetos
// let usuario: { nome: string, idade: number } = {
//     nome: 'João',
//     idade: 27
// }

// console.log(usuario)
// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria',
}
console.log(usuario)

// Desafio
// /*
//     Criar um objeto funcionário com:
//         - Array de strings com os nomes dos surpevisores
//         - Função de bater ponto que recebe a hora (número)
//             e retorna uma string
//             -> Ponto normal (<= 8)
//             -> Fora do horário (> 8)
// */
// // Alias
// type Funcionario = {
//     supervisores: string[],
//     baterPonto: (horas: number) => string    
// }

// let funcionario: Funcionario = {
//     supervisores: ['Ana', 'Fernando'],
//     baterPonto(horario: number): string {
//         if(horario <= 8) {
//             return 'Ponto normal'
//         } else {
//             return 'Fora do horário!'
//         }
//     }
// }

// let funcionario2: Funcionario = {
//     supervisores: ['Bia', 'Carlos'],
//     baterPonto(horario: number): string {
//         if(horario <= 8) {
//             return 'Ponto normal'
//         } else {
//             return 'Fora do horário!'
//         }
//     }
// }

// console.log(funcionario.supervisores)
// console.log(funcionario.baterPonto(8))
// console.log(funcionario.baterPonto(9))

// // funcionaro = {}

// // Union Types
// let nota: number | string = 10
// console.log(`Minha nota é ${nota}!`)
// nota = '10'
// console.log(`Minha nota é ${nota}!`)
// // nota = true

// // Checando tipos
// let valor = 30

// if(typeof valor === "number") {
//     console.log("É um number!")
// } else {
//     console.log(typeof valor)
// }

// // never
// function falha(msg: string): never {
//     throw new Error(msg)
// }

// const produto = {
//     nome: 'Sabão',
//     preco: 4,
//     validarProduto() {
//         if(!this.nome || this.nome.trim().length == 0) {
//             falha('Precisa ter um nome')
//         }
//         if(this.preco <= 0) {
//             falha('Preco inválido!')
//         }
//     }
// }

// produto.validarProduto()

// let altura = 12
// // altura = null

// let alturaOpcional: null | number = 12
// alturaOpcional = null

// type Contato = {
//     nome: string,
//     tel1: string,
//     tel2: string | null
// }

// const contato1: Contato = {
//     nome: 'Fulano',
//     tel1: '98765432',
//     tel2: null
// }

// console.log(contato1.nome)
// console.log(contato1.tel1)
// console.log(contato1.tel2)

// let podeSerNulo = null
// podeSerNulo = 12
// console.log(podeSerNulo)
// podeSerNulo = 'abc'
// console.log(podeSerNulo)

// // Desafio
// type ContaBancaria = {
//     saldo: number,
//     depositar: (valor: number) => void
// }

// let contaBancaria: ContaBancaria = {
//     saldo: 3456,
//     depositar(valor: number) {
//         this.saldo += valor
//     }
// }

// type Correntista = {
//     nome: string,
//     contaBancaria: ContaBancaria,
//     contatos: string[]
// }

// let correntista: Correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890', '98765432']
// }

// correntista.contaBancaria.depositar(3000)
// console.log(correntista)