// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route  } from "react-router-dom";
import Header from './components/Header/Header';

import Services from './components/Pages/Services/Services';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home';

import { Container, AppBar, makeStyles,
  Grid
} from '@material-ui/core';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles((theme)=>({
  root:{
      width: "100%",
      height: "100%",
      backgroundColor: theme.palette.grey[300],
      padding:"0",
      paddingTop: theme.spacing(6)
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <Container className={classes.root} fixed>
          <AppBar>
            <Grid container className={'container'}>
              <Header />
            </Grid>
          </AppBar>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
