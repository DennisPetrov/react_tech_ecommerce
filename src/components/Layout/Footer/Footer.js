import React from 'react'
import classes from './Footer.module.css';
import FooterMenu from '../../Menu/FooterMenu/FooterMenu';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import FooterForm from '../../../containers/Forms/FooterForm/FooterForm';

const Footer = () => {
    return (
        <footer className={classes.wrap}>
            <FooterForm />
            <div className={classes.bottomLine}>
                <div className={`container ${classes.container}`}>
                    <Link to="/" className={classes.logoWrap}>
                        <img className={classes.logo} src="/images/logo_w.svg" alt="" />
                    </Link>
                    <nav className={classes.nav}>
                        <FooterMenu />
                    </nav>
                    <div>
                        <Button>Contact us</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer