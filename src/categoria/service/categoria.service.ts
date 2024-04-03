import CategoriaModel from "../schemas/categoria.schema";
import { CategoriaType} from "../types/categoria.type";

class CategoriaService {
    async create(categoria: CategoriaType){
        const createCategoria = await CategoriaModel.create(categoria)
        return createCategoria
    }

    async findAll(){
        const findedCategorias = await CategoriaModel.find()
        return findedCategorias
    }

    async findById(id: string){
        const findedCategoria = await CategoriaModel.findById(id)
        return findedCategoria
    }

    async update(id: string, categoria: CategoriaType){
        const updateCategoria = await CategoriaModel.findByIdAndUpdate(id, {
            idCategoria: categoria.idCategoria,
            nomeCategoria: categoria.nomeCategoria,
            cor: categoria.cor
        })
        return updateCategoria
    }

    async delete(id: string){
        try{
            await CategoriaModel.findByIdAndDelete(id)
            return "Categoria removida com sucesso"
        } catch (error){
            throw new Error('Ocorreu um erro ao remover a tarefa')
        }
    }
}

export default new CategoriaService()