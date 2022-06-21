import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../../state/selectors';
import Arrow from '../Icon/Icons/HamburgerMenu';
import {
    Container,
    HamburgerWrapper,
    NavItems,
    NavItem,
    LogoBox,
    Brand,
    BrandItem,
} from './styles';
import { colors } from '../../styles/colors';
import logo from '../../assets/images/teltonika_logo.png';

const MobileHeader = () => {
    const [openDrawer, toggleDrawer] = useState(false);
    const drawerRef = useRef(null);
    const Categories = useSelector(categories);

    return (
        <Container>
            <LogoBox>
                <img src={logo} alt="logo" />
            </LogoBox>
            <HamburgerWrapper onClick={() => toggleDrawer(!openDrawer)}>
                <Arrow width="32px" color={colors.brandDark} height="32px" />
            </HamburgerWrapper>
            <NavItems ref={drawerRef} isOpen={openDrawer}>
                <NavItem>
                    <NavLink to={'/'}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'/create-user'}>New User</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={'/create-category'}>New Category</NavLink>
                </NavItem>
                <Brand>Samsung</Brand>
                <BrandItem>
                    {Categories.filter(
                        (cat) => cat.brandsCategory === 'Samsung'
                    ).map((category, index) => (
                        <NavLink
                            to={`/samsung/${category.subCategory}`}
                            key={index}
                        >
                            {category.subCategory}
                        </NavLink>
                    ))}
                </BrandItem>
                <Brand>Apple</Brand>
                <BrandItem>
                    {Categories.filter(
                        (cat) => cat.brandsCategory === 'Apple'
                    ).map((category, index) => (
                        <NavLink
                            to={`/apple/${category.subCategory}`}
                            key={index}
                        >
                            {category.subCategory}
                        </NavLink>
                    ))}
                </BrandItem>
            </NavItems>
        </Container>
    );
};

export default MobileHeader;
