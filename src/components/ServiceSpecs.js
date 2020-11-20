import React from 'react';
import { makeStyle, makeStyles } from '@material-ui/core/styles';
import CardImg from '../components/CardImg.js';
import cards from '../static/cards.js';
import useWindowPosition from '../hook/useWindowPosition.js';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '80vh',
    },
    centercard: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    sertitle: {
        fontFamily: 'Nunito',
        color: '#4A4B4D',
        fontWeight: '600'
    },
    mission: {
        fontFamily: 'Nunito',
        color: '#6B6C6E',
        marginLeft: '21.5%',
        marginRight: '21.5%',
        fontWeight: '400'
    },
    rootbox: {
        marginTop: '4%'
    }
}));

export default function ServiceSpecs() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="service-specs">
            <Box className={classes.rootbox}>
                <Typography className={classes.sertitle} variant="h3" >
                    Let's Talk Services
                </Typography>
                <br />
                <Typography className={classes.mission} variant="h5" gutterBottom>
                    In an effort to improve logistics services for small transportation business our application facilitates a responsive and reliable truck tracking delivery system that enhances the company-client experience.
                </Typography>
                <br />
            </Box>
            <div className={classes.centercard}>
                <CardImg card={cards[0]} checked={checked} />
                <CardImg card={cards[1]} checked={checked} />
                <CardImg card={cards[2]} checked={checked} />
                <div className="icon icon-info icon-round icon-lg"></div>
            </div>
        </div>
    )
}