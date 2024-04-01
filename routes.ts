import { Router } from "express";
import usuarioController from "./src/usuario/controllers/usuario.controller";
import tarefaController from "./src/tarefa/controllers/tarefa.controller";

const routes = Router()

//USUÁRIO
routes.post('/usuario', usuarioController.create)
routes.get('/usuario', usuarioController.findAll)
routes.get('/usuario/:id', usuarioController.findById)
routes.put('/usuario/:id', usuarioController.update)
routes.delete('/usuario/:id', usuarioController.delete)
//TAREFA
routes.post('/tarefa', tarefaController.create)
routes.get('/tarefa', tarefaController.findAll)
routes.get('/tarefa/:id', tarefaController.findById)
routes.put('/tarefa/:id', tarefaController.update)
routes.delete('/tarefa/:id', tarefaController.delete)
//CATEGORIA

export{
    routes
}
