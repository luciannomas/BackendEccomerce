import mongoose from 'mongoose'
import config from './config'

const init = async () => {
    try {
        const db = await mongoose.connect(config.mongodbURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            //useFindAndModify: false
        })
        console.log("Database is connected", db.connection.name)
    } catch (error) {
        console.log(error);
    }
}

init()

