import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }
  //metodo listar todos
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas']
    return tarefas ? JSON.parse(tarefas) : []//condicao ternaria, caso true retorna dados do local storage em formato de objeto, converte de string para obj
  }

  //metodos cadastrar
  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos()
    tarefa.id = new Date().getTime()//id recebe data atual
    tarefas.push(tarefa)
    localStorage['tarefas'] = JSON.stringify(tarefas)//converta para string
  }

  //metodo buscar
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos()//recebe a lista de dados do metodo listar
    return tarefas.find(tarefa => tarefa.id === id)
  }

  //metodo atualizar 
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos()
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa
      }
    })
    localStorage['tarefas'] = JSON.stringify(tarefas)
  }

  //metodo remover
  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  
  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos()
    tarefas.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].concluida = !obj.concluida
      }
    })
    localStorage['tarefas'] = JSON.stringify(tarefas)
  }
}

