import React, {useState} from 'react';

import classes from './Header.module.css'
import NavigationItems from './NavigationItems/NavigationItems';

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
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default Header;