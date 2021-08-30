import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { StylesProvider, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';

import Topbar from './Topbar';
import Sidebar from './Sidebar';

import { themeLight, themeDark } from '../theme';

interface Props {
    children: any;
}

const Layout: React.FC<Props> = ({ children }: any) => {
    const [light, setTheme] = useState(false);
    const [connected, setConnected] = useState(false);
    const [omitted, setOmitted] = useState(false);
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={light ? themeLight : themeDark}>
                <ThemeProvider theme={light ? themeLight : themeDark}>
                    <StyledContainer>
                        <Topbar connected={connected} setConnected={setConnected} omitted={omitted} setOmitted={setOmitted} />
                        <StyledWrapper>
                            <Sidebar light={light} setTheme={setTheme} omitted={omitted} />
                            <Body omitted={omitted} theme={light ? themeLight : themeDark}>
                                {children}
                            </Body>
                        </StyledWrapper>
                    </StyledContainer>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
}

const StyledContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 100%;
    * {
        font-family: Poppins;
        font-weight: 400;
    }
`;

const StyledWrapper = styled(Box)`
    flex: 1;
    display: flex;
`;

const Body = styled(Box)<{ omitted:boolean; theme:any; }>`
    background-color: ${({ theme }) => theme.palette.topbarbg.main};
    flex: 1;
    padding-top: 10px;
    padding-left: ${({ omitted }) => !omitted ? '42px' : '81px'};
    padding-right: 42px;
`;

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;