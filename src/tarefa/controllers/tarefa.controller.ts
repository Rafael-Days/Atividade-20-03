import { Request, Response } from "express";
import tarefaService from "../service/tarefa.service";


class TarefaController{
    async create(req:Request, res:Response){
        try{
            const createTarefa = await tarefaService.create(req.body)
            res.status(201)
            return res.json(createTarefa)
        } catch (error) {
            console.error('Erro ao criar a tarefa', error)
            return res.status(500).json({message: 'Erro ao criar a tarefa'})
        }
    }

    async findAll(req:Request, res: Response){
        try{
            const findedTarefas = await tarefaService.findAll()
            res.status(200)
            return res.json(findedTarefas)
        } catch(error) {
            console.error('Erro ao procurar tarefas', error)
            return res.status(500).json({message: 'Erro ao procurar as tarefas'})
        }
    }

    async findById(req:Request, res: Response){
        try{
            const findedTarefa = await tarefaService.findById(req.params.id)
            res.status(200)
            return res.json(findedTarefa)
        } catch(error) {
            console.error('Erro ao procuarar a Tarefa', error)
            return res.status(500).json({message: 'Erro ao procurar a Tarefa'})
        }
    }

    async update(req:Request, res: Response){
        try{
            const updateTarefa = await tarefaService.update(req.params.id, req.body)
            res.status(200)
            return res.json(updateTarefa)
        } catch (error) {
            console.error('Erro ao atualizar a tarefa', error)
            return res.status(500).json({message: 'Erro ao atualizar a tarefa'})
        }
    }

    async delete(req:Request, res: Response){
        const deletedTarefa = await tarefaService.delete(req.params.id)
        res.status(200)
        return res.json(deletedTarefa)
    }

    async findConcluidas(req:Request, res: Response){
        try{
            const findTarefasConcluidas = await tarefaService.findConcluidas()
            res.status(200)
            return res.json(findTarefasConcluidas)
        } catch (error) {
            console.error('Erro ao procurar tarefas concluidas', error)
            return res.status(500).json({message: 'Erro ao procurar tarefas concluidas'})
        }
    }

    async findPendentes(req:Request, res: Response){
        try{
            const findTarefasPendentes = await tarefaService.findPendentes()
            res.status(200)
            return res.json(findTarefasPendentes)
        } catch (error) {
            console.error('Erro ao procurar tarefas pendentes', error)
            return res.status(500).json({message: 'Erro ao procurar tarefas pendentes'})
        }
    }

    async findTarefasCategoria(req:Request, res: Response){
        try{
            const findTarefasC = await tarefaService.findTarefasPorCategoria(req.params.idCategoria)
            res.status(200)
            return res.json(findTarefasC)
        } catch (error) {
            console.error('Erro ao procurar a categoria da tarefa', error)
            return res.status(500).json({message: 'Erro ao procurar a categoria da tarefa'})
        }
    }

    async findTarefasUsuario(req:Request, res: Response){
        try{
            const findTarefasU = await tarefaService.findTotalTarefasUsuario(req.params.idUsuario)
            res.status(200)
            return res.json(findTarefasU)
        } catch (error) {
            console.error('Erro ao procurar as tarefas do usuario', error)
            return res.status(500).json({message: 'Erro ao procurar as tarefas do usuario'})
        }
    }
}

export default new TarefaController()