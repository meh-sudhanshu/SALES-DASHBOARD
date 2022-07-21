import { useState } from 'react'
import classes from './list_data_wrapper.module.css'


const ListDataWrapper =(props)=>{
    var parsed_data =[]
    for(var i in props.data){
        parsed_data.push([i,props.data[i]])
    }
    const [deleteOverlayState,setDeleteOverlayState] = useState(false)
    
    const toggleDeleteOverlayState = (e)=>{
        console.log("clicked")
        e.preventDefault()
        setDeleteOverlayState(!deleteOverlayState)
        console.log(deleteOverlayState)
    }
    return(
        <div className={classes.ctn}>
            {deleteOverlayState===true && <div className={classes.delete_overlay}>
                <div className={classes.btn_ctn}>
                    <div className={classes.heading_ctn}>
                        <h4 className={classes.heading}>Confirm delete ?</h4>
                    </div>
                    <div className={classes.btns}>
                        <button className={`${classes.btn} ${classes.cnf_delete}`}>DELETE</button>
                        <button className={`${classes.btn} ${classes.cancel_delete}`}>CANCEL</button>
                    </div>
                </div>
            </div>}
            <div className={classes.top}>
                <button  className={`${classes.btn} ${classes.update_btn}`}>Update</button>
                <button  className={`${classes.btn} ${classes.delete_btn}`} onClick={toggleDeleteOverlayState}>Delete</button>
            </div>
            <div className={classes.bottom}>
                {
                    parsed_data.map(item=>
                        <div className={classes.row} key={item[0]}>
                            <h4 className={classes.key}>{item[0]} :</h4>
                            <h4 className={classes.value}>{item[1]}</h4>
                        </div>)
                }
            </div>
        </div>
    )
}

export default ListDataWrapper