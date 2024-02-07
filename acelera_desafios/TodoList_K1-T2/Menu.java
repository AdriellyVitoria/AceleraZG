import java.util.Scanner;

public class Menu {
    public void menuInicial() {
        Scanner scanner = new Scanner(System.in);
        int opcao;
        do {
            System.out.println("""
                    **** Menu *****
                    1 - Criar nova tarefa
                    2 - Listar tarefas
                    3 - Deletar tarefa
                    4 - Atualizar tarefar
                    6 - Sair
                    """);
            System.out.println("O que deseja escolher (1-6)? ");
            opcao = Integer.parseInt(scanner.nextLine());

            switch (opcao) {
                case 1:
                    Iteracao.criarTarefa();
                    break;
                case 2:
                    Iteracao.menuListarTarefas();
                    break;
            case 3:
                Iteracao.deletarTarefa();
                break;
//            case 4:
//                iteracao.AtualizarTarefa();
//                break;
                case 6:
                    System.out.println("Até mais"); //melhor frase
                    break;
                default:
                    System.out.println("Desculpe... Tente novamente. Tente digitar um numero de 1 a 6");
                    menuInicial();
            }
        } while (opcao != 6);
    }
}

