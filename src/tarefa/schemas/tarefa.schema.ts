import { Schema, model } from "mongoose";
import usuarioSchema from "../../usuario/schemas/usuario.schema";
import { StatusEnum } from "../types/tarefa.type";

const TarefaSchema = new Schema({
    idTarefa: String,
    dataCriacao: String,
    dataConclusao: String,
    tipo: String,
    categoria: String, //POR ENQUANTO***
    status: StatusEnum,
    usuario: { type: usuarioSchema, require: true}
}, {
    timestamps: true
})

export default model("Tarefa", TarefaSchema)
