import mongoose from "mongoose";

export const ROLES = ['user','admin','moderator']

const roleSchema = new mongoose.Schema(
  {
    name: String,
  },
  {
    versionKey: false,
    collection: "Role",
  },
)

// Roles => yes/no

export default mongoose.model("Role", roleSchema);