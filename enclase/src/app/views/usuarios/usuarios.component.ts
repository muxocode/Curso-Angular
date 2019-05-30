import { Component, OnInit } from '@angular/core';
import { Usuario } from '@model/Usuario';
import { UsuarioService } from 'src/services/UsuariosService/usuario.service';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  Usuarios:Usuario[]=[];
  constructor(private UsService:UsuarioService) {
    UsService.Get().then(data=>{
      this.Usuarios=data as Usuario[];
    })
   }

  ngOnInit() {
  }

}
