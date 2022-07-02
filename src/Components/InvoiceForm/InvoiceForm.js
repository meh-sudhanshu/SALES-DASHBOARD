import classes from './invoice_form.module.css'


const InvoiceForm =()=>{
    return(
        <div className={classes.login_box}>
        <h2>Login</h2>
        <form>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Invoice Number</label>
                </div>
                <div className={classes.user_box}>
                    <input type="password" name="" required=""/>
                    <label>Course Name</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>GST</label>
                </div>
                <div className={classes.user_box}>
                    <input type="password" name="" required=""/>
                    <label>BDE Name</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Payment Source</label>
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


export default InvoiceForm