import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.css']
})
export class SemanaComponent implements OnInit {

  constructor() { }
  aDias= ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  auxDias=[];
  filtroPlaceHolder="Día favorito...";
  filtro="";
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
