import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '@model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url:string;
  constructor(private http:HttpClient) { 
    this.url=`${environment.config.api}/${environment.config.services.usuarios}`;
  }

  Get():Promise<Usuario[]>{
    return this.http.get<Usuario[]>(this.url).toPromise();
  }
}
