import { Typography, Button, Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Image } from 'mui-image';
import { Element } from "react-scroll";
import {Link as ScrollLink} from 'react-scroll'


export default function Home() {
    const useStyles = makeStyles((theme) => ({
            photo: {
                minWidth: '50%',
            },
            h5: {
                fontWeight: 'bold',
            },
            buttonBox: {
                minWidth: '70%',
                display: 'flex',
                justifyContent: 'space-between',
            }, 
            text: {
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
            selfImage: {
                maxWidth: '80%',
                borderRadius: '100%',
                border: 'solid',
                margin: '5%',
            },
            section: {
                display: 'flex',
                flexDirection: 'row',
                // border: 'solid',
                margin: '200px 2% 2% 2%', // top right bottom left
                borderRadius: '100px',
                padding:'2%',
            }
        })
    )

    const classes = useStyles();

    return (
    <Element id="home" name="home">
        <Box className= {classes.section}>
            <Grid container>  
                {/* <Grid item xs={12} md={6}>
                    <Image src={require('./img/selfie.jpeg')} className={classes.selfImage}/>
                </Grid> */}
                <Grid item xs={12} md={12}>
                    <Box className = {classes.text}>
                        <Typography color="textPrimary" variant="h3" component="h2" gutterBottom>
                            Chris Day
                        </Typography>
                        <Typography className={classes.h5} variant="h5" component="h2" gutterBottom>
                            Software & Firmware Engineer
                        </Typography>
                        <Box className={classes.buttonBox}>
                            {/* <a href="/chris-day-resume.pdf" target="_blank"><Button variant="round"> Resume</Button></a> */}
                            <Button href="/chris-day-resume.pdf" target="_blank" variant="round"> Resume</Button>
                            <ScrollLink
                                to="contact" 
                                spy={true} 
                                smooth={true} 
                                duration={500} 
                                className='some-class'
                                activeClass='some-active-class'
                                offset={-120}
                                >
                                <Button variant="round">Contact Me</Button>
                            </ScrollLink> 
                            
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Element>)
}