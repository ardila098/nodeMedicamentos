



import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json'

import {createRoles} from './libs/initialSetup';


import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import ordenesRoutes from './routes/ordenes.routes';
import mensajerosRoutes from './routes/mensajeros.routes'

const app = express()





app.post("file", (req, res) => {
    


})


createRoles();

app.set('pkg', pkg);


//modo desarrollo
app.use(morgan('dev'));


app.use(express.json());




// en esta ruta estoy trayendo las propiedades del json z

app.get('/', (req, res) => {
    
    res.json({
    
        name: app.get('pkg').name,
        description: app.get('pkg').description,
    


    })

});




app.use('/api/auth', authRoutes)

app.use('/api/users', userRoutes)

app.use('/api/mensajeros', mensajerosRoutes)

app.use('/api/ordenes', ordenesRoutes)

export default app;










