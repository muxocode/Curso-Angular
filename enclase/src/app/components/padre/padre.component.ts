import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  Dinero=30;
  constructor() { }

  ngOnInit() {
  }

  MiHijoQuiereMas(e:string){
    this.Dinero+= 20;
    
  }

}
