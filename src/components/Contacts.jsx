import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CustomButton from './CustomButton';
import { CustomFaceBookIcon, CustomTwitterIcon, CustomInstagramIcon } from './Icons'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(216, 53%, 9%)',
    color: 'hsl(0, 0%, 100%)',
    paddingTop: 350,
    paddingBottom: 50,
    paddingLeft: 100,
    paddingRight: 100,
    fontFamily: 'Open Sans',
    fontWeight: 400,
    position: 'relative',
    bottom: 425,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 25,
      paddingRight: 25,
    },
  },
  label: {
    marginLeft: 40,
    position: 'relative',
    bottom: 45,
  },
  icons: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  copyright: {
    textAlign: 'right',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

function Contacts() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <img src='images/logo.svg' alt='logo' />
        </Grid>
        <Grid item xs={12} md={3}>
          <LocationOnIcon />
          <p className={classes.label}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </Grid>
        <Grid item xs={12} md={3}>
          <PhoneInTalkIcon />
          <p className={classes.label}>+1-543-123-4567</p>
          <MailOutlineIcon />
          <p className={classes.label}>example@fylo.com</p>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box>
            <CustomButton
              content='About Us'
              background='hsl(216, 53%, 9%)'
              color='hsl(0, 0%, 100%)'
              fontFamily='Open Sans'
              fontWeight='400'
              fontWeightHover='700'
            />
          </Box>
          <Box>
            <CustomButton
              content='Jobs'
              background='hsl(216, 53%, 9%)'
              color='hsl(0, 0%, 100%)'
              fontFamily='Open Sans'
              fontWeight='400'
              fontWeightHover='700'
            />
          </Box>
          <Box>
            <CustomButton
              content='Press'
              background='hsl(216, 53%, 9%)'
              color='hsl(0, 0%, 100%)'
              fontFamily='Open Sans'
              fontWeight='400'
              fontWeightHover='700'
            />
          </Box>
          <Box>
            <CustomButton
              content='Blog'
              background='hsl(216, 53%, 9%)'
              color='hsl(0, 0%, 100%)'
              fontFamily='Open Sans'
              fontWeight='400'
              fontWeightHover='700'
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box>
            <CustomButton
              content='Contacts Us'
              background='hsl(216, 53%, 9%)'
              color='hsl(0, 0%, 100%)'
              fontFamily='Open Sans'
              fontWeight='400'
              fontWeightHover='700'
            />
          </Box>
          <Box>
            <CustomButton
              content='Terms'
              background='hsl(216, 53%, 9%)'
              color='hsl(0, 0%, 100%)'
              fontFamily='Open Sans'
              fontWeight='400'
              fontWeightHover='700'
            />
          </Box>
          <Box>
            <CustomButton
              content='Privacy'
              background='hsl(216, 53%, 9%)'
              color='hsl(0, 0%, 100%)'
              fontFamily='Open Sans'
              fontWeight='400'
              fontWeightHover='700'
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={2} className={classes.icons}>
          <CustomFaceBookIcon />
          <CustomTwitterIcon />
          <CustomInstagramIcon />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contacts;
