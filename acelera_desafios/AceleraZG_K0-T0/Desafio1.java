public class Desafio1 {
    public void root1() {
        int ultimoNumero = 1000;
        int somaMultiplos = multiplos(3, ultimoNumero-1) + multiplos(5, ultimoNumero-1) - multiplos(15, ultimoNumero-1);

        System.out.println("soma dos multiplos é: " +somaMultiplos);
    }
    public int multiplos(int numeroDesejando, int ultimoNumero) {
        return numeroDesejando * (ultimoNumero/numeroDesejando) * (ultimoNumero/numeroDesejando + 1)/2;
    }
}
