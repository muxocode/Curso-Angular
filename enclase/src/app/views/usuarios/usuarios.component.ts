import { Component, OnInit } from '@angular/core';
import { Usuario } from '@model/Usuario';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() {
    let oUs= new Usuario();
   }

  ngOnInit() {
  }

}
