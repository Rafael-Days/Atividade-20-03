import { Request, Response } from "express";
import categoriaService from "../service/categoria.service";

class CategoriaController{
    async create(req:Request, res:Response){
        try{
            const createCategoria = await categoriaService.create(req.body)
            res.status(201)
            return res.json(createCategoria)
        } catch (error) {
            console.error('Erro ao criar a Categoria', error)
            return res.status(500).json({message: 'Erro ao criar a Categoria'})    
        }
    }

    async findAll(req:Request, res: Response){
        try{
            const findedCategorias = await categoriaService.findAll()
            res.status(200)
            return res.json(findedCategorias)
        }catch(error){
            console.error('Erro ao procurar as Categorias', error)
            return res.status(500).json({message: 'Erro ao procurar as Categorias'})
        }
    }

    async findById(req:Request, res: Response){
        try{
            const findedCategoria = await categoriaService.findById(req.params.id)
            res.status(200)
            return res.json(findedCategoria)
        }catch(error){
            console.error('Erro ao procuarar a Categoria', error)
            return res.status(500).json({message: 'Erro ao procuar a Categoria'})
        }
    }

    async update(req:Request, res: Response){
        try{
            const updateCategoria = await categoriaService.update(req.params.id, req.body)
            res.status(200)
            return res.json(updateCategoria)
        }catch (error){
            console.error('Erro ao atualizar a categoria', error)
            return res.status(500).json({message: 'Erro ao atualizar a categoria'})
        }
    }

    async delete(req:Request, res: Response){
        const deleteCategoria = await categoriaService.delete(req.params.id)
        res.status(200)
        return res.json(deleteCategoria)
    }
}

export default new CategoriaController()