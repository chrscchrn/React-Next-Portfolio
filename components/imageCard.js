import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';

// import Typography from '@material-ui/core/Typography';
// import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    img: {
        maxWidth: "100%",
        border: "white",
        objectFit: "cover"
    },
    hoverText: {
        color: "white",
        textAlign: "center",
        top: "50%"
    }
});
  
export default function imageCard(props) {

    const classes = useStyles();
  
    return (
        <>
            <Grid item sm={6}>
                <Card square>
                    <CardActionArea className="picContainer">
                        <a href={props.link}>
                            <CardMedia
                                className={classes.img}
                                component="img"
                                alt={props.alt}
                                image={props.image}
                                title={props.alt}
                                
                            />
                            <div id="hover">
                                <Typography className={classes.hoverText} varient="h6">
                                    {props.alt}
                                </Typography>
                            </div>
                        </a>                       
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
}