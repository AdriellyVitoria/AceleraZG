var num1 =  parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);

var soma = num1 + num2;
document.getElementById('resultado').innerHTML = `<strong>` + soma + `</strong>`

function conversao(celsun){

    f = (9 * celsun / 5) + 32
    return f
}

var celsius = parseInt(document.getElementById("caixa_azul").innerHTML);
document.getElementById("caixa_amarela").innerHTML = conversao(celsius)

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
]; 

grupos.push(["Mariana","Felipe","Carla"]);
console.log(grupos)

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_aval': function(){
        var t_aval = `${this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela}`
        return t_aval
    },
    'media_aval': function(){
        var media = ( (5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas)
        + (3 * this.n_aval_3_estrelas) + (2 * this.n_aval_2_estrelas) + (1 * this.n_aval_1_estrela))
        return media
    } 
}   

document.getElementById("total_aval").innerHTML = curso.total_aval();
document.getElementById("media_aval").innerHTML = curso.media_aval();


var pessoa = 

