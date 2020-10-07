import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContactIcons(props) {

    const classes = useStyles();

    return (
        <>
            <img className="iconImage" src={props.src} alt={props.alt} />
            <Button  variant="contained" btnSrc={props.btnSrc}>{props.title || props.button}</Button>
            {console.log(props)}
        </>
    );
};