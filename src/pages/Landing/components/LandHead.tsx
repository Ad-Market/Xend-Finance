import React from 'react';
import { Box, useTheme } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { useState } from 'react';

import PresaleModal from '../../../components/PresaleModal';
import SuccessModal from '../../../components/SuccessModal';

const LandHead: React.FC = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [openSuccess, setFinish] = useState(false);

    return (
        <>
            <StyledContainer theme={theme}>
                <Box color='landcardtxt.main'>Start launch</Box>
                <Box color='landcardtxt.contrastText'>Bring your creative project to life</Box>
                <Box>
                    <Button title='START A PROJECT' variant='contained' onClick={() => setOpen(true)}>START A PROJECT</Button>
                    <Button title='SUBSCRIBE TO UPCOMING LAUNCH' variant='outlined'>SUBSCRIBE TO UPCOMING LAUNCH</Button>
                </Box>
            </StyledContainer>
            <PresaleModal open={open} setOpen={setOpen} setFinish={setFinish} />
            <SuccessModal open={openSuccess} setOpen={setFinish} />
        </>
    );
}

const StyledContainer = styled(Box) <{ theme: any; }>`
    border-radius: 20px;
    width: 825px;
    padding: 40px;
    background: linear-gradient(93.73deg, ${({ theme }) => theme.palette.landcardbg.main} 33.76%, ${({ theme }) => theme.palette.landcardbg.contrastText} 101.08%);
    >div:first-of-type {
        font-size: 20px;
        font-weight: 500 !important;
    }
    >div:nth-of-type(2) {
        font-size: 28px;
        font-weight: 700 !important;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    >div:last-of-type {
        >button{
            font-size: 13px;
            font-weight: 600;
        }
        >button+button {
            margin-left: 20px;
        }
    }
`;

export default LandHead;