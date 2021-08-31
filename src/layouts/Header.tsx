import React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import Button from '../components/Button';
import AvartarIcon from '../assets/images/layout/avatar.png';

interface Props {
    connected:any;
    setConnected: any;
    omitted: any;
    setOmitted: any;
}

const Header: React.FC<Props> = ({ connected, setConnected, omitted, setOmitted }:any) => {
    const theme = useTheme();
    const handleOmission = () => {
        setOmitted(!omitted);
    }
    return (
        <StyledContainer theme={theme}>
            <Box>
                <Box>Xend Finance Layer 2 DeFi protocol</Box>
                <p>Xend Finance has composed multiple Layer 1 DeFi protocols across different blockchains to provide better yields, as opposed to using Layer 1 DeFi yield platforms individually.</p>
            </Box>
            <Box>
                <Box>Total Vault Asset</Box>
                <Box>300,000,000</Box>
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)<{ theme:any; }>`
    font-family: Fira Sans;
    background-color: ${({ theme }) => theme.palette.topbarbg.main};
    padding: 28px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:first-of-type {
        display: flex;
        flex-direction: column;
        color: white;
        margin-left: 90px;
        width: 55%;
        >div:first-of-type {
            font-size: 26px;
        }
    }
    >div:last-of-type {
        display: flex;
        flex-direction: column;
        margin-left: 150px;
        margin-right: 80px;
        padding: 25px;
        align-items: left;
        width: 45%;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 5px;
        >div:first-of-type {
            color: #8E93A4;
        }
        >div:last-of-type {
            color: white;
            font-size: 24px;
        }
    }
`;

const AvatarText = styled(Box)<{ theme:any; }>`
    font-family: Fira Sans;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.topbarname.main};
    >span {
        font-weight: 700;
        color: ${({ theme }) => theme.palette.topbarname.main};
    }
`;

export default Header;