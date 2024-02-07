import java.util.ArrayList;

public class Listas {
    private static ArrayList<Tarefas> tarefas = new ArrayList<>();
    //private static ArrayList<> status = new ArrayList<>();

    public static ArrayList<Tarefas> getTarefas() {
        return tarefas;
    }

    public static void addTarefa(Tarefas tarefa) {
        tarefas.add(tarefa);
    }

    public static void listarTarefas(){
        for (Tarefas tarefa : tarefas) {
            System.out.println(tarefa.nome);
        }
    }
}
