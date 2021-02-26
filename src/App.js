// import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

import { Container, AppBar, makeStyles,
  Grid,
  Link,
  Hidden
} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  root:{
      width: "100vw",
      height: "100vh",
      backgroundColor: theme.palette.grey[300],
      padding: theme.spacing(0)
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container className={classes.root}>
        <AppBar>
          <Grid container className={'container'}>
            <Header />
          </Grid>
        </AppBar>
        <Body />
      </Container>
    </div>
  );
}

export default App;
