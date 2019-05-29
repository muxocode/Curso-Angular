import { Component, OnInit } from '@angular/core';
import { Usuario } from '@model/Usuario';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  Usuarios:Usuario[]=[];
  constructor() {
    for (let index = 0; index < 100; index++) {
      this.Usuarios.push({id:index,nombre:`Usuario_${index}`});
    }
   }

  ngOnInit() {
  }

}
