import  coleccion  from "../models/computadoras.model.js";

const coleccionDAO ={};

coleccionDAO.getAll = async () =>{
    return await coleccion.find();
};


coleccionDAO.getOne = async (_id) =>{
    console.log("Id from our paciente" + _id);
    
    return await coleccion.findById(_id);
};



coleccionDAO.insert = async (coleccionData) => {
    return await coleccion.create(coleccionData);  // Inserta directamente los datos
};

coleccionDAO.updateOne = async (coleccionData, _id) => {
    return await coleccion.findOneAndUpdate({ _id: _id }, coleccionData, { new: true });
}


coleccionDAO.deleteOne = async (_id) => {
    return await coleccion.findByIdAndDelete(_id);  // Asegúrate de usar el nombre del modelo correcto
};



export default coleccionDAO;
