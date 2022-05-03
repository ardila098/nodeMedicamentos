import { timeStamp } from "console";
import { stringify } from "querystring";
import { Schema, model } from "mongoose";





const ordenSchema = new Schema({


    
    
    
    fechaOrden: String,
    fechaRecibido:String,
    cedula:Number,
    nombrePaciente: String,
    direccion:String,
    cedulaM:Number,
    nombreDomiciliario: String,
    medicamentosRecibidos: String,
    medicamentosCompletos:String,
    observacion: String,
    imgURL: String,
    otro: String,
estado:String,
 
    ordenes: [{
    
        ref: "Orden",
        type: Schema.Types.ObjectId
    }],

    

}, {

    timestamps: true,
    versionKey: false
}
);




export default model('Orden', ordenSchema)