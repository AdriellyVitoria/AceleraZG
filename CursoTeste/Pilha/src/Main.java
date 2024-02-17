public class Main {
    public static void main(String[] args) {
        PilhaTest teste = new PilhaTest();

        boolean resultando = teste.testeNaoAddLivroAlemDoLimite();
        System.out.println(resultando);

        resultando = teste.TesteNaoAddLivroForaDoPadrao();
        System.out.println(resultando);

       resultando = teste.testeRetiraUltimoLivro();
       System.out.println(resultando);


    }


}