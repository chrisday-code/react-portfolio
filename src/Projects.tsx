import { Box, Typography, Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Image } from "mui-image";
import { Element } from "react-scroll";
import Project from "./components/Project";

export default function Projects() {
    const useStyles = makeStyles(() => ({
        section:  {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '2%',
            padding: '2%',
            borderRadius: '100px',
            minHeight: '550px'
        },
        project: {
            padding: '5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        buttonBox: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '1em'
        },
        imageBox: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            height: '400px',
            width: '300px',
        },
        })
    )

    const classes = useStyles();


    const projects = [
                {name: 'Personal Website', image: 'img/resume.png'}, 
                {name: 'Movie Club', image: 'img/movie-club.jpeg'}
            ];

    const renderProjects = (projects: any[]) => {
        return projects.map((project, index)=> {
            return(
                <Project name = {project.name} image = {project.image}/>
            )
        })
    }

    return (
    <Element id="projects" name="projects">
        <Box className= {classes.section}>
                <Typography variant="h3" component="h3" gutterBottom sx={{
                        marginBottom: '3%' 
                        }}>
                        Projects
                    </Typography>
            <Grid container spacing={2}>
                {renderProjects(projects)}
            </Grid>
        </Box>
    </Element>
    )


}