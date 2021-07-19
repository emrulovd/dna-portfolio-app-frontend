import React, { Fragment, Suspense } from "react";

import Cockpit from "./Cockpit/Cockpit";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from './Contact/Contact';
const Projects = React.lazy(() => import("./Projects/Projects"));

const Home = () => {
  return (
    <Fragment>
      <Cockpit />
      <About />
      <Services />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Contact/>
    </Fragment>
  );
};

export default Home;
