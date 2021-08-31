import React, {useState} from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import Dropdown from '../components/Dropdown';
import ThemeSwitch from '../components/ThemeSwitch';

import Button from '../components/Button';
import LogoIcon from '../assets/images/layout/Union.png';
import Vector from '../assets/images/layout/Vector.png';
import Polygon from '../assets/images/layout/Polygon.png';
import Mainnet from '../assets/images/layout/Mainnet.png';
import Ethereum from '../assets/images/layout/Ethereum.png';

interface Props {
    connected:any;
    setConnected: any;
    omitted: any;
    setOmitted: any;
    light: any;
    setTheme: any;
}

const Topbar: React.FC<Props> = ({ connected, setConnected, omitted, setOmitted, light, setTheme }:any) => {
    const theme = useTheme();
    const handleOmission = () => {
        setOmitted(!omitted);
    }
    return (
        <StyledContainer theme={theme}>
            <Box>
                <Box ml='29px' display='flex'>
                    <img src={LogoIcon} alt='' />
                </Box>
                <LogoText ml='8px' theme={theme}>
                    <span>XEND</span>
                    <span>Finance</span>
                </LogoText>
            </Box>
            <Box>
                <Box>
                    <Dropdown dwidth={100} values={['Layer v1','Layer v2']}/>
                </Box>
                <Box>
                    <Dropdown dwidth={150} btnIcons={[Mainnet, Polygon, Ethereum]} values={['BSC Mainnet','Polygon', 'Ethereum']}/>
                </Box>
                <Box>
                    <ThemeSwitch light={light} setTheme={setTheme} omitted={omitted} />
                </Box>
                <Box>
                    <Button variant='outlined' title='Connect Wallet' btnIcon={Vector} onClick={() => alert()}/>
                </Box>
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)<{ theme:any; }>`
    background-color: ${({ theme }) => theme.palette.topbarbg.main};
    padding: 28px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:first-of-type {
        display: flex;
        >div:first-of-type {
            display: flex;
            align-items: center;
            margin-left: 30px;
        }
    }
    >div:last-of-type {
        display: flex;
        align-items: center;
        padding-left: 50px;
        margin-right: 105px;
        >div Button {
            margin-left: 25px;
            padding-top: 15px;
            padding-bottom: 15px;
        }
        >Dropdown + Dropdown {
            margin-left: 50px;
        }
    }
`;

const LogoText = styled(Box)<{ theme:any; }>`
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.topbarname.main};
    display: flex;
    flex-direction: column;
    >span {
        font-weight: 700;
        color: ${({ theme }) => theme.palette.topbarname.main};
    }
`;

export default Topbar;