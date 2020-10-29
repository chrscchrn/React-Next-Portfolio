import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { Link, Typography } from '@material-ui/core';

// import Typography from '@material-ui/core/Typography';
// import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    img: {
        maxWidth: "100%",
        border: "white",
        objectFit: "cover"
    },
    hoverText: {
        color: "white !important",
        textAlign: "center",
        position: "relative",
        bottom: "-20%",
        margin: 20,
    }
});
  
export default function imageCard(props) {

    const classes = useStyles();

    function linkClick(event) {
        event.preventDefault();
    }
  
    return (
        <>
            <Grid item sm={6}>
                <Card square>
                    <CardActionArea className="picContainer">
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
                                <Typography className="hoverText" variant="h6">
                                    <a href={props.link} onClick={linkClick} style={{color: "white !important"}}>
                                        Live Application
                                    </a>
                                </Typography>
                                <Typography className="hoverText" variant="h6">
                                    <a href={props.github} onClick={linkClick} style={{color: "white !important"}}>
                                        Github Repository
                                    </a>
                                </Typography>
                            </div>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
}