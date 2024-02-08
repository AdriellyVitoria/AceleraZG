import java.util.Scanner;

public class IteracaoComMenu {
    public static void criarTarefa(){
        Scanner scanner = new Scanner(System.in);
        //Colocar um print de boas vi
        System.out.println("Nome da tarefa: ");
        String nomeTarefa = scanner.nextLine();

        System.out.println("Descrição da tarefa: ");
        String descricaoTarefa = scanner.nextLine();

        int prioridadeTarefa = EntregaEValidacao.recebeEValidacaoPrioridade();

        int categoria = EntregaEValidacao.recebeEvalidacaoCategoria();
        String categoriaTarefa = Status.convertendoCategoriaNumeroString(categoria);

        int dia = EntregaEValidacao.recebeEValidacaoDia();
        int mes = EntregaEValidacao.recebeEValidacaoMes();

        System.out.println("Digete o ano de termino (AAAA): "); //pega o ano atual ou menor
        int ano = Integer.parseInt(scanner.nextLine());
        String dataDeTermino = dia + "/" + mes + "/" + ano;

        int statusTarefa = EntregaEValidacao.recebeEvalidacaoStatus();
        String status = Status.convertendoStatusNumeroParaString(statusTarefa);

        Tarefas criarTarefa = new Tarefas(nomeTarefa, descricaoTarefa, dataDeTermino,
                prioridadeTarefa, categoriaTarefa, status);
        Listas.addTarefa(criarTarefa);
    }

    public static void menuListarTarefas(){
        int opcao = EntregaEValidacao.recebeEValidacaoListarTarefas();
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

    public static void atualizarTarefa(){
        Listas.atualizarTarefa();

    }

}

