package com.ejemplo;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/mensajes")
public class MensajeServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Mensaje> mensajes = new ArrayList<>();
        mensajes.add(new Mensaje("TE AMOOOOO", 15));
        mensajes.add(new Mensaje("I LOVE MY LADYY", 18));
        mensajes.add(new Mensaje("ERESS LA MEJORR", 27));
        mensajes.add(new Mensaje("SIEMPRE JUNTOSS BB", 32));
        mensajes.add(new Mensaje("ERES UNA GRAN ARTISTAA", 33));
        mensajes.add(new Mensaje("ERES PERFECTA", 41));
        mensajes.add(new Mensaje("ERESS MI PRINCESAA", 54));
        mensajes.add(new Mensaje("NUESTROS 3 SAN VALENTIN DE MUCHOS", 67));
        mensajes.add(new Mensaje("CASEMONOSS", 169));

        request.setAttribute("mensajes", mensajes);
        request.getRequestDispatcher("mostrar.jsp").forward(request, response);
    }

    public static class Mensaje {
        private String texto;
        private int tiempo;

        public Mensaje(String texto, int tiempo) {
            this.texto = texto;
            this.tiempo = tiempo;
        }

        public String getTexto() {
            return texto;
        }

        public int getTiempo() {
            return tiempo;
        }
    }
}