package org.example.curso;

import java.sql.*;
import java.util.Properties;
import java.util.Scanner;

public class projeto {
    public static void main(String[] args) {
        menu();
    }
    static Scanner teclado = new Scanner(System.in);
    public static Connection conectar(){
        Properties props = new Properties();
        props.setProperty("user", "postgres");
        props.setProperty("password", "123456");
        props.setProperty("ssl", "false");
        String URL_SERVIDOR = "jdbc:postgresql://localhost:5432/jpostgresql";

        try {
            return DriverManager.getConnection(URL_SERVIDOR, props);
        } catch (Exception e) {
            e.printStackTrace();
            if (e instanceof ClassNotFoundException){
                System.err.println("Verifique o driver de conexão");
            }else {
                System.err.println("Verifique se o servidor está ativo");
            };
            System.exit(-42);
            return null;
        }
    }
    public static void desconectar(Connection conn){
        if(conn != null) {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    public static void listar(){
        String BUSCAR_TODOS = "SELECT * FROM produtos";

        try {
            Connection conn = conectar();
            PreparedStatement produtos = conn.prepareStatement(
                    BUSCAR_TODOS,
                    ResultSet.TYPE_SCROLL_INSENSITIVE,
                    ResultSet.CONCUR_READ_ONLY
            );
            ResultSet res = produtos.executeQuery();

            res.last();
            int qtd = res.getRow();
            res.beforeFirst();

            if (qtd > 0){
                System.out.println("Listando produtos");
                System.out.println("--------------------------------");
                System.out.println("ID " + res.getInt(1));
                System.out.println("Produto " + res.getString(2));
                System.out.println("Preço " + res.getFloat(3));
                System.out.println("Estoque " + res.getInt(4));
                System.out.println("--------------------------------");
            } else {
                System.out.println("Não existe produtos cadastrados.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println("Erro buscando todos os produtos");
            System.exit(-42);
        }
    }
    public static void inserir(){
        System.out.println("Informe o nome do produtos: ");
        String nome = teclado.nextLine();

        System.out.println("Informe o preco do produtos: ");
        float preco = teclado.nextFloat();

        System.out.println("Informe o estoque do produtos: ");
        int estoque = teclado.nextInt();

        String INSERIR = "INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)";

        try {
            Connection conn = conectar();
            PreparedStatement salvar = conn.prepareStatement(INSERIR);

            salvar.setString(1, nome);
            salvar.setFloat(2, preco);
            salvar.setInt(3, estoque);

            salvar.executeUpdate();
            salvar.close();
            desconectar(conn);

        }catch (Exception e) {
            e.printStackTrace();
            System.err.println("Erro a salvar");
        }
    }

    public static void atualizar(){
        System.out.println("atualizando...");
    }
    public static void deletar(){
        System.out.println("deletadno...");
    }

    public static void menu(){
        System.out.println("""
                1-listas
                2inserir
                3-atualizar
                4- deletar""");
        int opcao = Integer.parseInt((teclado.nextLine()));
        if(opcao == 1) {
            listar();
        } else if (opcao == 2) {
            inserir();
        } else if (opcao == 3) {
            atualizar();
        } else if (opcao == 4) {
            deletar();
        } else {
            System.out.println("Opção inválida");
        }
    }
}
