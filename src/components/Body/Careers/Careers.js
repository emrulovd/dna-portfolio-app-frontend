
import classes from './Careers.module.css';
import Content from './Content/Content';
import Positions from './Positions/Positions';


const Careers = () => {
    return(
        <div className={classes.Wrapper}>
            <Content/>
            <Positions/>
        </div>
    )
}

export default Careers;