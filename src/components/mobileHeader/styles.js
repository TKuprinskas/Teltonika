import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/styles';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${colors.white};
    border-bottom: 3px solid ${colors.gray};
    @media (max-width: ${breakpoints.sm.max}) {
        background-color: ${colors.brandSecondary};
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    padding: 0.625rem;
    @media (max-width: ${breakpoints.sm.max}) {
        display: none;
        width: 30%;
    }
`;

export const HamburgerWrapper = styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 0.75rem;

    display: none;

    @media (max-width: ${breakpoints.sm.max}) {
        display: block;
        right: 1rem;
    }

    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
        content: '';
        display: block;
        position: absolute;
        height: 150%;
        width: 150%;
        top: -25%;
        left: -25%;
    }
`;

export const NavItems = styled.ul`
    display: none;

    @media (max-width: ${breakpoints.sm.max}) {
        display: flex;
        position: fixed;
        top: 0;
        z-index: 1;

        height: 100%;
        width: 70%;

        flex-direction: column;

        background-color: ${colors.brandDark};
        padding: 1rem 2rem;

        transition: 0.2s ease-out;

        transform: ${(props) =>
            props.isOpen ? 'translateX(-5%)' : 'translateX(-155%)'};
    }
`;

export const NavItem = styled.li`
    padding: 0 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    a {
        color: ${colors.brandLight};
        text-decoration: none;
    }

    @media (max-width: ${breakpoints.sm.max}) {
        padding: 1rem 0.3125rem;
    }
`;

export const LogoBox = styled.div`
    display: none;
    @media (max-width: ${breakpoints.sm.max}) {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.brandSecondary};
        img {
            height: 3.125rem;
        }
    }
`;

export const Brand = styled.div`
    padding: 0 0.3rem;
    font-size: 1.5rem;
    margin-top: 0.5rem;
    color: ${colors.brandLight};
`;

export const BrandItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    a {
        color: ${colors.brandSecondary};
        text-decoration: none;
        margin-left: 1rem;
        margin-top: 0.5rem;
        padding: 0.5rem;
    }
`;
