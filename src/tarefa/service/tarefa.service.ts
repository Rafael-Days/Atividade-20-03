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

    async findTarefasPorCategoria(idCategoria: string){
        const findTarefasConcluidas = await TarefaModel.find({categoria: idCategoria})
        if (!findTarefasConcluidas) {
            throw new Error('Tarefa não encontrada');
        }

        return findTarefasConcluidas
    }

    async findTotalTarefasUsuario(idUsuario: string){
        const totalTarefas = await TarefaModel.countDocuments({usuario: idUsuario})
        if (!totalTarefas) {
            throw new Error('Tarefa não encontrada');
        }

        return totalTarefas
    }

    async findPeriodo(inicio: Date, fim: Date){
        const periodo = await TarefaModel.find({ dataCriacao: { $gte: inicio, $lte: fim } })
        return periodo
    }

    async tarefaRecente(idUsuario: string){
        const tarefa = await TarefaModel.findOne({ usuario: idUsuario }).sort({ dataCriacao: -1 })
        return tarefa
    }

    async descricaoMaisLonga(){
        const descTarefa = await TarefaModel.findOne().sort({ descricao: -1 })
        return descTarefa
    }

    async calcularMedia() {
        const totalTarefas = await TarefaModel.countDocuments()
        const concluidas = await TarefaModel.countDocuments({ status: 'concluída' })
        const mediaCalculada = (concluidas / totalTarefas) * 100 
        return mediaCalculada
    }

    async tarefaMaisAntiga(idUsuario: string) {
        const tarefa = await TarefaModel.findOne({ usuario: idUsuario }).sort({ dataCriacao: 1 })
        return tarefa
    }

    async agruparTarefasPorCategoria(){
        const tarefasAgrupadas = await TarefaModel.aggregate([{
            $group: { _id: "$categoria", count: { $sum: 1 } } }
        ]);
        return tarefasAgrupadas
    }

}

export default new TarefaService()