import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../types";

// cada reducer tiene su propio state
const initialState = {
  token: localStorage.getItem('token'),
  autenticado: false,
  usuario: {},
  mensaje: null,
};

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
    case REGISTRO_EXITOSO:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        token: localStorage.getItem('token'),
        usuario: action.payload,
      };
    case REGISTRO_ERROR:
    case CERRAR_SESION:
    case LOGIN_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        usuario: {},
        autenticado: null,
        mensaje: action.payload,
      };
    default:
      return state;
  }
}
export default usuarioReducer;
