import { Component, OnInit } from '@angular/core';
import { Usuario } from '@model/Usuario';
import { UsuarioService } from 'src/services/UsuariosService/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'insert-usuario',
  templateUrl: './insert-usuario.component.html',
  styleUrls: ['./insert-usuario.component.css']
})
export class InsertUsuarioComponent implements OnInit {

  constructor(private UsuarioService:UsuarioService, private router: Router) { }
  oUsuario = new Usuario();
  ngOnInit() {
  }

  Guardar(e:Event){


    debugger;
    e.preventDefault();
    this.UsuarioService.Insert(this.oUsuario)
    .then(x=>{
      //Navegar
      this.router.navigateByUrl("/Usuarios");
    })
    .catch(x=>{
      alert("No se puede conectar con el servidor");
      console.log(x);
    })
  }

}
