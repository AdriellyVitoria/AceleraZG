module org.example.curso {
    requires javafx.controls;
    requires javafx.fxml;
    requires java.sql;


    opens org.example.curso to javafx.fxml;
    exports org.example.curso;
}