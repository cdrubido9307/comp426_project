import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Avatar, Collapse } from '@material-ui/core';
import { blue, pink, green } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '20px',
    },
    media: {
        height: 3,
    },
    title: {
        fontFamily: 'Nunito',
        fontSize: '2rem',
    },
    description: {
        fontFamily: 'Nunito',
        fontSize: '1rem',
    },
    cardavatar1: {
        height: '8rem',
        width: '8rem',
        backgroundColor: blue[400],
    },
    cardavatar2: {
        height: '8rem',
        width: '8rem',
        backgroundColor: pink[400],
    },
    cardavatar3: {
        height: '8rem',
        width: '8rem',
        backgroundColor: green[400],
    },
    divavatar: {
        display: 'flex',
        justifyContent: 'center',
    },
    iconsize: {
        height: '3.5rem',
        width: '4rem',
        color: '#FFF',
    },
});

export default function CardImg({ card, checked }) {
    const classes = useStyles();
    let color_class;

    if (card.color === "blue") {
        color_class = classes.cardavatar1;
    }
    else if (card.color === "pink") {
        color_class = classes.cardavatar2;
    }
    else {
        color_class = classes.cardavatar3;
    }
    return (
        <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
            <Card className={classes.root}>
                <CardContent>
                    <div className={classes.divavatar}>
                        <Avatar className={color_class}>
                            <card.icon fontSize="large" className={classes.iconsize} />
                        </Avatar>
                    </div>
                    <br />
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                        {card.title}
                    </Typography>
                    <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                        {card.description}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse>
    );
}
