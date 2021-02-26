import React from 'react';
import './main-nav.scss';
import {
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Link,
    Button
  } from '@material-ui/core';

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
    }
}));
export default function MainNav(){
    const classes = useStyle();
    return(
        <React.Fragment>
            <nav className="main-nav">
                <List>
                    {content.mainNavigation.map((page, i) => {
                        return (
                            <ListItem className={classes.listItems} key={page.id}>
                                <Link href={'/' + page.text} className={classes.link}>
                                    <ListItemText classes={{ primary: classes.listItemText }}>
                                        {page.text}
                                    </ListItemText>
                                </Link>
                            </ListItem>
                        )
                    })}
                </List>
            </nav>
        </React.Fragment>
    )
}