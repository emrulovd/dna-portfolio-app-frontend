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
                <a href="/">Home</a>
            </li>
            <li className={navItemStatus? classes.ActiveNavigationItem : classes.DeactiveNavigationItem}>
                <a href="/">Services</a>
            </li>
            <li className={ navItemStatus? classes.ActiveNavigationItem : classes.DeactiveNavigationItem}>
                <a href="/">About us</a>
            </li>
            <li className={navItemStatus? classes.ActiveNavigationItem : classes.DeactiveNavigationItem}>
                <a href="/">Contacts</a>
            </li>
        </ul>
    )
}

export default NavigationItems;