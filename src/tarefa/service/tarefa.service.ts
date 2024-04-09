import TarefaModel from "../schemas/tarefa.schema";
import CategoriaModel from "src/categoria/schemas/categoria.schema";
import { TarefaType } from "../types/tarefa.type";
import StatusEnum from "../enum/tarefa.enum";

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

    async findConcluidas(){
        const findConcluidas = await TarefaModel.find({status: "concluida"})
        return findConcluidas
    }

    async findPendentes(){
        const findPendentes = await TarefaModel.find({status: "pendente"})
        return findPendentes
    }

    async findTarefasPorCategoria(idCategoria: String){
        //const categoriasID = await CategoriaModel.findById(idCategoria)
        const findTarefasConcluidas = await TarefaModel.find({categoria: idCategoria})
        if (!findTarefasConcluidas) {
            throw new Error('Tarefa não encontrada');
        }

        return findTarefasConcluidas
    }

    async findTotalTarefasUsuario(idUsuario: String){
        const findTarefasPorUsuario = await TarefaModel.find({usuario: idUsuario})//está apenas retornando as tarefas do usuario, deve mostrar o total.
        if (!findTarefasPorUsuario) {
            throw new Error('Tarefa não encontrada');
        }

        return findTarefasPorUsuario
    }
}

export default new TarefaService()