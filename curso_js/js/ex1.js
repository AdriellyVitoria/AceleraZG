var nome = "Adrielly linda"
var ano_nascimento = 2002;
var dataAtual = new Date().getFullYear();
var idade = dataAtual - ano_nascimento

console.log(`Olá me chamo ${nome} tenho ${idade} anos e estou estudando`)

var matricular = 2342
var nota1 = 7.0
var nota2 = 7.0
var media = (nota1 + nota2) / 2
console.log(`O aluno ${nome}, matricyla ${matricular}, com a media ${media}`)

var tel = 123456789
var tel_string = tel.toString();

if(tel_string.length == 9){
    console.log(`Resultando do teste é ${tel_string.length}`)
} else{
    console.log('false')
}

console.log(Math.pow(32,6))


var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade);
console.log( (7+5) / numero + 2 ); 
console.log(pressao);
console.log(temperatura);
console.log(typeof pressao);
console.log(typeof temperatura);

var idade = 65;

console.log(idade != 65);
console.log(idade >= 65); 
console.log("65" == idade);
console.log(65 !== idade);
console.log(typeof (idade > 60));
console.log(typeof (idade > 70))