import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() paga:number;
  @Output() quieroMas = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    debugger;
    let oPaga = parseInt(this.paga.toString());
    if(isNaN(oPaga))
    {
      console.error("No se puede pasar un string");

      throw Error("No se puede pasar un string");
    }
  }

  DameMas(e:Event){
    this.quieroMas.emit("Quiero más, papa");
  }

}
