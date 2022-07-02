import Navbar from '../../Components/Navbar/Navbar';
import classes from './help_and_support.module.css'

const HelpAndSupport =()=>{

    return(
        <div className={classes.ctn}>
            <div className={classes.left}>
                <Navbar/>
            </div>
            <div className={classes.right}></div>
        </div>
    )

}

export default HelpAndSupport;