import { Router } from "express";
import usuarioController from "./src/usuario/controllers/usuario.controller";
import tarefaController from "./src/tarefa/controllers/tarefa.controller";
import categoriaControllers from "./src/categoria/controllers/categoria.controllers";

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
routes.post('/categoria', categoriaControllers.create)
routes.get('/categoria', categoriaControllers.findAll)
routes.get('/categoria/:id', categoriaControllers.findById)
routes.put('/categoria/:id', categoriaControllers.update)
routes.delete('/categoria/:id', categoriaControllers.delete)

export{
    routes
}
