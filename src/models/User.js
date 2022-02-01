import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true
      //trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles : [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "User",
  }
);

// Roles => yes/no
// roles ref (roles with user) (relacion un usuario multiples roles 1 a n)

// Create method for encryption/password
//Encript

UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

//Compare

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
  
  return await bcrypt.compare(password,receivedPassword) // receivedPassword => pass del user cuando tipea 
}



export default mongoose.model("User", UserSchema);