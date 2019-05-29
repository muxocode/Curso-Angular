import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { MenuHorizontalComponent } from './components/shared/menu-horizontal/menu-horizontal.component';
import { ContenidoComponent } from '@shared/contenido/contenido.component';
import { SemanaComponent } from './views/semana/semana.component';
import { HelloComponent } from './views/hello/hello.component';
import { HomeComponent } from './views/home/home.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { AboutComponent } from './views/about/about.component';
import { ItemUsuarioComponent } from './views/item-usuario/item-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ContenidoComponent, 
    MenuHorizontalComponent, SemanaComponent, HelloComponent, HomeComponent, UsuariosComponent, AboutComponent, ItemUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
