import classes from './overlay.module.css'
const Overlay =(props)=>{


    const clickHandler =()=>{
        props.toggleState()
    }

    return(
        <div className={classes.overlay}>
            <div className={classes.overlay_ctn}>
                <div className={classes.overlay_top}>
                    <h4 className={classes.heading}>{props.name} Saved</h4>
                </div>
                <div className={classes.overlay_bottom}>
                    <button className={classes.btn} onClick={clickHandler}>Okay</button>
                </div>
            </div>
        </div>
    )
}


export default Overlay