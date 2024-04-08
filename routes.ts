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
routes.post('/tarefa', tarefaController.create)//criação de uma nova tarefa
routes.get('/tarefa', tarefaController.findAll)
routes.get('/tarefa/:id', tarefaController.findById)//Rota para obter detalhes de uma tarefa específica
routes.put('/tarefa/:id', tarefaController.update)//Rota para atualizar uma tarefa existente
routes.delete('/tarefa/:id', tarefaController.delete)//Rota para excluir uma tarefa.
//CATEGORIA
routes.post('/categoria', categoriaControllers.create)//Rota para criação de uma nova categoria.
routes.get('/categoria', categoriaControllers.findAll)
routes.get('/categoria/:id', categoriaControllers.findById)//Rota para obter detalhes de uma categoria específica
routes.put('/categoria/:id', categoriaControllers.update)//Rota para atualizar uma categoria existente
routes.delete('/categoria/:id', categoriaControllers.delete)//Rota para excluir uma categoria.

export{
    routes
}
