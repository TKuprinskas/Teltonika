import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/styles';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    background-color: ${colors.white};
    border-bottom: 3px solid ${colors.gray};
    @media (max-width: ${breakpoints.sm.max}) {
        background-color: ${colors.brandDark};
    }
`;

export const LogoBox = styled.div`
    display: flex;
    width: 100%;
    margin-left: 1rem;
    justify-content: flex-start;
    align-items: center;
    img {
        height: 3rem;
    }
    @media (max-width: ${breakpoints.sm.max}) {
        width: 30%;
        img {
            height: 1.875rem;
        }
    }
`;
