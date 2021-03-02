import React from 'react';
import {Route} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

const useStyles = makeStyles((theme)=>({
    bodyPanel:{
        textAlign:"left"
    }
}))
export default function Body(){
    const classes = useStyles();
    return(
        <>
            <div className={classes.bodyPanel}>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/contact" component={Contact} />
            </div>  
        </>
    )
}