@groovy.transform.ToString()
class Developer {
    String primeiro
    String segundo
    def languages = []

    void trabalho(){
        println "$primeiro $segundo is working..."
    }
}
