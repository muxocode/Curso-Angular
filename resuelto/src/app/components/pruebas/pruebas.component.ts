import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  constructor() { }

  texto:string="Borra";

  ngOnInit() {
  }

  onchangeText(e: Event){
    debugger;
    var oObj = e.target as HTMLInputElement;
    this.texto= oObj.value;
  }

}
