import { Schema, model } from 'mongoose'

const UsuarioSchema = new Schema({
    id: String,
    username: String,
    peso: Number,
    email: String,
    senha: String
}, {
    timestamps: true
})

export default model("Usuario", UsuarioSchema)
