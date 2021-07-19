import classes from './Portfolio.module.css';

import ProjectList from './ProjectList/ProjectList';
import ProjectFilter from './ProjectFilter/ProjectFilter';

const Portfolio = () => {
    return(
        <div className={classes.Wrapper}>
            <ProjectFilter/>
            <ProjectList/>
        </div>
    )
}

export default Portfolio;