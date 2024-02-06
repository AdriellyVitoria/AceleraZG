import java.util.Scanner;

public class Menu {
    public void menuInicial(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("**** Menu *****");
        System.out.println("""
                1 - Criar nova tarefa
                2 - Lista tarefas
                3 - Deletar tarefa
                4 - Atualizar tarefa
                5 - Editar tarefa
                6 - Sair
                """);
        System.out.println("O que deseja escolher? ");
        int opcao = scanner.nextInt();
        iteracaoComMetodos(opcao);
    }

    public void iteracaoComMetodos(int opcao){
        switch (opcao) {
            case 1:
                iteracao.c
                break;
//            case 2:
//                iteracao.ListaTarefas();
//                break;
//            case 3:
//                iteracao.DeletaTarefa();
//                break;
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
    }
}
