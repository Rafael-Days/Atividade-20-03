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

routes.get('tarefa/concluidas', tarefaController.findConcluidas)//Procura tarefas concluidas
routes.get('tarefa/pedentes', tarefaController.findPendentes)//Procura tarefas pendentes
routes.get('tarefa/categoria/:idCategoria', tarefaController.findTarefasCategoria)//Procura categoria das tarefas
routes.get('tarefa/usuario/:idUsuario', tarefaController.findTarefasUsuario)//Procura o total de tarefas do usuario
routes.get('tarefa/periodo/:inicio/:fim', tarefaController.findTarefasVencidas)//Passa a data de inicio e fim, recebe as que vão vencer
routes.get('terafa/recente/:idUsuario', tarefaController.findTarefaRecente)//Encontra a tarefa mais recente

routes.get('tarefa/descricao-longa', tarefaController.findDescricaoLonga)//Mostra a descrição mais longa das tarefas
routes.get('tarefa/media-conclusao', tarefaController.calcMediaConclusao)//Retorna a média das tarefas concluidas
routes.get('tarefa/mais-antiga/:idUsuario', tarefaController.findTarefaMaisAntiga)//Procura a tarefa mais antiga
routes.get('tarefa/categoria/agrupar', tarefaController.findAgruparTarefaPorCategoria)//Agrupa tarefas por categorias

//CATEGORIA
routes.post('/categoria', categoriaControllers.create)//Rota para criação de uma nova categoria.
routes.get('/categoria', categoriaControllers.findAll)
routes.get('/categoria/:id', categoriaControllers.findById)//Rota para obter detalhes de uma categoria específica
routes.put('/categoria/:id', categoriaControllers.update)//Rota para atualizar uma categoria existente
routes.delete('/categoria/:id', categoriaControllers.delete)//Rota para excluir uma categoria.

export{
    routes
}
