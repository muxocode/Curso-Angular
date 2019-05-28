import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './views/hello/hello.component';
import { SemanaComponent } from './views/semana/semana.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { HomeComponent } from './views/home/home.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"Hello", component:HelloComponent},
  {path: "Semana", component: SemanaComponent},
  {path: "Pruebas", component: PruebaComponent},
  {path:"Usuarios", component:UsuariosComponent},
  {path:"About", component:AboutComponent},
  {path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
