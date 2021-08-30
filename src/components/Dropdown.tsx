import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

interface Props {
    dwidth: number;
    values: any;
}

const Dropdown: React.FC<Props> = ({ dwidth, values }: any) => {
    const theme = useTheme();
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);
    const handleShow = () => {
        setShow(!show);
    }
    const handleSelectValue = (i:any) => {
        setIndex(i);
    }
    return (
        <>
            <StyledContainer onClick={() => handleShow()} width={`${dwidth}px`} ml='15px' display='flex' justifyContent='space-between' theme={theme}>
                <span>{values[index]}</span>
                <svg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1.1665 1.33398L5.49984 5.66732L9.83317 1.33398' stroke='#9494AC' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                {show &&
                    <Box position='absolute' top='100%' left='0px' width={`${dwidth}px`} bgcolor='dropdownbg.main' padding='9px 15px' zIndex='2' borderRadius='12px'>
                        {values.map((each:any, i:number) =>
                            <Box onClick={() => handleSelectValue(i)}>{each}</Box>
                        )}
                    </Box>
                }
            </StyledContainer>
        </>
    );
}

const StyledContainer = styled(Box) <{ theme: any; }>`
    cursor: pointer;
    position: relative;
    height: 27px;
    border-radius: 22px;
    padding: 4.5px 15px;
    background: ${({ theme }) => theme.palette.landfilthelp.contrastText};
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.palette.landfilthelp.dark};
    font-size: 12px;
`;

export default Dropdown;