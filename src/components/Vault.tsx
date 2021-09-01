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

const Vault: React.FC<Props> = ({ assetIcon, assetName, fees, balance, netAPY, vaultasset, availableDeposite  }: any) => {
    const theme = useTheme();
    const [isOpenDepositeModal, setOpenDepositeModal] = useState(false);
    return (
        <StyledContainer theme={theme}>
            <DepositeModal open={isOpenDepositeModal} setOpen={setOpenDepositeModal} assetIcon={assetIcon}
                 assetName={assetName} fees={fees} balance={balance} netAPY={netAPY} 
                 vaultasset={vaultasset} availableDeposite={availableDeposite} />
            <td>
                <Box><img src={assetIcon} alt='' /></Box>
                <Box>{assetName}</Box>
            </td>
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
            <td>
                <Button variant='outlined' title='Open Vault >' onClick={() => {setOpenDepositeModal(!isOpenDepositeModal);}} />
            </td>
        </StyledContainer>
    );
}

const StyledContainer = styled.tr <{ theme: any; }>`
    border-top: 1px solid rgba(102, 102, 102, 0.91);
    padding-left: 0;
    font-size: 20px;
    font-weight: 600;
    >td {
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
        margin-left: 40px;
        color: ${({ theme }) => theme.palette.contrast.main};
        >Button {
            background-color: ${({ theme }) => theme.palette.btnbg.main};
            color: #FF6600;
            width: 110px;
            padding: 5px;
        }
    }
    >td {
        text-align: left;
        font-weight: 700;
        >div: last-of-type {
            font-weight: 700;
        }
    }
    >td: nth-child(2) {
        padding-left: 70px;
    }
    >td: nth-child(4) {
        color: #00D395;
    }
    >td: nth-child(7) {
        display: flex;
        align-items: center;
        justify-content: center;
        >Button {
            padding: 10px;
            font-size: 16px;
            width: 160px;
            margin-right: 50px;
        }
    }
    >td:first-of-type {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        >div + div {
            margin-left: 20px;
        }
    }
`;

export default Vault;