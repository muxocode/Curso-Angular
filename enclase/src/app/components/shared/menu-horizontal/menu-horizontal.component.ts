import { Component, OnInit } from '@angular/core';
import { Menu } from '@model/Menu';

@Component({
  selector: 'menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.css']
})
export class MenuHorizontalComponent implements OnInit {
  Menu:Menu;

  constructor() { 
    this.Menu=new Menu();
    this.Menu.title="Angular";
    this.Menu.items=[
      {name:"Home", url:"Home"},
      {name:"Prueba", url:"Pruebas"},
      {name:"Usuarios", url:"Usuarios"},
      {name:"About", url:"About"},
      {name:"Semana", url:"Semana"},
      {name:"Hello", url:"Hello"},
      {name:"Insertar Usuario", url:"InsertarUsuario"}
    ]
  }

  ngOnInit() {
  }

}
