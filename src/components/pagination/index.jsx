import React from 'react';
import { usePagination, DOTS } from './usePagination';
import { Container, Item, Arrow } from './styles';

const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];
    return (
        <Container>
            <Item disabled={currentPage === 1} onClick={onPrevious}>
                <Arrow disabled={currentPage === 1} left={true} />
            </Item>
            {paginationRange.map((pageNumber) => {
                if (pageNumber === DOTS) {
                    return (
                        <Item key={pageNumber} dots={true}>
                            &#8230;
                        </Item>
                    );
                }

                return (
                    <Item
                        key={pageNumber}
                        selected={pageNumber === currentPage}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </Item>
                );
            })}
            <Item disabled={currentPage === lastPage} onClick={onNext}>
                <Arrow disabled={currentPage === lastPage} right={true} />
            </Item>
        </Container>
    );
};

export default Pagination;
