import AreaChart from '../../Components/AreaChart/AreaChart'
import classes from './dashboard.module.css'
import CustomPieChart from '../../Components/PieChart/PieChart'
import customer_logo from '../../Assets/Logo/customer.png'
import reference_logo from '../../Assets/Logo/reference.png'
import trainer_logo from '../../Assets/Logo/trainer.png'
import profit_report_logo from '../../Assets/Logo/profit_report.png'
import course_catalog_logo from '../../Assets/Logo/course_catalog.png'
import invoice_logo from '../../Assets/Logo/invoice.png'
import licence_logo from '../../Assets/Logo/licence.png'
const Dashboard =()=>{
    return(
        <div className={classes.ctn}>
            <div className={classes.wrapper}>
                <div className={`${classes.div1} ${classes.grid_div}`}>
                    <div className={classes.top}>
                        <div className={classes.top_left}>
                            <img className={classes.top_logo} src={customer_logo} alt=""/>
                        </div>
                        <div className={classes.top_right}>
                            <h3 className={classes.top_right_heading}>Customer</h3>
                            <h3 className={classes.top_right_value}>293</h3>
                        </div>
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.border_line}></div>
                        <div className={classes.heading_ctn}>
                            <h4 className={classes.heading_ctn_heading}>
                                <span>+31%</span> Since last week
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={`${classes.div2} ${classes.grid_div}`}>
                    <div className={classes.top}>
                        <div className={classes.top_left}>
                            <img className={classes.top_logo} src={trainer_logo} alt=""/>
                        </div>
                        <div className={classes.top_right}>
                            <h3 className={classes.top_right_heading}>Trainer</h3>
                            <h3 className={classes.top_right_value}>93</h3>
                        </div>
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.border_line}></div>
                        <div className={classes.heading_ctn}>
                            <h4 className={classes.heading_ctn_heading}>
                                <span>+1%</span> Since last week
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={`${classes.div3} ${classes.grid_div}`}>
                    <div className={classes.top}>
                        <div className={classes.top_left}>
                            <img className={classes.top_logo} src={course_catalog_logo} alt=""/>
                        </div>
                        <div className={classes.top_right}>
                            <h3 className={classes.top_right_heading}>Course Catalog</h3>
                            <h3 className={classes.top_right_value}>33</h3>
                        </div>
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.border_line}></div>
                        <div className={classes.heading_ctn}>
                            <h4 className={classes.heading_ctn_heading}>
                                <span>+19%</span> Since last week
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={`${classes.div4} ${classes.grid_div}`}>
                    <div className={classes.top}>
                        <div className={classes.top_left}>
                            <img className={classes.top_logo} src={profit_report_logo} alt=""/>
                        </div>
                        <div className={classes.top_right}>
                            <h3 className={classes.top_right_heading}>Profit Reports</h3>
                            <h3 className={classes.top_right_value}>23</h3>
                        </div>
                    </div>
                    <div className={classes.bottom}>
                        <div className={classes.border_line}></div>
                        <div className={classes.heading_ctn}>
                            <h4 className={classes.heading_ctn_heading}>
                                <span>+11%</span> Since last week
                            </h4>
                        </div>
                    </div>
                </div>
                <div className={`${classes.div5} ${classes.grid_div}`}>
                    <AreaChart/>
                </div>
                <div className={`${classes.div6} ${classes.grid_div}`}>
                    <CustomPieChart/>
                    <a className={classes.refresh_btn}>Refresh now</a>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;