import { Schema, model } from 'mongoose'

const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence') (mongoose)

const UsuarioSchema = new Schema({
    idUsuario: { type: String, require: true },
    username: { type: String, require: true },
    peso: { type: Number, require: true },
    email: { type: String, require: true },
    senha: { type: String, require: true }
}, {
    timestamps: true
})

UsuarioSchema.plugin(AutoIncrement(mongoose), { inc_field: 'idUsuario' })

export default model("Usuario", UsuarioSchema)
