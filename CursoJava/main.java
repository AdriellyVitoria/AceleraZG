
import Curso.Exemplo;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class main {
    public static void main(String[] args) throws FileNotFoundException {
        try {
            File file = new File("meuArquivo");
            Scanner input = new Scanner(file);
            while (input.hasNextLine()){
                String line = input.nextLine();
                System.out.println(line);
            }
            input.close();
        } catch (FileNotFoundException e) {
            System.out.println("file não found");
            //e.printStackTrace();
        }
        MeuPrograma progrma = new MeuPrograma();
        try {
            System.out.println(progrma.subtract10FromLargerNumber(5));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public static void moveAnimal(Animais animal){
        animal.mover();
    }
}
