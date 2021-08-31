import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import ThemeSwitch from '../components/ThemeSwitch';

import Button from '../components/Button';

interface Props {
    connected: any;
    setConnected: any;
    omitted: any;
    setOmitted: any;
    light: any;
    setTheme: any;
}

const Footer: React.FC<Props> = ({ connected, setConnected, omitted, setOmitted, light, setTheme }: any) => {
    const theme = useTheme();
    const [isOpenTheme, setOpenTheme] = useState(false);
    // const handleOmission = () => {
    //     setOmitted(!omitted);
    // }
    return (
        <>
            <StyledContainer theme={theme}>
                <Box>Copyright © Xend Finance 2021. All rights reserved.</Box>
                <Box>
                    <Box>
                        <Box>About</Box>
                        <Box>Docs</Box>
                        <Box>Github</Box>
                    </Box>
                    <Box position='relative'>
                        {isOpenTheme &&
                            <ShowTheme theme={theme} position='absolute' bottom='50px' left='50%'>
                                <Box>
                                    <Box>Telegram</Box>
                                    <Box>
                                        <Box>{!omitted ? (light ? 'Light' : 'Dark') : null} Theme</Box>
                                        <ThemeSwitch light={light} setTheme={setTheme} omitted={omitted} />
                                    </Box>
                                    <Box>Version 1.9</Box>
                                </Box>
                            </ShowTheme>
                        }
                        <Button variant='outlined' title='. . .' onClick={() => { setOpenTheme(!isOpenTheme); }} />
                    </Box>
                </Box>
            </StyledContainer>
        </>
    );
}

const StyledContainer = styled(Box) <{ theme: any; }>`
    background-color: ${({ theme }) => theme.palette.topbarbg.main};
    padding: 28px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.palette.footercol.main};
    >div:first-of-type {
        display: flex;
        margin-left: 55px;
    }
    >div:last-of-type {
        display: flex;
        flex-direction: row;
        >div:first-of-type {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            >div:first-of-type {
                margin-right: 20px;
            }
            >div:last-of-type {
                margin-left: 20px;
                margin-right: 20px;
            }
        }
        div: last-of-type {
            >Button {
                margin-right: 60px;
                color: ${({ theme }) => theme.palette.footercol.main};
                border: 2px solid ${({ theme }) => theme.palette.bordercol.main};
            }
        }
    }
`;

const ShowTheme = styled(Box) <{ theme: any; }>`
    transform: translate(-150px,0px);
    z-index: 99;
    width: 150px;
    height: 140px;
    padding-left: 20px;
    padding-top: 30px;
    background-color: ${({ theme }) => theme.palette.footermore.main};
    box-shadow: 0px 21px 18px rgba(0, 0, 0, 0.17);
    border-radius: 15px;
    >div: first-of-type {
        font-size: 12px;
        padding-left: 3px;
        padding-top: 10px;
        color: ${({ theme }) => theme.palette.footercol.main};
        >div: first-of-type {
            margin-bottom: 10px;
        }
        >div: nth-child(2) {
            display: flex;
            flex-direction: row;
            align-items: center;
            >div + div {
                margin-left: 3px;
            }
        }
        >div: nth-child(3) {
            margin-top: 35px;
            margin-left: 30px;
            color: #53596E;
        }
    }
`;

export default Footer;