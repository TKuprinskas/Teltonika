import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/styles';

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Heading = styled.h1`
    font-size: 2.5rem;
    color: ${colors.brandDark};
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    @media (max-width: ${breakpoints.sm.max}) {
        font-size: 1.2rem;
        width: 90%;
    }
`;
