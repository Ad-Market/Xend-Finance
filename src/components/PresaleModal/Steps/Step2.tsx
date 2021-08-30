import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import Button from '../../Button';
import InputGroup from '../InputGroup';
import Dropzone from '../../Dropzone';

interface Props {
    setStep: any;
}

const Step2: React.FC<Props> = ({ setStep }: any) => {
    return (
        <>
            <Box color='cardtxt.contrastText' mt='54px' fontSize='24px' fontWeight='700'>Presale Image</Box>
            <Box color='#969696' mt='5px' fontSize='16px' fontWeight='500'>Lorem ipsum dollor sit amet sit mundos sit amet amet</Box>

            <Dropzone />

            <Box color='cardtxt.contrastText' mt='47px' fontSize='24px' fontWeight='700'>Project information</Box>
            <Box color='#969696' mt='5px' fontSize='16px' fontWeight='500'>Pick a project category to connect with a specific community, you <br />can always update this later</Box>

            <InputContainer mt='32px'>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='Sale Title' defVal='Ex: ' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='text' label='Short Description' defVal='Ex:' />
                    </Box>
                </InputRow>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='Website' defVal='ex: ' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='text' label='Telegram' defVal='Ex: ' />
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
                        <InputGroup type='text' label='Github ( Username Only )' defVal='ex: ' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='text' label='Twitter ( Username Only )' defVal='Ex: ' />
                    </Box>
                </InputRow>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='Logo' defVal='Fully- qualified URL + 32 CHaracters or less' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='text' label='KYC Information' defVal='Ex: ' />
                    </Box>
                </InputRow>
                <InputRow>
                    <Box flex='1'>
                        <InputGroup type='text' label='Whitepaper' defVal='Fully- qualified URL + 32 CHaracters or less' />
                    </Box>
                    <Box flex='1' ml='24px'>
                        <InputGroup type='text' label='Category' defVal='Ex: ' />
                    </Box>
                </InputRow>
            </InputContainer>

            <Box display='flex' justifyContent='flex-end' mt='56px'>
                <Box display='flex' alignItems='center' mr='20px'>
                    <Button variant='outlined' title='BACK TO PRESALE TYPE' fontSize='12px' onClick={() => setStep((prevStep: any) => prevStep - 1)}></Button>
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