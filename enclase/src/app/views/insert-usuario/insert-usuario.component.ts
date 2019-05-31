import { Component, OnInit } from '@angular/core';
import { Usuario } from '@model/Usuario';
import { UsuarioService } from 'src/services/UsuariosService/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'insert-usuario',
  templateUrl: './insert-usuario.component.html',
  styleUrls: ['./insert-usuario.component.css']
})
export class InsertUsuarioComponent implements OnInit {
  oUsuario = new Usuario();
  id?:number;

  constructor(
    private UsuarioService:UsuarioService, 
    private router: Router,
    private oRuta: ActivatedRoute
    ) { 
      this.oRuta.params.subscribe(params=>{
        if(params){
          this.id=params.id;
          if(this.id){
            this.UsuarioService.Get(this.id).then(u=>{
              this.oUsuario=u as Usuario;
            })
          }
        }
      })
    }
  
  ngOnInit() {
  }

  Guardar(e:Event){
    e.preventDefault();

    let oPromise:Promise<Usuario>;

    if(this.id){
      oPromise= this.UsuarioService.Update(this.id,this.oUsuario);
    }
    else
    {
      oPromise= this.UsuarioService.Insert(this.oUsuario);     
    }

    oPromise
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
