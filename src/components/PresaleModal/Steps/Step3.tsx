import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import Button from '../../Button';
import InputGroup from '../InputGroup';
import InputDrop from '../InputDrop';

interface Props {
    setStep: any;
}

const Step2: React.FC<Props> = ({ setStep }: any) => {
    return (
        <>
            <Box color='cardtxt.contrastText' mt='54px' fontSize='24px' fontWeight='700'>Listing and Liquidity Lock</Box>
            <Box color='#969696' mt='5px' fontSize='16px' fontWeight='500'>
                Lorem ipsum dolor sit amet amet set mundos sit amet amet lorem<br/> ipsum dolor sit amet siamet amate 
            </Box>

            <InputContainer mt='32px'>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='Lising Rate ( BNB Per Token )' defVal='0.2' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='text' label='Percentage Allocate To LP' defVal='75' />
                    </Box>
                </InputRow>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='datetime-local' label='Liquidity Listing Time' defVal='2021-07-29T09:12:13' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputDrop label='Liquidity Lock Duration ( Days )' entry={[3000,4000,5000]} />
                    </Box>
                </InputRow>
            </InputContainer>

            <Box display='flex' justifyContent='flex-end' mt='61px'>
                <Box display='flex' alignItems='center' mr='20px'>
                    <Button variant='outlined' title='BACK TO PRESALE INFORMATION' fontSize='12px' onClick={() => setStep((prevStep: any) => prevStep - 1)}></Button>
                </Box>
                <Button variant='contained' title='SETTING PRESALE LISTING' fontSize='13px' onClick={() => setStep((prevStep: any) => prevStep + 1)}></Button>
            </Box>
        </>
    );
}

const InputRow = styled(Box)`
    display: flex;
`;

const InputContainer = styled(Box)`
    >${InputRow}+${InputRow} {
        margin-top: 20px;
    }
`;

export default Step2;