import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(217, 28%, 15%)',
    backgroundImage: 'url(images/bg-curvy-desktop.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'contain',
    padding: '50px 50px 200px 50px',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: 'url(images/bg-curvy-mobile.svg)',
      backgroundSize: '175% 60%',
      objectFit: 'fill',
      padding: '25px 25px 200px 25px',
    },
  },
  links: {
    textAlign: 'right',
  },
  content: {
    textAlign: 'center',
  },
  image: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
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

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <img src='images/logo.svg' alt='logo' />
        </Grid>
        <Grid item xs={8} className={classes.links}>
          <CustomButton
            content='Features'
            background='hsl(217, 28%, 15%)'
            color='hsl(0, 0%, 100%)'
            decorationHover='underline'
            fontWeightHover='700'
          />
          <CustomButton
            content='Team'
            background='hsl(217, 28%, 15%)'
            color='hsl(0, 0%, 100%)'
            decorationHover='underline'
            fontWeightHover='700'
          />
          <CustomButton
            content='Sign In'
            background='hsl(217, 28%, 15%)'
            color='hsl(0, 0%, 100%)'
            decorationHover='underline'
            fontWeightHover='700'
          />
        </Grid>
      </Grid>
      <Box className={classes.content}>
        <img src='images/illustration-intro.png' alt='intro' className={classes.image} />
        <h1 className={classes.title}>All your files in one secure location, accessible anywhere.</h1>
        <p className={classes.text}>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        <CustomButton
          content='Get Started'
          background='linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%))'
          backgroundHover='hsl(176, 68%, 64%)'
          color='hsl(0, 0%, 100%)'
          fontWeight='700'
          width='200px'
        />
      </Box>
    </Box>
  );
}

export default Header;
