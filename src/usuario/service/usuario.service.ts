import UsuarioModel from "../schemas/usuario.schema";
import { UsuarioType } from "../types/usuario.type";

class UsuarioService {

    async create(usuario: UsuarioType){
        const createUsuario = await UsuarioModel.create(usuario)
        return createUsuario
    } 

    async findAll() {
        const findedUsuarios = await UsuarioModel.find()
        return findedUsuarios
    }

    async findById(id: string){
        const findedUsuario = await UsuarioModel.findById(id)
        return findedUsuario
    }

    async update(id: string, usuario: UsuarioType) {
        const updateUsuario = await UsuarioModel.findByIdAndUpdate(id, {
            id: usuario.idUsuario,
            username: usuario.username,
            peso: usuario.peso,
            email: usuario.email,
            senha: usuario.senha
        }, { new: true })
        return updateUsuario
    }

    async delete(id: string){
        try{
            await UsuarioModel.findByIdAndDelete(id)
            return "Usuário removido com sucesso"
        } catch (error) {
            throw new Error('Ocorreu um erro ao remover o Usuário: ${error}')
        }
    }
}

export default new UsuarioService()