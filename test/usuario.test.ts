import exp from 'constants'
import app from '../app'
import UsuarioModel from '../src/usuario/schemas/usuario.schema'
import { describe, it } from '@jest/globals'
import * as request from 'supertest'


describe('Testando API dos Usuários', () => {

    it.skip("Deve inserir um usuario no banco de dados", async () =>{
        const UsuarioMock = {
            //id: "123456",
            username: "Luiz",
            peso: 70,
            email: "ex@gmail.com",
            senha: "123"
        }

        const response = await request.default(app).post('/usuario').send(UsuarioMock)
        const findedUsuario = await UsuarioModel.findById(response.body._id)

        expect(response.status).toEqual(201)
        expect(response.body._id).toBeDefined()
        expect(UsuarioMock.username).toBe(findedUsuario?.username)
        expect(UsuarioMock.peso).toBe(findedUsuario?.peso)
        expect(UsuarioMock.email).toBe(findedUsuario?.email)
        expect(UsuarioMock.senha).toBe(findedUsuario?.senha)

    })

    it.skip('Deve buscar todos os usuarios no banco de dados', async () => {
        const response = await request.default(app).get('/usuario')
        const totalUsuariosOnDataBase = await UsuarioModel.countDocuments()

        expect(response.body.length).toEqual(totalUsuariosOnDataBase)
    })

    it.skip('Deve buscar um usuario no banco de dados', async () => {
        const response = await request.default(app).get('/usuario')
        const usuarioOnDataBase = await UsuarioModel.findById(response.body._id)

        expect(response.status).toEqual(200)
        expect(response.body._id).toBeDefined()
    })
})

