import React, {useState} from 'react';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    IconButton,
    Drawer
  } from "@material-ui/core";

import '../Navigation/main-nav.scss';
import { Link } from "react-router-dom";
import data from '../../data/Content.json';
const content = data.sssContent;


const useStyle = makeStyles(theme => ({
    navigation: {
      display: 'inline',
      '& .MuiList-root': {
        padding: theme.spacing(0)
      },
      '& .MuiListItemText-root': {
        margintop: theme.spacing(1.4)
      }
    },
    link: {
      position: 'relative',
      display: 'inline-block',
      textDecoration: 'none',
      color: '#fff',
      padding: theme.spacing(0, 2.2),
      verticalAlign: 'middle',
      height: 'auto',
      lineHeight: theme.spacing,
      '&:last-chld:before': {
        content: `""`,
        position: 'absolute',
        left: 0,
        top: 0,
        height: 10,
        background: '#333',
        width: 1
      }
    },
    subLink: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      fontSize: 14,
      verticalAlign: 'middle'
    },
    listItemText: {
      fontSize: 14,
      margin: 0,
      verticalAlign: 'top',
      cursor: 'pointer'
    },
    myIcon: {
      verticalAlign: 'middle'
    },
    listItems: {
      padding: 0,
      display:'inline-block',
      width: 'auto'
    },
    sectionDesktop:{
      display:"none",
      [theme.breakpoints.up("md")]:{
        display: "flex",
      }
    },
    header: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
          paddingLeft: 0,
        },
      },
      logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
      },
      toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
      drawerContainer: {
        padding: "20px 30px",
        '& li': {
          display:"block",
          '& a':{
            color:"#000"
          }
        }
    },
}));

export default function MainHeader() {
    const classes = useStyle();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
            {content.mainNavigation.map((page, i) => {
            return (
              <ListItem className={classes.listItems} key={page.id}>
                <Link to={'/' + page.text} className={classes.link}>
                  <ListItemText classes={{ primary: classes.listItemText }}>
                    {page.text}
                  </ListItemText>
                </Link>
              </ListItem>
            )
          })}
            </List>
        </div>
    );

return (
    <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        ))}
    </div>
    );
}
