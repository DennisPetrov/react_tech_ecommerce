import React from 'react';
import classes from './Pagination.module.css';

function printPagination(numberOfPages, currentPage, switchPage) {
    const pageButtons = [];
    let isCurrentPage;
    for (let i = 1; i <= numberOfPages; i++) {
        isCurrentPage = i === currentPage;
        pageButtons.push(<div data-page={i}
            key={i}
            {...(!isCurrentPage ? { onClick: switchPage } : {})}
            className={`${classes.paginationItem} ${isCurrentPage ? classes.activePage : ""}`}>
            {i}</div>);
    }
    return pageButtons;
}

const Pagination = (props) => {
    const numberOfPages = props.totalCount / props.itemsPerPage;
    return (
        (props.totalCount ? <div className={classes.wrap}>
            {props.currentPage!==numberOfPages ?
            <div onClick={props.getMoreElements} className={classes.showMore}>Show More</div> :
            ""
            }
            <div className={classes.paginationWrap}>
                {printPagination(numberOfPages, props.currentPage, props.switchPage)}
            </div>
        </div>
            :
            "")
    );
};

export default React.memo(Pagination);