import React from 'react';
import { Wrapper } from './styles';

const Button = ({
    style,
    hoverColor,
    color = 'transparent',
    size = 'medium',
    show,
    margin,
    disabled = false,
    onClick,
    type,
    children,
    ...props
}) => {
    return (
        <Wrapper
            {...props}
            show={show}
            size={size}
            color={color}
            margin={margin}
            disabled={disabled}
            onClick={onClick}
            type={type}
            hoverColor={hoverColor}
            style={style}
        >
            {children}
        </Wrapper>
    );
};

export default Button;
