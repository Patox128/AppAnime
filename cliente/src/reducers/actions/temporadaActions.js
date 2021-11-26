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
} from "../../types";

import clienteAxios from "../../config/axios";

export const crearNuevaTemporada = temporada => async (dispatch) => {
  dispatch({
    type: AGREGAR_TEMPORADA,
  });
  try {
    const {data} = await clienteAxios.post('/api/temporadas', temporada)
    console.log(data);
    dispatch({
      type: AGREGAR_TEMPORADA_EXITO,
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AGREGAR_TEMPORADA_ERROR
    });
  }
};

export const descargaTemporadas = () => async (dispatch) => {
  dispatch({
    type: COMENZAR_DESCARGA_TEMPORADAS
  });
  try {
    const {data} = await clienteAxios.get('/api/temporadas');
    dispatch({
      type: DESCARGA_TEMPORADAS_EXITO,
      payload: data.temporadas
    })
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: DESCARGA_TEMPORADAS_ERROR,
      payload: error.response.data.msg
    })
  }
}

export const borrarTemporada = id => async (dispatch) => {
  dispatch({
    type:OBTENER_TEMPORADA_ELIMINAR,
    payload: id
  });
  try {
    const {data} = await clienteAxios.delete(`/api/temporadas/${id}`);
    console.log(data.msg);
    dispatch({
      type: TEMPORADA_ELIMINADA_EXITO,
      payload: data.msg
    })
  } catch (error) {
    console.log(error.response.data.msg);
    dispatch({
      type: TEMPORADA_ELIMINADA_ERROR,
      payload: error.response.data.msg,
    })
  }
}

export const obtenerProductoEditar = temporada => (dispatch) => {
  dispatch({
    type: OBTENER_TEMPORADA_EDITAR,
    payload: temporada
  })
}

export const editarTemporadaAction = temporada => async(dispatch) => {
  dispatch({
    type: COMENZAR_EDICION_TEMPORADA
  })
  try {
    await clienteAxios.put(`/api/temporadas/${temporada.id}`, temporada);
    dispatch({
      type: TEMPORADA_EDITADA_EXITO,
      payload: temporada
    })
  } catch (error) {
    console.log(error.response);
  }
}