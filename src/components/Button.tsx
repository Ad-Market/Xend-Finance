import React, { ElementType } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import { ButtonProps } from './types';

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
    const { title, variant, fontSize, fontWeight, disabled, btnIcon, downArrow, onClick } = props;
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
            {btnIcon && <img src={btnIcon} alt='' />}
            <span>{title}</span>
            {downArrow && <span>&gt;</span>}
        </StyledContainer>
    );
}

const StyledContainer = styled.button<{ variant:string; theme:any; fontSize:any; fontWeight:any; disabled:any; }>`
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    font-family: Fira Sans;
    font-size: ${({ fontSize }) => fontSize ? fontSize : '12px'};
    font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : '100'};
    letter-spacing: 0.6px;
    border-radius: 54px;
    padding: 10px 25px;
    border: transparent;
    >img {
        margin-right: 10px;
    }
    >span {
        font-weight: 700;
    }
    background: ${({ theme, variant, disabled }) => {
        if(disabled) return theme.palette.buttonbg.contrastText;
        else {
            if(variant === 'outlined') return 'rgba(255, 255, 255, 0.14);';
            if(variant === 'contained') return theme.palette.buttonbg.main;
            return 'none';
        }
    }};
    color: ${({ theme, variant, disabled }) => {
        if(disabled) return theme.palette.buttonbg.dark;
        else {
            if(variant === 'outlined') return '#FFFFFF';
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