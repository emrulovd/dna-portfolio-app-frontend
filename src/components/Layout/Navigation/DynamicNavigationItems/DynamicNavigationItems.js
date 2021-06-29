import React, {useState} from 'react';

import classes from './DynamicNavigationItems.module.css'

const DynamicNavigationItems = () => {
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
        <ul className={classes.DynamicNavigationItems}>
            <li className={navItemStatus? classes.ActiveDynamicNavigationItem : classes.DeactiveDynamicNavigationItem}>
                <a href="/">Home</a>
            </li>
            <li className={navItemStatus? classes.ActiveDynamicNavigationItem : classes.DeactiveDynamicNavigationItem}>
                <a href="/">Services</a>
            </li>
            <li className={ navItemStatus? classes.ActiveDynamicNavigationItem : classes.DeactiveDynamicNavigationItem}>
                <a href="/">About us</a>
            </li>
        </ul>
    )
}


export default DynamicNavigationItems;