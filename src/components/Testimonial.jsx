import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(219, 30%, 18%)',
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'Open Sans',
    fontWeight: 400,
  },
  title: {
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'Open Sans',
    fontWeight: 700,
  },
  occupation: {
    color: 'hsl(0, 0%, 100%)',
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: 10,
  },
}));

function Testimonial(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        {props.content}
      </CardContent>
      <CardHeader
        avatar=<Avatar src={props.avatar} />
        title=<Box className={classes.title}>{props.name}</Box>
        subheader=<Box className={classes.occupation}>{props.occupation}</Box>
      />
    </Card>
  );
}

export default Testimonial;
