import Mensajero from "../models/Mensajero";
import Orden from "../models/Orden"
import User from "../models/User";

export const createOrdenes =async (req, res) => {
    
// hago un destructuring 

    const {fechaOrden,fechaRecibido,cedula,nombrePaciente,direccion,cedulaM,nombreDomiciliario,medicamentosRecibidos,medicamentosCompletos,observacion,imgURL,otro,estado} = req.body

    const newOrden = new Orden({fechaOrden,fechaRecibido,cedula,nombrePaciente,direccion,cedulaM,nombreDomiciliario,medicamentosRecibidos,medicamentosCompletos,observacion,imgURL,otro,estado });
  

    const users= await User.find({
        cedula:cedula
    })


    //consultamos el usuario por el id segun la lista de usuarios consultados por cedula
    //me trae el user
    const user=await User.findById(users[0].id)


        
    
    //

    const mensajeros= await Mensajero.find({
        cedulaM:cedulaM
    })



    const mensajero=await Mensajero.findById(mensajeros[0].id)

    //con esto guardo la orden en la base de datos 
        const OrdenSaved = await newOrden.save()
    
    
 
    
       
        user.ordenes.push(newOrden)
    
        //guardar el usuario con su orden nueva
    await user.save();
    
        //usuario.ordenes le agregola nueva orden
        mensajero.ordenes.push(newOrden)
    
           //guardar el usuario con su orden nueva
           await mensajero.save();

        res.status(201).json(OrdenSaved)


 
}

export const getOrdenes =async (req, res) => {
    

    const ordenes = await Orden.find();
    res.json(ordenes)
}

export const getOrdenesById = async (req, res) => {
    
    const orden = await Orden.findById(req.params.ordenId);
    res.status(200).json(orden)


    
}


//





export const updateOrdenById =async(req, res) => {
    
    const updatedOrden = await Orden.findByIdAndUpdate(req.params.ordenId, req.body, {

        new: true
    })

    console.log(updateOrdenById)
    res.status(200).json(updatedOrden)
    

    
}

export const deleteOrdenById =async(req, res) => {
    
    const { ordenId } = req.params;
    await Orden.findByIdAndDelete(ordenId)
    res.status(204).json()
}