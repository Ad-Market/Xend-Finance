import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import Card from './Card';
import { cardData } from './entry';

const CardGroup: React.FC = () => {
    return (
        <StyledContainer>
            {cardData.map((each:any, i:number) => 
                <Card
                    key={i}
                    mainImg={each.mainImg}
                    compIcon={each.compIcon}
                    tokenIcon={each.tokenIcon}
                    title={each.title}
                    raised={each.raised}
                    unit={each.unit}
                    process={each.process}
                    figure={each.figure}
                />
            )}
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
    margin-top: 15px;
    margin-bottom: 39px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default CardGroup;