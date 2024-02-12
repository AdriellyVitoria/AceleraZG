public class Humano {
    String nome;
    int idade;
    int altura;
    String corDosOlhos;

    public Humano(String nome, int idade, int altura, String corDosOlhos) {
        super();
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.corDosOlhos = corDosOlhos;
    }

    public void falar(){
        System.out.println("Oii, meu nome é: " + nome);
        System.out.println("Tenho " + idade + "anos");
        System.out.println("Minha altura é: " + altura);
        System.out.println("E os meus olhos são: " + corDosOlhos);
    }

    public void comer(){
        System.out.println("Comendo...");
    }

    public void andan(){
        System.out.println("andando...");
    }
    public void trabalhar(){
        System.out.println("trabalhando....");
    }


}
