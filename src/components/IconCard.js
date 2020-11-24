import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '20px',
    },
    media: {
        height: 140,
    },
});

export default function IconCard({ card, checked }) {
    const classes = useStyles();

    return (
        <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={card.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
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
