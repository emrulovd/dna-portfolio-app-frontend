import classes from './Portfolio.module.css';

import ProjectList from './ProjectList/ProjectList';

const Portfolio = () => {
    return(
        <div className={classes.Wrapper}>
            <ProjectList/>
        </div>
    )
}

export default Portfolio;