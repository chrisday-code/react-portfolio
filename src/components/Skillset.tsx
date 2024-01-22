import { Box, Typography, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Image } from "mui-image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import theme from '../theme';
import {motion, AnimatePresence} from "framer-motion"

//probably going to take in a list of skills and a title
interface skillSetProps{
    name: string,
    skills: Skill[],
    // gitHub?: string,
    // image: string,
}

type Skill = {
    name: string;
    level: string;
    logo: JSX.Element; // Assuming the logo is a JSX element
};
  
// type SkillCollection = {
//     name: string;
//     skills: Skill[];
// };

export default function Skillset(props:skillSetProps) {
    console.log('skills: ', props.skills);

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        console.log('entered');
        setIsHovered(true);
    };
    const [isOpen, setIsOpen] = useState(true);

    const useStyles = makeStyles(() => ({
        skillSet: {
            padding: '1%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'whitesmoke',
            borderRadius: '1rem',
            boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'
            // height: '400px'
        },
        buttonBox: {
            display: 'flex',
            flexDirection: 'row',
            height: '15%',
            justifyContent: 'space-between',
            gap: '1em',
            margin: '2%',
        },
        imageBox: {
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // height: '400px',
            // maxWidth: '300px',
        },
        overlay: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            background: 'linear-gradient(transparent, rgba(250,0,0, 0.1))',
            width: '100%',
            height: '100%',
            borderRadius: '5%',
            transition: '.7s ease',
            opacity: isHovered?'1':'0',
        },
        card: {
            backgroundColor: 'white'
        }
        })
    )
    const classes = useStyles();
    

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // display the skills in a little grid I think
    //when its clicked pass the data back to the parent


    const renderSkills = (skill: Skill[]) => {
            return skill.map((skill, index) => {
                return (
                    <Grid item xs ={6} md={6} display="flex" alignItems="center" justifyContent={"start"} gap="1em" border='1em'>
                    <Box>{skill.logo}</Box>
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h6">
                                {skill.name}
                            </Typography>
                            <Typography variant="body1">
                                {skill.level}
                            </Typography>
                        </Box>
                    </Grid>
                )
            })
        }

    // const renderSkills = () =>{
    //     return props.skills.map(skill, index) => {

    //     }
    // }

    return (
        <Grid item xs={12} md={6} >
            {/* <motion.div transition={{layout: {duration:1, type: "spring"}}}
                    layout > */}
                <Box className={classes.skillSet} component = {motion.div} transition={{layout: {duration:1, type: "spring"}}}
                    layout 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} 
                    onClick={()=>{setIsOpen(!isOpen)}}>
                    <Box className={classes.imageBox}>
                        <motion.h2 layout="position">
                            <Typography variant="h4" component="h2" gutterBottom>
                                    {props.name}
                            </Typography>
                        </motion.h2>
                        {isOpen && <motion.div 
                            initial ={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            transition = {{duration: 1}}>
                            <Grid container rowSpacing = {2} columnSpacing={10}>
                            {renderSkills(props.skills)}
                            </Grid>
                        </motion.div>}
                        <Box className={classes.overlay}>
                            <Box className={classes.buttonBox}>
                        </Box>
                        </Box>
                    </Box>
                </Box>
            {/* </motion.div> */}
        </Grid>
        
    )
}