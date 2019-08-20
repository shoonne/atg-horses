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
  },
  media: {
    height: 140,
  },
});

const RaceScheduleCard = (props) => {
  const classes = useStyles();
  return (
    <div style={{float:'left'}} onClick={props.onClick}>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.startTime}
            </Typography>
          </CardContent>
        </Card>
    </div>

  );
}

export default RaceScheduleCard;