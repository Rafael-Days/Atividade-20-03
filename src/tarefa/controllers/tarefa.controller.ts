import { Request, Response } from "express";
import tarefaService from "../service/tarefa.service";
import { json } from "stream/consumers";


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

    async findTarefasVencidas(req: Request, res: Response){
        try{
            const inicio = new Date(req.params.inicio);
            const fim = new Date(req.params.fim);
            const tarefas = await tarefaService.findPeriodo(inicio, fim)
            res.status(200).json(tarefas)
        } catch (error){
            console.error('Erro ao procurar tarefas vencidas', error)
            return res.status(500).json({message: 'Erro ao procurar tarefas vencidas'})
        }
    }

    async findTarefaRecente(req: Request, res: Response){
        try{
            const findTarefa = await tarefaService.tarefaRecente(req.params.idUsuario)
            res.status(200)
            return res.json(findTarefa)
        }catch (error){
            console.error('Erro ao procurar tarefa mais recente', error)
            return res.status(500).json({message: 'Erro ao procurar tarefa mais recente'})
        }
    }

    async findDescricaoLonga(req: Request, res: Response){
        try{
            const findTarefa = await tarefaService.descricaoMaisLonga()
            res.status(200)
            return res.json(findTarefa)
        } catch(error){
            console.error('Erro ao procurar a descrição mais longa da tarefa', error)
            return res.status(500).json({message: 'Erro ao procurar a descrção mais longa da tarefa'})
        }
    }

    async calcMediaConclusao(req: Request, res: Response){
        try{
            const calcMedia = await tarefaService.calcularMedia()
            res.status(200)
            return res.json(calcMedia)
        } catch(error){
            console.error('Erro ao calcular a média das conclusões', error)
            return res.status(500).json({message: 'Erro ao calcular a média das conclusões'})
        }
    }

    async findTarefaMaisAntiga(req: Request, res: Response){
        try{
            const tarefaAntiga = await tarefaService.tarefaMaisAntiga(req.params.idUsuario)
            res.status(200)
            return res.json(tarefaAntiga)
        }catch(error){
            console.error('Erro ao procuarar a tarefa mais antiga', error)
            return res.status(500).json({message: 'Erro ao procurar a tarefa mais antiga'})
        }
    }

    async findAgruparTarefaPorCategoria(req: Request, res: Response){
        try{
            const tarefaAgrupada = await tarefaService.agruparTarefasPorCategoria()
            res.status(200)
            return res.json(tarefaAgrupada)
        }catch(error){
            console.error('Erro ao agrupar as tarefas por categoria', error)
            return res.status(500).json({message: 'Erro ao agrupar as tarefas por categoria'})
        }
    }
}

export default new TarefaController()