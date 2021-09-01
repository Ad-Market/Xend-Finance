import React from 'react';
import styled from 'styled-components';
import { Modal, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Button from '../Button';

interface Props {
    open: any;
    setOpen: any;
    assetIcon: string;
    assetName: string;
    fees: string;
    balance: string;
    netAPY: string;
    vaultasset: string;
    availableDeposite: string;
}

const DepositeModal: React.FC<Props> = ({ open, setOpen, assetIcon, assetName, fees, balance, netAPY, vaultasset, availableDeposite }: any) => {
    const theme = useTheme();

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Container fontFamily='Poppins' theme={theme}>
                <Wrapper display='flex' flexDirection='column' justifyContent='center' alignItems='center' theme={theme}>
                <Topbar>
                    <Logo>
                        <Box ml='29px' display='flex'>
                            <img src={assetIcon} alt='success' />
                        </Box>
                        <LogoText ml='8px' theme={theme}>
                            <span>XEND</span>
                            <span>Xend Finance</span>
                        </LogoText>
                    </Logo>
                    <Box>x</Box>
                </Topbar>
                <table>
                    <thead>
                        <th>Fees</th>
                        <th>Balance</th>
                        <th>NetAPY</th>
                        <th>Vault Assets</th>
                        <th>Available to deposit</th>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            {fees}
                        </td>
                        <td>
                            {balance}
                        </td>
                        <td>
                            {netAPY}%
                        </td>
                        <td>
                            {vaultasset}
                        </td>
                        <td>
                            {availableDeposite}
                        </td>
                        </tr>
                    </tbody>
                </table>
                <InputValue>
                    <Deposit theme={theme}>
                        <span>Deposit</span>
                        <Box>
                            <Box>0</Box>
                            <input></input>
                            <Box>MAX</Box>
                        </Box>
                    </Deposit>
                    <Withdraw theme={theme}>
                        <span>Withdrawal XEND</span>
                        <Box>
                            <Box>0</Box>
                            <input></input>
                            <Box>MAX</Box>
                        </Box>
                    </Withdraw>
                </InputValue>
                <ButtonGroup mt='30px' theme={theme}>
                    <Button variant='contained' title='Approve' fontWeight='700' fontSize='13px' onClick={() => setOpen(false)} />
                    <Button variant='contained' title='Withdrawal XEND' fontWeight='700' fontSize='13px' onClick={() => setOpen(false)} />
                </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    );
}

const LogoText = styled(Box)<{ theme:any; }>`
    font-family: Fira Sans;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.palette.topbarname.main};
    display: flex;
    flex-direction: column;
    font-weight: 700;
    >span: first-of-type {
        color: ${({ theme }) => theme.palette.topbarname.main};
    }
    >span: last-of-type {
        width: 200px;
        font-size: 15px;
        color: #84858A;
    }
`;

const Container = styled(Box)<{ theme:any; }>`
    position: absolute;
    left: 50%;
    top: 50%;
    color: ${({ theme }) => theme.palette.contrast.main};
    transform: translate(-50%, -50%);
    background: transparent;
    >div >table {
        padding-top: 40px;
        padding-left: 30px;
        width: 100%;
        text-align: left;
        >tbody tr td:nth-of-type(3) {
            color: #00D395;
        }
    }
`;

const InputValue = styled(Box)`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    margin-left: -10px;
    >div + div {
        margin-left: 20px;
    }
`;

const ButtonGroup = styled(Box)<{ theme:any; }>`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    margin-bottom: 60px;
    margin-left: -10px;
    >Button {
        width: 350px;
        height: 60px;
        color: ${({ theme }) => theme.palette.contrast.main};
        font-size: 20px;
        background: linear-gradient(276.21deg, #2042B8 -26.01%, #FF6600 145.95%);
    }
    >Button + Button {
        margin-left: 20px;
    }
`;

const Deposit = styled(Box)<{ theme:any; }>`
    font-size: 18px;
    color: #84858A;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    >span: first-of-type {
        color: ${({ theme }) => theme.palette.contrast.main};
    }
    >div: first-of-type {
        padding: 20px;
        border-radius: 40px;
        border: 2px solid #707070;
        display: flex;
        flex-direction: row;
        width: 300px;
        >input {
            text-align: center;
            border: none;
            outline: none;
            background-color: transparent;
            color: ${({ theme }) => theme.palette.contrast.main};
            font-size: 18px;
        }
        >div: first-of-type {
            cursor: pointer;
        }
        >div: last-of-type {
            cursor: pointer;
        }
    }
    >span {
        margin-left: 20px;
        margin-bottom: 20px;
    }
`;

const Withdraw = styled(Box)<{ theme:any; }>`
    font-size: 18px;
    color: #84858A;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    >span: first-of-type {
        color: ${({ theme }) => theme.palette.contrast.main};
    }
    >div: first-of-type {
        padding: 20px;
        border-radius: 40px;
        border: 2px solid #707070;
        display: flex;
        flex-direction: row;
        width: 300px;
        >input {
            text-align: center;
            border: none;
            outline: none;
            background-color: transparent;
            color: ${({ theme }) => theme.palette.contrast.main};
            font-size: 18px;
        }
        >div: first-of-type {
            cursor: pointer;
        }
        >div: last-of-type {
            cursor: pointer;
        }
    }
    >span {
        margin-left: 20px;
        margin-bottom: 20px;
    }
`;

const Wrapper = styled(Box)<{ theme:any; }>`
    border-radius: 25px;
    padding: 30px;
    background-color:${({ theme }) => theme.palette.modalbg.main};
`;

const Logo = styled(Box)<{ theme:any; }>`
    font-family: Fira Sans;
    font-weight: 400;
    font-size: 14px;
    display:flex;
    flex-direction: row;
    align-items: center;
    >div {
        >img {
            margin-left: 10px;
            width: 70px;
            height: 70px;
        }
    }
`;

const Topbar = styled(Box)<{ theme:any; }>`
    font-family: Fira Sans;
    font-weight: 400;
    font-size: 14px;
    display:flex;
    flex-direction: row;
    justify-content: left;
    align-items: left;
    margin-left: -30px;
    >div + div {
        margin-left: 400px;
    }
    >div: last-of-type {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 25px;
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export default DepositeModal;