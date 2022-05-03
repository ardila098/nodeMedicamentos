

import bcrypt from "bcryptjs/dist/bcrypt";
import { Schema, model } from "mongoose";
import router from "../routes/mensajeros.routes";
import Orden from "./Orden";



const userSchema = new Schema({


    username: {
        type: String,
        unique: true
    },
    cedula: {
        type: Number,
        unique: true
    },

    nombres: {
        type: String,
        
    },

    apellidos: {
        type: String,
       
    },

    telefono: {
        type: Number,
        
    },

    celular: {
        type: Number
        
    },


    email: {
        type: String,
        

    },

    direccion: {
        type: String,
        
    },

    departamento: {
        type: String,
        
    },

    municipio: {
        type: String,
        
    },


    barrio: {
        type: String,
       
    },
    password: {

        type: String,
       

    },

    ordenes: [{
    
        ref: "Orden",
        type: Schema.Types.ObjectId
    }],

  roles: [{
    
        ref: "Role",
        type: Schema.Types.ObjectId
    }],

}, {

    timestamps: true,
    versionKey: false
}

    

);

//vamos a crear un metodo para cifrar las contraseñas
userSchema.statics.encryptPassword = async (password) => {
    // el usuario me da una contraseña , yo utilizo un metodo bcrypt para tomar la contra y devolver un texto cifrado
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}



//metodo comparar la contraseña
userSchema.statics.comparePassword = async (password, receivePassword) => {
    //esto compara las contraseñas y retorna un true o un false si no coinciden
return await bcrypt.compare(password, receivePassword)


}



export default model('User',userSchema);

// roles , los ref significa que el usuario va estar relacionado con los roles y el rol se va a definir por un id