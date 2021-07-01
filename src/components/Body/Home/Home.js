import React, { Fragment } from 'react';

import Cockpit from './Cockpit/Cockpit';
import Objectives from './Objectives/Objectives';
import About from './About/About';
import Services from './Services/Services'

const Home = () => {
    return(
        <Fragment>
            <Cockpit/>
            <Objectives/>
            <About/>
            <Services/>
        </Fragment>
    )
}


export default Home;