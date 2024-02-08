import java.util.ArrayList;
import java.util.Scanner;

public class Listas {
    private static ArrayList<Tarefas> tarefas = new ArrayList<>();
    public static ArrayList<Tarefas> getTarefas() {
        return tarefas;
    }
    public static void addTarefa(Tarefas tarefa) {
        tarefas.add(tarefa);
    }

    public static void listarDetalherDaTarefa(){
        for (Tarefas tarefa : tarefas) {
            System.out.println("Nome: " + tarefa.getNome());
            System.out.println("Descrição: " + tarefa.getDescricao());
            System.out.println("Data de Término: " + tarefa.getData());
            System.out.println("Prioridade: " + tarefa.getPrioridade());
            System.out.println("Categoria: " + tarefa.getCategoria());
            System.out.println("Status: " + tarefa.getStatus());
            System.out.println("---------------");
        }
    }

    //LEMBRA DE COLOCAR TUDO EM MINUCULA
    public static void listarTarefaPorNomeParaApagar(){
        Scanner scanner = new Scanner(System.in);
        for (Tarefas tarefa : tarefas) {
            System.out.println("Nome da tarefa: " + tarefa.getNome());
        }
        System.out.println("Qual tarefa deseja apagar? ");
        String nomeTarefaParaExcluir =  scanner.nextLine();
        for (int i = 0; i < tarefas.size(); i++){
            if (tarefas.get(i).equals(nomeTarefaParaExcluir)){
                tarefas.remove(i);
                System.out.println("Tarefa Apagada com sucesso");
            } else {
                System.out.println("Tarefa não encontrada... Tente novamente");
                IteracaoComMenu.deletarTarefa();
            }
        }
    }

    public static void atualizarTarefa(){

    }

    public static void listarPorStatus(){
        // vou pegar o nome procura na parte de status e mandar todas as tarefas que está para fazer
        Scanner scanner = new Scanner(System.in);
        System.out.println("""
                Deseja ver as tarefas por:
                0 - Em andamento
                1 - A fazer
                2 - Concluido""");
        System.out.println("Digite sua opção (0-2): ");
        int opcao = Integer.parseInt(scanner.nextLine());
        Status.convertendoStatusNumeroParaString(opcao);
//
//       if (listarDetalherDaTarefa().e){
//           System.out.println(tarefas);
//       }

       //Criar uma fitragem generica para buscar tudo de uma vezes só subtituindo a get
        //EX ir buscar pela as em andamento pecorre noemla a lista quando acha a palavra andamento retomr a tarefas

    }

}
