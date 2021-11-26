import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Container, TextField, Typography, Button, Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../layout";

// Redux
import { crearNuevaTemporada } from "../../reducers/actions/temporadaActions";

const useStyle = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

const NuevaTemporada = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();

  const cargando = useSelector((state) => state.temporadas.loading);

  const [temporada, guardarTemporada] = useState({
    name: "",
  });

  const { name } = temporada;
  const onChange = (e) => {
    guardarTemporada({
      ...temporada,
      [e.target.name]: e.target.value,
    });
  };

  const nuevaTemporada = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      return;
    }
    await dispatch(
      crearNuevaTemporada({
        name,
      })
    );
    history.push("/temporada");
  };

  return (
    <Layout>
      <>
        <Container maxWidth="xs">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5" align="center" paragraph>
              Agregar Nueva Temporada
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              label="Nombre"
              name="name"
              value={name}
              onChange={onChange}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={nuevaTemporada}
              fullWidth
            >
              Agregar
            </Button>
            {cargando ? <CircularProgress /> : null}
          </Box>
        </Container>
      </>
    </Layout>
  );
};

export default NuevaTemporada;
