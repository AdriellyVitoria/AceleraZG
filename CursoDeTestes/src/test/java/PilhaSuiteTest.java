import calculadoraTests.CalculadoraTest;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
//import org.junit.runner.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({PilhaTest.class,RetanguloTest.class, CalculadoraTest.class})
public class PilhaSuiteTest {
}
