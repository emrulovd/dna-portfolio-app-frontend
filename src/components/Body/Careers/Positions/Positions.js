import classes from './Positions.module.css';

import PositionsHeader from './PositionsHeader/PositionsHeader';
import PositionsList from './PositionsList/PositionsList';

const Positions = () => {
    return(
        <div className={classes.Wrapper}>
            <PositionsHeader/>
            <PositionsList/>
        </div>
    )
}

export default Positions;