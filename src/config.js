import { config } from 'dotenv'
config(); // llamo a la funcion para que cargue la variable de entorno


//exporto un objeto
export default {
    mongodbURL: process.env.MONGODB_URI || 'mongodb://localhost/eccomerce',
    secret:     process.env.SECRET 
};

