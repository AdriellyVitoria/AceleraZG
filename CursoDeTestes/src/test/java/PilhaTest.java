import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import pilha.Livro;
import pilha.Pilha;

import static org.junit.Assert.*;

public class PilhaTest {
    private static Pilha pilha;

    @BeforeClass
    public static void setUpBeforeClass() throws Exception {
        pilha = new Pilha();
        System.out.println("Exercutou o @BeforeClass");
    }

    @Before
    public void setUp() throws Exception{
        Livro livro1 = new Livro("A Fortalezar");
        Livro livro2 = new Livro("O embo");
        Livro livro3 = new Livro("A palha");
        Livro livro4 = new Livro("A linda");
        Livro livro5 = new Livro("O Sol");

        pilha.push(livro1);
        pilha.push(livro2);
        pilha.push(livro3);
        pilha.push(livro4);
        pilha.push(livro5);
    }

    @After
    public void tearDown() throws Exception{
        int tamanho = pilha.count();
        while (tamanho > 0){
            pilha.pop();
            tamanho--;
        }
    }

    @Test (expected = ArrayStoreException.class)
    public void testeNaoAddLivroAlemDoLimite(){
        pilha.push(new Livro("A volta"));
        System.out.println("Exercutou testeadd limite");
    }
    @Test
    public void TesteNaoAddLivroForaDoPadrao(){
        pilha.pop();
        pilha.push(new Livro("Não vai"));
        Livro livro = pilha.pop();

        assertEquals("O Sol", livro.getTitulo());
        System.out.println("Exercutou testeNãoAddfota do padrão");
    }

    @Test
    public void testeRetiraUltimoLivro(){

        String resultaEsperando = "A Nasce";
        assertEquals(pilha.pop().getTitulo(), "A Nasce");
    }
}
