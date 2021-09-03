import React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import Vault from '../components/Vault';
import Vault_resp from '../components/Vault_resp';
// import Button from '../components/Button';
import vault1 from '../assets/images/vaults/vault1.png';
import vault2 from '../assets/images/vaults/vault2.png';
// import vault3 from '../assets/images/vaults/vault3.png';

interface Props {
    connected:any;
    setConnected: any;
    omitted: any;
    setOmitted: any;
}

const Vaultlist: React.FC<Props> = ({ connected, setConnected, omitted, setOmitted }:any) => {
    const theme = useTheme();
    // const handleOmission = () => {
    //     setOmitted(!omitted);
    // }
    return (
        <StyledContainer theme={theme}>
            <Box>
                <Box>
                    <Box>
                        <table>
                            <thead>
                                <th {...{width:"10%"}}>Asset</th>
                                <th {...{width:"13%"}}>Fees</th>
                                <th {...{width:"13%"}}>Balance</th>
                                <th {...{width:"11%"}}>NetAPY</th>
                                <th {...{width:"15%"}}>Vault Assets</th>
                                <th {...{width:"15%"}}>Available to deposit</th>
                                <th></th>
                            </thead>
                            <tbody>
                                    <Vault
                                        assetIcon={vault1}
                                        assetName={'COMP'}
                                        fees={'V2'}
                                        balance={'000.0'}
                                        netAPY={'45'}
                                        vaultasset={'000.0'}
                                        availableDeposite={'000.0'}
                                    />
                                    <Vault
                                        assetIcon={vault2}
                                        assetName={'COMP'}
                                        fees={'V2'}
                                        balance={'000.0'}
                                        netAPY={'45'}
                                        vaultasset={'000.0'}
                                        availableDeposite={'000.0'}
                                    />
                                    <Vault
                                        assetIcon={vault2}
                                        assetName={'COMP'}
                                        fees={'V2'}
                                        balance={'000.0'}
                                        netAPY={'45'}
                                        vaultasset={'000.0'}
                                        availableDeposite={'000.0'}
                                    />
                            </tbody>
                        </table>
                    </Box>
                </Box>
                <Box>
                    <Box>More coming soon</Box>
                    <Box>Join Our Announcement Channel for Update</Box>
                </Box>
            </Box>
            <Box>
                <Vault_resp
                    assetIcon={vault2}
                    assetName={'COMP'}
                    fees={'V2'}
                    balance={'000.0'}
                    netAPY={'45'}
                    vaultasset={'000.0'}
                    availableDeposite={'000.0'}
                />
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)<{ theme:any; }>`
    background-color: ${({ theme }) => theme.palette.topbarbg.main};
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:first-of-type {
        display: flex;
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 20px;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        color: ${({ theme }) => theme.palette.contrast.main};
        width: 100%;
        margin: 0 110px 25px 80px;
        border: 2px solid ${({ theme }) => theme.palette.bordercol.main};
        >div:first-of-type {
            width: 100%;
            margin: 0;
            padding: 0;
            >div:first-of-type {
                width: 100%;
                display: flex;
                flex-direction: row;
                >table {
                    >thead {
                        text-align: left;
                        th: nth-of-type(1) {
                            padding-left: 70px;
                        }
                        th: nth-of-type(2) {
                            padding-left: 70px;
                        }
                        th {
                            font-weight: 700;
                            padding-bottom: 20px;
                        }
                    }
                    border-collapse: collapse;
                    width: 100%;
                    border-collapse: collapse;
                    width: 100%;
                }
            }
        }
        >div:last-of-type {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #8B8B8B;
            font-size: 16px;
            >div {
                font-weight: 700;
            }
            >div: last-of-type {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
    >div: last-of-type {
        display: none;
    }
    @media (max-width: 950px) {
        >div: first-of-type {
            display: none;
        }
        >div: last-of-type {
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            padding-bottom: 20px;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            color: ${({ theme }) => theme.palette.contrast.main};
            width: 100%;
            margin: 0 110px 25px 80px;
            border: 2px solid ${({ theme }) => theme.palette.bordercol.main};
        }
    }
`;

export default Vaultlist;