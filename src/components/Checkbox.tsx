import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

interface Props {
    which?: number;
    checks?: any;
    setChecks?: any;
}

const Checkbox: React.FC<Props> = ({ which, checks, setChecks }: any) => {
    const [allCheck, setAllCheck] = useState(false);
    const theme = useTheme();

    const handleCheck = () => {
        if(which !== -1) {
            const tmp = [...checks];
            tmp[which] = !tmp[which];
            setChecks(tmp);
        }
        else {
            const tmp = new Array(checks.length).fill(!allCheck);
            setAllCheck(!allCheck);
            setChecks(tmp);
        }
    }
    return (
        <StyledContainer component='label' mr='54px' theme={theme}>
            <input type="checkbox" checked={checks[which]} onChange={() => handleCheck()} />
            <Checkmark component='span' theme={theme} />
        </StyledContainer>
    );
}

const Checkmark = styled(Box)<{ theme:any; }>`
    position: absolute;
    top: 2px;
    left: 0;
    height: 17px;
    width: 17px;
    border-radius: 3px;
    border:2px solid ${({ theme }) => theme.palette.checkbox.contrastText};
    transition: .3s;
    background-color: transparent;
    &::after {
        content: "";
        position: absolute;
        display: none;
        left: 5.3px;
        top: 2px;
        width: 3.5px;
        height: 7px;
        border: solid #24265D;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

const StyledContainer = styled(Box)<{ theme:any; }>`
    position: relative;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    >input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    &:hover input ~ ${Checkmark} {
        background-color: ${({ theme }) => theme.palette.checkbox.contrastText};
    }
      
    >input:checked ~ ${Checkmark} {
        background-color: ${({ theme }) => theme.palette.checkbox.main};
        border-color: ${({ theme }) => theme.palette.checkbox.dark};
    }
    >input:checked ~ ${Checkmark}:after {
        display: block;
    }
`;

export default Checkbox;