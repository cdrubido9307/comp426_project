import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px'
  },
  media: {
    height: 440
  },
  title: {
    fontFamily: 'Nunito',
    //fontWeight: 'bold',
    fontSize: '2rem',
    color: '#FFF'
  },
  description: {
    fontFamily: 'Nunito',
    fontWeight: 'lighter',
    fontSize: '1rem',
    color: '#DDD'
  }
});

export default function CardImg({ card, checked }) {
  const classes = useStyles();
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 }: {})}>
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