import { UsuarioType } from "../../usuario/types/usuario.type";

export enum StatusEnum {
    PENDENTE = 'pendente',
    EM_ANDAMENTO = 'em andamento',
    CONCLUIDA = 'concluída'
}

export interface TarefaType {

    idTarefa: String,
    dataCriacao: String,
    dataConclusao: String,
    tipo: String,
    categoria: String, //POR ENQUANTO***
    status: StatusEnum,
    usuario: { type: UsuarioType, require: true}
}