import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from "../../types";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

// export function crearNuevoUsuario(usuario) {
//     return async (dispatch) => {
//         try {
//             const respuesta = await clienteAxios.post('/api/usuarios',usuario);
//             console.log(respuesta.data);
//             dispatch( registroExitoso(respuesta.data));
//             dispatch (usuarioAutenticado());
//         } catch (error) {
//             console.log(error.response)

//         }
//     }
// }

export const crearNuevoUsuario = (usuario) => async (dispatch) => {
  try {
    const {data} = await clienteAxios.post('/api/usuarios', usuario);
    dispatch({
      type: REGISTRO_EXITOSO,
      payload: data
    });
    dispatch(usuarioAutenticado());
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: REGISTRO_ERROR,
      payload: error.response.data.msg
    });
  }
};

export const usuarioAutenticado = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    tokenAuth(token);
  }
  try {
    const {data} = await clienteAxios.get("/api/auth");
    dispatch({
      type: OBTENER_USUARIO,
      payload: data.usuario,
    });
  } catch (error) {
    console.log(error.response);
    dispatch(loginError(error.response.data.msg));
  }
};

export const iniciarSesion = (datos) => async (dispatch) => {
  try {
    const respuesta = await clienteAxios.post('/api/auth', datos);
    console.log(respuesta.data)
    dispatch(loginExitoso(respuesta.data));
    dispatch(usuarioAutenticado());
  } catch (error) {
    console.log(error.response.data.msg);
    dispatch(loginError(error.response.data.msg));
  }
}

export const logout = () => (dispatch) => {
  dispatch(cerrarSesion());
}

const loginExitoso = (respuesta) => ({
  type: LOGIN_EXITOSO,
  payload: respuesta
});

const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

const cerrarSesion = () => ({
  type: CERRAR_SESION
});
