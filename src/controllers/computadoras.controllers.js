import { request, response } from "express";

import coleccionDAO from "../dao/computadoras.dao.js";

const computadorasController={};

computadorasController.getAll = (request, response) => {
    coleccionDAO.getAll()
    .then((coleccion) => {  
        response.render("index.ejs", { coleccion }); 
    })
    .catch((error) => {
        console.error("Error en la consulta:", error); // 🔍 Verifica el error
        response.status(500).json({ error: error.message });
    });
};


export default computadorasController;