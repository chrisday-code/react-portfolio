import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';    
import {Typography} from '@mui/material';
import { makeStyles } from "@mui/styles";
import React, { Component, useState, useEffect } from "react";
import { MutableRefObject } from "react"
import "./styles.css";
import {Link as ScrollLink} from 'react-scroll'
import theme from './theme';

interface props{
    experience: MutableRefObject<null>
}

export default function Navbar(props:props) {
    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const [navTextColor, setnavTextColor] = useState(theme.palette.text.primary);
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor(theme.palette.text.primary) : setnavColor("transparent");
        window.scrollY > 10 ? setnavTextColor(theme.palette.background.default): setnavTextColor(theme.palette.text.primary);
        window.scrollY > 7 ? setnavSize("5rem") : setnavSize("10rem");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
        window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const useStyles = makeStyles(() => ({
        navBar: {
            height: navSize,
            backgroundColor: navColor,
            color: navTextColor,
            transition: '1s',
            cursor: 'auto',
        },
        appBar: {
            backgroundColor: 'green',
            elevation: 0,
        },
        linkTypography: {
            flexGrow: 1, 
            textAlign: 'center',
            // cursor: 'pointer'
        }

    }))

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1, position: "sticky", zIndex: '1' }}>
            <AppBar elevation={0}>
                <Toolbar variant="dense" className={classes.navBar}>
                    <Typography variant="h6" className={classes.linkTypography}>
                        <ScrollLink 
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class'
                        activeClass='some-active-class'
                        offset={-120}
                        style={{cursor: "pointer"}}
                        >
                        Chris Day
                        </ScrollLink> 
                    </Typography>
                    <Typography  variant="h6" className={classes.linkTypography}>
                        <ScrollLink
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={500} 
                        className='some-class'
                        activeClass='some-active-class'
                        offset={-120}
                        style={{cursor: "pointer"}}
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
                        style={{cursor: "pointer"}}
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
                        style={{cursor: "pointer"}}
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
                        style={{cursor: "pointer"}}
                        >
                        Contact
                        </ScrollLink> 
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
