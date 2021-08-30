import React from 'react';
import { Box, useTheme } from '@material-ui/core';
import styled from 'styled-components';

import DayIcon from '../assets/images/layout/day.png';
import NightIcon from '../assets/images/layout/night.png';

interface Props {
    light: boolean;
    omitted: boolean;
    setTheme: any;
}

const ThemeSwitch: React.FC<Props> = ({ light, setTheme, omitted }: any) => {
    const theme = useTheme();
    return (
        <StyledContainer omitted={omitted} light={light} theme={theme} onClick={() => setTheme(!light)}>
            <img src={light ? DayIcon : NightIcon} alt='' />
        </StyledContainer>
    );
}

const StyledContainer = styled(Box) <{ theme: any; light: boolean; omitted:any;}>`
    transition: .5s;
    border-radius: 39px; 
    width: 51px;
    height: 30px;
    background: ${({ theme }) => theme.palette.themeswitch.main};
    margin-left: ${({ omitted }) => !omitted ? '30px' : '14px'};
    margin-right: ${({ omitted }) => !omitted ? '15px' : '19px'};
    position: relative;
    img {
        position: absolute;
        width: 28px;
        height: 28px;
        transition: .3s;
        ${({ light }) => light ? 'left: 2px' : 'left: 21px'};
        top: 0px;
    }
`;

export default ThemeSwitch;