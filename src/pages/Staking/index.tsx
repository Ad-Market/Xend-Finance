import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import StakeCardGroup from './components/StakeCardGroup';
import StakeList from './components/StakeList';
import Filters from './components/Filters';

const Staking: React.FC = () => {
    const [isGrid, setIsGrid] = useState(true);
    const [checked, setChecked] = useState(false);
    const [tabIndex, setTabIndex] = useState(1);

    return (
        <StyledContainer>
            <Box mt='40px' lineHeight='120%' fontSize='32px' color='cardtxt.contrastText'>Staking</Box>
            <Box mt='10px' lineHeight='120%' fontSize='14px' color='#969696'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</Box>
            <Filters 
                isGrid={isGrid} setIsGrid={setIsGrid}
                tabIndex={tabIndex} setTabIndex={setTabIndex}
                checked={checked} setChecked={setChecked}
            />
            { isGrid ? <StakeCardGroup /> : <StakeList /> }
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
    position: relative;
    >div:first-of-type {
        font-weight: 700;
    }
    >div:nth-of-type(2) {
        font-weight: 500;
    }
`;

export default Staking;