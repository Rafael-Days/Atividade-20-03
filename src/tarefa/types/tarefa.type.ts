import { CategoriaType } from "../../categoria/types/categoria.type";
import { UsuarioType } from "../../usuario/types/usuario.type";
import StatusEnum from "../enum/tarefa.enum";

export interface TarefaType {

    idTarefa: String,
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String,
    categoria: CategoriaType, //POR ENQUANTO***
    status: StatusEnum,
    usuario: { type: UsuarioType, require: true}
}