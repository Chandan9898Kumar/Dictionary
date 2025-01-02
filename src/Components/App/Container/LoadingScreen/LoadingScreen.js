import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Stack';
import {useMediaQuery} from '@mui/material';
import {styled} from '@mui/system';

const LoadingBox = styled(Box)`
    position: relative;
    min-height: 100vh;
    gap: 20px;
`

const LoadingWord = styled(Skeleton)`
    background-color: var(--loading-theme);
    width: 293px;
    height: 77px;
`

const LoadingPhonetic = styled(Skeleton)`
    background-color: var(--loading-theme);
    width: 96px;
    height: 20px;
    justify-self: right;
`

const LoadingPlayButton = styled(Skeleton)`
    background-color: var(--loading-theme);
    width: 75px;
    height: 75px;
    position: absolute;
    right: 0px;
    top: 10px;
`

const LoadingLine = styled(Skeleton)`
    background-color: var(--loading-theme);
    width: 100%;
    height: 1px
`

const LoadingTitle = styled(Skeleton)`
    background-color: var(--loading-theme);
    width: 60px;
    height: 40px;
`

const LoadingMeaning = styled(Skeleton)`
    background-color: var(--loading-theme);
    width: 50px;
    height: 30px
`

const Dot = styled(Skeleton)`
    background-color: var(--loading-theme);
    width: 10px;
    height: 10px;
`

const TextLine = styled(Skeleton)`
    background-color: var(--loading-theme);
    width: 600px;
    height: 10px;
    transition: all 0.2s linear;
`


function LoadingScreen() {
    const mobile = useMediaQuery("(max-width: 800px)");

    const DisplayLoading = () => {
        let allLoading = [];

        for(let i = 1; i < 5; i++){
            allLoading.push(
            <Box key={i} spacing={3}>
                <Box direction="row" alignItems="center" spacing={2}>
                    <LoadingTitle/>
                    <LoadingLine variant="rounded"/>   
                </Box>  
                <LoadingMeaning/>
                <Box direction="row-reverse" alignItems="center" spacing={2}>
                    <TextLine sx={mobile ? {width: "250px"} : {}}/>               
                    <Dot variant="circular"/>
                </Box>
                <Box direction="row-reverse" alignItems="center" spacing={2}>
                    <TextLine sx={mobile ? {width: "250px"} : {}}/>               
                    <Dot variant="circular"/>
                </Box>
                <Box direction="row-reverse" alignItems="center" spacing={2}>
                    <TextLine sx={mobile ? {width: "250px"} : {}}/>               
                    <Dot variant="circular"/>
                </Box>                  
                <Box direction="row-reverse" alignItems="center" spacing={2}>
                    <TextLine sx={mobile ? {width: "250px"} : {}}/>              
                    <Dot variant="circular"/>
                </Box>      
                <Box direction="row-reverse" alignItems="center" spacing={2}>
                    <TextLine sx={mobile ? {width: "250px"} : {}}/>               
                    <Dot variant="circular"/>
                </Box>  
            </Box>
            )
        }
        return allLoading;
    }

    return(
        <LoadingBox>
            <LoadingWord variant="rounded" sx={mobile ? {width: "200px", height: "50px"} : {}}/>
            <LoadingPhonetic variant="rounded"/>   
            <LoadingPlayButton variant="circular" sx={mobile ? {width: "60px", height: "60px"} : {}}/>  
            {DisplayLoading()}
        </LoadingBox>
    )
}

export default LoadingScreen;