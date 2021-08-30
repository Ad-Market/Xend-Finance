import React from 'react';
import { Box, useTheme } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
    checked: boolean;
    setChecked: any;
}

const Switch: React.FC<Props> = ({ checked, setChecked }: any) => {
    const theme = useTheme();

    return (
        <StyledContainer theme={theme} checked={checked} onClick={() => setChecked(!checked)}>
            <Box />
        </StyledContainer>
    );
}

const StyledContainer = styled(Box) <{ theme: any; checked:boolean; }>`
    transition: .5s;
    border-radius: 39px; 
    width: 51px;
    height: 30px;
    background: ${({ theme, checked }) => checked ? theme.palette.switchOn.contrastText : theme.palette.switchOff.contrastText};
    position: relative;
    div {
        position: absolute;
        background-color: ${({ theme, checked }) => checked ? theme.palette.switchOn.main : theme.palette.switchOff.main};
        box-shadow: 2px ​2px  7px -4px black;
        border-radius: 50%;
        width: 26px;
        height: 26px;
        transition: .3s;
        left: ${({ checked }) => checked ? 'calc(100% - 28px)' : '2px'};
        top: 50%;
        transform: translate(0px, -50%);
    }
`;

export default Switch;