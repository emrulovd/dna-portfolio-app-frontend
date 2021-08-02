import classes from './PositionsHeader.module.css';

const PositionsHeader = () => {
    return(
        <div className={classes.Wrapper}>
            <h3 className={classes.Title}>Available Positions</h3>
            <div className={classes.SearcBorder}>
                <input className={classes.Search} name='positions search bar' type='text' placeholder='Search'/>
            </div>
        </div>
    )
}

export default PositionsHeader;