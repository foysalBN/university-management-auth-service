import { Model, Schema, model } from "mongoose";
import { IUser } from "./users.interface"



// type UserModel = Model<IUser, {}, IUserMethods>;  // here {} - is query . But we do not need it . we may need for complex  
type UserModel = Model<IUser, object>;

const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const User = model<IUser, UserModel>("user", userSchema)
export default User;