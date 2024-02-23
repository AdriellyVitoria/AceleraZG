function conversao(celsun){
    f = (9 * celsun / 5) + 32
    var saida = f
    document.getElementById("temp_fahr").innerHTML = saida
}

var ver = document.getElementById("converter").onclick = true;

if (ver) {
    var entrada = document.getElementById("temp_celsius").ariaValueMax
    conversao(entrada);
}


