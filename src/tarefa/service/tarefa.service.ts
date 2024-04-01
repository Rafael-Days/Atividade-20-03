import TarefaModel from "../schemas/tarefa.schema";
import { TarefaType } from "../types/tarefa.type";

class TarefaService {
    async create(tarefa: TarefaType){
        const createTarefa = await TarefaModel.create(tarefa)
        return createTarefa
    }

    async findAll(){
        const findedTarefas = await TarefaModel.find()
        return findedTarefas
    }

    async findById(id: string){
        const findedTarefa = await TarefaModel.findById(id)
        return findedTarefa
    }

    async update(id: string, tarefa: TarefaType) {
        const updateTarefa = await TarefaModel.findByIdAndUpdate(id, {
            idTarefa: tarefa.idTarefa,
            dataCriacao: tarefa.dataCriacao,
            dataConclusao: tarefa.dataConclusao,
            tipo: tarefa.tipo,
            categoria: tarefa.categoria, //POR ENQUANTO***
            status: tarefa.status,
            usuario: tarefa.usuario
        }, { new: true })
        return updateTarefa
    }

    async delete(id: string){
        try{
            await TarefaModel.findByIdAndDelete(id)
            return "Tarefa removida com sucesso"
        } catch (error){
            throw new Error('Ocorreu um erro ao remover a tarefa: ${error}')
        }
    }
}

export default new TarefaService()