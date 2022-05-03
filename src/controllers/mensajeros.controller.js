import Mensajero from "../models/Mensajero";
import Orden from "../models/Orden";


export const createMensajeros =async (req, res) => {
    
// hago un destructuring 

    const {nombres, empresa, cedulaM,ordenes} = req.body

    const newMensajero = new Mensajero({ nombres, empresa, cedulaM,ordenes});
    
    const mensajeroSaved= await newMensajero.save()
       





    res.status(201).json(mensajeroSaved)
}

export const getMensajeros =async (req, res) => {
    
//a travez del metodo find me busca todos los productos

    const mensajeros = await Mensajero.find();
    res.json(mensajeros)
}

export const getMensajeroById = async (req, res) => {
    
    const mensajero = await Mensajero.findById(req.params.mensajeroId);
    res.status(200).json(mensajero)


    
}

export const updateMensajeroById =async(req, res) => {
    
    const updatedMensajero = await Mensajero.findByIdAndUpdate(req.params.mensajeroId,req.body, {

        new: true
    })

    console.log(updateMensajeroById)
    res.status(200).json(updatedMensajero)
    

    
}

export const deleteMensajeroById =async(req, res) => {
    
    const { mensajeroId } = req.params;
    await Mensajero.findByIdAndDelete(mensajeroId)
    res.status(204).json()
}