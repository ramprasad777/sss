import React from 'react';
import {Route} from 'react-router-dom';
import {Container, makeStyles} from '@material-ui/core';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import {About, customTabs} from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import CustomTab from '../Pages/Contact/CustomTabs';



const useStyles = makeStyles((theme)=>({
    root:{
        width: "100%",
        // backgroundColor: theme.palette.grey[300],
        padding: theme.spacing(6)
    },
    bodyPanel:{
        textAlign:"left"
    }
}))
export default function Body(){
    const classes = useStyles();
    return(
        <>
        <Container className={classes.root}>
            <div className={classes.bodyPanel}>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/contact2" component={CustomTab} />
            </div>  
        </Container>
        </>
    )
}