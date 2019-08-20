import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));





const RaceTable = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Number</TableCell>
            <TableCell align="right">Horse Name</TableCell>
            <TableCell align="right">Driver</TableCell>
            <TableCell align="right">Trainer</TableCell>
            <TableCell align="right">Horse Father</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow>
              <TableCell align="left">{props.number}</TableCell>
              <TableCell align="right">{props.horseName}</TableCell>
              <TableCell align="right">{props.driver}</TableCell>
              <TableCell align="right">{props.trainer}</TableCell>
              <TableCell align="right">{props.horseFather}</TableCell>
            </TableRow>
      
        </TableBody>
      </Table>
    </Paper>
  );
}

export default RaceTable