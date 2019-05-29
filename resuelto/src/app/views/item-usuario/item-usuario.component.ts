import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioModel } from '@entities/UsuarioModel';
import { UsuarioService } from 'src/app/services/UsuarioService/usuario.service';

@Component({
  selector: 'item-usuario',
  templateUrl: './item-usuario.component.html',
  styleUrls: ['./item-usuario.component.css']
})
export class ItemUsuarioComponent implements OnInit {
  id:number;
  Usuario:UsuarioModel=new UsuarioModel();
  constructor(private activatedRoute:ActivatedRoute, 
    private UsuarioService:UsuarioService) { 
    this.activatedRoute.params.subscribe(x=>{
      this.id=x.id;
    });
  }

  ngOnInit() {
    this.UsuarioService.Get(this.id)
    .then(x=>{
      this.Usuario= x as UsuarioModel;
    })
  }

}
