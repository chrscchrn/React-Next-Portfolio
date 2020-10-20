import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron';
// import ContactInput from '../components/contactinput';
import ContactIcons from '../components/contacticons';

const useStyles = makeStyles({
  root: {
    background: 'transparent',
  },
});

export default function Contact() {

  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Grid container spacing={0} >
          <Navbar />
        </Grid>
        <Grid container spacing={0} >
          <Grid item sm={12}>    
            <Jumbotron title="Let's Talk" subTitle="Avenues to get in contact with me"/>
          </Grid>
        </Grid>

        {/* <Grid 
        container 
        spacing={0} 
        justify="space-around"
        alignItems="center"
        >
          <Grid item sm={12}>
            <h1 className="project-title">Request Info or Send a Message</h1>
            <hr/>
          </Grid>
        </Grid>

        <Grid 
        container 
        spacing={4} 
        justify="center"
        alignItems="center" 
        >
          <ContactInput />
        </Grid> */}

        <Grid 
        container 
        spacing={0} 
        justify="space-around"
        alignItems="center"
        >
          <Grid item sm={12}>
            <h1 className="project-title">My Info</h1>
            <hr/>
          </Grid>
        </Grid>

        <Grid 
        container 
        spacing={0} 
        justify="center"
        alignItems="center" 
        >
          <Grid item sm={2}>    
            <ContactIcons  src="/icons/phone.png" alt="Contact Me Via Phone" title="832-794-2949" />
            
          </Grid>
          <Grid item sm={2}>    
            <ContactIcons src="/icons/email.png" alt="email" title="cochranschris@gmail.com"/>
          </Grid>
          <Grid item sm={2}>    
            <ContactIcons src="/icons/linkedin-logo.png" alt="linkedIn" link="https://www.linkedin.com/in/christophercochran281/" title="LinkedIn"/>
          </Grid>
          <Grid item sm={2}>    
            <ContactIcons src="/icons/github-icon.png" alt="github" link="https://github.com/chrscchrn" title="Github"/>
          </Grid>
          <Grid item sm={2}>    
            <ContactIcons src="/icons/resume.png" alt="resume" link="https://github.com/chrscchrn" title="Resume"/>
          </Grid>
        </Grid>

        <Footer />
      </div>
  );
  
}
