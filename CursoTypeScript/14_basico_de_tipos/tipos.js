// string
var nome = 'João';
console.log(nome);
// nome = 28
// numbers
var idade = 27;
idade = 27.9;
//idade = ana
console.log(idade);
// booleano
var possuiHopp = false;
//possuiHopp = 1
console.log(possuiHopp);
// Tipos de Atributos
var minhaidade;
minhaidade = 27;
console.log(typeof minhaidade);
minhaidade = "minha idade 27";
console.log(typeof minhaidade);
// Arrays e tipos
var hoppies = ["cozinha", "part", "jogar"];
console.log(hoppies);
console.log(typeof hoppies);
hoppies = [100];
console.log(hoppies);
//Tuplas
var endereco = ['Av principal', 99];
console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["verde"] = 10] = "verde";
    Cor[Cor["azul"] = 11] = "azul";
    Cor[Cor["vermelho"] = 100] = "vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.vermelho;
console.log(minhaCor);
console.log(Cor.verde);
//Tipos any
var carro = 'BMW';
console.log(carro);
carro = { marca: "BMW", ano: 2018 };
console.log(carro);
