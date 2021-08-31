import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import Button from '../../Button';
import { agreements } from '../../../config';

interface Props {
    setStep: any;
    setOpen: any;
    setFinish: any;
}

const Step5: React.FC<Props> = ({ setStep, setOpen, setFinish }: any) => {
    const [checks, setChecks] = useState([false, false, false, false, false, false, false, false, false]);

    return (
        <>
            <Box color='cardtxt.contrastText' mt='54px' fontSize='24px' fontWeight='700'>Disclaimer</Box>
            <Box color='#969696' mt='5px' fontSize='16px' fontWeight='500'>
                Please read th <Box component='span' color='cardtxt.main'>Terms and Conditions</Box> then agree to all the following<br />to proceed!
            </Box>

            <InputContainer mt='45px'>
                {agreements.map((each: any, i: number) =>
                    <InputRow key={i}>
                        <Box color='#969696'>{each}</Box>
                    </InputRow>
                )}
                <InputRow>
                    <Box color='#969696'>Agree to all</Box>
                </InputRow>
            </InputContainer>
            <Box display='flex' justifyContent='flex-end' mt='66px'>
                <Box display='flex' alignItems='center' mr='20px'>
                    <Button variant='outlined' title='BACK TO WHITELIST' fontSize='12px' onClick={() => setStep((prevStep: any) => prevStep - 1)}></Button>
                </Box>
                <Button variant='contained' disabled={checks.filter((each: boolean) => each === true).length !== checks.length} title='PUBLISH PRESALE' fontSize='13px' onClick={() => {setFinish(true);setStep(1);setOpen(false);}}></Button>
            </Box>
        </>
    );
}

const InputRow = styled(Box)`
    display: flex;
    justify-content: flex-start;
`;

const InputContainer = styled(Box)`
    >${InputRow}+${InputRow} {
        margin-top: 25px;
    }
    >${InputRow}:last-of-type {
        margin-top: 70px;
    }
`;

export default Step5;