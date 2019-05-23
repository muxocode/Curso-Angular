import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  @Input() placeHolder:string;
  @Input() value:string;
  get _value(){
    return this.value;
  }
  set _value(val){
    this.value=val;
    this.valueChange.emit(val);
  }

  @Output() valueChange= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}
