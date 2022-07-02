import classes from './customer_form.module.css'


const CustomerForm =()=>{
    return(
        <div className={classes.login_box}>
            <h2>Login</h2>
            <form>
                <div className={classes.row_mapper}>
                    <div className={classes.user_box}>
                        <input type="text" name="" required=""/>
                        <label>Name</label>
                    </div>
                    <div className={classes.user_box}>
                        <input type="password" name="" required=""/>
                        <label>Email id</label>
                    </div>
                </div>
                <div className={classes.row_mapper}>
                    <div className={classes.user_box}>
                        <input type="text" name="" required=""/>
                        <label>Company</label>
                    </div>
                    <div className={classes.user_box}>
                        <input type="password" name="" required=""/>
                        <label>Mobile Number</label>
                    </div>
                </div>
                <div className={classes.row_mapper}>
                    <div className={classes.user_box}>
                        <input type="text" name="" required=""/>
                        <label>Course</label>
                    </div>
                    <div className={classes.user_box}>
                        <input type="password" name="" required=""/>
                        <label>Fees Paid</label>
                    </div>
                </div>
                <div className={classes.row_mapper}>
                    <div className={classes.user_box}>
                        <input type="text" name="" required=""/>
                        <label>Payment Source</label>
                    </div>
                    <div className={classes.user_box}>
                        <input type="password" name="" required=""/>
                        <label>Certification Status</label>
                    </div>
                </div>
                <div className={classes.row_mapper}>
                    <div className={classes.user_box}>
                        <input type="text" name="" required=""/>
                        <label>Country</label>
                    </div>
                    <div className={classes.user_box}>
                        <input type="password" name="" required=""/>
                        <label>City</label>
                    </div>
                </div>
                <div className={classes.row_mapper}>
                    <div className={classes.user_box}>
                        <input type="text" name="" required=""/>
                        <label>Source Of Lead</label>
                    </div>
                    <div className={classes.user_box}>
                        <input type="password" name="" required=""/>
                        <label>Invoice Status</label>
                    </div>
                </div>
                <div className={classes.row_mapper}>
                    <div className={classes.user_box}>
                        <input type="text" name="" required=""/>
                        <label>BDE Name</label>
                    </div>
                    <div className={classes.user_box}>
                        <input type="password" name="" required=""/>
                        <label>Lead Status</label>
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


export default CustomerForm