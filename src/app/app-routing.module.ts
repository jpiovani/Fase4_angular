import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLavanderiaComponent } from './lista-lavanderia/lista-lavanderia.component';
import { ListaBuscaComponent } from './lista-busca/lista-busca.component';
import { CadastrarLavanderiaComponent } from './cadastrar-lavanderia/cadastrar-lavanderia.component';

const routes: Routes = [
  {
    path: "",
    component: ListaLavanderiaComponent
  },

  {
    path: "lista-busca",
    component: ListaBuscaComponent
  },

  {
    path: "cadastrar-lavanderia",
    component: CadastrarLavanderiaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
