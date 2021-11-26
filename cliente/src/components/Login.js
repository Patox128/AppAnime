import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button, Container, Grid, Typography, TextField, Avatar, Link } from "@material-ui/core";
import LockIcon from '@material-ui/icons/Lock';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { iniciarSesion } from "../reducers/actions/usuarioActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar:{
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  button: {
    margin: theme.spacing(3, 0, 2)
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });
  const { email, password } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const autenticado = useSelector((state) => state.usuario.autenticado);
  
  const onClick = e => {
    e.preventDefault();
    dispatch(
      iniciarSesion({
        email,
        password,
      })
    );
  };

  useEffect(() => {
    if (autenticado) {
      history.replace("/");
    }
    // eslint-disable-next-line
  }, [autenticado]);

  return (
      <Container maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon/>
          </Avatar>
          <Typography 
            variant="h5"
            paragraph
          >
            Iniciar Sesión
          </Typography>
        </div>
        <Grid 
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Email"
              name="email"
              value={email}
              fullWidth
              onChange={onChange}
            />
          </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                name="password"
                fullWidth
                value={password}
                onChange={onChange}
              />
            </Grid>
        </Grid>
        <Button 
          variant="contained" 
          color='primary' 
          fullWidth
          onClick={onClick}
          className={classes.button}
        >
          Iniciar Sesión
        </Button>
        <Grid container justifyContent="flex-end">
            <Grid item> 
              <Link href={"/register"}>Obtener Cuenta</Link>
            </Grid>
        </Grid>
      </Container>
  );
};

export default Login;
