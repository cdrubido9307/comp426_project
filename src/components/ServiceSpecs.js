import React from 'react';
import { makeStyle, makeStyles } from '@material-ui/core/styles';
import CardImg from '../components/CardImg.js';
import cards from '../static/cards.js';
import useWindowPosition from '../hook/useWindowPosition.js';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    }
}));

export default function ServiceSpecs() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="service-specs">
            <CardImg card={cards[2]} checked={checked}/>
            <CardImg card={cards[2]} checked={checked}/>
        </div>
    )
}