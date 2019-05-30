import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from '@entities/UsuarioModel';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { 
    
  }
  Get(id:number=null):Promise<UsuarioModel[]|UsuarioModel>{
    return this.http
    .get<UsuarioModel[]|UsuarioModel>(`${environment.api.api}/${environment.api.data.usuarios}/${id?"/"+id:""}`)
    .toPromise();
  }

  Insert(obj:UsuarioModel){
    return this.http
    .post(`${environment.api.api}/${environment.api.data.usuarios}`, obj)
    .toPromise();
  }
}
