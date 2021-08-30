import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

import Button from '../../Button';
import InputGroup from '../InputGroup';
import InputDrop from '../InputDrop';

interface Props {
    setStep: any;
}

const Step1: React.FC<Props> = ({ setStep}:any) => {
    const theme = useTheme();
    const [tabIndex, setTabIndex] = useState(1);

    return (
        <>
            <Box color='cardtxt.contrastText' mt='54px' fontSize='24px' fontWeight='700'>Titile</Box>
            <Box color='#969696' mt='5px' fontSize='16px' fontWeight='500'>Lorem ipsum dollor sit amet sit mundos sit amet amet</Box>
            <Tabs mt='43px' display='flex' justifyContent='flex-start'>
                <TabItem theme={theme} onClick={() => setTabIndex(1)} active={tabIndex === 1}>Private Sales</TabItem>
                <TabItem theme={theme} onClick={() => setTabIndex(2)} active={tabIndex === 2}>Public IQO</TabItem>
                <TabItem theme={theme} onClick={() => setTabIndex(3)} active={tabIndex === 3}>Golden Egg Incubator</TabItem>
            </Tabs>
            <InputContainer mt='32px'>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='BEP20 Token Contract' defVal='0hkjkiefh732bbd893hbcka9fhhe73jf73bko' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputDrop label='Funding Token' entry={['BNB', 'ETH', 'DASH']}/>
                    </Box>
                </InputRow>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='SoftCap ( BNB )' defVal='200' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='text' label='HardCap ( BNB )' defVal='400' />
                    </Box>
                </InputRow>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='Token Price' defVal='0.10' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='text' label='BNB Allocation Factor' defVal='50' />
                    </Box>
                </InputRow>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='datetime-local' label='Sale State Time ( In Your Timezone )' defVal='2021-07-29T11:42:13' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='datetime-local' label='Sale End Time ( In Your Timezone )' defVal='2015-01-02T11:42:13' />
                    </Box>
                </InputRow>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='Token Decimal' defVal='18' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='text' label='Unsold Tokens Address' defVal='0hkjkiefh732bbd893hbcka9fhhe73jf73bko' />
                    </Box>
                </InputRow>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='Headstart ( In Second )' defVal='1800' />
                    </Box>
                    <Box flex='1' ml='24px' />
                </InputRow>
            </InputContainer>
            <Box display='flex' justifyContent='flex-end' mt='66px'>
                <Button variant='contained' title='SETTING PRESALE INFORMATION' fontSize='13px' onClick={() => setStep((prevStep:any) => prevStep + 1)}></Button>
            </Box>
        </>
    );
}

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

const InputRow = styled(Box)`
    display: flex;
`;

const InputContainer = styled(Box)`
    >${InputRow}+${InputRow} {
        margin-top: 20px;
    }
`;

export default Step1;