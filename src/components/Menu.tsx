import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import MenuIcon from '../components/MenuIcon';
import { menus } from '../config';

interface Props {
    theme: any;
    omitted: boolean;
}

const Menu: React.FC<Props> = ({ theme, omitted }:any) => {
    const [currentPath, setCurrentPath] = useState('/');
    const [pushed, setPushed] = useState(false);
    const handleViewDetails = (hasChild:boolean, path:string) => {
        if(hasChild) setPushed(!pushed);
        else setCurrentPath(path);
    }
    const handleClickChild = (path:string) => {
        setCurrentPath(path);
    }
    return (
        <StyledContainer>
            {menus.map((each: any,i:number) =>
                <MenuItem
                    key={i}
                    theme={theme} 
                    active={currentPath === each.path || (each.items && each.items.some((entry:any) => entry.path === currentPath))}
                    pushed={pushed}
                    omitted={omitted}
                >
                    <Box component={!each.items ? Link : 'div'} {...{to : !each.items ? each.path : ''}} onClick={() => handleViewDetails(each.items ? true : false, each.path)}>
                        <Box>
                            <MenuIcon path={each.path} />
                            {!omitted && each.name}
                        </Box>
                        {(each.items && !omitted) &&
                            <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M4.125 7.125L9 12L13.875 7.125' strokeWidth='2.25' strokeLinecap='round' strokeLinejoin='round' />
                            </svg>
                        }
                    </Box>
                    <Details pushed={pushed} omitted={omitted} >
                        {(each.items && each.path === '/pools') &&
                            each.items.map((item: any, i:number) =>
                                <SubItem 
                                    key={i}
                                    onClick={() => handleClickChild(item.path)}
                                    to={item.path} theme={theme}
                                    active={item.path === currentPath}
                                >
                                    {item.name}
                                </SubItem>
                            )
                        }
                    </Details>
                </MenuItem>
            )}
        </StyledContainer>
    );
}

const MenuItem = styled(Box) <{ theme: any; active: any; pushed:any; omitted:any; }>`
    cursor: pointer;
    color: ${({ theme, active }) => {
        if (active) return theme.palette.topbaricon.main;
        return theme.palette.sidebartext.main;
    }};
    >div:first-of-type, >a {
        transition: .5s;
        margin-left: ${({ omitted }) => omitted ? '-5px' : '0px'};
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >div {
            color: ${({ theme, active }) => {
                if (active) return theme.palette.topbaricon.main;
                return theme.palette.sidebartext.main;
            }};
            display: flex;
            align-items: center;
            >svg {
                margin-right: 12px;
                * {
                    stroke: ${({ theme, active }) => {
                        if (active) return theme.palette.topbaricon.main;
                        return theme.palette.sidebartext.main;
                    }};
                }
            }
        }
        >svg {
            transform: ${({ pushed }) => pushed ? 'rotate(180deg)' : 'rotate(0deg)' };
            stroke: ${({ theme, active }) => {
                if (active) return theme.palette.topbaricon.main;
                return theme.palette.sidebartext.main;
            }};
        }
    }
`;

const StyledContainer = styled(Box) <{ theme: any; }>`
    margin-top: 50px;
    padding-left: 30px;
    padding-right: 20px;
    margin-bottom: 50px;
    * {
        font-weight: 600 !important; 
    }
    >${MenuItem}+${MenuItem} {
        margin-top: 30px;
    }
`;

const Details = styled(Box)<{ pushed:any; omitted:any; }>`
    display: flex;
    flex-direction: column;
    transition: .5s;
    max-height: ${({ pushed, omitted }) => (pushed && !omitted) ? '300px' : '0px'};
    overflow: hidden;
`;

const SubItem = styled(Link)<{ theme:any; active:any; }>`
    text-decoration: none;
    margin: 15px 0px 15px 29px;
    color: ${({ theme, active }) => {
        if(active) return theme.palette.topbaricon.main; 
        return theme.palette.sidebartext.main;
    }};
`;

export default Menu;