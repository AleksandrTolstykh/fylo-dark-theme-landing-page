import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  title: {
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'Raleway',
    fontWeight: 700,
    marginLeft: '25%',
    marginRight: '25%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  text: {
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    marginLeft: '25%',
    marginRight: '25%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

function Feature(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={props.image} alt='feature' />
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.text}>{props.content}</p>
    </Box>
  );
}

export default Feature;
