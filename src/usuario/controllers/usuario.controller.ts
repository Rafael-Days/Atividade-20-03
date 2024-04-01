import { Request, Response } from "express";
import usuarioService from "../service/usuario.service";


class UsuarioController{
    async create(req:Request, res: Response){
        try {
        const createUsuario = await usuarioService.create(req.body)
        res.status(201)
        return res.json(createUsuario)
        } catch (error) {
            console.error('Erro ao criar o usuario', error)
            return res.status(500).json({message: 'Erro ao criar o usuario'})
        }
    }

    async findAll(req:Request, res: Response){
        try{
        const findedUsuarios = await usuarioService.findAll()
        res.status(200)
        return res.json(findedUsuarios)
        } catch(error) {
            console.error('Erro ao procurar os usuários', error)
            return res.status(500).json({message: 'Erro ao procurar os usuarios'})
        }
    }

    async findById(req:Request, res: Response){
        try{
            const findedUsuario = await usuarioService.findById(req.params.id)
            res.status(200)
            return res.json(findedUsuario)
        } catch(error) {
            console.error('Erro ao procurar o usuário', error)
            return res.status(500).json({message: 'Erro ao procuar o usuário'})
        }
    }

    async update(req:Request, res: Response){
        try{
            const updateUsuario = await usuarioService.update(req.params.id, req.body)
            res.status(200)
            return res.json(updateUsuario)
        } catch (error) {
            console.error('Erro ao atualizar o usuário', error)
            return res.status(500).json({message: 'Erro ao atualizar o usário'})
        }
    }

    async delete(req:Request, res: Response){
        const deleted = await usuarioService.delete(req.params.id)
        res.status(200)
        return res.json(deleted)
    }

}

export default new UsuarioController()
