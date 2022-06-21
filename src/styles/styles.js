import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { colors } from './colors';

export const smMobile = '(max-width: 20rem)'; //320px
export const mobile = '(max-width: 30rem)'; //480px
export const tablet = '(max-width: 48rem)'; //768px

export const useQuery = () => ({
    isMobile: useMediaQuery({ query: mobile }),
    isTablet: useMediaQuery({ query: tablet }),
});

export const breakpoints = {
    xs: { min: '0px', max: '450px' },
    sm: { min: '450px', max: '760px' },
    md: { min: '760px', max: '1270px' },
    lg: { min: '1270px', max: '99999px' },
};

export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    background-color: ${colors.lightGray};
    font-family: Helvetica, Arial, sans-serif;
  }
    @media (max-width: ${breakpoints.sm.max}) {
        body {
            width: 100%;
            left: 0;
        }
    }
`;

export const H1 = styled.h1`
    font-size: 32px;
    font-weight: bold;
    color: ${colors.black};
    margin: 16px 0 16px 0;
    padding: 0;
`;

export const Wrapper = styled.div`
    align-items: center;
    margin-left: 25%;
    font-size: 14px;
    color: ${colors.red};
    display: flex;
    margin-bottom: 1rem;
    width: 50%;

    @media (max-width: ${breakpoints.sm.max}) {
        width: 90%;
        margin: 0 auto;
        margin-top: 8px;
    }

    @media only screen and (max-width: ${breakpoints.md
            .max}) and (min-width: ${breakpoints.md.min}) {
        width: 50%;
    }
`;

export const Container = styled.div`
    width: calc(100vw - 250px);
    left: 250px;
    position: relative;

    @media (max-width: ${breakpoints.sm.max}) {
        width: 100%;
        left: 0;
    }
`;

export const InputDiv = styled.div`
    display: flex;
    width: 50%;
    margin-left: 20px;
    padding: 10px;
    label {
        font-size: 18px;
        margin: 0 auto;
        padding: 10px;
        font-weight: bold;
        width: 25%;
    }
    input {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid ${colors.gray};
        box-sizing: border-box;
        padding-left: 10px;
        font-size: 18px;
        text-indent: 5px;
    }
    button {
        text-align: center;
    }

    @media (max-width: ${breakpoints.sm.max}) {
        width: 90%;
        flex-wrap: wrap;
        margin: 0 auto;
        label {
            width: 100%;
            padding: 5px;
        }
        input {
            width: 100%;
            padding: 5px;
        }
    }

    @media only screen and (max-width: ${breakpoints.md
            .max}) and (min-width: ${breakpoints.md.min}) {
        width: 90%;
        flex-wrap: wrap;
        margin: 0 auto;
        label {
            width: 95%;
            padding: 5px;
        }
        input {
            width: 95%;
            padding: 5px;
        }
    }

    @media (min-width: ${breakpoints.lg.min}) {
        display: flex;
        padding: 10px;
        width: 50%;
        label {
            width: 30%;
            padding: 5px;
        }
        input {
            width: 100%;
            padding: 5px;
        }
    }
`;

export const Spinner = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${colors.gray};
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const SpinnerWrapper = styled.div`
    width: 10%;
    margin: 5rem auto;
`;

export const TableWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    margin-left: 20px;
    label {
        width: 11%;
        font-size: 18px;
        padding: 5px;
        font-weight: bold;
    }
    @media (max-width: ${breakpoints.sm.max}) {
        margin: 0 9px;
        width: 90%;
        label {
            width: 100%;
        }
    }
    @media (max-width: ${breakpoints.md.max}) and (min-width: ${breakpoints.md
            .min}) {
        width: 100%;
    }
`;

export const StyledSelect = styled(Select)`
    font-size: 18px;
    width: 38%;
    margin: 0 0.5rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    @media (max-width: ${breakpoints.sm.max}) {
        width: 100%;
    }
    @media (max-width: ${breakpoints.md.max}) and (min-width: ${breakpoints.md
            .min}) {
        width: 50%;
    }
`;
