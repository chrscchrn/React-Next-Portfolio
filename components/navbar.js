import React from 'react';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    menu: {
      backgroundColor: 'black',
      border: 'black 1px solid',
      marginRight: 100,
      color: "white",
    },
});



export default function Navbar() {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <Grid item sm={6}>
                <h2 className="name">CHRISTOPHER COCHRAN</h2>
            </Grid>
            <Grid item sm={6} style={{ textAlign: "end" }}>
                <IconButton color="white" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuSharpIcon style={{ color: "black" }} fontSize="large"/>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    classes={{paper: classes.menu}}
                >
                    <MenuItem onClick={handleClose}><Link href="/"><a className="nav-link">PORTFOLIO</a></Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/about"><a className="nav-link">ABOUT</a></Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href="/contact"><a className="nav-link">CONTACT</a></Link></MenuItem>
                </Menu>
            </Grid>
        </>
    );
    
}