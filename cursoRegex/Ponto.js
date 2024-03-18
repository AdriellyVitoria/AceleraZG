const texto = "1,2,3,4,5,6,7,8,9"

function imprimir(coisa){
    console.log(texto.match(coisa))
}

console.log(texto.match(/1.2/g))
console.log(texto.match(/1..2/g))

const notas = '8.3,7.'