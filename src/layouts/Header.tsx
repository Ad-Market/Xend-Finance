import React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

// import Button from '../components/Button';

interface Props {
    connected:any;
    setConnected: any;
    omitted: any;
    setOmitted: any;
}

const Header: React.FC<Props> = ({ connected, setConnected, omitted, setOmitted }:any) => {
    const theme = useTheme();
    // const handleOmission = () => {
    //     setOmitted(!omitted);
    // }
    return (
        <StyledContainer theme={theme}>
            <Box>
                <Box><span>Xend Finance</span> Layer 2 DeFi protocol</Box>
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
    padding: 40px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:first-of-type {
        display: flex;
        flex-direction: column;
        color: ${({ theme }) => theme.palette.contrast.main};
        margin-left: 60px;
        width: 55%;
        >div:first-of-type {
            font-size: 26px;
            font-weight: 700;
            >span {
                font-size: 26px;
                font-weight: 700;
            }
        }
        >p {
            font-size: 14px;
        }        
    }
    >div:last-of-type {
        display: flex;
        flex-direction: column;
        margin-left: 190px;
        margin-right: 80px;
        padding: 30px;
        align-items: left;
        width: 45%;
        border: 2px solid ${({ theme }) => theme.palette.bordercol.main};
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 5px;
        >div:first-of-type {
            color: #8E93A4;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        >div:last-of-type {
            font-family: Fira Code;
            font-weight: 700;
            color: ${({ theme }) => theme.palette.contrast.main};
            font-size: 28px;
        }
    }
    @media (max-width: 950px) {
        display: flex;
        flex-direction: column;
        align-items: start;
        padding-left: 30px;
        padding-right: 30px;
        margin: 0;
        min-width: 320px;
        >div: first-of-type {
            min-width: 320px;
            margin: 0;
            padding: 0;
            margin-left: 10px;
            >div: first-of-type {
                min-width: 320px;
                >span {
                    display: none;
                }
                >p {
                    width: 320px;
                }
            }
        }
        >div: last-of-type {
            position: relative;
            width: calc(100% - 80px);
            margin: 0;
            margin-left: 10px;
        }
    }
`;

export default Header;