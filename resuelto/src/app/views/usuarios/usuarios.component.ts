import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '@entities/UsuarioModel';
import { PruebaService } from 'src/app/services/prueba/prueba.service';
import { UsuarioService } from 'src/app/services/UsuarioService/usuario.service';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  _Usuarios:UsuarioModel[]=[];
  get Usarios(){
    return this.filtro
    ?this._Usuarios.filter(x=>x.nombre.toUpperCase().startsWith(this.filtro.toUpperCase()))
    :this._Usuarios;
  }
  set Usuarios(val){
    this._Usuarios=val;
  }
  constructor(private oPService:PruebaService, private UsuarioService:UsuarioService) { 

  }

  get filtro(){
    return this.oPService.filtro;
  }

  set filtro(val){
    this.oPService.filtro= val;
  }

  placeHolder="Escribe aquí..."

  ngOnInit() {
    /*for (let i = 1; i < 20; i++) {
      this.Usarios.push({id:i, nombre:`Usuario${i}`, age:i, idRol:i});
    }*/
    this.UsuarioService.Get().then(x=>{
      this.Usuarios=x;
    })
  }

}
