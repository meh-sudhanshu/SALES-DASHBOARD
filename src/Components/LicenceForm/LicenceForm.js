import classes from './licence_form.module.css'


const LicenceForm =()=>{
    return(
        <div className={classes.login_box}>
        <h2>Login</h2>
        <form>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Tool Name</label>
                </div>
                <div className={classes.user_box}>
                    <input type="password" name="" required=""/>
                    <label>Validity Name</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Amount</label>
                </div>
                <div className={classes.user_box}>
                    <input type="password" name="" required=""/>
                    <label>Renewal Date</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Purchased By</label>
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


export default LicenceForm