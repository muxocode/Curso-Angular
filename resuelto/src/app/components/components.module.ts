import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { AppRoutingModule } from '../app-routing.module';
import { PruebasComponent } from './pruebas/pruebas.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HelloComponent,
    MenuHorizontalComponent,
    ContenidoComponent,
    PruebasComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    HelloComponent,
    MenuHorizontalComponent,
    ContenidoComponent,
    PruebasComponent,
    FiltroComponent
  ] 
})
export class ComponentsModule { }
