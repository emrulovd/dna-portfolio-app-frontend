import React, { useState } from 'react';

import classes from './NavigationItems.module.css'

const NavigationItems = () => {
    const [navItemStatus, setNavItemStatus] = useState(false);

    const changeNavItemStatus = () => {
        if(window.scrollY >= 80){
            setNavItemStatus(true);
        }else{
            setNavItemStatus(false);
        }
    }

    window.addEventListener('scroll', changeNavItemStatus);

    return(
        <ul className={classes.NavigationItems}>
            <li className={navItemStatus? classes.ActiveNavigationItem : classes.DeactiveNavigationItem}>
                <a href="/portfolio">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Portfolio
                </a>
            </li>
            <li className={navItemStatus? classes.ActiveNavigationItem : classes.DeactiveNavigationItem}>
                <a href="/contact">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Contact
                </a>
            </li>
            <li className={ navItemStatus? classes.ActiveNavigationItem : classes.DeactiveNavigationItem}>
                <a href="/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    About us
                </a>
            </li>
        </ul>
    )
}

export default NavigationItems;