import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import retangulo.Retangulo;

import java.util.*;
import static org.junit.Assert.*;
@RunWith(Parameterized.class)
public class RetanguloTest {
    private int base;
    private int altura;
    private int area;
    @Parameters
    public static Collection<Object[]> parametros(){
        return Arrays.asList(new Object[][]{
                {10,20,200},
                {10,30,300},
                {10, 40, 400},
                {10, 50, 500}
        });
    }

    public RetanguloTest(int base, int altura,int area){
        this.base = base;
        this.altura = altura;
        this.area = area;
    }

    @Test
    public void testCalcularArea(){
        Retangulo retangulo = new Retangulo(base, altura);
        int resulta = retangulo.calcularArea();

        Assert.assertEquals(area, resulta);
    }
}
