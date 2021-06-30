import React from 'react';
 
import classes from './Cockpit.module.css';
import video from '../../../../assets/dna-video.mp4'

const Cockpit = () => {
    return(
        <div className={classes.Cockpit}>
            <video autoPlay muted src={video} type="video/mp4"></video>
        </div>
    )
}


export default Cockpit;
