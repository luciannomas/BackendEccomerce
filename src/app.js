import express from 'express' 
import morgan from 'morgan' 

import email from './routes/sendEmail.routes' 
import product from './routes/product.routes'
import auth from './routes/auth.routes'
import userRoutes from './routes/user.routes'

import { createRoles } from './libs/initialSetup'
import cors from 'cors'

//TODO: INIT APP
const app = express();
createRoles();

//Setting
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended: false})) // for form
app.use(cors());

// Init port
app.set('port', process.env.PORT || 3001 ) // Method with seting the var / const

//TODO: Routes
app.use('/dashboard', product)
app.use('/auth', auth)
app.use('/users', userRoutes )

//Contact Email
app.use ('/', email)

export default app