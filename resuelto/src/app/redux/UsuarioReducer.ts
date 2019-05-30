import { UsuarioActions, ADD_USER, GET_USER, RESET_USER } from "./UsuarioAction";
import { UsuarioModel } from '@entities/UsuarioModel';



export function UsuarioReducer(state:UsuarioModel[] = [], action: UsuarioActions) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]
    case RESET_USER:
      return action.payload
    case GET_USER:
    default:
      return state
  }
}