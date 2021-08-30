import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Box, useTheme } from '@material-ui/core';

import PresaleBg from '../../assets/images/presale/modalimage.png';

import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import { stepTitles } from '../../config';

interface Props {
    open: any;
    setOpen: any;
    setFinish: any;
}

const PresaleModal: React.FC<Props> = ({ open, setOpen, setFinish }: any) => {
    const theme = useTheme();
    const [step, setStep] = useState(1);

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Container width='906px' bgcolor='white' fontFamily='Poppins'>
                <ModalImage display='flex' justifyContent='center' alignItems='center'>
                    <StepLabel fontSize='36px' color='white'>{`${step}. ${stepTitles[step - 1]}`}</StepLabel>
                </ModalImage>
                <Main bgcolor='topbarbg.main' pl='70px' pr='70.5px' pb='62px' pt='40px'>
                    <Box display='flex' justifyContent='center'>
                        <StepBar theme={theme} display='flex'>
                            <Box>
                                <StepBall active={step >= 1} complete={step >= 2}>
                                    <Box />
                                </StepBall>
                            </Box>
                            <Box>
                                <StepBall active={step >= 2} complete={step >= 3}>
                                    <Box />
                                </StepBall>
                            </Box>
                            <Box>
                                <StepBall active={step >= 3} complete={step >= 4}>
                                    <Box />
                                </StepBall>
                            </Box>
                            <Box>
                                <StepBall active={step >= 4} complete={step >= 5}>
                                    <Box />
                                </StepBall>
                            </Box>
                            <Box>
                                <StepBall active={step >= 5} complete={step >= 6} />
                            </Box>
                        </StepBar>
                    </Box>
                    <StepLabels display='flex' justifyContent='center'>
                        <StepItemLabel theme={theme} active={step >= 1}>Presale Type</StepItemLabel>
                        <StepItemLabel theme={theme} active={step >= 2}>Presale Information</StepItemLabel>
                        <StepItemLabel theme={theme} active={step >= 3}>Presale Listing</StepItemLabel>
                        <StepItemLabel theme={theme} active={step >= 4}>Whitelist</StepItemLabel>
                        <StepItemLabel theme={theme} active={step >= 5}>Disclaimer</StepItemLabel>
                    </StepLabels>
                    {step===1 &&<Step1 setStep={setStep} /> }
                    {step===2 &&<Step2 setStep={setStep} /> }
                    {step===3 &&<Step3 setStep={setStep} /> }
                    {step===4 &&<Step4 setStep={setStep} /> }
                    {step===5 &&<Step5 setStep={setStep} setOpen={setOpen} setFinish={setFinish} /> }
                </Main>
            </Container>
        </Modal>
    );
}

const Container = styled(Box)`
    position: absolute;
    left: 50%;
    top: 50%;
    max-height: 90%;
    overflow-y: auto;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    background: transparent;
`;

const ModalImage = styled(Box)`
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background: url(${PresaleBg});
    height: 190px;
`;

const Main = styled(Box)`
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`;

const StepLabel = styled(Box)`
    font-weight: 700;
`;

const StepBar = styled(Box) <{ theme: any; }>`
    >div {
        >div:last-of-type {
            font-size: 12px;
        }
    }
    >div+div {
        margin-left: 80px;
    }
`;

const StepLabels = styled(Box)`
    >div {
        font-size: 12px;
    }
    >div+div {
        margin-left: 21px;
    }
`;

const StepItemLabel = styled(Box) <{ active?: boolean; theme: any; }>`
    width: 70px;
    color: ${({ theme, active }) => active ? theme.palette.cardtxt.contrastText : '#969696'};
`;

const StepBall = styled(Box) <{ active: any; complete: any; }>`
    position: relative;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border-width: 4px;
    border-style: solid;
    background: ${({ active }) => active ? '#FFE6A6' : '#414372'};
    border-color: ${({ active }) => active ? '#FFBB0B' : '#414372'};
    box-shadow: ${({ complete }) => complete ? '0px 0px 9px 3px #FFBB0B' : 'none'};
    margin-bottom: 18px;
    z-index: 2;
    >div {
        position: absolute;
        left: calc(100% + 2px);
        top: 50%;
        transform: translate(0px, -50%);
        width: 90px;
        height: 2px;
        background: ${({ active }) => active ? '#FFBB0B' : '#414372'};
        z-index: 1;
    }
`;

export default PresaleModal;