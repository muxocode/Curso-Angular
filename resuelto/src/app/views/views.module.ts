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
import { InsertUsuarioComponent } from './insert-usuario/insert-usuario.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { UsuarioReducer } from '../redux/UsuarioReducer';
import { EffectsModule } from '@ngrx/effects';
import { UsuarioEffects } from '../redux/UsuarioEffects';
import { UsuarioService } from '../services/UsuarioService/usuario.service';



@NgModule({
  declarations: [
    SemanaComponent, 
    HomeComponent, 
    UsuariosComponent, 
    AboutComponent, 
    ItemUsuarioComponent, 
    InsertUsuarioComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    FormsModule,
    //Redux
    StoreModule.forRoot({Usuario:UsuarioReducer}),
    EffectsModule.forRoot([UsuarioEffects])
  ],
  exports:[
    SemanaComponent,
    HomeComponent,
    UsuariosComponent,
    AboutComponent,
    ItemUsuarioComponent
  ],
  providers:[
    PruebaService,
    UsuarioService
  ]
})
export class ViewsModule { }
