import { Schema, Types, model } from "mongoose";
import StatusEnum from "../enum/tarefa.enum";

const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence') (mongoose)

const TarefaSchema = new Schema({
    idTarefa: { type: String, require: true },
    titulo: { type: String, require: true},
    descricao: { type: String, require: true },
    dataCriacao: { type: Date, default: Date.now },
    dataConclusao: { type: Date },
    tipo: { type: String, require: true },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true}, //
    status: { type: String, StatusEnum, default: 'pendente'},
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true }
}, {
    timestamps: true
})

TarefaSchema.plugin(AutoIncrement(mongoose), { inc_field: 'idTarefa' })

export default model("Tarefa", TarefaSchema)
