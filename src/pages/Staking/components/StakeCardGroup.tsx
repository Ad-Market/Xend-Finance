import React from 'react';
import styled from 'styled-components';
import { Box, Fade } from '@material-ui/core';

import StakeCard from './StakeCard';
import { cardData } from './entry';

const StakeCardGroup: React.FC = () => {
    return (
        <Fade in={true} timeout={1000}>
            <StyledContainer>
                {cardData.map((each: any, i: number) =>
                    <StakeCard
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

const StyledContainer = styled(Box)`
    margin-top: 30px;
    margin-bottom: 39px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default StakeCardGroup;