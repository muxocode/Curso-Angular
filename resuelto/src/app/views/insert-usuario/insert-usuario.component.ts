import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '@entities/UsuarioModel';
import { Store } from '@ngrx/store';
import * as Actions from '../../redux/UsuarioAction';

@Component({
  selector: 'insert-usuario',
  templateUrl: './insert-usuario.component.html',
  styleUrls: ['./insert-usuario.component.css']
})
export class InsertUsuarioComponent implements OnInit {
  usuario:UsuarioModel= new UsuarioModel();
  constructor(private store: Store<UsuarioModel>) { 
  }

  ngOnInit() {
  }

  Guardar(e:Event)
  {
    debugger;
    e.preventDefault();
    this.store.dispatch(new Actions.Add(this.usuario));
    /*this.UService.Insert(this.usuario);*/
  }
}
