function celsiusToFahrenheit(celsun){
    var f = (9 * celsun / 5) + 32
    return f
}

document.getElementById("converter").onclick = function(){
    var celsius = parseFloat(document.getElementById("temp_celsius").value);
    var fahrenheit = celsiusToFahrenheit(celsius);
    document.getElementById("temp_fahr").innerHTML = "<strong>" + fahrenheit + "</strong>"
}

// Questão número 2

var inicio = 1930

document.getElementById("anos_copa").innerHTML = "";

for (var a = inicio;a <= 2024; a += 4){
    document.getElementById("anos_copa").innerHTML += '<li>' + a + '</li>';
}

// Questão 3

document.getElementById("calcular").onclick = function (){

    var numero1 = parseFloat(document.getElementById("nota1").value);
    var numero2 = parseFloat(document.getElementById("nota2").value);
    var numero_faltas = parseFloat(document.getElementById("n_faltas").value);

    var media = (numero1 + numero2) / 2;
    var presenca = (20 - numero_faltas) / 20;

    var situacao;

    if(media >= 6.5 && presenca >= 0.7){
        situacao = "Aprovado"
    } else if(media <= 6.5 && presenca < 0.7){
        situacao = "Reprovado por falta e por média"
    } else if(media < 6.5) {
        situacao = "Reprovado por média";
    } else if(presenca < 0.7) {
        situacao = "Reprovado por falta";
    }
    
    document.getElementById("result").innerHTML = situacao;
}

// Questão 4

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

var total_vendas = 0
document.getElementById("vendas_cursos").innerHTML

for (var b = 0; b < vendas_cursos.length; b++){

    if(vendas_cursos[b].reembolso == null){
        total_vendas += vendas_cursos[b].valor;

        var linhaHTML = ""
        linhaHTML += '<tr>'

        linhaHTML += '<td>'+ vendas_cursos[b].aluno + '</td>';
        linhaHTML += '<td>'+ vendas_cursos[b].data + '</td>';
        linhaHTML += '<td>'+ vendas_cursos[b].valor + '</td>';

        linhaHTML += '</tr>'

        document.getElementById("vendas_cursos").innerHTML += linhaHTML
    }
}

document.getElementById("total_vendas").innerHTML = total_vendas