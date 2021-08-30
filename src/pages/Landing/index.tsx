import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import LandHead from './components/LandHead';
import Filters from './components/Filters';
import CardGroup from './components/CardGroup';

const Landing: React.FC = () => {
    return (
        <StyledContainer>
            <LandHead />
            <Filters />
            <CardGroup />
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
`;

export default Landing;