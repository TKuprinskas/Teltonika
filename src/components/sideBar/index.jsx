import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../../state/selectors';
import { Container, NavBox, Brand, BrandItem } from './styles';
import { colors } from '../../styles/colors';

const SideBar = () => {
    const Categories = useSelector(categories);

    return (
        <Container>
            <NavBox>
                <NavLink
                    to={'/'}
                    style={({ isActive }) =>
                        isActive
                            ? {
                                  color: `${colors.white}`,
                                  background: `${colors.brandSecondary}`,
                              }
                            : {
                                  color: `${colors.brandSecondary}`,
                                  background: `${colors.brandDark}`,
                              }
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/create-user'}
                    style={({ isActive }) =>
                        isActive
                            ? {
                                  color: `${colors.white}`,
                                  background: `${colors.brandSecondary}`,
                              }
                            : {
                                  color: `${colors.brandSecondary}`,
                                  background: `${colors.brandDark}`,
                              }
                    }
                >
                    New User
                </NavLink>
                <NavLink
                    to={'/create-category'}
                    style={({ isActive }) =>
                        isActive
                            ? {
                                  color: `${colors.white}`,
                                  background: `${colors.brandSecondary}`,
                              }
                            : {
                                  color: `${colors.brandSecondary}`,
                                  background: `${colors.brandDark}`,
                              }
                    }
                >
                    New Category
                </NavLink>
                <Brand>Samsung</Brand>
                <BrandItem>
                    {Categories.filter(
                        (cat) => cat.brandsCategory === 'Samsung'
                    ).map((category, index) => (
                        <NavLink
                            to={`/samsung/${category.subCategory}`}
                            style={({ isActive }) =>
                                isActive
                                    ? {
                                          color: `${colors.white}`,
                                          background: `${colors.brandSecondary}`,
                                      }
                                    : {
                                          color: `${colors.brandSecondary}`,
                                          background: `${colors.brandDark}`,
                                      }
                            }
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
                            style={({ isActive }) =>
                                isActive
                                    ? {
                                          color: `${colors.white}`,
                                          background: `${colors.brandSecondary}`,
                                      }
                                    : {
                                          color: `${colors.brandSecondary}`,
                                          background: `${colors.brandDark}`,
                                      }
                            }
                            key={index}
                        >
                            {category.subCategory}
                        </NavLink>
                    ))}
                </BrandItem>
            </NavBox>
        </Container>
    );
};

export default SideBar;
