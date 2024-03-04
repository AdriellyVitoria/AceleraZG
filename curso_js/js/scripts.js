// Formulario

document



// Aula 25 Local Storage

//window.localStorage.setItem("nome", "ivan");
// o objeto window pode ser omitido quando trabalhamos com o local storage

// A consulta aos dados armazenados em local storage é semelhante à consulta de valores em um objeto.
// Podemos usar a notação com ponto ou com colchetes

// console.log(localStorage['nome']);
// localStorage.removeItem("nome");
// console.log(localStorage['nome']);

// document.getElementById("enviar-nome").onclick = function(){

//     var nome = document.getElementById("nome-usuario").value;
//     localStorage.setItem("nome", nome)

//     document.getElementById("name-field").style.display = "none";
//     document.getElementById("welcome-text").innerHTML = `Olá ${localStorage.nome}, + Tudo bem?`

//     document.getElementById("not-me").innerHTML = `Não é ${localStorage} ?`

//     document.getElementById("welcome-area").style.display = "initial";
// }

// Aula 24 - Bom

// window.onmousemove = function(e){

//     if (e.pageY < 5) {
//         alert('Não perca os descontos exclusivos na seção de promoções');
//     }
// } 