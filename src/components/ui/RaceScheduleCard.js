import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
    marginRight:50,
    marginBottom: 20,
    color: 'white',
    background: 'linear-gradient(45deg, #024f94 30%, #006fe3 90%)',
  },

  cardTwo: {
    maxWidth: 245,
    marginRight:50,
    marginBottom: 20,
    color: 'black',
    background: 'white',
  },
  media: {
    height: 140,
  },
});

const RaceScheduleCard = (props) => {
  const classes = useStyles();
  return (
    <div style={{float:'left'}} onClick={props.onClick}>
        <Card raised={true} className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.type}
            </Typography>
            <Typography variant="body2" component="p">
                {props.startTime.slice(0,10) + " " + props.startTime.slice(14,20) }
            </Typography>
          </CardContent>
        </Card>
        {props.gameDetails === null || props.type === "V65" ? null : 
        props.gameDetails.id && props.gameDetails.id === props.id ? 
        props.gameDetails.races.map((race, i)=> {

            return( 
              <Card raised={true} key={i} className={classes.cardTwo}>
              <CardContent>
                <Typography  className={classes.title}  component="p" gutterBottom>
                {race.name ? race.name : 'No name'}
                </Typography>
                <Typography variant="body1" component="h2">
                {race.startTime.slice(0,10) + " " + race.startTime.slice(14,20) }
                </Typography>
                <Typography className={classes.pos}>
                  Number: {race.number}
                </Typography>
              </CardContent>
            </Card>

            )}) : null}        
    </div>

  );
}

export default RaceScheduleCard;