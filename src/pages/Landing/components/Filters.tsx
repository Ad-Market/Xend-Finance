import React from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

import Dropdown from '../../../components/Dropdown';

const Filters: React.FC = () => {
    const theme = useTheme();
    return (
        <StyledContainer theme={theme}>
            <ShowMe>
                <span>Show Me</span>
                <Dropdown dwidth={121} values={['All','ETH','BNB']}/>
            </ShowMe>
            <ProjectsOn ml='40.5px'>
                <span>Projects On</span>
                <Dropdown dwidth={102} values={['All','ETH','BNB']}/>
            </ProjectsOn>
            <ThatAre ml='41.5px'>
                <span>That Are</span>
                <Dropdown dwidth={113} values={['Private','ETH','BNB']}/>
            </ThatAre>
            <SortedBy ml='37.5px'>
                <span>Most Funded</span>
                <Dropdown dwidth={145} values={['Most Funded','ETH','BNB']}/>
            </SortedBy>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box) <{ theme: any; }>`
    margin-top: 20px;
    padding: 14px 0px;
    display: flex;
    justify-content: center;
    >div {
        display: flex;
        align-items: center;
        >span {
            color: ${({ theme }) => theme.palette.landfilthelp.main};
            font-weight: 600;
            font-size: 12px;
        }
    }
`;

const ShowMe = styled(Box)`
    >div {width: 121px;}
`;

const ProjectsOn = styled(Box)`
    >div {width: 102px;}
`;

const ThatAre = styled(Box)`
    >div {width: 113px;}
`;

const SortedBy = styled(Box)`
    >div {width: 145px;}
`;

export default Filters;