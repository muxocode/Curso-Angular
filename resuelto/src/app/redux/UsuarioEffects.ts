import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as UsuarioActions from './UsuarioAction';
import { UsuarioService } from '../services/UsuarioService/usuario.service';
import { UsuarioModel } from '@entities/UsuarioModel';


@Injectable()
export class UsuarioEffects {
  constructor(private actions$: Actions, private Service: UsuarioService) {}

  @Effect()
  Get: Observable<Action> = this.actions$.pipe(
    ofType(UsuarioActions.GET_USER),
    switchMap(() => {
      return this.Service.Get(null)
        .then((x:UsuarioModel[])=>{
          return new UsuarioActions.Reset(x);
        })
    })
  );

  @Effect()
  Insert: Observable<Action> = this.actions$.pipe(
    ofType(UsuarioActions.ADD_USER),
    switchMap((action:any) => {
      return this.Service.Insert(action.payload)
        .then((x:UsuarioModel)=>{
          return new UsuarioActions.Get();
        })
    })
  );

}