import React from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

import Button from '../../../components/Button';

interface Props {
    unit: string;
    coin: number;
    icon: any;
}

const StakeCard: React.FC<Props> = ({ unit, coin, icon }: any) => {
    const theme = useTheme();
    return (
        <StyledContainer>
            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                    <circle cx="39" cy="35" r="35" fill="#20235E" />
                    <circle cx="33" cy="26" r="9" fill="#DCA519" />
                    <circle cx="49" cy="39" r="6" fill="#19A1DC" />
                    <circle cx="36.5" cy="50.5" r="4.5" fill="#DC1919" />
                </g>
                <defs>
                    <filter id="filter0_d" x="0" y="0" width="78" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                </defs>
            </svg>
            <CardImage theme={theme}>
                <img src={icon} alt='' />
                <Box position='absolute' left='-18.33px' top='-91.57px' width='121.33px' height='120.51px' borderRadius='50%' border='1px solid' borderColor='cardtxt.main' />
                <Box position='absolute' left='-138.75px' top='-54.71px' width='163.67px' height='162.56px' borderRadius='50%' border='1px solid' borderColor='cardtxt.main' />
                <Box position='absolute' right='10.73px' bottom='-98.75px' width='118.43px' height='117.63px' borderRadius='50%' border='1px solid' borderColor='cardtxt.main' />
                <Box position='absolute' right='-18.09px' bottom='-38.23px' width='68.33px' height='67.87px' borderRadius='50%' border='1px solid' borderColor='cardtxt.main' />
            </CardImage>
            <CardMain theme={theme}>
                <Private>
                    <Box fontSize='18px' color='cardtxt.contrastText' mt='10px'>Earn {unit}</Box>
                    <Box fontSize='12px' color='cardtxt.dark' mt='4px' lineHeight='160%'>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</Box>
                </Private>
                <TotalRaised mt='10px'>
                    <Box color='cardtxt.dark' fontSize='12px'>Coint Earned</Box>
                    <Box color='cardtxt.main' fontSize='32px'>{coin.toFixed(4)}</Box>
                    <Box color='cardtxt.dark' fontSize='12px' lineHeight='2'>$0,00</Box>
                </TotalRaised>
                <InfoGrid mt='10px'>
                    <Box>
                        <Cell>
                            <Box color='cardtxt.dark' fontSize='12px'>Total Staked</Box>
                            <Box color='cardtxt.main' fontSize='14px' mt='5px'>2313</Box>
                            <Box color='cardtxt.dark' fontSize='12px'>You have ( $0.00 )</Box>
                        </Cell>
                        <Cell>
                            <Box color='cardtxt.dark' fontSize='12px'>Reward</Box>
                            <Box color='cardtxt.main' fontSize='14px' mt='5px'>0.435</Box>
                            <Box color='cardtxt.dark' fontSize='12px'>Earned ( $0.00 )</Box>
                        </Cell>
                    </Box>
                </InfoGrid>
                <Box mt='22px'>
                    <Button variant='contained' title='Connect Wallet' fontSize='13px' />
                </Box>
            </CardMain>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box) <{ theme: any; }>`
    width: 23%;
    position: relative;
    margin-bottom: 20px;
    >svg {
        z-index: 1;
        position: absolute;
        top: calc(83px - 70px/4);
        left: 15px;
    }
`;

const CardImage = styled(Box) <{ theme: any; }>`
    position: relative;
    overflow: hidden;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 101px;
    background: linear-gradient(78.61deg, #030523 -3.33%, #020655 90.38%);
    background-size: 100% 100%;
    box-shadow: -0.5px -1px 9px -3px ${({ theme }) => theme.palette.cardbg.contrastText};
    >img:first-of-type {
        position: absolute;
        top: 1px;
        right: 15px;
        width: 38px;
    }
    >div { transform: rotateX(-17.61deg);}
    >div:nth-of-type(2) { transform-origin: right; }
    >div:nth-of-type(3) { transform-origin: left; }
    >div:nth-of-type(4) { transform-origin: left; }
`;

const CardMain = styled(Box)`
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 34px 15px 20px 15px;
    background: ${({ theme }) => theme.palette.cardbg.main};
    box-shadow: -0.5px -1px 9px -3px ${({ theme }) => theme.palette.cardbg.contrastText};
    >div:last-of-type >button{
        width: 100%;
        font-weight: 600;
        letter-spacing: 0.65px;
    }
`;

const Private = styled(Box)`
    >div:first-of-type{
        font-weight: 600;
    }
    >div:nth-of-type(2) {
        font-family: Asap;
    }
`;

const TotalRaised = styled(Box)`
    >div:first-of-type {
        font-family: Asap;
    }
    >div:nth-of-type(2) {
        font-weight: 700;
    }
    >div:last-of-type {
        font-family: Asap;
        font-weight: 500;
    }
`;

const InfoGrid = styled(Box)`
    >div {
        display: flex;
        >div {
            flex: 1;
        }
    }
`;

const Cell = styled(Box)`
    >div:first-of-type, >div:last-of-type {
        font-family: Asap;
    }
    >div:nth-of-type(2) {
        font-weight: 500; 
    }
`;

export default StakeCard;