
import Curso.Exemplo;
import java.io.*;
import java.util.Scanner;

public class main {
    public static void main(String[] args) throws FileNotFoundException {
        try {
            File file = new File("meuArquivo");
            try {
                FileReader fileReader = new FileReader(file);
                BufferedReader bufferedReader = new BufferedReader(fileReader);

                String line = bufferedReader.readLine();
                while (line != null) {
                    System.out.println(line);
                    line = bufferedReader.readLine();
                }
            } catch (FileNotFoundException e) {
                System.out.println("File not found");
            } catch (IOException e) {
                System.out.println("Problema reading the file " + file.getName());
            } finally {
                bufferedReader.close();
            }
        }
    }
    public static void moveAnimal(Animais animal){
        animal.mover();
    }
}
