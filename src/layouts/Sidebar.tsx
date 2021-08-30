import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import ThemeSwitch from '../components/ThemeSwitch';
import Menu from '../components/Menu';

interface Props {
    light: any;
    setTheme: any;
    omitted: boolean;
}

const Sidebar: React.FC<Props> = ({ light, setTheme, omitted }: any) => {
    const theme = useTheme();
    return (
        <StyledContainer theme={theme} omitted={omitted}>
            <Box>
                <Menu theme={theme} omitted={omitted} />
            </Box>
            <Box>
                <ThemeSwitch light={light} setTheme={setTheme} omitted={omitted} />
                {!omitted ? (light ? 'Light' : 'Dark') : null}
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box) <{ theme: any; omitted:any; }>`
    transition: .5s;
    width: ${({ omitted }) => !omitted ? '246px' : '84px'};
    height: 100%;
    background: ${({ theme }) => theme.palette.topbarbg.main};
    display: flex;
    flex-direction: column;
    >div:first-of-type {
        height: 80%;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 0px;
        }
    }
    >div:last-of-type {
        font-weight: 600;
        height: 84px;
        color: ${({ theme }) => theme.palette.sidebartext.main};
        display: flex;
    }
`;

export default Sidebar;