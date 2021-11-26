import React, { useState } from "react";

import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import SideBar from "./SideBard/SideBar";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
}));

const Layout = ({children}) => {
  const classes = useStyle();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <NavBar handleDrawerToggle={handleDrawerToggle} />
      <Hidden xsDown>
        <SideBar variant="permanent" open={mobileOpen} />
      </Hidden>
      <Hidden smUp>
        <SideBar
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
        />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
