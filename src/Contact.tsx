import { Typography, Button, Box, Grid, FormControl, InputLabel, FormHelperText, Input, FormGroup, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { BsSend } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Element } from "react-scroll";
import theme from "./theme";
import { useState, useEffect } from "react";
import validate from "validate.js";


type Data = {
    service_id: string,
    template_id: string,
    user_id: string,
    template_params: {
        'name': string,
    }
};

export default function About() {
    const useStyles = makeStyles(() => ({
        aboutSection:  {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            border: 'solid',
            margin: '2%',
            padding: '2%',
            // borderRadius: '100px',
            borderColor: 'rgba(6,47,79,0)'
        },
        contactMethods: {
            color: 'black',
            display: 'flex',
            flexDirection: 'row',
        },
        details: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
            // justifyContent: 'center'
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        message: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%'
        },
        messageBox: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: "column"
        },
        contactForm: {
            backgroundColor: '#062F4F',//  theme.palette.primary,
            display: 'flex',
            flexDirection: 'column'
        },
        icons: {
            display:'flex',
            flexDirection: 'row',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center'
        },
        resumeButton: {
            width: '50%',
            alignSelf: 'center'
        },
        input: {
            width: '100%',
            padding: '1em',
            margin: '0.2em',
            backgroundColor: 'inherit',
            resize: 'none',
            borderRadius: '1em',
            borderColor: 'black'
        },
        button: {
            backgroundColor: 'whitesmoke',
            color: 'black',
            padding: '0.7em 2em',
            fontSize: '16px',
            fontWeight: '500',
            textTransform: 'none',
            borderRadius: 50,
            border: '1px solid',
            cursor: 'pointer',
            width: '100%'
        },
        icon: {
            alignSelf: 'center'
        },
        heading: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    }))
    const classes = useStyles();    

    function sendEmail(e:any) {
        console.log(e.target);
        e.preventDefault();
        // console.log(e)
        // emailjs.sendForm('service_po3ajlo', 'template_cddtu5v', e.target, 'ox0FtSFs-iATUKmK9')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
    }

    //use send instead of sendForm

    function send(){
        //get the state of different text areas
        // if they're illegal then say that
        const data:Data = {
            service_id: 'service_po3ajlo',
            template_id: 'template_cddtu5v',
            user_id: 'ox0FtSFs-iATUKmK9',
            template_params: {
                'name': 'Chris',
            }
        };
        emailjs.send('service_po3ajlo', 'template_cddtu5v', data, 'ox0FtSFs-iATUKmK9')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
    }

    const schema = {
        name: {
          presence: { allowEmpty: false, message: 'is required' },
          length: { maximum: 128 },
        },
        email: {
          presence: { allowEmpty: false, message: 'is required' },
            email: true,
            length: { maximum: 300 },
        },
        message: {
            presence: { allowEmpty: false, message: 'is required' },
            length: { maximum: 1000 },
        },
      };

    return (
    <Element id="contact" name="contact">
        <Box className= {classes.aboutSection}>
            <Grid spacing={2} container>
                <Grid item xs = {12} >
                    <Typography align="center" variant="h3" component="h3" gutterBottom sx={{
                                marginBottom: '3%' 
                                }}>
                                Contact me
                    </Typography>
                </Grid>
                <Grid spacing={2} container>
                    <Grid item xs = {12} md = {6} >
                        <Box className = {classes.details} >
                            <Box className= {classes.contactMethods}>
                                <BsSend className= {classes.icon} />
                                <Typography ml={2} variant="body1"> chrisday046@gmail.com</Typography>
                            </Box>
                            <Box className={classes.contactMethods}>
                                <BsTelephone className= {classes.icon} />
                                <Typography ml={2} variant="body1"> +61 490 052 365</Typography>
                            </Box>
                            <Box className={classes.icons}>
                                <a href="https://github.com/chrisday-code" target="_blank">
                                    <FaGithub size='2em' />
                                </a>
                                <a href="https://www.linkedin.com/in/christopher-day-046/" target="_blank">
                                    <FaLinkedin size='2em' />
                                </a>
                            </Box>
                            <Button className={classes.resumeButton} href="/chris-day-resume.pdf" target="_blank" variant="round"> Resume</Button>
                        </Box>
                    </Grid>
                    {/* <Button variant="round"></Button> */}
                    
                    <Grid item xs = {12} md = {6} className={classes.messageBox}>
                        <Box className = {classes.message}>
                            <form onSubmit={sendEmail}>
                                <input id="inputID" className={classes.input} placeholder ="Name" type="text" name="name" />
                                        <input className={classes.input} placeholder = "E-mail" type="email" name="email" />
                                        <textarea className={classes.input} placeholder = "Message" name="message" />
                                <input className={classes.button} type="submit" value="Send" />
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Element>
    )
}