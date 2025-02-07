import  coleccion  from "../models/computadoras.model.js";

const coleccionDAO ={};

coleccionDAO.getAll = async () =>{
    return await coleccion.find();
};

export default coleccionDAO;
