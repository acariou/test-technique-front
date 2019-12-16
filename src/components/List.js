import React from 'react';
import { 
  Grid, 
  Paper, 
  Typography, 
  ButtonBase, 
  makeStyles } from '@material-ui/core';
import { IMG_URL } from '../constants/Config';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function List(props) {
  
  const classes = useStyles();
  const contents = props.content;
  
  return (
    <div>
      <Grid container spacing={3}>
        { contents.map((content, i) => (
          <Grid item xs={6} key={i}>
            <Paper className={classes.paper}>
              <Grid item xs container direction="row" spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={`${IMG_URL}${content.poster_path}`} />
                  </ButtonBase>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="subtitle1">
                    {content.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {content.release_date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content.overview}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )) }
        </Grid>
    </div>
  );
}

export default List;
