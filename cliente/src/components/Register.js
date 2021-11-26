import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Box, Button, Container, TextField, makeStyles, Avatar, Typography, Grid, Link } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';

// Actions de Redux
import { crearNuevoUsuario } from "../reducers/actions/usuarioActions";

// styles
const useStyles = makeStyles((theme) => ({
  avatar:{
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  button: {
    margin: theme.spacing(2, 0, 2)
  },
}));

const Register = () => {
  const classes = useStyles();
  const history = useHistory();

  const [usuario, guardarUsuario] = useState({
    name: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { name, email, password, confirmar } = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  // acceder al state
  const autenticado = useSelector((state) => state.usuario.autenticado);

  const registrarUsuario = (usuario) => dispatch(crearNuevoUsuario(usuario));

  const onClick = (e) => {
    e.preventDefault();

    registrarUsuario({
      name,
      email,
      password,
    });
  };

  useEffect(() => {
    if(autenticado){
      history.replace('/');
    }
    // eslint-disable-next-line
  }, [autenticado]);

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={8}
      >
        <Avatar className={classes.avatar}>
          <LockIcon/>
        </Avatar>
        <Typography 
            variant="h5"
            paragraph
        >
          Registrar Cuenta
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          label="Nombre"
          name="name"
          fullWidth
          value={name}
          onChange={onChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          label="Email"
          name="email"
          fullWidth
          value={email}
          onChange={onChange}
        />
        <TextField
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          margin="normal"
          name="password"
          fullWidth
          value={password}
          onChange={onChange}
        />
        <TextField
          label="Confirmar Contraseña"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          margin="normal"
          name="confirmar"
          fullWidth
          value={confirmar}
          onChange={onChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={onClick}
          className={classes.button}
        >
          Registrar
        </Button>
      </Box>
      <Grid container justifyContent="flex-end">
          <Grid item> 
            <Link href={'/login'}>Obtener Cuenta</Link>
          </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
