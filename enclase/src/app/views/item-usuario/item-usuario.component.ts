import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/services/UsuariosService/usuario.service';
import { Usuario } from '@model/Usuario';

@Component({
  selector: 'item-usuario',
  templateUrl: './item-usuario.component.html',
  styleUrls: ['./item-usuario.component.css']
})
export class ItemUsuarioComponent implements OnInit {

  id:number;
  usuario:Usuario= new Usuario();
  constructor(private oRuta: ActivatedRoute, private UsService:UsuarioService) { 
    oRuta.params.subscribe(x=>{
      this.id= x.id;
      UsService.Get(this.id).then(data=>{
        this.usuario= data as Usuario;
      })
    })
  }

  ngOnInit() {
   
  }

}
