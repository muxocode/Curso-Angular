import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba/prueba.service';

@Component({
  selector: 'semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.css']
})
export class SemanaComponent implements OnInit {

  aDias=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  placeHolder="Excribe para filtrar...";
  constructor(private oPService:PruebaService) { 

  }

  get filtro(){
    return this.oPService.filtro;
  }

  set filtro(val){
    this.oPService.filtro= val;
  }

  ngOnInit() {
  }

}
