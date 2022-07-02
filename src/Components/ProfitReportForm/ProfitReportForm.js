import classes from './profit_report_form.module.css'


const ProfitReportForm =()=>{
    return(
        <div className={classes.login_box}>
        <h2>Login</h2>
        <form>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Course Name</label>
                </div>
                <div className={classes.user_box}>
                    <input type="password" name="" required=""/>
                    <label>Name</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Email</label>
                </div>
                <div className={classes.user_box}>
                    <input type="password" name="" required=""/>
                    <label>Mobile Number</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Fees Paid</label>
                </div>
                <div className={classes.user_box}>
                    <input type="password" name="" required=""/>
                    <label>Trainer Fees</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Exam Fees</label>
                </div>
                <div className={classes.user_box}>
                    <input type="password" name="" required=""/>
                    <label>Expenses</label>
                </div>
            </div>
           <div className={classes.btn_ctn}>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Save
                </a>
           </div>   
        </form>
    </div>
    )
}


export default ProfitReportForm