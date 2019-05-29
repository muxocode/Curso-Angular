import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  texto:string
  mostrarImg=true;
  num=10;
  aLista=[{name:"a"}, {name:"b"}, {name:"c"}]
  constructor() {
    this.texto="Prueba, hola mundo";
    var oPromise = new Promise(ok=>{
      setTimeout(()=>{
        ok("he terminado");
      },3000);
    })

    
    oPromise.then(x=>{
      alert(x)
    }).catch(x=>{
      alert("error")
    });
    
   }

  ngOnInit() {
  }

  getTexto(val){
    return this.texto+val;
  }

}
