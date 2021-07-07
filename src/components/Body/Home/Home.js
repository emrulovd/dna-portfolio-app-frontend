import React, { Fragment } from 'react';

import Cockpit from './Cockpit/Cockpit';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = () => {
    return(
        <Fragment>
            <Cockpit/>
            <About/>
            <Services/>
            <Projects/>
            <Contact/>
        </Fragment>
    )
}


export default Home;