package calculadoraTests;

import calcular.Calculadora;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.internal.MethodSorter;

import static org.junit.Assert.*;

public class CalculadoraTest {
    @Test(timeout = 200)
    public void testSoma(){
        Calculadora calculadora = new Calculadora();

        int resultado = calculadora.somar(4, 6);
        //assertTrue(resultado == resultadoEsperando);
        //assertEquals(resultado, resultadoEsperando);

        assertEquals(10, resultado);
    }

//    @Test(expected = ArithmeticException.class)
//    public void testDividir(){
//        Calculadora calcular = new Calculadora();
//        int a = 20;
//        int b = 0;
//
//        calcular.dividir(a, b);
//    }

    @Test
    public void tesNumeorsNegativos(){
        Calculadora calcula = new Calculadora();
        int a = -20;
        int b = -10;

        int resultado = calcula.somar(a,b);
        assertEquals(-30, resultado);
    }

    @Test
    public void testDividir(){
        Calculadora calculadora = new Calculadora();
        int a = 20;
        int b = 2;

        int resultando = calculadora.dividir(a, b);

        assertEquals(10, resultando );
    }

    @Test
    public void testSomNumeorosNegativos(){
        Calculadora calcula = new Calculadora();
        int a = -20;
        int b = -10;

        int resultando = calcula.somar(a, b);
        assertEquals(-30, resultando);

    }
    @Ignore
    public void somar(){
        Calculadora calculadora = new Calculadora();

        int resultado = calculadora.somar(4, 6);
        //assertTrue(resultado == resultadoEsperando);
        //assertEquals(resultado, resultadoEsperando);

        assertEquals(10, resultado);
    }
}
