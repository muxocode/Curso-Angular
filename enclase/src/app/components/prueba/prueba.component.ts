import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/services/PruebaService/prueba.service';

interface IEstilo{
  color:string
}

@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  texto:string
  mostrarImg=true;
  num=10;
  aLista=[{name:"a"}, {name:"b"}, {name:"c"}];
  sPlaceholder="Escriba aquí...";
  sValue="hola";
  oEstilo:IEstilo={color:"blue"}

  constructor(private PService:PruebaService) {

    PService.Texto="He pasado por prueba";




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

  btnPresionado(evento:Event){
    debugger;
    alert("btn Presionado");
  }

  Encima(e:Event){
    let oDiv = e.target as HTMLDivElement;
    oDiv.style.color="red";
  }

}
