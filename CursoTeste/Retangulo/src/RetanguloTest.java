public class RetanguloTest {
    Retangulo retangulo;

    public boolean testeCalcularArea(){
        Retangulo retagulo = new Retangulo(20, 2);
        int restEsperando = 20;

        int rest = retagulo.calcularArea();
        if (restEsperando == rest){
            return true;
        } else{
            return false;
        }
    }

    public boolean testeCalcularPerimetro(){
        Retangulo retagulo = new Retangulo(10, 2);
        int reslEsperando = 24;
        int result = retagulo.clacularPerimetro();

        if (reslEsperando == result){
            return true;
        } else{
            return false;
        }
    }
}
