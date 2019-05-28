import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from "./FooterMenu.module.css";
import { PageList } from '../../../config/PageList';

const FooterMenu = () => {
    return (
        <ul className={classes.list}>
            <li>
                <NavLink exact activeClassName={classes.activeClassName} to={PageList.categoryList.path}>Shop</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={classes.activeClassName} to={PageList.offers.path}>Offers</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={classes.activeClassName} to={PageList.brandList.path}>Brands</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={classes.activeClassName} to={PageList.delivery.path}>Delivery</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={classes.activeClassName} to={PageList.contacts.path}>Contacts</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={classes.activeClassName} to={PageList.about.path}>About us</NavLink>
            </li>
        </ul>
    );
};

export default FooterMenu;