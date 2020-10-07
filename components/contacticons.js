import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(),
    },
  },
}));

export default function ContactIcons(props) {

    const classes = useStyles();

    return (
        <>  
          <img className="iconImage" src={props.src} alt={props.alt} />
          <Typography variant="h6">{!props.link ? props.title : <a href={props.link}>{props.title}</a>}</Typography>
        </>
    );
};