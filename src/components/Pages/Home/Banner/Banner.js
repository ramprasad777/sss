import React from 'react';
import Carousel from "react-material-ui-carousel";
import { Paper, makeStyles } from "@material-ui/core";
import data from '../../../../data/Content.json';
const content = data.sssContent;

const useStyles = makeStyles((theme)=>({
    responsiveImg:{
        width: "100%"
    }
}))

export default function Banner(props){
    return(
        <Carousel>
            {
                content.SlidingBanner.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
function Item(props){
    const classes = useStyles();
    return(
        <Paper>
            <img src={props.item.imgUrl} alt={props.item.name} className={classes.responsiveImg} />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}