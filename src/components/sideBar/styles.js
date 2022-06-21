import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/styles';

export const Container = styled.div`
    background-color: ${colors.brandDark};
    width: 15.625rem;
    height: 100%;
    position: fixed;
    left: 0;
    @media (max-width: ${breakpoints.sm.max}) {
        display: none;
    }
`;

export const NavBox = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    a {
        height: 3.125rem;
        color: ${colors.lightBrown};
        text-decoration: none;
        font-size: 1.25rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        &:hover {
            background-color: ${colors.darkTeal};
            color: ${colors.white};
        }
    }
`;

export const Brand = styled.div`
    height: 1.25rem;
    color: ${colors.white};
    background-color: ${colors.brandDark};
    font-weight: bold;
    text-decoration: none;
    font-size: 1.25rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const BrandItem = styled.div`
    display: flex;
    flex-direction: column;
    a {
        height: 1rem;
        margin-left: 2rem;
    }
`;
