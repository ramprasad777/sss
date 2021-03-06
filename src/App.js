// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { Container, AppBar, makeStyles, Grid} from '@material-ui/core';

import {BrowserRouter as Router} from 'react-router-dom';
import Body from './components/Body/Body';

const useStyles = makeStyles((theme)=>({
  root:{
      width: "100vw",
      height: "100vh",
      // backgroundColor: theme.palette.grey[300],
      padding: theme.spacing(6)
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
          <Body />
          <Footer />
        </Container>
      </Router>
    </div>
  );
}

export default App;
