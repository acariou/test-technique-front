import React from 'react';
import { 
  Grid,
  Typography, 
  ButtonBase, 
  makeStyles } from '@material-ui/core';
import CircularChart from './CircularChart';
import { IMG_URL } from '../constants/Config';

const useStyles = makeStyles(theme => ({
  image: {
    width: 185,
    height: 287,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  content: {
    flexGrow: 1,
    width: '69%',
    padding: '0 2%'
  },
}));

function List(props) {
  
  const classes = useStyles();
  const contents = props.content;
  
  return (
    <Grid container spacing={1}>
      { contents.map((content, i) => (
        <Grid item xs={6} key={i}>
          <Grid item xs={12} container>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={`${IMG_URL}${content.poster_path}`} />
              </ButtonBase>
            </Grid>
            <Grid item className={classes.content}>
              <CircularChart />
              <Typography gutterBottom variant="h5">
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
        </Grid>
      )) }
    </Grid>
  );
}

export default List;
