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
import { HijoComponent } from './components/hijo/hijo.component';
import { PadreComponent } from './components/padre/padre.component';
import { FiltroComponent } from './components/shared/filtro/filtro.component';
import {FormsModule} from "@angular/forms";
import { FiltroBindingComponent } from './components/shared/filtro-binding/filtro-binding.component'
import { PruebaService } from 'src/services/PruebaService/prueba.service';
import { environment, ConfigAccesor } from 'src/environments/environment';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    ContenidoComponent, 
    MenuHorizontalComponent, SemanaComponent, HelloComponent, HomeComponent, UsuariosComponent, AboutComponent, ItemUsuarioComponent, HijoComponent, PadreComponent, FiltroComponent, FiltroBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /**
   *
   */
  constructor() {
    ConfigAccesor.GetConfig();
    
  }
}
