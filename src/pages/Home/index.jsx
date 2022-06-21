import React from 'react';
import Header from '../../components/header';
import MobileHeader from '../../components/mobileHeader';
import SideBar from '../../components/sideBar';
import { Container, useQuery } from '../../styles/styles';
import { ContentWrapper, Heading, Content } from './styles';

const Home = () => {
    const { isTablet } = useQuery();
    return (
        <>
            {isTablet ? <MobileHeader /> : <Header />}
            <Container>
                <SideBar />
                <ContentWrapper>
                    <Heading>Welcome</Heading>
                    <Content>
                        In this website you can create new users and new
                        categories with its sub-categories and you can also see
                        the list of users who have assigned themselves to a
                        category.
                    </Content>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default Home;
