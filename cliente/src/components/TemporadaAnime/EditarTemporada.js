import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../layout";

// Redux
import { editarTemporadaAction } from "../../reducers/actions/temporadaActions";

const useStyle = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

const EditarTemporada = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const [temporada, guardarTemporda] = useState({
    nombre: "",
  });
  const cargando = useSelector((state) => state.temporadas.loading);
  const temporadaEditar = useSelector(
    (state) => state.temporadas.temporadaeditar
  );
  const { name } = temporada;

  useEffect(() => {
    guardarTemporda(temporadaEditar);
  }, [temporadaEditar]);

  const onChange = (e) => {
    guardarTemporda({
      ...temporada,
      [e.target.name]: e.target.value,
    });
  };

  const editarTemporada = async (e) => {
    e.preventDefault();

    await dispatch(editarTemporadaAction(temporada));
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
              Editar Temporada
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
              onClick={editarTemporada}
              fullWidth
            >
              Editar
            </Button>
            {cargando ? <CircularProgress /> : null}
          </Box>
        </Container>
      </>
    </Layout>
  );
};

export default EditarTemporada;
