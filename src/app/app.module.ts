import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListaLavanderiaComponent } from './lista-lavanderia/lista-lavanderia.component';
import { ListaBuscaComponent } from './lista-busca/lista-busca.component';
import { CadastrarLavanderiaComponent } from './cadastrar-lavanderia/cadastrar-lavanderia.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ListaLavanderiaComponent,
    ListaBuscaComponent,
    CadastrarLavanderiaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
