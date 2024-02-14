@groovy.transform.ToString
class Tweet {
    String nome
    String texto
    Integer favorito
    Integer retweets
    Date createdon

    public Tweet(String user, String tweet){
        nome = user
        texto = tweet
        retweets = 0
        favorito = 0
        createdon = new Date()
    }

    void addRetweet(){
        retweets += 1
    }

    void addFavorito(){
       favorito += 1
    }


}
