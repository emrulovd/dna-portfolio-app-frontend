import React, { Fragment } from 'react';

import Cockpit from './Cockpit/Cockpit';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';

const Home = () => {
    return(
        <Fragment>
            <Cockpit/>
            <About/>
            <Services/>
            <Projects/>
        </Fragment>
    )
}


export default Home;