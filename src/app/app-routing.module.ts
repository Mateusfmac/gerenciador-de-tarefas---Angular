/* ng g m [ModuleName] --routing */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TarefaRoutes } from "./tarefas/tarefas-routing.module";

export const router: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

