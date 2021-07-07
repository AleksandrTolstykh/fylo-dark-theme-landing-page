import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';
import EmailField from './EmailField';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(217, 28%, 15%)',
    borderRadius: 10,
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'Raleway',
    fontWeight: 700,
    textAlign: 'center',
    position: 'relative',
    marginLeft: 300,
    marginRight: 300,
    bottom: 175,
    padding: 50,
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 25,
      marginRight: 25,
    },
  },
  text: {
    fontWeight: 400,
  }
}));

function CallToAction(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <h1>Get early access today</h1>
      <p className={classes.text}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
         <EmailField />
        </Grid>
        <Grid item xs={12} md={5}>
          <CustomButton
            content='Get Started'
            background='linear-gradient(90deg, hsl(176, 68%, 64%), hsl(198, 60%, 50%))'
            backgroundHover='hsl(176, 68%, 64%)'
            color='hsl(0, 0%, 100%)'
            fontWeight='700'
            width='100%'
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CallToAction;
