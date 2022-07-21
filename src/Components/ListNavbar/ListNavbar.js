import classes from './list_navbar.module.css'



const ListNavbar =()=>{
    return(
        <div className={classes.navbar}>
            <h6 className={classes.txt_logo}>ULS SALES</h6>
            <div className={classes.input_btn_ctn}>
                <input type='text' placeholder="enter keywords" className={classes.input}/>
                <button className={classes.search_btn}>Search</button>
            </div>
        </div>
    )
}

export default ListNavbar