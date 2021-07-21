import classes from './About.module.css';

import AboutMain from './AboutMain/AboutMain';
import AboutGoals from './AboutGoals/AboutGoals';

const About = () => {
  return (
    <div className={classes.Wrapper}>
        <AboutMain/>
        <AboutGoals/>
    </div>
  );
};

export default About;
