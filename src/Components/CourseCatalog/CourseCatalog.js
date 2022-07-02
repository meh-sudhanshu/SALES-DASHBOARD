import classes from './course_catalog.module.css'


const CourseCatalog =()=>{
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
                    <label>Number of Training Days</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Course Fees</label>
                </div>
                <div className={classes.user_box}>
                    <input type="password" name="" required=""/>
                    <label>Exams Fees</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Certified By</label>
                </div>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Is Certification Available</label>
                </div>
            </div>
            <div className={classes.row_mapper}>
                <div className={classes.user_box}>
                    <input type="text" name="" required=""/>
                    <label>Is Training Mandatory</label>
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


export default CourseCatalog