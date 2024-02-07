import java.util.Scanner;

public class Iteracao {
    public static void criarTarefa(){
        Scanner scanner = new Scanner(System.in);
        //Colocar um print de boas vi

        System.out.println("Nome da tarefa: ");
        String nomeTarefa = scanner.nextLine();

        System.out.println("Descrição da tarefa: ");
        String descricaoTarefa = scanner.nextLine();

        System.out.println("Prioridade da tarefa (1-5): ");
        int prioridadeTarefa = Integer.parseInt(scanner.nextLine());

        System.out.println("Categoria da tarefa: ");
        String categoriaTarefa = scanner.nextLine();

        System.out.println("Digite o dia de termino (DD): ");
        int dia = Integer.parseInt(scanner.nextLine());

        System.out.println("Digite o mês de termino (MM): ");
        int mes = Integer.parseInt(scanner.nextLine());

        System.out.println("Digete o ano de termino (AAAA): ");
        int ano = Integer.parseInt(scanner.nextLine());

        String dataDeTermino = dia + "/" + mes + "/" + ano;

        System.out.print("""
                Status da tarefa:
                0 - Em andamento(ToDo)
                1 - A fazer (Doing)
                2 - Concluido (Done)
                """);
        int statusTarefa = Integer.parseInt(scanner.nextLine());
        //scanner.nextLine();
        String status = Status.convertendoNumeroParaEnum(statusTarefa);

        Tarefas criarTarefa = new Tarefas(nomeTarefa, descricaoTarefa, dataDeTermino, prioridadeTarefa, categoriaTarefa, status);
        Listas.addTarefa(criarTarefa);
    }

    public static void menuListarTarefas(){
        Scanner scanner = new Scanner(System.in);
        System.out.println("""
                ----- Menu de listar tarefas -----
                1 - Por Categoria
                2 - Por Prioridade
                3 - Por Status
                4 - Todas
                """);
        System.out.print("Digite o número da opção desejada (1-4): ");

        int opcao = scanner.nextInt();
        scanner.nextLine();
        switch (opcao) {
            case 1:
                Listas.listarDetalherDaTarefa();
                break;
            default:
                System.out.println("Opção inválida. Tente novamente.");
//            case 2:
//                listarPorPrioridade();
//                break;
//            case 3:
//                listarPorStatus();
//                break;
//            case 4:
//                listarTodas();
//                break;
        }

    }
    public static void deletarTarefa(){
        Listas.listarTarefaPorNomeParaApagar();

    }

}

