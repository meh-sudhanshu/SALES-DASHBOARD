import { useState } from 'react'
import classes from './course_catalog.module.css'

const CourseCatalog =()=>{

    const [courseName,setCourseName] = useState("")
    const [numberOfTrainingDays,setNumberOfTrainingDays] = useState("")
    const [courseFees,setCourseFees] = useState("")
    const [examFees,setExamFees] = useState("")
    const [certifiedBy,setCertifiedBy] = useState("")
    const [isCertificationAvailable,setIsCetficationAvailable] = useState("")
    const [isTrainingMandatory,setisTrainingMandatory] = useState("")
    const submitHandler = (event)=>{
        event.preventDefault()
        const data = {
            courseName:courseName,
            numberOfTrainingDays:numberOfTrainingDays,
            courseFees:courseFees,
            examFees:examFees,
            certifiedBy:certifiedBy,
            isCertificationAvailable:isCertificationAvailable,
            isTrainingMandatory:isTrainingMandatory
        }

        console.log(data)

        setCourseName("")
        setNumberOfTrainingDays("")
        setCourseFees("")
        setExamFees("")
        setCertifiedBy("")
        setIsCetficationAvailable("")
        setisTrainingMandatory("")

    }
    const courseNameHandler =(e)=>{
        setCourseName(e.target.value)
    }
    const numberOfTrainingDaysHandler =(e)=>{
        setNumberOfTrainingDays(e.target.value)
    }
    const courseFeesHandler =(e)=>{
        setCourseFees(e.target.value)
    }
    const examFeesHandler =(e)=>{
        setExamFees(e.target.value)
    }
    
    const certifiedByHandler =(e)=>{
        setCertifiedBy(e.target.value)
    }
    const isCertificationAvailableHandler =(e)=>{
        setIsCetficationAvailable(e.target.value)
    }
    const isTrainingMandatoryHandler =(e)=>{
        setisTrainingMandatory(e.target.value)
    }
    return(
        <div className={classes.ctn}>
            <div className={classes.form_ctn}>
                <div className={classes.top}>
                    <div className={classes.span_ctn}>
                            <span>C</span>
                            <span>O</span>
                            <span>U</span>
                            <span>R</span>
                            <span>S</span>
                            <span>E</span>
                            <span className={classes.special_span}>C</span>
                            <span>A</span>
                            <span>T</span>
                            <span>A</span>
                            <span>L</span>
                            <span>O</span>
                            <span>G</span>
                        </div>
                </div>
                <div className={classes.bottom}>
                    <form className={classes.form}>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter course name" value={courseName} onChange={courseNameHandler}/>
                            <input className={classes.input} placeholder="Enter number of trainign days" value={numberOfTrainingDays} onChange={numberOfTrainingDaysHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter course fees" value={courseFees} onChange={courseFeesHandler}/>
                            <input className={classes.input} placeholder="Enter exam fees" value={examFees} onChange={examFeesHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Cetified By" value={certifiedBy} onChange={certifiedByHandler}/>
                            <input className={classes.input} placeholder="Is Certification available" value={isCertificationAvailable} onChange={isCertificationAvailableHandler}/>
                        </div>
                        <div className={`${classes.row} ${classes.special_row}`}>
                            <input className={classes.input} placeholder="Is training mandatory" value={isTrainingMandatory} onChange={isTrainingMandatoryHandler}/>
                        </div>
                        <div className={classes.submit_btn_ctn}>
                            <button className={classes.submit_btn} onClick={submitHandler}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}




export default CourseCatalog