import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { users } from '../../state/selectors';
import Header from '../../components/header';
import MobileHeader from '../../components/mobileHeader';
import SideBar from '../../components/sideBar';
import Pagination from '../../components/pagination';
import { Container, useQuery } from '../../styles/styles';
import {
    ContentWrapper,
    TitleWrapper,
    Brand,
    SubCategory,
    UsersContainer,
    User,
    UserBox,
    UsersTitle,
    PaginationContainer,
    SearchWrapper,
    SearchInput,
    SearchLabel,
} from './styles';

const UsersList = () => {
    const { isTablet } = useQuery();
    const currentURL = window.location.pathname;
    const currentPageURL = currentURL.split('/')[1];
    const currentBrandCategory =
        currentPageURL.charAt(0).toUpperCase() + currentPageURL.slice(1);

    const params = useParams();
    const { id } = params;

    const [q, setQ] = useState('');
    const [searchParam] = useState([
        'name',
        'lastName',
        'email',
        'age',
        'gender',
    ]);

    const Users = useSelector(users);
    const filteredUsers = Users.filter(
        (user) =>
            user.brandsCategory === currentBrandCategory &&
            user.subCategory === id
    );

    const PAGE_SIZE = isTablet ? 3 : 10;
    const [currentPage, setCurrentPage] = useState(1);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
        const lastPageIndex = firstPageIndex + PAGE_SIZE;
        return filteredUsers.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredUsers, PAGE_SIZE]);

    function search(filteredUsers) {
        if (q === '') {
            return filteredUsers;
        } else {
            return filteredUsers.filter((match) => {
                return searchParam.some((newItem) => {
                    return (
                        match[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            });
        }
    }

    return (
        <>
            {isTablet ? <MobileHeader /> : <Header />}
            <SideBar />
            <Container>
                <ContentWrapper>
                    <TitleWrapper>
                        <Brand>
                            Brand Category: <span>{currentBrandCategory}</span>
                        </Brand>
                        <SubCategory>
                            Sub Category: <span>{id}</span>
                        </SubCategory>
                    </TitleWrapper>
                    <SearchWrapper>
                        <SearchLabel htmlFor="search-form">
                            <SearchInput
                                autoComplete="off"
                                type="text"
                                placeholder="Search by name, last name, email, age.."
                                name="search-form"
                                id="search-form"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                        </SearchLabel>
                    </SearchWrapper>
                    <UsersContainer>
                        {filteredUsers.length === 0 ? (
                            <h1>
                                There are no users assigned to this category
                            </h1>
                        ) : (
                            <>
                                <h1>Users assigned to this category:</h1>
                                <UsersTitle>
                                    <User>Name</User>
                                    <User>Surname</User>
                                    <User>Email</User>
                                    <User>Age</User>
                                    <User>Gender</User>
                                </UsersTitle>
                                {search(currentTableData).map(
                                    ({
                                        name,
                                        lastName,
                                        email,
                                        age,
                                        gender,
                                    }) => {
                                        return (
                                            <UserBox key={email}>
                                                <User>{name}</User>
                                                <User>{lastName}</User>
                                                <User>{email}</User>
                                                <User>{age}</User>
                                                <User>{gender}</User>
                                            </UserBox>
                                        );
                                    }
                                )}
                            </>
                        )}
                    </UsersContainer>
                    <PaginationContainer>
                        <Pagination
                            currentPage={currentPage}
                            totalCount={filteredUsers.length}
                            pageSize={PAGE_SIZE}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </PaginationContainer>
                </ContentWrapper>
            </Container>
        </>
    );
};

export default UsersList;
