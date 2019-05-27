import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.css']
})
export class SemanaComponent implements OnInit {

  constructor() { }
  aDias= ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  ngOnInit() {
  }

}
