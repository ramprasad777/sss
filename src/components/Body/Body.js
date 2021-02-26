import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Services from '../Pages/Services/Services';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';

export default function Body(){
    return(
        <>
            <BrowserRouter>
                <div className="bodyPanel">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/services" component={Services} />
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    )
}