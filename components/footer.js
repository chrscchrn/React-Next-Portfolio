import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
      textAlign: 'center !important',
      fontFamily: "Times New Roman, Times, serif !important",
    },
});

export default function Footer() {
    const classes = useStyles();
    
    return(
        <div className={classes.footer}>
            <footer className="footer">
                <p>Developed With React-Next-Express & Designed With Material UI</p>
            </footer>
        </div>     
    );
    
}

