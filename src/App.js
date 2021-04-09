// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Header from './components/Header/ResHeader';
import MainHeader from './components/Header/MainHeader';

import { AppBar, Grid} from '@material-ui/core';

import {BrowserRouter as Router} from 'react-router-dom';
import Body from './components/Body/Body';


function App() {
  return (
    <div className="App">
      <Router>
        
          {/* <AppBar>
            <Grid container className={'container'}>
              <Header />
            </Grid>
          </AppBar> */}
          <AppBar>
            {/* <Header /> */}
            <MainHeader />
          </AppBar>
          <Body />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
