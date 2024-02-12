public abstract class Animais {
    int idade;
    String gereno;
    int peso;

    public Animais(int idade, String gereno, int peso) {
        this.idade = idade;
        this.gereno = gereno;
        this.peso = peso;
    }

    public void comer(){
        System.out.println("Comendo...");
    }

    public void dormir(){
        System.out.println("dormir...");
    }

    public abstract void mover();
}
