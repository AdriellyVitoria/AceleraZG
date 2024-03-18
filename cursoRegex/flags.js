/*
g - global
i- ignore case

as primeira letras são para buscar

*/

const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/));
console.log(texto.match(/c|ab/i))
console.log(texto.match(/ab|c/gi))
console.log(texto.match(/nou|ss/gi))


