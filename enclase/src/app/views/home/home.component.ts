import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/services/PruebaService/prueba.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  texto:string;
  constructor(private PService:PruebaService) {
    this.texto = PService.Texto || "no hay valor";
   }

  ngOnInit() {
  }

}
