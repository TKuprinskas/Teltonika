import React from 'react';
import { Container, LogoBox } from './styles';
import logo from '../../assets/images/teltonika_logo.png';

const Header = () => {
    return (
        <Container>
            <LogoBox>
                <img src={logo} alt="logo" />
            </LogoBox>
        </Container>
    );
};

export default Header;
