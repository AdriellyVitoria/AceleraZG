import java.util.ArrayList;

public class Tarefas {
    public String nome;
    public String descricao;
    public double data;
    public int prioridade;
    public String categoria;
    public TiposDeStatus status;

    public Tarefas(String nome, String descricao, double data, int prioridade, String categoria, TiposDeStatus status) {
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

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getData() {
        return data;
    }

    public void setData(double data) {
        this.data = data;
    }

    public int getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(int prioridade) {
        this.prioridade = prioridade;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public TiposDeStatus getStatus() {
        return status;
    }

    public void setStatus(TiposDeStatus status) {
        this.status = status;
    }
}
