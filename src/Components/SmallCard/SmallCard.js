import classes from './small_card.module.css'
import customers_logo from '../../Assets/Logo/customers.png'

const SmallCard =()=>{
    return(
        <div className={classes.card}>
            <div className={classes.top}>
                <div className={classes.left}>
                    <img className={classes.logo} src={customers_logo} alt=""/>
                </div>
                <div className={classes.right}>
                    <h2 className={classes.heading}>Total Customers</h2>
                    <h2 className={classes.heading_count}>290</h2>
                </div>
            </div>
            <div className={classes.bottom}>
                <a href='#' className={classes.action_btn}>Update Now</a>
            </div>
        </div>
    )
}


export default SmallCard;