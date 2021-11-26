import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { SidebarData } from "./SidebarData";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  toolbar: theme.mixins.toolbar,
  drawerPapper: {
    width: 240,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const SideBar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [openSection, setOpenSection] = useState({
    Anime: false,
    Manga: false,
    Temporada: false,
  });

  const handleToggleSection = (nameSection) => {
    setOpenSection((prevState) => ({
      ...openSection,
      [nameSection]: !prevState[nameSection],
    }));
  };

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPapper,
      }}
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {SidebarData.map((item) => (
          <>
            <ListItem button onClick={() => handleToggleSection(item.title)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              {openSection[item.title] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSection[item.title]}>
              <List component="div" disablePadding>
                {item.subNav.map((subItem) => (
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={() => history.push(subItem.path)}
                  >
                    <ListItemText primary={subItem.title} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
