class Colecao {
    static void main(String[] args) {
        /*List nums = [1, 2, 3, 4 ,5, 3, 75, 3]
        //para add
        println nums
        nums.push(99)
        nums.putAt(0, 77)
        println nums
        nums[0] = 78
        println nums
        def nome = "adriel"
        println nums + [6, 7,8, nome]

        // para remove
        nums.pop()
        nums.removeAt(0)
        def newList = nums - 3
        println nums
        println newList

        println nums[4]
        println nums

        nums << [2, 4, 5]
        nums << [6, 7, 5]
        println nums.flatten() //para tira os []
        // para tirar duplicandas
        def num = [1, 4, 6, 5,8 ,1, 4, 6, 8] as Set
        println num*/

        //MAPS
        def map = [:]
        println map
        println map.getClass().getName()

        def person = [nome: "Adr", local: "Patos", numero: 2343]
        println person
        println "$person.nome, $person.local"

//        for (entry in person){
//            println entry
//        }
        for (key in person.keySet()){
            println "$key:${person[key]}" //para pegar os item separadamente
        }
    }
}
