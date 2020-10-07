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
                <p>DEVELOPED WITH REACT-NEXT-EXPRESS & DESIGNED WITH MATERIAL UI</p>
            </footer>
        </div>     
    );
    
}

