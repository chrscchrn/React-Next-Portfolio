import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';


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
                <FormControl fullWidth className={classes.margin} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">Name</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                    />
                </FormControl>
            </Grid>
            <Grid item sm={8}>
                <FormControl fullWidth className={classes.margin} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">Email</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                    />
                </FormControl>
            </Grid>
            <Grid item sm={8}>
                <FormControl fullWidth className={classes.margin} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">Body</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                    />
                </FormControl>
            </Grid>
            
        </>
    );
};