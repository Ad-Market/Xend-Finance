import React, {useState} from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import DepositeModal from '../components/DepositeModal';

import Button from './Button';

interface Props {
    assetIcon: string;
    assetName: string;
    fees: string;
    balance: string;
    netAPY: string;
    vaultasset: string;
    availableDeposite: string;
}

const Vault_resp: React.FC<Props> = ({ assetIcon, assetName, fees, balance, netAPY, vaultasset, availableDeposite  }: any) => {
    const theme = useTheme();
    const [isOpenDepositeModal, setOpenDepositeModal] = useState(false);
    return (
        <StyledContainer theme={theme}>
            <DepositeModal open={isOpenDepositeModal} setOpen={setOpenDepositeModal} assetIcon={assetIcon}
                 assetName={assetName} fees={fees} balance={balance} netAPY={netAPY} 
                 vaultasset={vaultasset} availableDeposite={availableDeposite} />
            <Box>
                <Box><img src={assetIcon} alt='' /></Box>
                <Box>{assetName}</Box>
            </Box>
            <Box>
                <table>
                    <thead>
                        <th>Fees</th>
                        <th>Balance</th>
                        <th>netAPY</th>
                        <th>VaultAsset</th>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </Box>
            <Box>
                <Box>Available to Deposit</Box>
                <Box>
                    {availableDeposite}
                </Box>
            </Box>
            <Box>
                <Button variant='outlined' title='Open Vault&nbsp;&nbsp; >' onClick={() => {setOpenDepositeModal(!isOpenDepositeModal);}} />
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled.tr <{ theme: any; }>`
    padding-left: 0;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    color: ${({ theme }) => theme.palette.contrast.main};
    margin-bottom: 25px;
    border: 2px solid ${({ theme }) => theme.palette.bordercol.main};
    padding-top: 20px;
    padding-bottom: 20px;
    >div: first-of-type {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
        margin-left: 50px;
        >div + div {
            margin-left: 10px;
        }
    }
    >div: nth-of-type(2) {
        width: 100%;
        margin-left: 50px;
        margin-right: 50px;
        text-align: left;
        >table {
            width: 100%;
            >thead {
                margin-bottom: 10px;
            }
            >tbody {
                >td: nth-child(3) {
                    color: #00D395;
                }
            }
        }
    }
    >div: nth-of-type(3) {
        margin-left: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    >div: nth-of-type(4) {
        display: flex;
        justify-content: center;
        align-items: center;
        >Button {
            padding: 10px;
            font-size: 16px;
            // width: 160px;
            // margin-right: 50px;
            background-color: ${({ theme }) => theme.palette.btnbg.main};
            color: #FF6600;
            width: 110px;
        }        
    }
    // >td {
    //     margin-top: 30px;
    //     margin-bottom: 30px;
    //     margin-left: 40px;
    //     color: ${({ theme }) => theme.palette.contrast.main};
    //     text-align: left;
    //     font-weight: 700;
    //     >div: last-of-type {
    //         font-weight: 700;
    //     }
    //     >Button {
    //         background-color: ${({ theme }) => theme.palette.btnbg.main};
    //         color: #FF6600;
    //         width: 110px;
    //     }
    // }
    // >td: nth-child(2) {
    //     padding-left: 70px;
    // }
    // >td: nth-child(4) {
    //     color: #00D395;
    // }
    // >td: nth-child(7) {
    //     >Button {
    //         padding: 10px;
    //         font-size: 16px;
    //         width: 160px;
    //         margin-right: 50px;
    //     }
    // }
    // >td:first-of-type {
    //     display: flex;
    //     flex-direction: row;
    //     align-items: center;
    //     >div: first-of-type {
    //         display: flex;
    //         justify-content: center;
    //         align-items: center;
    //     }
    //     >div + div {
    //         margin-left: 20px;
    //     }
    // }
`;

export default Vault_resp;