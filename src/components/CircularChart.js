import './cicularChart.css';
import React from 'react';
import { makeStyles } from '@material-ui/core';

function CircularChart(props) {
  
    const classes = makeStyles(theme => ({
        flexWrapper: {
            display: 'flex',
            flexFlow: 'row nowrap'
        },
    }));
    
    return (
      <div className={classes.flexWrapper}>
        <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path 
                    className="circle-bg" 
                    d="M18 2.0845 
                    a 15.9155 15.9155 0 0 1 0 31.831 
                    a 15.9155 15.9155 0 0 1 0 -31.831" 

                    />
                <path 
                    className="circle" 
                    stroke-dasharray="40, 100" 
                    d="M18 2.0845 
                        a 15.9155 15.9155 0 0 1 0 31.831 
                        a 15.9155 15.9155 0 0 1 0 -31.831" 

                        />
                <text x="18" y="20.35" className="percentage">40%</text>
            </svg>
        </div>
      </div>
    );
  }
  
  export default CircularChart;

  