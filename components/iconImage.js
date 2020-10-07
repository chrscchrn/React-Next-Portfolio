import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


export default function IconImage(props) {
    return (
        <>
            <img className="iconImage" src={props.src} alt={props.alt} />
        </>
    );
};