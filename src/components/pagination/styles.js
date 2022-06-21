import styled from 'styled-components';

export const Container = styled.ul`
    display: flex;
    list-style-type: none;
`;

export const Item = styled.li`
    padding: 0 0.75rem;
    height: 2rem;
    text-align: center;
    margin: auto 0.25rem;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 1rem;
    line-height: 1.43;
    font-size: 0.8125rem;
    min-width: 2rem;
    ${({ selected }) =>
        selected ? 'background-color: #e0e0e0; font-weight:bold;' : ''}
    ${({ disabled }) => (disabled ? 'pointer-events: none;' : '')}
  ${({ dots }) =>
        dots ? 'background-color: transparent; cursor: default;' : ''}

  &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        cursor: pointer;
    }
`;

export const Arrow = styled.div`
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    ${({ left }) => (left ? 'transform: rotate(-135deg) translate(0%);' : '')}
    ${({ right }) => (right ? 'transform: rotate(45deg);' : '')}
  ${({ disabled }) => (disabled ? 'display: none;' : '')}
`;
