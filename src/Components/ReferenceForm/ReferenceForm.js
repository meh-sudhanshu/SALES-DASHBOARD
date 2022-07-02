import classes from './reference.module.css'


const ReferenceForm =()=>{
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
                        <label>Ref Points</label>
                    </div>
                    <div className={classes.user_box}>
                        <input type="password" name="" required=""/>
                        <label>Address</label>
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


export default ReferenceForm