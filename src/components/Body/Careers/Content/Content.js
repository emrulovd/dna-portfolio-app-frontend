
import classes from './Content.module.css';
import logo from '../../../../assets/dna-black-logo-symbol.png'

const Content = () => {
    return(
        <div className={classes.Wrapper}>
            <img src={logo} alt='..'/>
            <h2>Careers</h2>
            <h4 className={classes.Text}>Want to be a part of our amazing team. <br/> Check out below our available positions</h4>            
        </div>
    )
}

export default Content;