public class Desafio2 {
    public static void fibonacciPar(){
        int termo1 = 1;
        int termo2 = 2;
        int temp;
        int soma = 0;
        long limite = 4000000l;

        while (termo1 <= limite){
            if (termo1 % 2 == 0) {
                soma += termo1;
            }
            temp = termo1;
            termo1 = termo2;
            termo2 = temp + termo1;
        }
        System.out.println("A soma dos termos de valores par é " + soma);
    }
}
