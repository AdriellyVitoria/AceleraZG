// Aula 14 Metodos de objetos

var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Pereira',
    'ano_nasci': 1992,
    'nome_completo': function() {
        var nomeCompleto = `${this.nome} ${this.sobrenome}`
        return nomeCompleto;
    },
    'ver_idade': function(){
        var anoAtual = new Date().getFullYear();
        var idade = anoAtual - this.ano_nasci;
        return idade;

    }
}
console.log(aluno.nome_completo());
console.log(aluno.ver_idade());


console.log('Hello World'); // log é um método do objeto console 
Math.round(2.7);  // round é um método do objeto Math
var num = 3; 
var num_string = num.toString(); // toString é um método que pode ser 
//aplicado a qualquer tipo de dados.
var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;  
// getElementById é um método do objeto document.
// innerHTML é propriedade do objeto que o método getElementById retorna.
var cursos = [ "HTML", "Python", "PHP" ];
cursos.push("Javascript"); // push é um método que pode ser aplicado em arrays.


// Aula 13 - Tipos de Dados = objetos

// Arrays são identificados por colchetes [ ]
// Arrays são listas de valores separados por vírgula
// Objetos são identificados por chaves { }
// Cada elemento do objeto é uma dupla de chave (key) : valor (value). A chave também é chamada de propriedade.
// As duplas do objeto são separadas por vírgula

// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// console.log( funcionario['cpf'] ); //  O console mostrará '111.111.111.11'
// console.log( funcionario.nome ); // Podemos usar a notação com ponto (dot notation)
// funcionario.cargo = 'Gerente de T.I.';  // alterar um valor associado a uma chave existente
// funcionario.cnh = '1982736654';  // adicionar uma nova dupla de chave e valor

// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }
    
// ];

// console.log( cursos[1]['categorias'][0]); // vai mostrar desevolvimento web
// cursos[2]['categorias'][1] = 'Administração de empresas';
// console.log( cursos[2]['categorias'] );  // O console mostrará ['produtividade', 'Administração de empresas']


// Aula 12 - Array
// Push - Adiciona elementos ao final de um array
// Pop - Remove o último elemento de um array
// Shift - Remove o primeiro elemento de um array
// Unshift - Adiciona elementos ao início de um array

// var alunos = [ "João" , "Maria", "José" ];
// var num_primos = [ 2, 3, 5, 7, 11, 13 ];


// var alunos = [ "João" , "Maria", "José" ];
// console.log(alunos.length); // o console mostrará 3
// console.log(alunos[0]);  // o console mostrará "João"

// var grupos = [ 
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];

// console.log(grupos.length)
// console.log(grupos[1][1])

// var ingredientes = [ "pão branco", "queijo", "presunto" ];

// ingredientes[0] = "pão integral";

// console.log(ingredientes);

// var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
// console.log( alunos.slice(0,-5) );
// O console mostrará [ "João" , "Maria", "José", "Fernanda" ]
    /* O slice começa no primeiro elemento, e vai até o penúltimo elemento, neste caso o índice 4, 
    com este elemento excluído. */
// // aula 11 - Funcoes

// function soma_numero(){
//     var x = 5
//     var nuemro1 = 2
//     var soma = x = nuemro1;
//     console.log(soma)
// }

// soma_numero()

// function soma_argt(num1, num2){
//     var soma = num1 + num2
//     return soma

// }
// console.log(soma_argt(10, 10))

// function valor_imc(peso, altura){
//     var imc = peso / (altura * altura)
//     return imc
// }

// var meu_peso = parseFloat(document.getElementById("peso").innerHTML)
// var minha_altura = parseFloat(document.getElementById('altura').innerHTML)
// var meu_imc = valor_imc(meu_peso, minha_altura)

// document.getElementById("imc").innerHTML - meu_imc.toFixed(2);

// aula 10 - trabalhando com Dom
// var conteudo_caixa = document.getElementById("caixa_azul").innerHTML; // Para pegar o elemento
// console.log(conteudo_caixa)
// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;
// document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>';
// var conteudo = document.getElementById("caixa_azul").innerHTML;
// document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo + '</h1>';


