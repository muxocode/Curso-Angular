import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filtro-binding',
  templateUrl: './filtro-binding.component.html',
  styleUrls: ['./filtro-binding.component.css']
})
export class FiltroBindingComponent implements OnInit {

  @Input() placeholder;
  @Input() value;
  @Output() valueChange= new EventEmitter();

  get _value(){
    return this.value;
  }
  set _value(val){
    this.value=val;
    this.valueChange.emit(val);
  }
  constructor() { 
    
  }

  ngOnInit() {
  }

}
