import { model,Schema } from "mongoose";

const coleccionSchema = new Schema({
    id:{
        require: true,
        unique: true,
        type: Number
    },
    name: String,
    description: String,
    cost:Number,
    marca:String,
    stock:Number,
    precio:Number
},{
    versionKey:false,
    timeseries:true,
})

export default model('coleccion',coleccionSchema);
