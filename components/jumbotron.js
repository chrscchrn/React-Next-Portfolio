import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    hero: {
        fontWeight: "lighter",
        width: '100%',
        textAlign: 'center',
        marginTop: '18%',
        marginBottom: '20%',
        background: 'transparent',
        fontFamily: "Times New Roman, Times, serif",
    },
});

export default function Jumbotron(props) {
    const classes = useStyles();

    return (
            <div className={classes.hero}>
                <Typography align="center" variant="h2" gutterBottom>
                    {props.title}
                </Typography>
                <Typography align="center" variant="h5" gutterBottom>
                    {props.subTitle}
                </Typography>
            </div>            
    );
}
