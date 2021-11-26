import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Redux
import { logout } from "../../../reducers/actions/usuarioActions";

import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },
  toolbar: theme.mixins.toolbar
}));

const NavBar = (props) => {
  const classes = useStyle();

  const dispatch = useDispatch();
  const history = useHistory();

  const usuario = useSelector((state) => state.usuario.usuario);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.replace("/login");
  };

  return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            className={classes.menuButton}
            onClick={() => props.handleDrawerToggle()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Bienvenido {usuario.name}
          </Typography>
          <IconButton color="inherit" onClick={handleClick}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={!!anchorEl}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={Logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
  );
};

export default NavBar;
