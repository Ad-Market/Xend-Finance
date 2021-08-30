import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

interface Props {
    label: string;
    entry: any;
}

const InputDrop: React.FC<Props> = ({ label, entry }: any) => {
    const theme = useTheme();
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);

    const handleSelectValue = (i:any) => {
        setIndex(i);
    }

    return (
        <>
            <Box color='cardtxt.contrastText' ml='9px' fontWeight='600' fontSize='12px'>{label}</Box>
            <StyledContainer onClick={() => setShow(!show)} theme={theme}>
                <FormInput theme={theme}>{entry[index]}</FormInput>
                <ArrowDown theme={theme} width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M3.66602 6.33398L7.99935 10.6673L12.3327 6.33398' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </ArrowDown>
                { show &&
                    <Box position='absolute' top='100%' left='0px' width='-webkit-fill-available' bgcolor='inputgroup.main' padding='10px 20px' color='cardtxt.contrastText'>
                        {entry.map((each:any, i:number) =>
                            <Box onClick={() => handleSelectValue(i)}>{each}</Box>
                        )}
                    </Box>
                }
            </StyledContainer>
        </>
    );
}

const StyledContainer = styled(Box)<{ theme:any; }>`
    width: -webkit-fill-available;
    height: 28px;
    display: flex;
    padding: 10px 20px;
    position: relative;
    margin-top: 6px;
    align-items: center;
    border-radius: 10px;
    justify-content: space-between;
    background: ${({ theme }) => theme.palette.inputgroup.main};
    cursor: pointer;
`;

const FormInput = styled(Box) <{ theme: any; }>`
    border: none;
    outline: none;
    background: ${({ theme }) => theme.palette.inputgroup.main};
    color: ${({ theme }) => theme.palette.inputgroup.contrastText};
    font-size: 14px;
    font-family: Poppins;
`;

const ArrowDown = styled.svg<{ theme: any; }>`
    >path {
        stroke: ${({ theme }) => theme.palette.cardtxt.contrastText};
    }
`;

export default InputDrop;