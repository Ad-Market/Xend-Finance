import React, { ElementType } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import { ButtonProps } from './types';

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
    const { title, variant, fontSize, fontWeight, disabled, onClick } = props;
    const theme = useTheme();
    return (
        <StyledContainer
            variant={variant}
            fontSize={fontSize}
            fontWeight={fontWeight}
            theme={theme}
            disabled={disabled}
            onClick={() => onClick && onClick()}
        >
            {title}
        </StyledContainer>
    );
}

const StyledContainer = styled.button<{ variant:string; theme:any; fontSize:any; fontWeight:any; disabled:any; }>`
    font-family: Poppins;
    font-size: ${({ fontSize }) => fontSize ? fontSize : '12px'};
    font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : '600'};
    letter-spacing: 0.6px;
    border-radius: 54px;
    padding: 10px 25px;
    border: 1px solid ${({ disabled }) => disabled ? 'transparent' : '#FFBB0B'};
    background: ${({ theme, variant, disabled }) => {
        if(disabled) return theme.palette.buttonbg.contrastText;
        else {
            if(variant === 'outlined') return 'transparent';
            if(variant === 'contained') return theme.palette.buttonbg.main;
            return 'none';
        }
    }};
    color: ${({ theme, variant, disabled }) => {
        if(disabled) return theme.palette.buttonbg.dark;
        else {
            if(variant === 'outlined') return '#FFBB0B';
            if(variant === 'contained') return '#0F1030';
        }
    }};
    outline: none;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

Button.propTypes = {
    // children: PropTypes.node.isRequired,
}

export default Button;