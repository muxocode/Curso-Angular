import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.css']
})
export class SemanaComponent implements OnInit {

  constructor() { }
  aDias= ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  auxDias:string[]=[];
  filtroPlaceHolder="Día favorito...";
  _filtro="";
  get filtro(){
    return this._filtro;
  }

  set filtro(val){
    this._filtro=val;
    this.Filtrar(val);
  }

  ngOnInit() {
    this.auxDias=this.aDias;
  }

  Filtrar(e:string){
    debugger;
    if(e){
      this.auxDias=this.aDias.filter(x=>x.toUpperCase().startsWith(e.toUpperCase()));
    }
    else{
      this.auxDias=this.aDias;
    }
  }

}
