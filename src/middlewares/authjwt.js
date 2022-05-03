
//voy a importar el jsonwebtoken para acceder a los metodos

import jwt from 'jsonwebtoken'




import config from '../config'

import User from '../models/User'

import Role from '../models/Role'


//verificacion de token , mod , user , admin

export const verifyToken = async (req, res, next) => {
    
    try {
      
        //guardar la propiedad de x-acces en la prpiedad token
        const token = req.headers["x-access-token"];

        console.log(token)

        // voy a comprovar si el token es valido
    
    

        if (!token) return res.status(403).json({ message: "no token provided" })



 
        // y extraemos el valor del token
        const decoded = jwt.verify(token, config.SECRET)
        console.log(decoded)

        req.userId = decoded.id;



        //ahora vamos hacer una busqueda 

        const user = await User.findById(req.userId, { password: 0 })
        console.log(user)
        if (!user) return res.status(404).json({ message: 'no user found' })
    


        next()

      
    } catch (error) {
      return res.status(401).json({message: 'User not Unauthorized'})
      
    }

};


// ahora vamos a verificar si es un admin , es un moderador o un usuario normal



export const isModerator = async (req, res, next) => {
    

    
  const user=  await User.findById(req.userId)
    

    const roles=  await Role.find({_id: {$in: user.roles}})
    
    console.log(roles)


    for (let i = 0; i < roles.length; i++){

        if (roles[i].name === "moderator") {
            next()
            return;
        }
      
    }
    // si no encuentra el rol correcto , retorna un mensaje 

    return res.status(403).json({message: "Require Moderator Role"})
    
}




//admin


export const isAdmin = async (req, res, next) => {


    
  const user=  await User.findById(req.userId)
    
  
  const roles=  await Role.find({_id: {$in: user.roles}})
  
  console.log(roles)

 for (let i = 0; i < roles.length; i++){

      if (roles[i].name === "admin") {
          next()
          return;
      }
    
  }
  // si no encuentra el rol correcto , retorna un mensaje 

  return res.status(403).json({message: "Require admin Role"})
    
}