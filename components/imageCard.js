import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    img: {
        maxWidth: "100%",
        border: "white"
    },

    // CardContent: {
    //     textAlign: "center",
    // }
});
  
export default function imageCard(props) {

    const classes = useStyles();
  
    return (
        <>
            <Grid item sm={6}>
                <Card className={classes.img} square>
                    <CardActionArea>
                        <a href={props.link}>
                        <CardMedia
                            component="img"
                            alt={props.alt}
                            image={props.image}
                            title={props.alt}
                            
                        />
                        </a>
                        {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                            </Typography>
                        </CardContent> */}
                        
                    </CardActionArea>
                </Card>
            </Grid>

        </>
    );
}