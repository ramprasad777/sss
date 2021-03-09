import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));
 function About(){
    const classes = useStyles();
    return(
        <>
            <div className={classes.root}>
                <Grid container spacing={9}>
                    <Grid item xs={12} sm={9}>
                        <h1>What is Lorem Ipsum?</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

class customTabs extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : 'used'
        };
        this.toggleRadio = this.toggleRadio.bind(this);
    }
    toggleRadio(e){
        this.setState({
            value: e.target.value
        })
        console.log(e.target.value)
    }
    render(){
        return(
            <div className="" style={{paddingTop:"100px"}}>
                <label htmlFor="used">
                    <input type="radio" name="type" value="used" id="used" defaultChecked onChange={this.toggleRadio}
                        />
                    Used
                </label>
                <label htmlFor="new">
                    <input type="radio" name="type" value="new" id="new" onChange={this.toggleRadio} />
                    New
                </label>
                <label htmlFor="old">
                    <input type="radio" name="type" value="old" id="old" onChange={this.toggleRadio} />
                    Old
                </label>
                {
                    this.state.value === 'used'?
                    <div className="used">used</div>
                    :this.state.value === 'new'?
                    <div className="new">new data</div>
                    :
                    <div className="old">old data</div>
                }
            </div>
        )
    }
}
export {About, customTabs} ;