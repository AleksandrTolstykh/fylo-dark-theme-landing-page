import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Feature from './Feature';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(218, 28%, 13%)',
    paddingBottom: 100,
    textAlign: 'center',
  },
}));

function FeatureBlock() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Feature
            image='images/icon-access-anywhere.svg'
            title='Access your files, anywhere'
            content='The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Feature
            image='images/icon-security.svg'
            title='Security you can trust'
            content='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Feature
            image='images/icon-collaboration.svg'
            title='Real-time collaboration'
            content='Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Feature
            image='images/icon-any-file.svg'
            title='Store any type of file'
            content='Whether you`re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureBlock;
