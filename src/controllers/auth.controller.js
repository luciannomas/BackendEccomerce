import User from '../models/User'
import Role from '../models/Role'
import jwt from 'jsonwebtoken'
import config from '../config'

export const singUp = async (req,res) => {
    const  { username, email, password, roles } = req.body;
    const NewUser = new User({
        username,
        email,
        password : await User.encryptPassword(password)
    })
    //console.log(NewUser)
    
    console.log(roles)
    if(roles){
        const foudRoles = await Role.find({name: {$in: roles}})
        NewUser.roles = foudRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({name: "user"})
        NewUser.roles = [role._id]
    }

    const savedUser = await NewUser.save()
    //console.log(savedUser)

    //Generate and Saved token

    const token = jwt.sign(
        { id: savedUser._id },
        config.secret,
        { expiresIn: 86400 } // 24HS
    )


    res.status(200).json({token})
}

export const signIn = async (req, res) => {
    
    //Valid Email
    //console.log("req.body: " + req.body)
    const userFound = await User.findOne({email: req.body.email}).populate('roles') //Puebla la propiedad roles
    console.log("userFound " + userFound )

    if(!userFound) {
        return res.status(400).json({message: "User not found"})
    } 

    //Valid Password
    const matchPassword = await User.comparePassword(req.body.password, userFound.password) 

    if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid password'})

    //Generate Token
    const token  = jwt.sign({ id: userFound._id }, config.secret , {
        expiresIn: 86400
    })    
    
    console.log("signIn token :" + token)

    res.json({ token })
}