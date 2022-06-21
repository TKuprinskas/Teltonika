import styled from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/styles';

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    padding: 0.5rem;
    margin-top: 2rem;
    margin-left: 2rem;
    @media (max-width: ${breakpoints.sm.max}) {
        width: 90%;
        margin: 2rem auto;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${colors.gray};
    padding-bottom: 0.5rem;
`;

export const Brand = styled.div`
    display: flex;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-style: italic;
    span {
        font-weight: bold;
        margin-left: 1rem;
        color: ${colors.brandDark};
    }
`;

export const SubCategory = styled.div`
    display: flex;
    font-size: 1.5rem;
    font-style: italic;
    span {
        font-weight: bold;
        margin-left: 1rem;
        color: ${colors.brandDark};
    }
`;

export const UsersContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    h1 {
        font-size: 1.5rem;
        font-style: italic;
        margin-bottom: 0.5rem;
    }
`;

export const UserBox = styled.div`
    display: flex;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid ${colors.gray};
    border-radius: 0.5rem;
    @media (max-width: ${breakpoints.sm.max}) {
        flex-direction: column;
    }
`;

export const UsersTitle = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${colors.brandDark};
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const PaginationContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

export const SearchWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;
    @media (max-width: ${breakpoints.sm.max}) {
        justify-content: center;
    }
`;

export const SearchInput = styled.input`
    width: 20rem;
    padding: 0.625rem;
    border: 1px solid ${colors.gray};
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    text-indent: 0.2rem;
    font-size: 1rem;
    @media (max-width: ${breakpoints.sm.max}) {
        width: 18.75rem;
        margin: 0;
    }
`;

export const SearchLabel = styled.label``;
