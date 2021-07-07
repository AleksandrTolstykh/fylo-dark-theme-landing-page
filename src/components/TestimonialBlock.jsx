import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Testimonial from './Testimonial';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(218, 28%, 13%)',
    backgroundImage: 'url(images/bg-quotes.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top 60px left 90px',
    padding: 100,
    paddingBottom: 300,
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'top 0 left 30px',
      padding: 25,
      paddingBottom: 300,
    },
  },
}));

function TestimonialBlock() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
          <Testimonial
            content='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
            avatar='images/profile-1.jpg'
            name='Satish Patel'
            occupation='Founder & CEO, Huddle'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Testimonial
            content='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
            avatar='images/profile-2.jpg'
            name='Bruce McKenzie'
            occupation='Founder & CEO, Huddle'
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Testimonial
            content='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.'
            avatar='images/profile-3.jpg'
            name='Iva Boyd'
            occupation='Founder & CEO, Huddle'
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TestimonialBlock;
