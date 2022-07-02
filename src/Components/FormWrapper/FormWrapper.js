import classes from './form_wrapper.module.css'


const FormWrapper =(props)=>{
    return(
        <div className={classes.table_wrapper}>
        <div className={classes.wrapper}>
            <h2 className={classes.table_name}>{props.name}</h2>
        </div>
        <div className={classes.table}>
            {props.table}
        </div>
    </div>
    )
}


export default FormWrapper;