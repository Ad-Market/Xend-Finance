import React from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

import BorderIcon from '../assets/images/border.png';

const Dropzone: React.FC = () => {
    const theme = useTheme();
    return (
        <StyledContainer mt='35px' width='372px' height='200px' bgcolor='inputgroup.main' theme={theme}>
            <Box display='flex' width='100%' height='100%' justifyContent='center' alignItems='center' flexDirection='column'>
                <PlusIcon width='65' height='65' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg' theme={theme}>
                    <path d='M32.4993 59.5827C47.4571 59.5827 59.5827 47.4571 59.5827 32.4993C59.5827 17.5416 47.4571 5.41602 32.4993 5.41602C17.5416 5.41602 5.41602 17.5416 5.41602 32.4993C5.41602 47.4571 17.5416 59.5827 32.4993 59.5827Z' stroke='white' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M32.5 21.666V43.3327' stroke='white' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
                    <path d='M21.666 32.5H43.3327' stroke='white' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
                </PlusIcon>
                <Box color='fileinput.contrastText' mt='10px' fontSize='18px'>Upload Image</Box>
                <Box color='#969696' mt='6px' fontSize='14px'>Lorem ipsum dolor sit amet</Box>
            </Box>
            <input type='file' />
            <Border width='-webkit-fill-available' height='-webkit-fill-available' position='absolute' left='0px' top='0px'></Border>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)<{ theme:any; }>`
    overflow: hidden;
    position:relative;
    border-radius: 10px;
    text-align:center;
    cursor:pointer;
    >div {
        >div:first-of-type {
            font-weight: 700;
        }
        >div:last-of-type {
            font-weight: 500;
        }
    }
    >input {
        position: absolute;
        z-index: 1000;
        opacity: 0;
        cursor: pointer;
        right: 0;
        top: 0;
        height: 100%;
        font-size: 24px;
        width: 100%;
    }
`;

const PlusIcon = styled.svg<{ theme:any; }>`
    >path {
        stroke: ${({ theme }) => theme.palette.fileinput.main};
    }
`;

const Border = styled(Box)`
    border: dashed 2px;
    border-image-source:url(${BorderIcon});
    border-image-width: 1;
    border-image-slice: 7;
    border-image-repeat: round;
    margin: -0.5px;
`;

export default Dropzone;