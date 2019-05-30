import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  @Input() value;
  @Input() placeholder;
  @Output() click= new EventEmitter
  constructor() { 
    if(!this.value){
      this.value="";
    }
  }

  ngOnInit() {
  }

  Presionado(e:Event, input:HTMLInputElement){
    this.click.emit(input.value);
  }
}
