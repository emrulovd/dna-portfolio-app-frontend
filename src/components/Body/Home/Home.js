import React, { Fragment } from 'react';

import Cockpit from './Cockpit/Cockpit';
import Objectives from './Objectives/Objectives';

const Home = () => {
    return(
        <Fragment>
            <Cockpit/>
            <Objectives/>
        </Fragment>
    )
}


export default Home;