import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(218, 28%, 13%)',
    padding: 100,
    [theme.breakpoints.down('sm')]: {
      padding: 25,
      paddingBottom: 100,
    },
  },
  content: {
    color: 'hsl(0, 0%, 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
  },
  title: {
    fontFamily: 'Raleway',
    fontWeight: 700,
  },
  text: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
  },
}));

function Body() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img src='images/illustration-stay-productive.png' alt='stay-productive' width='100%' />
        </Grid>
        <Grid item xs={12} md={6} className={classes.content}>
        <h1 className={classes.title}>Stay productive, wherever you are</h1>
        <p className={classes.text}>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
        <p className={classes.text}>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        <CustomButton
          content='See how Fylo works'
          background='hsl(218, 28%, 13%)'
          color='hsl(176, 68%, 64%)'
          colorHover='hsl(0, 0%, 100%)'
          decoration='underline'
          decorationHover='underline'
          fontFamily='Open Sans'
        />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Body;
