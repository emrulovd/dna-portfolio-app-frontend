import React from 'react';

import classes from './Cockpit.module.css';
import video from '../../../../assets/dna-video.mp4'

const Cockpit = () => {
    return(
        <div className={classes.Cockpit}>
            <video autoPlay muted src={video} type="video/mp4">
            </video>
        </div>
    )
}


export default Cockpit;

//src="https://www.facebook.com/plugins/video.php?height=207&href=https%3A%2F%2Fwww.facebook.com%2Fdna.code.dev%2Fvideos%2F1216939045395351%2F&show_text=false&width=560&t=0" width="560" height="207" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>