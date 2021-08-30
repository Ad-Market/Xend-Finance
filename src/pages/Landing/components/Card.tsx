import React from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

interface Props {
    mainImg: any;
    compIcon: any;
    tokenIcon: any;

    title: string;
    raised: number;
    unit: string;
    process: number;
    figure: number;
}

const Card: React.FC<Props> = ({ mainImg, compIcon, tokenIcon, title ,raised ,unit ,process ,figure }:any) => {
    const theme = useTheme();
    return (
        <StyledContainer>
            <CardState theme={theme}>
                <CardBall />
                Filled
            </CardState>
            <CardImage theme={theme} mainimg={mainImg}>
                <img src={compIcon} alt='icon'/>
                <img src={tokenIcon} alt='tokenicon'/>
            </CardImage>
            <CardMain theme={theme}>
                <Private>
                    <Box fontSize='11px' color='cardtxt.main'>PRIVATE</Box>
                    <Box fontSize='14px' color='cardtxt.contrastText' mt='5px'>{title}</Box>
                    <Box fontSize='12px' color='cardtxt.dark' mt='10px' lineHeight='20px'>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</Box>
                </Private>
                <TotalRaised mt='12px'>
                    <Box color='cardtxt.dark' fontSize='11px'>Total Raised</Box>
                    <Box color='cardtxt.main' mt='2px' fontSize='20px'>{raised}{'\u00a0'}{unit}</Box>
                </TotalRaised>
                <Progress mt='12px'>
                    <Box display='flex' justifyContent='space-between'>
                        <Box color='cardtxt.dark' fontSize='11px'>Progress</Box>
                        <Box color='cardtxt.main' fontSize='12px'fontWeight='600 !important'>{process}%</Box>
                    </Box>
                    <Box mt='9px' height='3px' bgcolor='cardprocess.main' borderRadius='15px' position='relative'>
                        <Box bgcolor='cardtxt.main' width={`${process}%`} position='absolute' left='0px' top='0px' height='3px'></Box>
                    </Box>
                    <Box mt='10px' display='flex' justifyContent='flex-end'>
                        <Box color='cardtxt.dark' fontSize='12px'>{figure}/7000000</Box>
                    </Box>
                </Progress>
                <InfoGrid mt='20px'>
                    <Box>
                        <Cell>
                            <Box color='cardtxt.dark' fontSize='12px'>Participants</Box>
                            <Box color='cardtxt.main' fontSize='14px' mt='5px'>2313</Box>
                        </Cell>
                        <Cell>
                            <Box color='cardtxt.dark' fontSize='12px'>Max MATIC</Box>
                            <Box color='cardtxt.main' fontSize='14px' mt='5px'>0.435</Box>
                        </Cell>
                    </Box>
                    <Box mt='15px'>
                        <Cell>
                            <Box color='cardtxt.dark' fontSize='12px'>Access</Box>
                            <Box color='cardtxt.main' fontSize='14px' mt='5px'>Private</Box>
                        </Cell>
                        <Cell>
                            <Box color='cardtxt.dark' fontSize='12px'>Days to go</Box>
                            <Box color='cardtxt.main' fontSize='14px' mt='5px'>26</Box>
                        </Cell>
                    </Box>
                </InfoGrid>
            </CardMain>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box) <{ theme: any; }>`
    width: 23%;
    position: relative;
    margin-bottom: 20px;
`;

const CardBall = styled(Box)`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin-right: 10px;
`;

const CardState = styled(Box) <{ theme: any; }>`
    z-index: 1;
    position: absolute;
    top:10px;
    left:10px;
    border-radius: 40px;
    font-size: 12px;
    font-weight: 500;
    padding: 3px 10px;
    background: ${({ theme }) => theme.palette.cardstate.main};
    color: ${({ theme }) => theme.palette.cardstate.contrastText};
    display: flex;
    align-items: center;
    >${CardBall} {
        background: ${({ theme }) => theme.palette.cardstate.contrastText};
    }
`;

const CardImage = styled(Box) <{ theme: any; mainimg:any; }>`
    position: relative;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 101px;
    background-image: url(${({ mainimg }) => mainimg});
    background-size: 100% 100%;
    box-shadow: -0.5px -1px 9px -3px ${({ theme }) => theme.palette.cardbg.contrastText};
    >img:first-of-type {
        position: absolute;
        bottom: -19px;
        right: 20px;
        width: 38px;
    }
    >img:last-of-type {
        position: absolute;
        bottom: -24px;
        right: 43px;
        width: 20px;    
    }
`;

const CardMain = styled(Box)`
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 34px 15px 15px 15px;
    background: ${({ theme }) => theme.palette.cardbg.main};
    box-shadow: -0.5px -1px 9px -3px ${({ theme }) => theme.palette.cardbg.contrastText};
`;

const Private = styled(Box)`
    >div:first-of-type{
        font-family: Asap;
        font-weight: 600;
    }
    >div:nth-of-type(2) {
        font-weight: 600;
    }
    >div:last-of-type {
        font-family: Asap;
    }
`;

const TotalRaised = styled(Box)`
    >div:last-of-type {
        font-weight: 600;
    }
`;

const Progress = styled(Box)`
    >div:first-of-type div:last-of-type {
        font-family: Asap;
    }
    >div:last-of-type div:first-of-type {
        font-family: Asap;
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
    >div:first-of-type {
        font-family: Asap;
    }
    >div:last-of-type {
        font-weight: 500; 
    }
`;

export default Card;