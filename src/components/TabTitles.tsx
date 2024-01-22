import React from 'react';
import { Box } from '@mui/material';
import '../styles.css';
import { useRef } from 'react';
import {Typography} from '@mui/material';
import { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { useSpring, animated } from '@react-spring/web'


interface TabProps{
    tabName: string,
    setTitle: (title:string) => void,
    title: string,
}

export default function TabTitles(props:TabProps) {
    const [isClicked, setClicked] = React.useState(false);
    

    

    const { borderBottom } = useSpring({
        borderBottom: isClicked ? '2px solid blue' : '2px solid transparent',
        config: { duration: 300 },
    });

    //when its clicked pass the data back to the parent
    const handleClickUnderline = () => {
        setClicked((prevValue) => !prevValue);
        props.setTitle(props.tabName);
        console.log(props.title);
    };

    return (
        <animated.p
            onClick={handleClickUnderline}
            style={{ borderBottom, cursor: 'pointer' }}>
            {props.tabName}
        </animated.p>
    )
}