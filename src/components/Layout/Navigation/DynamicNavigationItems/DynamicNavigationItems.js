import React, { useState, useEffect } from "react";

import classes from "./DynamicNavigationItems.module.css";

const DynamicNavigationItems = () => {
  const [navItemStatus, setNavItemStatus] = useState(false);

  useEffect(() => {
    changeNavItemStatus();
    return () => {
      setNavItemStatus({});
    };
  }, []);

  const changeNavItemStatus = () => {
    if (window.scrollY >= 20) {
      setNavItemStatus(true);
    } else {
      setNavItemStatus(false);
    }
  };

  window.addEventListener("scroll", changeNavItemStatus);

  return (
    <ul className={classes.DynamicNavigationItems}>
      <li
        className={
          navItemStatus
            ? classes.ActiveDynamicNavigationItem
            : classes.DeactiveDynamicNavigationItem
        }
      >
        <a href="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Home
        </a>
      </li>
      <li
        className={
          navItemStatus
            ? classes.ActiveDynamicNavigationItem
            : classes.DeactiveDynamicNavigationItem
        }
      >
        <a href="/services">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Services
        </a>
      </li>
      <li
        className={
          navItemStatus
            ? classes.ActiveDynamicNavigationItem
            : classes.DeactiveDynamicNavigationItem
        }
      >
        <a href="/about">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          About
        </a>
      </li>
    </ul>
  );
};

export default DynamicNavigationItems;
