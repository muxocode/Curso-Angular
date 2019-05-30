import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from '@components/components.module';
import { ViewsModule } from './views/views.module';
import { UsuarioService } from './services/UsuarioService/usuario.service';
import { ConfigAccesor } from 'src/environments/environment';
import {HttpClientModule} from "@angular/common/http"


ConfigAccesor.GetConfig();

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    ViewsModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
