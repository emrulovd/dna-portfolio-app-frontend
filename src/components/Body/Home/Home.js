import React, { Fragment, Suspense } from "react";

import Cockpit from "./Cockpit/Cockpit";
import About from "./About/About";
import Services from "./Services/Services";
const Projects = React.lazy(() => import("./Projects/Projects"));

const Home = () => {
  return (
    <Fragment>
      <Cockpit />
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Services />
    </Fragment>
  );
};

export default Home;
