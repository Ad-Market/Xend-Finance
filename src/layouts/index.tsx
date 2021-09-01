import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { StylesProvider, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import bg from '../assets/images/layout/bg.png';

import Topbar from './Topbar';
import Header from './Header';
import Vaultlist from './Vaultlist';
import Footer from './Footer';

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
                        {/* <img src={bg} alt='' /> */}
                        <Topbar connected={connected} setConnected={setConnected} omitted={omitted} setOmitted={setOmitted} />
                        <Header connected={connected} setConnected={setConnected} omitted={omitted} setOmitted={setOmitted} />
                        <Vaultlist connected={connected} setConnected={setConnected} omitted={omitted} setOmitted={setOmitted} />
                        <Footer connected={connected} setConnected={setConnected} omitted={omitted} setOmitted={setOmitted} light={light} setTheme={setTheme} />
                    </StyledContainer>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
}

const StyledContainer = styled(Box)`
    position: relative;
    >img {
        z-index: 0;
        // background: linear-gradient(308.32deg, #2042B8 -180.78%, #FF6600 138.99%);
        opacity: 0.3;
        position: absolute;
        left: 0;
        top 0;
        width: 100%;
        height: 100%;
    }
    display: flex;
    flex-direction: column;
    height: 100%;
  * {
        font-family: Fira Sans;
        font-weight: 400;
    }
`;

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;