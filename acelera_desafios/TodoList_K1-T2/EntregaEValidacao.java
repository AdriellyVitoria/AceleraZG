import java.util.Scanner;

public class EntregaEValidacao {
    private static Scanner scanner = new Scanner(System.in);
    public static int recebeEValidacaoMenu() throws InterruptedException {
        Thread.sleep(1000);
        System.out.println("""
            **** Menu *****
            1 - Criar nova tarefa
            2 - Deletar tarefa
            3 - Atualizar tarefar
            4 - Listar Tarefas
            5 - Sair
            """);
        System.out.println("O que deseja escolher (1-6)? ");
        int opcao = Integer.parseInt(scanner.nextLine());
        if (opcao <= 5 && opcao >= 1){
            return opcao;
        }
        System.out.println("Opção inválida... Tente Novamente");
        return recebeEValidacaoMenu();

    }
    public static int recebeEValidacaoPrioridade(){
        System.out.println("Prioridade da tarefa (1-5): ");
        int prioridadeTarefa = Integer.parseInt(scanner.nextLine());
        if(prioridadeTarefa <= 3 && prioridadeTarefa >= 1){
            return prioridadeTarefa;
        }
        System.out.println("Prioridade inválida");
        return recebeEValidacaoPrioridade();
    }
    public static int recebeEvalidacaoCategoria(){
        System.out.println("""
            Categoria da tarefa: 
            0 - Casa
            1 - Trabalho
            2 - Estudos               
            """);
        int categoria = Integer.parseInt(scanner.nextLine());
        if(categoria >= 2 && categoria <= 0){;
            return categoria;
        }
        System.out.println("Categoria Inválida... Tente novamente");
        return recebeEvalidacaoCategoria();
    }
    public static int recebeEValidacaoDia() {
        System.out.println("Digite o dia de termino (DD): ");
        int dia = Integer.parseInt(scanner.nextLine());
        if (dia <= 31 && dia >= 1) {
            return dia;
        }
        System.out.println("Dia inválida, tente novamente");
        return recebeEValidacaoDia();
    }

    public static int recebeEValidacaoMes() {
        System.out.println("Digite o mês de termino (MM): ");
        int mes = Integer.parseInt(scanner.nextLine());
        if (mes <= 12 && mes >= 1) {
            return mes;
        }
        System.out.println("Mês inválido... Tente novamente");
        return recebeEValidacaoMes();
    }

    public static int recebeEvalidacaoStatus(){
        System.out.print("""
                Status da tarefa:
                0 - Em andamento(ToDo)
                1 - A fazer (Doing)
                2 - Concluido (Done)
                """);
        int statusTarefa = Integer.parseInt(scanner.nextLine());
        if (statusTarefa >= 2 && statusTarefa <= 0){
            return statusTarefa;
        }
        System.out.println("Status inválido... Tente Novamente");
        return recebeEvalidacaoStatus();
    }

    public static int recebeEValidacaoListarTarefas(){
        System.out.println("""
                ----- Menu de listar tarefas -----
                1 - Por Categoria
                2 - Por Prioridade
                3 - Por Status
                4 - Todas
                5 - Sair
                """);
        System.out.print("Digite o número da opção desejada (1-4): ");
        int opcao = Integer.parseInt(scanner.nextLine());
        if (opcao <= 5 && opcao >= 1){
            return recebeEValidacaoListarTarefas();
        }
        System.out.println("Opção inválida... Tente Novamente");
        return recebeEValidacaoListarTarefas();
    }
}