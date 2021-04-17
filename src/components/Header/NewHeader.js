import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import SideDrawer from "../Navigation/SideDrawer";

import { Link } from "react-router-dom";
import data from '../../data/Content.json';
const content = data.sssContent;

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
    data.sssContent.mainNavigation
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Link to={'/'} className={classes.linkText}>
                SSS
            </Link>
          </IconButton>
            
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {content.mainNavigation.map(({ text, i }) => (
                
                <ListItem className={classes.listItems} key={i}>
                    <Link to={'/' + text} className={classes.linkText}>
                    <ListItemText classes={{ primary: classes.listItemText }}>
                        {text}
                    </ListItemText>
                    </Link>
                </ListItem>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={content.mainNavigation} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
