import {
  AGREGAR_TEMPORADA,
  AGREGAR_TEMPORADA_EXITO,
  AGREGAR_TEMPORADA_ERROR,
  COMENZAR_DESCARGA_TEMPORADAS,
  DESCARGA_TEMPORADAS_EXITO,
  DESCARGA_TEMPORADAS_ERROR,
  OBTENER_TEMPORADA_ELIMINAR,
  TEMPORADA_ELIMINADA_EXITO,
  TEMPORADA_ELIMINADA_ERROR,
  OBTENER_TEMPORADA_EDITAR,
  COMENZAR_EDICION_TEMPORADA,
  TEMPORADA_EDITADA_EXITO,
  TEMPORADA_EDITADA_ERROR
} from "../types";

const initialState = {
  temporadas: [],
  error: null,
  loading: false,
  msg: null,
  temporadaEliminar: null,
  temporadaeditar: null
};

const temporadaReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMENZAR_DESCARGA_TEMPORADAS:
    case COMENZAR_EDICION_TEMPORADA:
    case AGREGAR_TEMPORADA:
      return {
        ...state,
        loading: true,
        msg: null,
      };
    case AGREGAR_TEMPORADA_EXITO:
      return {
        ...state,
        loading: false,
        // temporadas: [...state.temporadas, action.payload]
      };
    case AGREGAR_TEMPORADA_ERROR:
    case DESCARGA_TEMPORADAS_ERROR:
    case TEMPORADA_ELIMINADA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.payload,
      };
    case DESCARGA_TEMPORADAS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        msg: null,
        temporadas: action.payload,
      };
    case OBTENER_TEMPORADA_ELIMINAR:
      return {
        ...state,
        temporadaEliminar: action.payload,
      };
    case TEMPORADA_ELIMINADA_EXITO:
      return {
        ...state,
        temporadas: state.temporadas.filter(
          temporada => temporada.id !== state.temporadaEliminar
        ),
        temporadaEliminar: null,
        msg: action.payload
      };
    case OBTENER_TEMPORADA_EDITAR:
      return {
        ...state,
        temporadaeditar: action.payload
      }
    case TEMPORADA_EDITADA_EXITO:
      return {
        ...state,
        temporadaeditar: null,
        temporadas: state.temporadas.map( temporada => temporada.id === action.payload.id ? temporada = action.payload : temporada),
        loading: false
      }
    default:
      return state;
  }
};

export default temporadaReducer;
