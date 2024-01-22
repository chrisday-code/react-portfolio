import { Typography, Grid } from "@mui/material"
import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import theme from "./theme";
import { forwardRef } from "react";
import { Element } from 'react-scroll';
import Image from "mui-image";
// import reactLogo from './img/logos/react-icon.svg';
import {ReactComponent as ReactLogo} from './img/logos/react-icon.svg';
import {ReactComponent as AngularLogo} from './img/logos/angular-icon.svg';
import {ReactComponent as TypescriptLogo} from './img/logos/typescript-icon.svg';
import {ReactComponent as JavascriptLogo} from './img/logos/javascript-icon.svg';
import {ReactComponent as PostgreSQLLogo} from './img/logos/postgresql-icon.svg';
import {ReactComponent as NodeJSLogo} from './img/logos/nodejs-icon.svg';
import {ReactComponent as GitLogo} from './img/logos/git-icon.svg';
import {ReactComponent as HTMLLogo} from './img/logos/html-icon.svg';
import {ReactComponent as CSSLogo} from './img/logos/css-icon.svg';
import {ReactComponent as BitBucketLogo} from './img/logos/bitbucket-icon.svg';
import Skillset from "./components/Skillset";
import { motion } from "framer-motion"
// import Card from "@mui/material";
// import CardActions from "@mui/material";

type Skill = {
    name: string;
    level: string;
    logo: JSX.Element; // Assuming the logo is a JSX element
  };
  
type SkillCollection = {
    name: string;
    skills: Skill[];
};
  

export default function Experience(props:any) {

    const useStyles = makeStyles(() => ({
        aboutSection:  {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            // border: 'solid',
            margin: '2%',
            padding: '2%',
            borderRadius: '100px',
           
        },
        bodyContainer: {
            display: 'flex',
            flexDirection: 'row',
            minHeight: '400px',
            width: '100%'
        },
        developmentType: {
            display: 'flex',
            flexDirection: 'column',
        },
        skillImage: {
            height: '10px',
        }
    }))


    
    const skillExample = {name: 'frontEnd', 
    skills: [{
        name: 'React', 
        level: 'Intermediate',
        logo:  <ReactLogo height="20px" width="20px"/>,
            }]
    }


    const frontEnd: SkillCollection = 
    {name: 'Front End', 
    skills: [
            {
                name: 'React', 
                level: 'Intermediate',
                logo:  <ReactLogo height="20px" width="20px"/>,
            },
            {   name: 'Angular', 
                level: 'Intermediate',
                logo:  <AngularLogo height="20px" width="20px"/>,
            },
            {   name: 'Typescript', 
                level: 'Intermediate',
                logo:  <TypescriptLogo height="20px" width="20px"/>,
            },
            {   name: 'Javascript',
                level: 'Intermediate',
                logo:  <JavascriptLogo height="20px" width="20px"/>,
            }
        ]
    };

    const backEnd = 
    {name: 'Back End', 
    skills: [
                {   name: 'PostgreSQL', 
                    level: 'Intermediate',
                    logo:  <PostgreSQLLogo height="20px" width="20px"/>,
                },
                {   name: 'NodeJS', 
                    level: 'Intermediate',
                    logo:  <NodeJSLogo height="20px" width="20px"/>,
                },
                {   name: 'Git', 
                    level: 'Intermediate',
                    logo:  <GitLogo height="20px" width="20px"/>,
                },
                {   name: 'CSS', 
                    level: 'Intermediate',
                    logo:  <CSSLogo height="20px" width="20px"/>,
                },
                {   name: 'HTML', 
                    level: 'Advanced',
                    logo:  <HTMLLogo height="20px" width="20px"/>,
                },
                {   name: 'BitBucket', 
                    level: 'Intermediate',
                    logo:  <BitBucketLogo height="20px" width="20px"/>,
                }
            ]
    };

    const skillSets = [frontEnd, backEnd];

    const classes = useStyles();

    //this is going to go into skillset
    // const renderSkills = (skill: any[]) => {
    //     return skill.map((skill, index) => {
    //         return (
    //             <Box>
                    
    //             </Box>
    //         )
    //         // return (
    //         //     <Grid item xs ={6} md={6} display="flex" alignItems="center" justifyContent={"center"} gap="1em">
    //         //        {skill.logo}
    //         //         <Box display="flex" flexDirection="column">
    //         //             <Typography variant="h6">
    //         //                 {skill.name}
    //         //             </Typography>
    //         //             <Typography variant="body1">
    //         //                 {skill.level}
    //         //             </Typography>
    //         //         </Box>
    //         //     </Grid>
    //         // )
    //     })
    // }

    //render skills
    // const renderSkills = (skill: any[]) => {
    //     return <Box>

    //     </Box>
    // }

    const renderSkills = (skillSet: any[]) => {
        return skillSet.map((skillType, index)=> {
            return(
                <Skillset name = {skillType.name} 
                       skills={skillType.skills}/>
            )
        })
    }



    return(<Element id="experience" name="experience">
            {/* <motion.div transition={{layout: {duration:1, type: "spring"}}}
                    layout > */}
            <Box className= {classes.aboutSection}>
                    <Typography variant="h3" component="h3" gutterBottom sx={{
                            marginBottom: '3%' 
                            }}>
                            My Skills
                    </Typography>
                    <Box className = {classes.bodyContainer}>
                        <Grid container spacing={2} alignItems={"center"}> 
                            {renderSkills(skillSets)}
                        </Grid>
                    </Box>
            </Box>
            {/* </motion.div> */}
        </Element>)
    // <Element id="experience" name="experience">
    //             <Box className= {classes.aboutSection} ref={props.ref}>
    //                 <Typography variant="h3" component="h3" gutterBottom sx={{
    //                     marginBottom: '3%' 
    //                     }}>
    //                     My Skills
    //                 </Typography>
    //                 <Grid container >
    //                     <Grid item xs={12} md={6}>
    //                         <Box className = {classes.developmentType}>
    //                             <Typography variant="h4" component="h4" gutterBottom alignSelf={"center"}>
    //                                 Front End
    //                             </Typography>
    //                             <Grid container>
    //                                 {renderSkills(frontEnd)}
    //                             </Grid>
    //                         </Box>
    //                     </Grid>
    //                     <Grid item xs={12} md={6}>
    //                         <Box className = {classes.developmentType}>
    //                             <Typography variant="h4" component="h4" gutterBottom alignSelf={"center"}>
    //                                 Back End 
    //                             </Typography>
    //                             <Grid container>
    //                                 {renderSkills(backEnd)}
    //                             </Grid>
    //                         </Box>
    //                     </Grid>
    //                 </Grid>
    //             </Box>
    //         </Element>
}