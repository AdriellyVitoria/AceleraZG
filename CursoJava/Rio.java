public class Rio extends Animais {
    public Rio(int idade, String gereno, int peso) {
        super(idade, gereno, peso);
    }

    @Override
    public void mover() {
        System.out.println("NAdar");
    }

    public void nadar(){
        System.out.println("nadando...");
    }
}
