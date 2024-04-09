import { Schema, model } from "mongoose";
import usuarioSchema from "../../usuario/schemas/usuario.schema";
import StatusEnum from "../enum/tarefa.enum";
import categoriaSchema from "src/categoria/schemas/categoria.schema";

const TarefaSchema = new Schema({
    idTarefa: String,
    dataCriacao: String,
    dataConclusao: String,
    tipo: String,
    categoria: { type: String, categoriaSchema, require: true}, //POR ENQUANTO***
    status: { type: String, StatusEnum, require: true},
    usuario: { type: String, usuarioSchema, require: true}//
}, {
    timestamps: true
})

export default model("Tarefa", TarefaSchema)
