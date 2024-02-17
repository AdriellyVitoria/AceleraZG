public class PilhaTest {
    Pilha pilha = new Pilha();

    public boolean testeRetiraUltimoLivro(){
        Livro livro = new Livro("A forte");
        pilha.push(livro);

       Livro livro2 = new Livro("A Embo");
        pilha.push(livro2);

        Livro livro1 = new Livro("A Nasce");
        pilha.push(livro1);

        String resultaEsperando = "A Nasce";
        return pilha.pop().getTitulo().equals(resultaEsperando);
    }

    public boolean testeNaoAddLivroAlemDoLimite(){
        Pilha pilha = new Pilha();
        Livro livro1 = new Livro("A Fortalezar");
        Livro livro2 = new Livro("O embo");
        Livro livro3 = new Livro("A palha");
        Livro livro4 = new Livro("A linda");
        Livro livro5 = new Livro("A talezar");
        Livro livro6 = new Livro("O Sol");

        pilha.push(livro1);
        pilha.push(livro2);
        pilha.push(livro3);
        pilha.push(livro4);
        pilha.push(livro5);
        pilha.push(livro6);

        String reslEsperando = "A talezar";

        return pilha.pop().getTitulo().equals(reslEsperando);
    }

    public boolean TesteNaoAddLivroForaDoPadrao(){
        Pilha pilha = new Pilha();

        Livro livro = new Livro("A qualquer");
        pilha.push(livro);

        Livro livro2 = new Livro("Homem de ferro");
        pilha.push(livro2);

        String resilEsperando = "Homem de ferro";
        return pilha.pop().getTitulo().equals(resilEsperando);
    }
}
