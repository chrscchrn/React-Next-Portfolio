import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron';
import ImageCard from '../components/imageCard';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    background: 'transparent',
    backgroundColor: 'transparent',
    fontFamily: "Times New Roman, Times, serif",

  },
});

export default function Home() {
  const classes = useStyles();

  return (
    
      <div className={classes.root}>

        <Grid container spacing={0} >
          <Navbar />
        </Grid>
        
        <Grid container spacing={0} >
          <Grid item sm={12}>
            <Jumbotron title="Collection" subTitle="A few front, back, and full-stack projects I've worked on"/>
          </Grid>
        </Grid>

        <h1 className="project-title">Full-Stack</h1>
        <hr/>

        <Grid container spacing={0} >
          <ImageCard 
            image="/images/note.png" 
            alt="Notepad"
            link="https://oscarcat.herokuapp.com/"
            description="Notepad is an organizational website for students and researchers. Search for articles, takes notes, save them together."
            github="https://github.com/chrscchrn/Notepad--"
          />
          <ImageCard
            image="/images/newsfeed.png"
            alt="Oscara"
            link="https://oscara.herokuapp.com/"
            description="Oscara is a social network where users can make a profile, post status updates, and like user content."
            github="https://github.com/chrscchrn/Oscara_Social_Network"
          />
        </Grid>

        <h1 className="project-title">Front-End</h1>
        <hr/>

        <Grid container spacing={0} >
          <ImageCard 
            image="/images/movieWide.png" 
            alt="Not Another Movie Database!"
            link="https://chrscchrn.github.io/NotAnotherMovieDb/"
            description="A not-so-random movie generator which presents a movie based on user preferences."
            github="https://github.com/chrscchrn/NotAnotherMovieDb/"
          />
          <ImageCard
            image="/images/port (2).png" 
            alt="React Portfolio"
            link="/about"
            description="Personal portfolio made with create-next-app"
            github="https://github.com/chrscchrn/React-Next-Portfolio"
          />
        </Grid>

        {/* <h1 className="project-title">Back-End & CLI</h1>
        <hr/>

        <Grid container spacing={0} >
          <ImageCard
            image="/images/backend-development.jpeg" 
            alt="Back-end & CLI!"
            link="https://github.com/chrscchrn"
          />
          <ImageCard
            image="/images/backend-development.jpeg" 
            alt="Back-end & CLI"
            link="https://github.com/chrscchrn"
          />
        </Grid> */}

        <Footer/>

      </div>
  );
}
