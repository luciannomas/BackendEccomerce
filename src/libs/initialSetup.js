import Role from '../models/Role'

export const createRoles = async () => {
    
    try {
        
        //VALID Si ya existen documentos 
        const count = await Role.estimatedDocumentCount()
        if(count > 0) return; 

        //Ejecuta las promesas al mismo tiempo 
        const values = await Promise.all([
            new Role({name: 'user'}).save(),
            new Role({name: 'moderator'}).save(),
            new Role({name: 'admin'}).save()
        ])
        console.log(values)
    } catch (error) {
        console.log("error:" + error )
    }




}