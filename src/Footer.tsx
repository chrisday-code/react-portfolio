import { Typography, Grid } from "@mui/material"
import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';    
import { MutableRefObject } from "react"
import "./styles.css";
import {Link as ScrollLink} from 'react-scroll'
import theme from './theme';


export default function Footer(props:any) {

    const useStyles = makeStyles(() => ({
        linkTypography: {
            textAlign: 'center',
            cursor: 'pointer',
            opacity: '1'
        },
        outerBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1em',
            background: 'linear-gradient(transparent, rgb(6,47,79, 0.2))',
            marginBottom: '-25px'
        },
        innerBox: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '2em'
        }

    }))

    const classes = useStyles();

    return (
        <Box className={classes.outerBox} >
            <Box className = {classes.innerBox}>
                    <Typography  variant="h6" className={classes.linkTypography}>
                        <ScrollLink
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class'
                        activeClass='some-active-class'
                        offset={-120}
                        >
                        About
                        </ScrollLink> 
                    </Typography>
                    <Typography variant="h6" className={classes.linkTypography}>
                        <ScrollLink
                        to="experience" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class'
                        activeClass='some-active-class'
                        offset={-120}
                        >
                        Experience
                        </ScrollLink> 
                    </Typography>
                    <Typography variant="h6" className={classes.linkTypography}>
                        <ScrollLink
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class'
                        activeClass='some-active-class'
                        offset={-120}
                        >
                        Projects
                        </ScrollLink> 
                    </Typography>
                    <Typography variant="h6" className={classes.linkTypography}>
                        <ScrollLink
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class'
                        activeClass='some-active-class'
                        offset={-120}
                        >
                        Contact
                        </ScrollLink> 
                    </Typography>
            </Box>
            <Typography variant="caption">
                Copyright © 2023. Chris Day. All Rights Reserved
            </Typography>
        </Box>
    )
}