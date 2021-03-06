import React, { useState, useEffect, Fragment } from "react";

import logoBlack from "../../../assets/dna-black-logo-symbol.png";
import logoWhite from "../../../assets/dna-code-symbol.png";

import classes from "./Header.module.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import DynamicNavigationItems from "./DynamicNavigationItems/DynamicNavigationItems";
import OpenElement from "../../UI/OpenElement/OpenElement";

const Header = () => {
  const [navbarStatus, setNavbarStatus] = useState(false);
  let [logoSymbol, setLogoSymbol] = useState(logoBlack);

  useEffect(() => {
    window.addEventListener("scroll", changeNavabarStatus);
    changeNavabarStatus();
    return () => {
      window.removeEventListener("scroll", changeNavabarStatus);
      setNavbarStatus({});
      setLogoSymbol({});
    };
  }, []);

  const changeNavabarStatus = () => {
    if (window.scrollY >= 20) {
      setNavbarStatus(true);
      setLogoSymbol(logoWhite);
    } else {
      setNavbarStatus(false);
      setLogoSymbol(logoBlack);
    }
  };



  return (
    <Fragment>
      <header className={navbarStatus ? classes.Active : classes.Deactive}>
        <OpenElement className={classes.OpenElementPosition}/>
        <nav>
          <DynamicNavigationItems />
        </nav>
        <img className={classes.NavLogo} src={logoSymbol} alt="..." />
        <nav>
          <NavigationItems />
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
