import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

export default function ContactInput(props) {
    
    const classes = useStyles();

    return (
        <>
            <Grid item sm={8}>
                <FormControl 
                    fullWidth 
                    className={classes.margin} 
                    variant="outlined"
                >
                    <InputLabel 
                    htmlFor="component-outlined"
                    >
                        Name
                    </InputLabel>
                    <OutlinedInput 
                    id="component-outlined" 
                    // value={name} 
                    // onChange={handleChange} 
                    label="Name" 
                    />
                </FormControl>
            </Grid>
            
            <Grid item sm={8}>
                <FormControl 
                    fullWidth 
                    className={classes.margin} 
                    variant="outlined"
                >
                    <InputLabel 
                    htmlFor="component-outlined"
                    >
                        Email
                    </InputLabel>
                    <OutlinedInput 
                    id="component-outlined" 
                    // value={name} 
                    // onChange={handleChange} 
                    label="Name" 
                    />
                </FormControl>
            </Grid>

            <Grid item sm={8}>
                <FormControl 
                    fullWidth 
                    className={classes.margin} 
                    variant="outlined"
                >
                    <TextField
                        id="outlined-textarea"
                        label="Message"
                        placeholder=""
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </FormControl>
            </Grid>
            <Grid item sm={8}>
                <IconButton 
                aria-label="delete" 
                color="grey" 
                style={{ fontSize: "1.1rem", 
                    color: "grey", 
                    border: "grey solid 2px", 
                    borderRadius: 6 }}
                >
                    Send
                </IconButton>
            </Grid>

        </>
    );
};