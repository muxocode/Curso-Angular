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

  Get(id:number = null):Promise<Usuario[] | Usuario>{
   
    let oUrl = this.url;
    if(id){
      oUrl+=`/${id}`;
    }

    return this.http.get<Usuario[] | Usuario>(oUrl).toPromise();
  }

  Insert(obj:Usuario):Promise<Usuario>{
    return this.http.post<Usuario>(this.url, obj)
                .toPromise();
  }
}
