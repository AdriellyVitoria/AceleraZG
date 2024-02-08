import java.time.format.DateTimeFormatter;
import java.util.Comparator;

public class Tarefas {
    public String nome;
    public String descricao;
    public String data;
    public int prioridade;
    public String categoria;
    public String status;

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
