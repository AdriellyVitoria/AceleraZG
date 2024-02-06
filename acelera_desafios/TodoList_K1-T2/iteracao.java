import java.util.Scanner;

public class iteracao extends Tarefas{
    public iteracao(String nome, String descricao, double data, int prioridade, String categoria, String status) {
        super(nome, descricao, data, prioridade, categoria, status);
    }
    public void criarTarefa(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Nome da tarefa: ");
        String nomeTarefa = scanner.nextLine();

        System.out.println("Descrição da tarefa: ");
        String descricaoTarefa = scanner.nextLine();

        System.out.println("Prioridade da tarefa (1-5): ");
        int prioridadeTarefa = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Categoria da tarefa: ");
        String categoriaTarefa = scanner.nextLine();

        System.out.println("Data de término da tarefa: ");
        String dataDeTermino = scanner.nextLine();

        System.out.print("Status da tarefa (ToDo, Doing e Done): ");
        String statusTarefa = scanner.nextLine();

        Tarefas criarTarefa = new Tarefas(nomeTarefa, descricaoTarefa, prioridadeTarefa, categoriaTarefa, dataDeTermino, statusTarefa);
        tarefas.add(criarTarefa);

        System.out.println(tarefas);

    }
}
