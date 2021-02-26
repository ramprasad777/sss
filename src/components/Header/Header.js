import React from 'react';
import MainNav from '../Navigation/MainNav';

import { makeStyles,
    Grid,
    Link,
    Hidden
} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    logoLink:{
        color:"#fff"
    }
}))
export default function Header(){
    const classes = useStyles();
    return(
        <React.Fragment>
            <Grid item xs={4} sm={2}>
                <Link href="/" className={classes.logoLink}>
                    {/* <img
                    src={droomLogo}
                    alt="Droom"
                    className={classes.headerDcLogo}
                    /> */}
                    logo
                </Link>
            </Grid>
            <Hidden smDown>
                <Grid item xs={12} sm={10} md={10} align="right">
                    <MainNav />
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item xs={2} sm={1} md={1}>
                    {/* <SideDrawer /> */}
                </Grid>
            </Hidden>
        </React.Fragment>
    )
}