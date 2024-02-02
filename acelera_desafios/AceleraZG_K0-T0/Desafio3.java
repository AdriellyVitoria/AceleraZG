public class Desafio3 {
    public void root3(){
    int i = 2;
    int numeroMaior = 0;
    long numero = 600851475143l;

        while (i <= Math.sqrt(numero)){
        if(primo(i)){
            if (numero % i == 0) {
                numeroMaior = i;
            }
        }
        i++;
    }
        if (numeroMaior == 0){
        System.out.println("O número é primo");
    } else {
        System.out.println("O maior fator primo é: "+ numeroMaior);
    }
}
    public static boolean primo(int valor){
        int i = 1;
        int divido = 0;
        while (i <= Math.sqrt(valor)) {
            if (valor % i == 0) {
                divido++;
            }
            i++;
        }
        return divido == 1;
    }
}
