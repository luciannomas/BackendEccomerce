import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'
import Role from '../models/Role'

export const verifyToken = async (req, res, next) => {
    
    try {
        const token = req.headers["x-access-token"] // Propiedad que aloja el token
        console.log("x-access-token", req.headers["x-access-token"] )
        //console.log("token-create:", token)

        //Valid Token
        if (!token) return res.status(403).json({message: "no token provided"})

        //Extrae [id + secret] generado en controllers
        const decode = jwt.verify(token, config.secret)
        req.userId = decode.id
        //console.log(decode)

        //Find
        const user = await User.findById(req.userId, {password: 0}) // no trae password
        //console.log(user)
        if(!user) return res.status(404).json({message: 'no user found'})

        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({message: 'Unauthorized'})
    } 
}

export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    //Valid
    for (let i =0; i < roles.length ; i++){
        if(roles[i].name === "moderator"){
            next()
            return
        }
    }
    return res.status(403).json({message: 'Require Moderator Role'})
}

export const isAdmin = async (req, res, next) => {

    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    //Valid
    for (let i = 0; i < roles.length ; i++){
        if(roles[i].name === "admin"){
            next()
            return
        }
    }
    return res.status(403).json({message: 'Require Admin role'})
}