import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'

import data from '../../../data/Content.json';

const content = data.sssContent;

export default function MainBanner(props){
    return(
        <Carousel next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) } prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }>
            {
                content.homePageContent.map((item, i)=>
                    <Item key={i} item={item} />
                )
            }
        </Carousel>
    )
}
function Item(props){
    return(
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}