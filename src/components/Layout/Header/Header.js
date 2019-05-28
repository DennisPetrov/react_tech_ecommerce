import React from 'react'
import classes from "./Header.module.css";
import TopMenu from '../../Menu/TopMenu';
import { PageList } from '../../../config/PageList';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import SearchPreview from '../../../containers/Search/SearchPreview/SearchPreview';

const Header = (props) => {
    return (
        <header className={classes.wrap}>
            <div className={classes.headerTop}>
                <div className={`container ${classes.container}`}>
                    <Link to="/" className={classes.logo}>
                        <img src="/logo.svg" alt="Etech" />
                    </Link>
                    <nav className={classes.menu}>
                        <TopMenu activeClassName={classes.menuItemActive} />
                    </nav>
                    <div className={classes.callback}>
                        <Button>Contact us</Button>
                    </div>
                </div>
            </div>
            <div className={classes.headerBottom}>
                <div className={`container ${classes.container}`}>
                    <div className={classes.search}>
                        <SearchPreview 
                        searchResult={props.searchResult}
                        searchSubject={props.searchSubject} 
                        performSearch={props.performSearch}
                        handleSearchInputChange={props.handleSearchInputChange}
                        />
                    </div>
                    <div className={classes.customerControls}>
                        <Link to={PageList.cart.path} className={classes.cart}>
                            <img src="/images/cart.svg" className={classes.cart__icon} alt="" />
                            <span className={classes.cart__amount}>0</span>
                        </Link>
                        <Link to={PageList.auth.path} className={classes.signin}>
                            Sign up / Sign in
                    </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header