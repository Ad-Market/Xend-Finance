import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import Button from '../../Button';

interface Props {
    setStep: any;
}

const Step4: React.FC<Props> = ({ setStep }: any) => {
    return (
        <>
            <Box color='cardtxt.contrastText' mt='54px' fontSize='24px' fontWeight='700'>Whitelist</Box>
            <Box color='#969696' mt='5px' fontSize='16px' fontWeight='500'>
                Address ( One Address Per Line )
            </Box>

            <Textarea component='textarea' mt='27px' maxWidth='100%' width='100%' height='140px' bgcolor='inputgroup.main' color='#969696' padding='10px' />

            <Box display='flex' justifyContent='flex-end' mt='92px'>
                <Box display='flex' alignItems='center' mr='20px'>
                    <Button variant='outlined' title='BACK TO PRESALE LISTING' fontSize='12px' onClick={() => setStep((prevStep: any) => prevStep - 1)}></Button>
                </Box>
                <Button variant='contained' title='NEXT' fontSize='13px' onClick={() => setStep((prevStep: any) => prevStep + 1)}></Button>
            </Box>
        </>
    );
}

const Textarea = styled(Box)`
    border: none;
    outline: none;
    border-radius: 10px;
    resize: none;
`;

export default Step4;