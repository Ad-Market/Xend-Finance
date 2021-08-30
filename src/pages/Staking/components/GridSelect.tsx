import React from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

interface Props {
    isGrid: boolean
    setIsGrid: any;
}

const GridSelect: React.FC<Props> = ({ isGrid, setIsGrid }: any) => {
    const theme = useTheme();

    return (
        <StyledContainer bgcolor='landfilthelp.contrastText' theme={theme}>
            <Box width='1px' height='24px' bgcolor='rgb(255,255,255,.2)' />
            <Icon1 onClick={() => setIsGrid(true)} isGrid={isGrid} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <path d="M10 3H3V10H10V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 3H14V10H21V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 14H14V21H21V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 14H3V21H10V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </Icon1>
            <Icon2 onClick={() => setIsGrid(false)} isGrid={!isGrid} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                    <path d="M8 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 6H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 12H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 18H3.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </Icon2>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)<{ theme:any; }>`
    cursor: pointer;
    position: relative;
    height: 27px;
    border-radius: 22px;
    padding: 5px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div {
        position: absolute;
        left:50%;
        top:0px;
        transform: translate(0px,25%);
    }
    >svg {
        * {
            stroke: ${({ theme }) => theme.palette.landfilthelp.dark};
        }
    }
    >svg:first-of-type {
        margin-right: 17px;
    }
`;

const Icon1 = styled.svg<{ isGrid: any; }>`
    >g {
        opacity: ${({ isGrid }) => isGrid ? '1' : '.4'};
    }
`;

const Icon2 = styled.svg<{ isGrid: any; }>`
    >g {
        opacity: ${({ isGrid }) => isGrid ? '1' : '.4'};
    }
`;

export default GridSelect;