import React from 'react';
import styled from 'styled-components';
import { Modal, Box } from '@material-ui/core';

import Button from '../Button';
import SuccessIcon from '../../assets/images/presale/success.png';

interface Props {
    open: any;
    setOpen: any;
}

const SuccessModal: React.FC<Props> = ({ open, setOpen }: any) => {

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Container bgcolor='white' fontFamily='Poppins' color='white'>
                <Wrapper display='flex' flexDirection='column' justifyContent='center' alignItems='center' bgcolor='topbarbg.main'>
                    <img src={SuccessIcon} width='262.75px' height='220px' alt='success' />
                    <Box width='465px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' mt='30px'>
                        <Box color='cardtxt.contrastText' fontSize='36px' fontWeight='700' lineHeight='120%'>Congratulation !</Box>
                        <Box color='#969696' mt='10px' fontSize='16px' fontWeight='500' lineHeight='140%'>The campaign has been successfully published.</Box>
                        <Box mt='30px'>
                            <Button variant='contained' title='SEE CAMPAIGN' fontWeight='700' fontSize='13px' onClick={() => setOpen(false)} />
                        </Box>
                    </Box>
                </Wrapper>
            </Container>
        </Modal>
    );
}

const Container = styled(Box)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    background: transparent;
`;


const Wrapper = styled(Box)`
    border-radius: 16px;
    padding: 90px 81px 60px 80px;
`;

export default SuccessModal;