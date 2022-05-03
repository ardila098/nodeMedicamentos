



import { timeStamp } from "console";
import { Schema, model } from "mongoose";
import { stringify } from "querystring";
import Orden from "./Orden";



const mensajeroSchema =new Schema({

   
    nombres: String,
    empresa:String,
    cedulaM:Number,


    ordenes: [{
    
        ref: "Orden",
        type: Schema.Types.ObjectId
    }],

},


    
    {

    timeStamp: true,
    versionKey: false

})

// ya con eso tendriamos un modelo de datos sobre los productos
//ahora vamos a exportarlo

export default model('Mensajero', mensajeroSchema);


