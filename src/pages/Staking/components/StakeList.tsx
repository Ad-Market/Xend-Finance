import React from 'react';
import styled from 'styled-components';
import { Box, Fade, useTheme } from '@material-ui/core';

import StakeRow from './StakeRow';
import { cardData } from './entry';

const StakeList: React.FC = () => {
    const theme = useTheme();

    return (
        <Fade in={true} timeout={1000}>
            <StyledContainer mt='20px' theme={theme}>
                <Box display='flex' justifyContent='space-between' mb='9px' pr='30px'>
                    <Box color='cardtxt.dark' fontSize='12px' lineHeight='20px' flex='7.8' />
                    <Box color='cardtxt.dark' fontSize='12px' lineHeight='20px' flex='29.2'>Pool Name</Box>
                    <Box color='cardtxt.dark' fontSize='12px' lineHeight='20px' flex='10'>Coint Earned</Box>
                    <Box color='cardtxt.dark' fontSize='12px' lineHeight='20px' flex='10'>Total Staked</Box>
                    <Box color='cardtxt.dark' fontSize='12px' lineHeight='20px' flex='10.7'>Reward</Box>
                    <Box color='cardtxt.dark' fontSize='12px' lineHeight='20px' flex='7.4'>Batch</Box>
                    <Box color='cardtxt.dark' fontSize='12px' lineHeight='20px' flex='35.9'>Ends in</Box>
                </Box>
                {cardData.map((each: any, i: number) =>
                    <StakeRow
                        key={i}
                        unit={each.unit}
                        coin={each.coin}
                        icon={each.icon}
                    />
                )}
            </StyledContainer>
        </Fade>
    );
}

const StyledContainer = styled(Box) <{ theme: any; }>`
    margin-bottom: 59px;
    >div:first-of-type >div{
        font-family: Asap;
    }
    >div:nth-of-type(2) {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    >div:last-of-type {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    >div:nth-of-type(odd) {
        background: transparent;
    }
    >div:nth-of-type(even) {
        background: ${({ theme }) => theme.palette.tablebody.main};
    }
    button {
        font-weight: 600;
        letter-spacing: 0.65px;
    }
`;

export default StakeList;