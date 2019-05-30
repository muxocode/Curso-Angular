import { Action } from '@ngrx/store';
import { UsuarioModel } from '@entities/UsuarioModel';
export const ADD_USER= 'Add_User';
export const GET_USER= 'GET_User';
export const RESET_USER= 'RESET_User';


export class Add implements Action{
    readonly type = ADD_USER;
    constructor(public payload: UsuarioModel) { }
}

export class Get implements Action{
    readonly type = GET_USER;
    constructor() { }
}

export class Reset implements Action{
    readonly type = RESET_USER;
    constructor(public payload: UsuarioModel[]) { }
}
export type UsuarioActions = Add | Get | Reset;