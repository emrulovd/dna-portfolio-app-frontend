import React, {useState} from 'react';

import logoWhite from '../../../assets/dna-black-logo-symbol.png';

import classes from './Header.module.css'
import NavigationItems from './NavigationItems/NavigationItems';
import DynamicNavigationItems from './DynamicNavigationItems/DynamicNavigationItems';


const Header = () => {
    const [navbarStatus, setNavbarStatus] = useState(false);

    const changeNavabarStatus = () => {
        if(window.scrollY >= 80){
            setNavbarStatus(true);
        }else{
            setNavbarStatus(false);
        }
    }

    window.addEventListener('scroll', changeNavabarStatus);

    return(
        <header className={ navbarStatus ? classes.Active : classes.Deactive}>
            <nav>
                <DynamicNavigationItems/>
            </nav>
                <img className={classes.NavLogo} src={logoWhite} alt="..." />
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Header;