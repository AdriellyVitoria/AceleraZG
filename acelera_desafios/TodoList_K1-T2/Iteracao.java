import java.util.Scanner;

public class Iteracao {
    public static void criarTarefa(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Nome da tarefa: ");
        String nomeTarefa = scanner.nextLine();

        System.out.println("Descrição da tarefa: ");
        String descricaoTarefa = scanner.nextLine();

        System.out.println("Prioridade da tarefa (1-5): ");
        int prioridadeTarefa = Integer.parseInt(scanner.nextLine());

        System.out.println("Categoria da tarefa: ");
        String categoriaTarefa = scanner.nextLine();

        System.out.println("Data de término da tarefa: ");
        double dataDeTermino = scanner.nextDouble();

        System.out.print("""
                Status da tarefa:
                0 - Em andamento(ToDo)
                1 - A fazer (Doing)
                2 - Concluido (Done)""");
        //criar um lista mas add o nome quando for listar a lista
        int statusTarefa = Integer.parseInt(scanner.nextLine());

        Tarefas criarTarefa = new Tarefas(nomeTarefa, descricaoTarefa, dataDeTermino, prioridadeTarefa, categoriaTarefa, TiposDeStatus.);
        Listas.addTarefa(criarTarefa);
        //Listas.listarTarefas();

    }
}
