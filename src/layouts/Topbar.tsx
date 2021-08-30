import React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import Button from '../components/Button';
import AvartarIcon from '../assets/images/layout/avatar.png';

interface Props {
    connected:any;
    setConnected: any;
    omitted: any;
    setOmitted: any;
}

const Topbar: React.FC<Props> = ({ connected, setConnected, omitted, setOmitted }:any) => {
    const theme = useTheme();
    const handleOmission = () => {
        setOmitted(!omitted);
    }
    return (
        <StyledContainer theme={theme}>
            <Box>
                <Box>
                    <svg onClick={() => handleOmission()} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5.25 6H17.25' stroke='#FF9900' strokeWidth='1.5' strokeLinecap='round' />
                        <path d='M5.25 12H12' stroke='#FF9900' strokeWidth='1.5' strokeLinecap='round' />
                        <path d='M18.75 9.75L15.75 12L18.75 14.25' stroke='#FF9900' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                        <path d='M5.25 18H17.25' stroke='#FF9900' strokeWidth='1.5' strokeLinecap='round' />
                    </svg>
                    <Box ml='29px' display='flex'>
                        <img src={AvartarIcon} alt='' />
                    </Box>
                    <AvatarText ml='8px' theme={theme}>
                        <span>Rich</span> Quack
                    </AvatarText>
                    <SearchBox ml='102px' theme={theme}>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <circle cx='11.0005' cy='11' r='8' strokeWidth='1.71429' />
                            <path d='M20.5726 20.5711L17.144 17.1426' strokeWidth='1.71429' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                        <input type='text' placeholder='Search for project, donations, or categories' />
                    </SearchBox>
                </Box>
            </Box>
            <Box>
                { !connected &&
                    <Button variant='outlined' title='CONNECT WALLET' onClick={() => alert()}/>
                }
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)<{ theme:any; }>`
    transition: .5s;
    background-color: ${({ theme }) => theme.palette.topbarbg.main};
    height: 40px;
    padding: 28px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:first-of-type {
        display: flex;
        >div:first-of-type {
            display: flex;
            align-items: center;
            >svg:first-of-type path{
                stroke: ${({ theme }) => theme.palette.topbaricon.main};
            }
        }
    }
    >div:last-of-type {
        display: flex;
        align-items: center;
    }
`;

const AvatarText = styled(Box)<{ theme:any; }>`
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.topbarname.main};
    >span {
        font-weight: 700;
        color: ${({ theme }) => theme.palette.topbarname.main};
    }
`;

const SearchBox = styled(Box)<{ theme:any; }>`
    display: none;
    @media (min-width: 1080px) {
        width: 500px;
        display: flex;
        border-radius: 141px;
        border: 1px solid ${({ theme }) => theme.palette.topbarsearch.main};
        padding: 9px 20px;
        >svg {
            fill: transparent;
            * {
                stroke: ${({ theme }) => theme.palette.topbarsearch.light};
            }
        }
        >input {
            background: transparent;
            font-size: 14px;
            flex: 1;
            margin-left: 10px;
            border: none;
            outline: none;
            color: ${({ theme }) => theme.palette.topbarsearch.dark};
            &::placeholder {
                color: ${({ theme }) => theme.palette.topbarsearch.dark};
            }
        }
    }
`;

export default Topbar;