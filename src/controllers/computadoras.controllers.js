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


computadorasController.getOne = (request, response) => {
    const { _id } = request.params;  // Usamos request en lugar de req
    
    coleccionDAO.getOne(_id)
        .then((coleccion) => {  
            console.log("Datos de mi coleccion" + coleccion); 
            response.render("edit", { coleccion }); 
        })
        .catch((error) => {
            console.error("Error en la consulta:", error);
            response.status(500).json({ error: error.message });
        });
};



computadorasController.insert = (request, response) => {
    console.log("Datos recibidos:", request.body); // Ya estás mostrando los datos

    coleccionDAO.insert(request.body)
        .then((coleccion) => {
            console.log("Registro insertado con éxito:", coleccion); // Verifica lo que devuelve el DAO
            response.redirect('/ownbase/coleccion/getAll'); // Redirige a la ruta correcta
        })
        .catch((error) => {
            console.error("Error al insertar:", error);
            response.status(500).json({ error: error.message });
        });
};


computadorasController.updateOne = (request, response) => {
    // Asegúrate de pasar correctamente los parámetros
    coleccionDAO.updateOne(request.body, request.params._id)
    .then((coleccion) => {  
        response.redirect('/ownbase/coleccion/getAll'); // Redirigir después de la actualización
    })
    .catch((error) => {
        console.error("Error en la consulta:", error); // 🔍 Verifica el error
        response.status(500).json({ error: error.message });
    });
};



computadorasController.deleteOne = (req, res) => {
    const { _id } = req.params;  // Obtén el ID desde los parámetros de la URL
    
    // Imprimir el ID recibido
    console.log("ID recibido para eliminar:", _id);

    coleccionDAO.deleteOne(_id)
        .then(() => {
            console.log(`Colección con ID ${_id} eliminada exitosamente`);
            res.redirect('/ownbase/coleccion/getAll');  // Redirige después de eliminar
        })
        .catch(error => {
            // Imprimir el error completo
            console.error("Error en la consulta:", error);
            res.status(500).json({ error: error.message });
        });
};


export default computadorasController;