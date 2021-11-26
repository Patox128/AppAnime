import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { usuarioAutenticado } from "../../reducers/actions/usuarioActions";
import tokenAuth from "../../config/tokenAuth";

const rutaPrivada = (Component) => {
const RutaVerificada = () => {
  //const dispatch = useDispatch();
  const autenticado = useSelector((state) => state.usuario.autenticado);
  const token = localStorage.getItem('token');
  //const usuario = async () => await dispatch(usuarioAutenticado());
  // useEffect(() => {
  //   if (token) {
  //     usuario();
  //   }
  //   else{
  //     usuario();
  //   }
  //   // eslint-disable-next-line
  // }, []);
  tokenAuth(token);
  return autenticado ? <Component /> : <Redirect to="/login" />;
};
  return RutaVerificada;
};

export default rutaPrivada;
