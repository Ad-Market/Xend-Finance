import React from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

import Dropdown from '../../../components/Dropdown';
import Switch from '../../../components/Switch';
import GridSelect from './GridSelect';

interface Props {
    isGrid: boolean;
    setIsGrid: any;
    tabIndex: number;
    setTabIndex: any;
    checked: boolean;
    setChecked: any;
}

const Filters: React.FC<Props> = ({ isGrid, setIsGrid, tabIndex, setTabIndex, checked, setChecked }: any) => {
    const theme = useTheme();

    return (
        <StyledContainer mt='40px' display='flex' justifyContent='space-between'>
            <Tabs display='flex' justifyContent='flex-start'>
                <TabItem theme={theme} onClick={() => setTabIndex(1)} active={tabIndex === 1}>Live Staking</TabItem>
                <TabItem theme={theme} onClick={() => setTabIndex(2)} active={tabIndex === 2}>Finished</TabItem>
            </Tabs>
            <Box display='flex' justifyContent='flex-start' alignItems='center'>
                <Box color='landfilthelp.main' fontSize='12px' letterSpacing='3%'>Staked Only</Box>
                <Box>
                    <Switch checked={checked} setChecked={setChecked} />
                </Box>
                <Box color='landfilthelp.main' fontSize='12px' letterSpacing='3%'>Sorted by</Box>
                <Dropdown dwidth={145} values={['All', 'Earned', 'Staked']} />
                <GridSelect isGrid={isGrid} setIsGrid={setIsGrid} />
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
    >div:last-of-type {
        >div:first-of-type, >div:nth-of-type(3) {
            font-weight: 600;
        }
        >div+div {
            margin-left: 20px;
        }
    }
`;

const TabItem = styled(Box) <{ active?: boolean; theme: any; }>`
    transition: .3s border-color ease-out;
    cursor: pointer;
    font-weight: ${({ active }) => active ? '600' : '400'};
    font-size: 14px;
    color: ${({ theme, active }) => active ? theme.palette.cardtxt.contrastText : theme.palette.tabitem.main};
    padding-top: 10px;
    padding-bottom: 12px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-color: ${({ active }) => active ? '#FFBB0B' : 'transparent'};
`;

const Tabs = styled(Box)`
    >${TabItem}+${TabItem} {
        margin-left: 37px;
    }
`;

export default Filters;