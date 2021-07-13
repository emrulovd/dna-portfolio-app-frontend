
import classes from './Content.module.css';
import logo from '../../../../assets/dna-black-logo-symbol.png'

const Content = () => {
    return(
        <div className={classes.Wrapper}>
            <img src={logo} alt='..'/>
            <h2>Coming soon...</h2>            
        </div>
    )
}

export default Content;