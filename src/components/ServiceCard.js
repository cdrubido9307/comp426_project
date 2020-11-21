import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    background: 'rgba(0,0,0,0.4)',
    margin: '20px'
  },
  media: {
    height: 140,
  },
  cardtitle: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#FFF',
  },
  carddescription: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#DDD',
  },
});

export default function ServiceCard({ place }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={place.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2">
            {place.title}
          </Typography>
          <Typography className={classes.carddescription} variant="body2" color="textSecondary" component="p">
            {place.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
