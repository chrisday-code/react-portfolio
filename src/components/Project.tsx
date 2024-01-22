import { Box, Typography, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Image } from "mui-image";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import theme from '../theme';


interface ProjectProps{
    name: string,
    hyperlink?: string,
    gitHub?: string,
    image: string,
}

export default function Project(props:ProjectProps) {

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        console.log('entered');
        setIsHovered(true);
    };

    const useStyles = makeStyles(() => ({
        project: {
            padding: '5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
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
            flexDirection: 'row',
            justifyContent: 'center',
            height: '400px',
            width: '300px',
        },
        overlay: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            background: 'linear-gradient(transparent, rgba(250,0,0))',
            width: '100%',
            height: '100%',
            borderRadius: '5%',
            transition: '.7s ease',
            opacity: isHovered?'1':'0',
        },
        })
    )
    const classes = useStyles();
    

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    //when its clicked pass the data back to the parent

    return (
        <Grid item xs={12} md={6}>
             <Box className={classes.project}>
                 <Box className={classes.imageBox} onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                     <Image style={{borderRadius: '5%'}}
                            src={require(`../${props.image}`)} alt={props.name}/>
                     <Box className={classes.overlay}>
                        <Box className={classes.buttonBox}>
                            <Button variant="round" color="primary" endIcon={<FaGithub />}>GitHub</Button>
                            <Button variant="round" endIcon={<FaExternalLinkAlt />}>Live Demo</Button>
                        </Box>
                     </Box>
                 </Box>
                 <Typography variant="h4" component="h2" gutterBottom>
                             {props.name}
                 </Typography>
             </Box>
        </Grid>
    )
}