public class Status {
    public static String convertendoNumeroParaEnum(int statusTarefa){
        String status = null;
        switch (statusTarefa){
            case 0:
               status = "Em andamento";
               break;
            case 1:
               status = "A fazer";
               break;
            case 2:
                status = "Concluido";
                break;
        }
        return status;
    }
}


