import { Component, OnInit } from '@angular/core';
import { MenuModel } from '@entities/MenuModel';

@Component({
  selector: 'menu-horizontal',
  templateUrl: './menu-horizontal.component.html',
  styleUrls: ['./menu-horizontal.component.css']
})
export class MenuHorizontalComponent implements OnInit {

  constructor() { }

  oMenu:MenuModel;

  ngOnInit() {
    this.oMenu= new MenuModel();
    this.oMenu.items=[
      {nombre:"Home", url:"Home"},
      {nombre:"About", url:"About"},
      {nombre:"Usuarios", url:"Usuarios"},
      {nombre:"Semana", url:"Semana"},
      {nombre:"Pruebas", url:"Pruebas"}
    ]
  }

}
