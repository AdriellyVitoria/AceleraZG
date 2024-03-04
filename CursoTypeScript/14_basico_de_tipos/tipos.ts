// string
let nome = 'João'
console.log(nome)
// nome = 28

// numbers

let idade = 27
idade = 27.9
//idade = ana
console.log(idade)

// booleano
let possuiHopp = false
//possuiHopp = 1
console.log(possuiHopp)

// Tipos de Atributos

let minhaidade: number
minhaidade = 27
console.log(typeof minhaidade)
minhaidade = "minha idade 27"
console.log(typeof minhaidade)

// Arrays e tipos

let hoppies: any = ["cozinha", "part", "jogar"]
console.log(hoppies)
console.log(typeof hoppies)
hoppies = [100]
console.log(hoppies)

//Tuplas
let endereco: [string, number, ] = ['Av principal', 99]
console.log(endereco)

//Enums

enum Cor {
    cinza,
    verde = 10,
    azul,
    vermelho = 100
}

let minhaCor: Cor = Cor.vermelho
console.log(minhaCor)

console.log(Cor.verde)

//Tipos any

let carro: any = 'BMW'
console.log(carro)
carro = {marca: "BMW", ano: 2018 }
console.log(carro)