import React, { useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import Layout from "../layout";
import { TablaTemporada } from "./TablaTemporada";
import { useHistory } from 'react-router-dom';

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  descargaTemporadas,
  borrarTemporada,
  obtenerProductoEditar
} from "../../reducers/actions/temporadaActions";

const ListadoTemporada = () => {
  const dispatch = useDispatch();
  const history =  useHistory();

  useEffect(() => {
    dispatch(descargaTemporadas());
    // eslint-disable-next-line
  }, []);

  const temporadas = useSelector((state) => state.temporadas.temporadas);
  const eliminarTemporada = id => {
    dispatch(borrarTemporada(id));
  };
  
  const redirectEdit = temporada => {
    dispatch(obtenerProductoEditar(temporada))
    history.push(`/temporada/editar/${temporada.id}`)
  } 

  return (
    <Layout>
      <>
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" paragraph>
            Listado de Temporadas Anime
          </Typography>
          <TablaTemporada
            temporadas={temporadas}
            eliminarTemporada={eliminarTemporada}
            redirectEdit={redirectEdit}
          />
        </Container>
      </>
    </Layout>
  );
};

export default ListadoTemporada;
