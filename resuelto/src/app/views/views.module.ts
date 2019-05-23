import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "@components/components.module";
import { SemanaComponent } from './semana/semana.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AboutComponent } from './about/about.component';
import { ItemUsuarioComponent } from './item-usuario/item-usuario.component';
import { AppRoutingModule } from '../app-routing.module';
import { PruebaService } from '../services/prueba/prueba.service';



@NgModule({
  declarations: [
    SemanaComponent, 
    HomeComponent, 
    UsuariosComponent, 
    AboutComponent, 
    ItemUsuarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule
  ],
  exports:[
    SemanaComponent,
    HomeComponent,
    UsuariosComponent,
    AboutComponent,
    ItemUsuarioComponent
  ],
  providers:[
    PruebaService
  ]
})
export class ViewsModule { }
