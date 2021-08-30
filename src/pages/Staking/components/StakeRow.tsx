import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import Button from '../../../components/Button';

interface Props {
    unit: string;
    coin: number;
    icon: any;
}

const StakeRow: React.FC<Props> = ({ unit, coin, icon }: any) => {
    return (
        <StyledContainer>
            <Box flex='7.8' display='flex' justifyContent='center' alignItems='center'>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="21" cy="21" r="21" fill="#20235E" />
                    <circle cx="17.4" cy="15.5992" r="5.4" fill="#DCA519" />
                    <circle cx="26.9984" cy="23.3988" r="3.6" fill="#19A1DC" />
                    <circle cx="19.5008" cy="30.2996" r="2.7" fill="#DC1919" />
                </svg>
            </Box>
            <Box flex='29.2'>
                <Semibold color='cardtxt.contrastText'>Earn {unit}</Semibold>
                <Description color='cardtxt.dark' textOverflow='ellipsis' overflow='hidden' width='210px' whiteSpace='nowrap'>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</Description>
            </Box>
            <Box flex='10'>
                <Semibold color='cardtxt.main' fontSize='16px' letterSpacing='0.8px'>{coin.toFixed(4)}</Semibold>
                <Description color='cardtxt.dark'>$0,00</Description>
            </Box>
            <Box flex='10'>
                <Semibold color='cardtxt.main' fontSize='16px' letterSpacing='0.8px'>0.0000</Semibold>
                <Description color='cardtxt.dark'>$0,00</Description>
            </Box>
            <Box flex='10.7'>
                <Semibold color='cardtxt.main' fontSize='16px' letterSpacing='0.8px'>0.0000</Semibold>
                <Description color='cardtxt.dark'>$0,00</Description>
            </Box>
            <Box flex='7.4'>
                <img src={icon} width='30px' alt='' />
            </Box>
            <Box flex='35.9' display='flex' justifyContent='space-between' alignItems='center'>
                <Box color='cardtxt.contrastText' fontSize='14px' letterSpacing='0.7px'>August, 24 2024</Box>
                <Button variant='contained' title='Connect Wallet' fontSize='13px' />
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px 20px 0px;
`;

const Semibold = styled(Box)`
    font-weight: 600 !important;
    font-size: 16px;
    letter-spacing: 0.8px;
`;

const Description = styled(Box)`
    font-family: Asap;
    font-size: 12px;
    line-height: 160%;
`;

export default StakeRow;