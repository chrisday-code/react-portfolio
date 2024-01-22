import { Typography, Grid } from "@mui/material"
import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import theme from "./theme";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Element } from "react-scroll";
import {Paper, FormControlLabel, Switch, Grow} from "@mui/material";
import TabTitles from "./components/TabTitles";
import { useSpring, animated } from '@react-spring/web'




const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
      <svg>
        <Box
          component="polygon"
          points="0,100 50,00, 100,100"
          sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
        />
      </svg>
    </Paper>
  );

export default function About() {
    const [title, setTitle] = useState('Skills')
    const useStyles = makeStyles((theme) => ({
        aboutSection:  {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // border: 'solid',
            margin: '2%',
            padding: '2%',
            borderRadius: '100px',
            minHeight: '450px'
        },
        tabTitles: {
            transition: '1s',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingTop: '0%',
            paddingBottom: '3%'
        },
        tabLinks: {
            cursor: 'pointer',
            transition: '1s',
            textDecoration: 'none'
        },    
        tabLinksActive: {
            cursor: 'pointer',
            transition: '1s',
            textDecoration: 'underline'
        },    
        bodyContainer: {
            display: 'flex',
            flexDirection: 'row'
        },
        list: {
            margin: 0,
            padding: 0,
        },
        listItem: {
            listStyle: 'none'
        },
        tabContents: {
            paddingLeft: '10%',
            padding: '0',
            margin: '0',
            listStyle: 'none',
        },
    }))

    const classes = useStyles();
    // const titles = ['Skills', 'Experience', 'Education']
    // I think this changes state because??? the state of the component changes
    // I think if I move render Tab titles to its own lil project situation I can avoid this.
    // I'm gonna try this.

    // //() => setTitle(myTitle)
    // const renderTabTitles = (titles: any[])=>{
    //     return titles.map((myTitle, index)=>{
    //         return <TabTitles tabName={}/>
    //     })
    // }

    const renderTabContent = (title: string) => {
        if(title==="Skills") {
            return (
                    <List>
                        <ListItem disablePadding>
                                <ListItemText primary="UI/UX" secondary="Designing Web App Interfaces" />
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemText primary="Front End" secondary="Using Modern JS Platforms"/>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemText primary="Databases" secondary="PostgreSQL, SnowSQL"/>
                        </ListItem>
                    </List>
                )
        }
        if(title==="Experience") {
            return (
                    <List>
                        <ListItem disablePadding>
                                <ListItemText primary="TfNSW - Connected Journeys" secondary="React, Angular, NodeJS" />
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemText primary="TfNSW - Graduate" secondary="Using Modern JS Platforms"/>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemText primary="G.James - Intern" secondary="Python, SnowSQL"/>
                        </ListItem>
                    </List>
            )
        }
        if(title==="Education") {
            return (
                <List>
                    <ListItem disablePadding>
                            <ListItemText primary="Univeristy of Queensland" secondary="Bachelors of Electrical & Computer Engineering - Honors" />
                    </ListItem>
                </List>
            )
        }

    }

    
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    //when its clicked pass the data back to the parent
    const handleClickUnderline = (title: string) => {
        // setClicked((prevValue) => !prevValue);
        setTitle(title);
    };

    // Callback function to receive data from the child


    // const renderTabTitles = (titles: any[])=>{
        
    //     return titles.map((myTitle, index)=>{
    //         return <animated.p
    //                 onClick={() => {handleClickUnderline(myTitle)}}
    //                 style={{ borderBottom, cursor: 'pointer' }}>
    //                 {}
    //             </animated.p>
    //     })
    // }

    //this is so stupid I'll fix it later
    const skillsAni = useSpring({
        borderBottom: title==='Skills' ? '2px solid blue' : '2px solid transparent',
        config: { duration: 300 },
        cursor: 'pointer'
    });
    const expAni = useSpring({
        borderBottom: title==='Experience' ? '2px solid blue' : '2px solid transparent',
        config: { duration: 300 },
        cursor: 'pointer'
    });
    const eduAni = useSpring({
        borderBottom: title==='Education' ? '2px solid blue' : '2px solid transparent',
        config: { duration: 300 },
        cursor: 'pointer'
    });

    return (
    <Element id="about" name="about">
            <div className= {classes.aboutSection}>
            <Typography variant="h3" component="h2" gutterBottom id="aboutme">
                About Me
            </Typography>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography color= "textSecondary" variant="body1" component="h2" gutterBottom>
                        Hi I'm Chris!
                    </Typography>
                    <Typography color= "textSecondary" variant="body1" component="h2" gutterBottom>
                        I am a passionate software engineer from Sydney, looking for work with new technologies in the software engineering space.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.tabTitles}>
                        {/* <TabTitles setTitle={setTitle} title={title} tabName="Skills"></TabTitles>
                        <TabTitles setTitle={setTitle} title={title} tabName="Experience"></TabTitles>
                        <TabTitles setTitle={setTitle} title={title} tabName="Education"></TabTitles> */}
                        <animated.p
                            onClick={() => {setTitle('Skills')}}
                            style={skillsAni}>
                            {'Skills'}
                        </animated.p>
                        <animated.p
                            onClick={() => {setTitle('Experience')}}
                            style={expAni}>
                            {'Experience'}
                        </animated.p>
                        <animated.p
                            onClick={() => {setTitle('Education')}}
                            style={eduAni}>
                            {'Education'}
                        </animated.p>
                        {/* <p>{childData}</p> */}
                    </div>
                    <div className={classes.tabContents} >
                        {renderTabContent(title)}
                    </div>
                </Grid>
            </Grid>
        </div>
    </Element>
    )
}