public class Loop {
    public void descricao() {
        String srt = "Eu tenho um grande estoque de coisas em nosso armazém caindo"
                + "categoria mais procurada: maquiagem junto com a categoria: móveis e";
        printCategoria(srt);
    }

    public void printCategoria(String mensagem) {
        int valor = 0;
        while (true) {
            int found = mensagem.indexOf("Categoria", valor);
            if (found == -1) break;
            int start = found + 9;
            int end = mensagem.indexOf(" ", start);
            System.out.println(mensagem.substring(start, end));
            valor = end + 1;
        }
    }

    public void LoopFor(){
        String nome = "abcdefghijklmnopqrstuvwxyzl";
        for (int i = nome.length()-1; i >=0; i--){
            System.out.println("Letra: " + nome.charAt(i));
        }
    }
}
