import { Schema, model } from "mongoose";

const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence') (mongoose)

const CategoriaSchema = new Schema({
    idCategoria: { type: String, require: true },
    nomeCategoria: { type: String, require: true },
    cor: { type: String, require: true}
}, {
    timestamps: true
})

CategoriaSchema.plugin(AutoIncrement(mongoose), { inc_field: 'idCategoria' })

export default model("Categoria", CategoriaSchema)
