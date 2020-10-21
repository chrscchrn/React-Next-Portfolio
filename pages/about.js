import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron';
import IconImage from '../components/iconImage';
import Picture from '../components/picture';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent',
    color: 'black',
    fontFamily: "Times New Roman, Times, serif",
  },
});

export default function About() {

  const classes = useStyles();

  return (
      <div className={classes.root}>

        <Grid container spacing={0} >
          <Navbar />
        </Grid>

        <Grid container spacing={0} >
          <Grid item sm={12}>    
            <Jumbotron title="A Little About Me" subTitle="My education, experiences, and outlook"/>
          </Grid>
        </Grid>

        <Grid 
        container 
        spacing={0} 
        justify="space-around"
        alignItems="center"
        >
          <Grid item sm={12}>
            <h1 className="project-title">My Story</h1>
            <hr/>
          </Grid>
        </Grid>

        <Grid 
        container 
        spacing={4} 
        justify="space-around"
        alignItems="center"
        >
          <Grid item sm={4}>
            <Picture />
          </Grid>

          <Grid item sm={6}>
            <Typography variant="body1" style={{fontSize: "1.35rem"}}>
              Full-stack developer utilizing social science background to create a lasting impression on the user. 
              A recent graduate of Rice University with a certificate in Full-Stack Development with polished skills 
              in JavaScript, React, Node.js, and Material UI. Recently solo developed a social media website, Oscara. 
              Graduated from the University of Houston May of 2020 with a Bachelor of Science in Economics. 
              Intrigued about utilizing developer fundamentals to implement creative ideas
               showcasing elevated applications of technology. Excited to use a holistic approach to 
              development and social science background to augment a driven engineering team.
            </Typography>
          </Grid>
        </Grid>
        
        <Grid 
        container 
        spacing={0} 
        justify="space-around"
        alignItems="center"
        >
          <Grid item sm={12}>
            <h1 className="project-title">My Skills</h1>
            <hr/>
          </Grid>
        </Grid>

        <Grid 
        container 
        direction="row"
        justify="space-around"
        alignItems="center"
         >
          <Grid item sm={2}>
            <IconImage src="\icons\nodejs.png" alt="Node"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\mern.jpg" alt="MERN"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\react.png" alt="React"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\javascript.png" alt="JavaScript"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\materialUI.png" alt="Material-UI"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\next.png" alt="Next-JS"/>
          </Grid>
        </Grid>

        <Grid 
        container 
        direction="row"
        justify="space-around"
        alignItems="center"
        >
          <Grid item sm={2}>
            <IconImage src="\icons\jquery.png" alt="JQuery"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\mongodb.png" alt="Mongo-DB"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\stack.png" alt="Stack Overflow"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\css.svg" alt="CSS"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\handlebars.png" alt="Express-Handlebars"/>
          </Grid>
          <Grid item sm={2}>
            <IconImage src="\icons\mysql.png" alt="SQL"/>
          </Grid>
        </Grid>

        <Footer/>
        
      </div>
  );
  
}