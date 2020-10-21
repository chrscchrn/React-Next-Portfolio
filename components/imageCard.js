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
        position: "relative",
        bottom: "-20%",
        margin: 20,
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
                                <Typography className="hoverText" variant="h4">
                                    {props.alt}
                                </Typography>
                                <Typography className="hoverText" variant="h6">
                                    {props.description}
                                </Typography>
                                <Typography className="hoverText" variant="subtitle1">
                                    *Click to go to deployed site
                                </Typography>
                            </div>
                        </a>                       
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
}