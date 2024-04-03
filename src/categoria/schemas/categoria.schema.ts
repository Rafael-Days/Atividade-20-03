import { Schema, model } from "mongoose";
import categoriaSchema from "../../categoria/schemas/categoria.schema";

const CategoriaSchema = new Schema({
    idCategoria: String,
    nomeCategoria: String,
    cor: String
}, {
    timestamps: true
})

export default model("Categoria", CategoriaSchema)
