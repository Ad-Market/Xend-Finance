import React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import Button from './Button';
import AvartarIcon from '../assets/images/layout/avatar.png';

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
    // const handleOmission = () => {
    //     setOmitted(!omitted);
    // }
    return (
        <StyledContainer theme={theme}>
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
                <Button variant='outlined' title='Open Vault >' onClick={() => alert()} />
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
        >Button {
            background-color: white;
            color: #FF6600;
            width: 110px;
            padding: 5px;
        }
    }
    >td: nth-child(4) {
        color: #00D395;
    }
    >td: nth-child(7) {
        padding-right: 50px;
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