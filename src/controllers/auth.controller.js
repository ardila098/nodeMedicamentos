


import User from '../models/User';
import jwt from 'jsonwebtoken';

import config from '../config';
import Role from '../models/Role';
import { readlink } from 'fs';


export const signup = async (req, res) => {



    //usuario envia datos
  
    const { username,cedula, email, password, roles } = req.body;
    
   const newUser= new User({
    
       username,
       cedula,
        email,
        password: await User.encryptPassword(password)
   })
console.log(newUser)
    //si el usuario se registra con un rol , el va a buscar en la base de datos si existe ese rol y me va a devolver una constate foundroles
    // si el usuario se registra sin un rol , el va a crear el rol de user por defecto
    if (roles) {

const foundRole = await Role.find({name: {$in: roles}})
newUser.roles =foundRole.map(role => role._id)
    } else{
        const role = await Role.findOne({ name: "user" })
        newUser.roles = [role._id]

    }
    
   
    const savedUser = await newUser.save();
    console.log(savedUser);
    
    //con jwt genero el token
    const token= jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn:86400 // 24h
    })
    
    
    res.status(200).json({token})
}
export const signin = async (req, res) => {
    
 //verifico email
    const userFound = await User.findOne({ email: req.body.email }).populate("roles");
    if (!userFound) return res.status(400).json({ message: "User not found" })
    

//vamos a verificar la contraseña

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    

    if (!matchPassword) return res.status(401).json({token: null, message: "invalid password"})
 
    // con jwt le paso el objeto que quiero guardar que seria el id y desde confirg le paso el secret y lo guardo en una constante
   const token = jwt.sign({ id: userFound._id }, config.SECRET, {
       expiresIn: 86400
       
    })

   
  
    res.json({ token })
  

  
   
 
   
    
}