import Navbar from '../../Components/Navbar/Navbar';
import Chart from '../../Components/PieChart/PieChart';
import classes from './get.module.css'


const Get =()=>{

    return(
        <div className={classes.ctn}>
            <div className={classes.left}>
                <Navbar/>
            </div>
            <div className={classes.right}>
               <Chart/>
            </div>
        </div>
    )
}

export default Get;