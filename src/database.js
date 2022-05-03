

import mongoose  from "mongoose"

//hago la conexion con mongo y localhost y la base de datos se va llamar companydb y le pongo un then y cash para verificar conexion



// servidor local
mongoose.connect("mongodb://Localhost/medicamentosdb",{
    useNewUrlParser: true,
    useUniFiedTopology: true,
    
})


    
/*
mongoose.connect("mongodb+srv://nombreUsuario:contraseña-@cluster0.zrvr8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUniFiedTopology: true,
    
})
*/
    .then(db => console.log('Db is conected'))
    .catch(error =>console.log(error))