import classes from './medium_card.module.css'


const MediumCard =(props)=>{
    return(
        <div className={classes.card}>
            {props.chart}
        </div>
    )
}


export default MediumCard