public class Pardal extends Passaro implements Voares{

    public Pardal(int idade, String gereno, int peso) {
        super(idade, gereno, peso);
    }

    public void voar() {
        System.out.println("Voar alto....");
    }
}
