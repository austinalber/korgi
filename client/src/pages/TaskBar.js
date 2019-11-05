import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import KudosCounter from '../components/KudosCounter'; 
import TaskList from '../components/TaskList'; 
import TaskCounter from '../components/TaskCounter'
// import tasks from "../utils/tasks.json";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function TaskBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <KudosCounter />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TaskList />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <TaskCounter />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TaskBar; 