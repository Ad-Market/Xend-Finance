import React from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

interface Props {
    label: string;
    defVal?: string;
    type: string;
}

const InputGroup: React.FC<Props> = ({ label, defVal, type }: any) => {
    const theme = useTheme();
    return (
        <>
            <Box color='cardtxt.contrastText' ml='9px' fontWeight='600' fontSize='12px'>{label}</Box>
            <FormInput type={type} theme={theme} defaultValue={defVal} />
        </>
    );
}

const FormInput = styled.input<{ theme:any; }>`
    margin-top: 6px;
    border-radius: 10px;
    padding: 10px 20px;
    height: 28px;
    width: -webkit-fill-available;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.palette.inputgroup.main};
    color: ${({ theme }) => theme.palette.inputgroup.contrastText};
    font-size: 14px;
    font-family: Poppins;
    &::-webkit-calendar-picker-indicator {
        filter: ${({ theme }) => theme.palette.dateindicator.main};
    }
`;

export default InputGroup;