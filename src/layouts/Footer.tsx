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

const Footer: React.FC<Props> = ({ connected, setConnected, omitted, setOmitted }:any) => {
    const theme = useTheme();
    const handleOmission = () => {
        setOmitted(!omitted);
    }
    return (
        <StyledContainer theme={theme}>
            <Box>Copyright © Xend Finance 2021. All rights reserved.</Box>
            <Box>
                <Box>
                    <Box>About</Box>
                    <Box>Docs</Box>
                    <Box>Github</Box>
                </Box>
                <Button variant='outlined' title='. . .' onClick={() => alert()}/>
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)<{ theme:any; }>`
    background-color: ${({ theme }) => theme.palette.topbarbg.main};
    height: 40px;
    padding: 28px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #D1D1D1;
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
        >Button {
            margin-right: 60px;
        }
    }
`;

const AvatarText = styled(Box)<{ theme:any; }>`
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.topbarname.main};
    >span {
        font-weight: 700;
        color: ${({ theme }) => theme.palette.topbarname.main};
    }
`;

export default Footer;