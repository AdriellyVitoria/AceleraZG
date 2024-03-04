/* temos que usar a notação com colchetes com o background-color 
    porque o nome da propriedade contém um traço. Falamos isso na aula sobre objetos. */
// Aninhamento de loop e condicionais
// var socio = true;
// var idade = 25;

// if(socio == true || idade >= 65){
//     console.log("O ingresso é grátis")
// } else{
//     if(idade< 18){
//         console.log("Preço a pagar 6 reais")
//     } else {
//         console.log("Preço a pagar 12 reias")
//     }
// }

var funcionarios = [
        
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
    },
    
    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': ['João Pedro Pereira de Souza']
        
    },
    
    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
    }
    ];
    
    var list_element = document.getElementById("filhos");
    
    for (var a = 0 ; a < funcionarios.length ; a++) {
        if (funcionarios[a].filhos) {
            
            var lista_filhos = funcionarios[a].filhos;
            
            for (var b = 0 ; b < lista_filhos.length ; b++) {
                list_element.innerHTML += '<li>' + lista_filhos[b] + ' - Filho(a) de ' + funcionarios[a].nome + '</li>';
    
            }
        }
    }
    
    
    // Aula 24 Condicionais 
    // var idade = 18;
    
    //     if (idade < 18) {
    
    //         console.log('Menor de 18');
    
    //     } else if (idade == 18) {
    
    //         console.log('Tem 18 anos');
    
    //     } else {
    
    //         console.log('Maior de 18');
    
    //     }
    //     faltas = 3;
    
    //     // Resolução com and: 
    
    //     if (nota >= 7 && faltas <= 4) {
    //         console.log( 'O aluno foi aprovado' );
    //     } else {
    //         console.log( 'O aluno foi reprovado' );
    //     }
    
    //     // Resolução com or: 
    
    //     if (nota < 7 || faltas > 4) {
    //         console.log( 'O aluno foi reprovado' );
    //     } else {
    //         console.log( 'O aluno foi aprovado' );
    //     }
    //     var nome = "";
    
    //     if (nome) {
            
    //         console.log(nome);
        
    //     } else {
    
    //         console.log("Nome não informado");
    
    //     }
    
    // O string vazio é avaliado como falso, por isso o código dentro do else é executado.
    // O console mostrará "Nome não informado"
    // Este método poderia ser usado para testar se um campo de formulário está vazio, por exemplo.
    
    // as duas maneiras de resolver chegam ao mesmo resultado.
    //O console mostrará: "O aluno foi aprovado".
    
    // mude os valores das variáveis nota e faltas e veja como o teste funciona.
    // O console mostrará: 'Tem 18 anos' 
    // Aula 23 Loop While e dO/White
    
    // var count = 1
    // // while (count < 5) {
    // //     console.log(count);
    // //     count++;
    // // }
    
    // do {
    //     console.log(count);
    //     count++;
    // } while (count < 5);
    
    // Aula 22 Loops for e for/In
    // var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];
    
    // for (var a = 0; a < alunos.length ; a++) {
    //     console.log(alunos[a]);
    // }
    
    // var carro = {
    //     'Ano': 2018,
    //     'Modelo': 'Fox',
    //     'Cilindradas': '1.8',
    //     'Combustível': 'Gasolina'
    
    // }
    
    // for (var prop in carro) {
    //     console.log(`${prop}:${carro[prop]}`)
    //     //console.log( prop + ': ' + carro[prop] );
    // }
    
    // var elementos = document.getElementsByClassName("p");   
    
    // for (var a = 0; a < elementos.length ; a++) {
    //     exs[a].style.color = "orange";
    //     exs[a].style['font-weight'] = "bold";
    // }
    /* O console mostrará:
    
    Ano: 2018
    Modelo: Fox
    Cilindradas: 1.8
    Combustível: Gasolina
    
    */
    // Aula 21 Outros elementos de getElement
    // var elementos = document.getElementsByClassName("exemplo");
    // elementos[0].innerHTML = "Texto do elemento 1";
    // console.log(elementos);
    
    // var paragrafos = document.getElementsByTagName("p"); // para pegar todos os paragrafos da pagina
    
        // O console retornará um array: [ {...}, {...}, {...} ]
        // Cada um destes objetos é um dos elementos que possuem a classe "exemplo"
    
    // Manibulação do CSS
    
    // document.getElementById("botao_cor").onclick = function(){
    //     document.getElementById("botao_cor").style.height = "100px"
    //     document.getElementById("botao_cor").style['background-color'] = "purple";
    //     document.getElementById("botao_cor").style.transform = "translateX(100px)";
    // }
    
    
    // //Pode ser usando assim
    // document.getElementById("botao_cor").onclick = function() {
    //     this.style['background-color'] = "purple";
    //     this.style.transform = "translateX(100px)";
    // };
    
    
    // // Outra maneira de simplificar usando uma variável:
    
    // var botao = document.getElementById("botao_cor");
    
    // botao.onclick = function() {
    //     botao.style['background-color'] = "purple";
    //     botao.style.transform = "translateX(100px)";
    // };
    