import java.util.Scanner;

public class Menu {
    public void menuInicial() throws InterruptedException {
        int opcao;
        do {
            opcao = EntregaEValidacao.recebeEValidacaoMenu();
            switch (opcao) {
                case 1:
                    IteracaoComMenu.criarTarefa();
                    break;
                case 2:
                    IteracaoComMenu.deletarTarefa();
                    break;
                case 3:
                    IteracaoComMenu.atualizarTarefa();
                    break;
                case 4:
                    IteracaoComMenu.menuListarTarefas();
                    break;
                case 5:
                    System.out.println("Até mais"); //melhor frase
                    break;
                default:
                    System.out.println("Desculpe... Tente novamente. Tente digitar um numero de 1 a 6");
                    menuInicial();
            }
        } while (opcao != 6);
    }
}

