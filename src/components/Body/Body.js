import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

export default function Body(){
    return(
        <>
            <div className="bodyPanel">
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/contact" component={Contact} />
            </div>  
        </>
    )
}