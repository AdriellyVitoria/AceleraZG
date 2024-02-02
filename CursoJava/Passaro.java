public class Passaro extends Animais{
    public Passaro(int idade, String gereno, int peso) {
        super(idade, gereno, peso);
    }

    @Override
    public void mover() {
        System.out.println("Voarr");
    }

}
