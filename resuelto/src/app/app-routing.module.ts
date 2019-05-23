import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SemanaComponent } from './views/semana/semana.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { AboutComponent } from './views/about/about.component';
import { ItemUsuarioComponent } from './views/item-usuario/item-usuario.component';
import { PruebasComponent } from '@components/pruebas/pruebas.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home", component:HomeComponent},
  {path:"Semana", component:SemanaComponent},
  {path:"Usuarios", component:UsuariosComponent},
  {path:"About", component:AboutComponent},
  {path:"Usuarios/:id", component:ItemUsuarioComponent},
  {path:"Pruebas", component:PruebasComponent},
  {path:"**",pathMatch:"full" ,redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
