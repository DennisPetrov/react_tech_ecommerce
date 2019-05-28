import { NavLink } from 'react-router-dom';
import React from 'react';
import { PageList } from '../../config/PageList';



const TopMenu = (props) => {
    return (
        <ul>
            <li>
                <NavLink exact activeClassName={props.activeClassName} to={PageList.categoryList.path}>Shop</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={props.activeClassName} to={PageList.offers.path}>Offers</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={props.activeClassName} to={PageList.brandList.path}>Brands</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={props.activeClassName} to={PageList.delivery.path}>Delivery</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={props.activeClassName} to={PageList.contacts.path}>Contacts</NavLink>
            </li>
            <li>
                <NavLink exact activeClassName={props.activeClassName} to={PageList.about.path}>About us</NavLink>
            </li>
        </ul>
    );
};

export default TopMenu;