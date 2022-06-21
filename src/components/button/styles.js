import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';
import { breakpoints } from '../../styles/styles';

const getSizeCss = (size) =>
    size === 'small'
        ? css`
              font-size: 0.75rem;
              padding: 0.5rem 1rem;

              @media (max-width: ${breakpoints.sm.max}) {
                  padding: 0.3125rem 0.625rem;
                  width: 100%;
              }
          `
        : size === 'medium'
        ? css`
              font-size: 1rem;
              padding: 0.625rem 1.25rem;

              @media (max-width: ${breakpoints.sm.max}) {
                  padding: 0.3125rem 0.625rem;
                  width: 100%;
              }
          `
        : css`
              font-size: 2rem;
              padding: 0.9375rem 1.875rem;

              @media (max-width: ${breakpoints.sm.max}) {
                  padding: 0.625rem 1.25rem;
                  width: 100%;
              }
          `;

const colorsMap = new Map([
    [
        'primary',
        css`
            color: ${colors.brandSecondary};
            background-color: ${colors.brandDark};
            border: 2px solid ${colors.brandSecondary};
            &:hover {
                background-color: ${colors.brandSecondary};
                color: ${colors.white};
            }
        `,
    ],
    [
        'secondary',
        css`
            color: ${colors.white};
            background-color: ${colors.brandSecondary};
            border: 2px solid ${colors.brandLight};
            &:hover {
                background-color: ${colors.brandDark};
                color: ${colors.white};
            }
        `,
    ],
    [
        'orange',
        css`
            color: ${colors.lightOrange};
            border: 1px ${colors.lightOrange} solid;
        `,
    ],
    [
        'transparent',
        css`
            color: ${colors.white};
            border: 1px ${colors.darkBrown} solid;

            &:hover {
                border-color: ${colors.white};
            }
        `,
    ],
    [
        'active',
        css`
            color: ${colors.brandSecondary};
            background-color: ${colors.brandDark};
            border: 2px solid ${colors.brandSecondary};
            padding: 0.625rem 1.25rem;
            font-size: 1rem;
            @media (max-width: ${breakpoints.sm.max}) {
                padding: 0.3125rem 0.625rem;
                width: 100%;
            }
            &:hover {
                background-color: ${colors.green};
                color: ${colors.white};
            }
        `,
    ],
    [
        'inactive',
        css`
            color: ${colors.brandSecondary};
            background-color: ${colors.brandDark};
            border: 2px solid ${colors.brandSecondary};
            padding: 0.625rem 1.25rem;
            font-size: 1rem;
            @media (max-width: ${breakpoints.sm.max}) {
                padding: 0.3125rem 0.625rem;
                width: 100%;
            }

            &:hover {
                background-color: ${colors.red};
                color: ${colors.white};
            }
        `,
    ],
]);

export const Wrapper = styled.button`
    display: ${({ show }) => show || 'inline'};
    border: none;
    border-radius: 5px;
    margin: ${({ margin }) => margin || ''};
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${({ hoverColor }) => hoverColor || colors.secondary};
    }
    ${({ color }) => colorsMap.get(color)};
    ${({ size }) => getSizeCss(size)};
`;
