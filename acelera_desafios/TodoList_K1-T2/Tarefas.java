import java.time.format.DateTimeFormatter;
import java.util.Comparator;

public class Tarefas {
    private String nome;
    private String descricao;
    private String data;
    private int prioridade;
    private String categoria;
    private String status;

    public Tarefas(String nome, String descricao, String data, int prioridade, String categoria, String status) {
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.prioridade = prioridade;
        this.categoria = categoria;
        this.status = status;
    }

    public String getNome() {
        return nome;
    }
    public String getDescricao() {
        return descricao;
    }
    public String getData() {
        return data;
    }
    public int getPrioridade() {
        return prioridade;
    }
    public String getCategoria() {
        return categoria;
    }
    public String getStatus() {
        return status;
    }
}
