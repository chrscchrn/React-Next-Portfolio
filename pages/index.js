import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron';
import ImageCard from '../components/imageCard';


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
            <Jumbotron title="Portfolio" subTitle="Collection of front, back, and full-stack projects I've worked on"/>
          </Grid>
        </Grid>

        <h1 className="project-title">Full-Stack</h1>
        <hr/>

        <Grid container spacing={0} >
          <ImageCard 
          image="/images/note.png" 
          alt="Notepad, an organizational app for students."
          link="https://oscarcat.herokuapp.com/"
          />
          <ImageCard
          image="/images/coming-soon.png"
          />
        </Grid>

        <h1 className="project-title">Front-End</h1>
        <hr/>

        <Grid container spacing={0} >
          <ImageCard 
          image="/images/movieWide.png" 
          alt="Not Another Movie Database!"
          link="https://chrscchrn.github.io/NotAnotherMovieDb/"
          />
          <ImageCard
          image="/images/port (2).png" 
          alt="React Portfolio"
          link="/about"
          />
        </Grid>

        <h1 className="project-title">Back-End & CLI</h1>
        <hr/>

        <Grid container spacing={0} >
          <ImageCard/>
          <ImageCard/>
        </Grid>

        <Footer/>

      </div>
  );
}
