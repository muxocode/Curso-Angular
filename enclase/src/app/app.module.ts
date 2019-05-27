import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { MenuHorizontalComponent } from './components/shared/menu-horizontal/menu-horizontal.component';
import { ContenidoComponent } from '@shared/contenido/contenido.component';
import { SemanaComponent } from './views/semana/semana.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ContenidoComponent, 
    MenuHorizontalComponent, SemanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
