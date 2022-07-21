import { useState } from 'react'
import classes from './trainer_form.module.css'



const TrainerForm =()=>{

    const [name,setName] = useState("")
    const [emailId,setEmailId] = useState("")
    const [mobileNumber,setMobileNumber] = useState("")
    const [alternateMobileNumber,setAlternateMobileNumber] = useState("")
    const [specializedCourses,setSpecializedCourses] = useState("")
    const [addressDetails,setAddressDetails] = useState("")


    const submitHandler = (event)=>{
        event.preventDefault()
        const data = {
            name:name,
            emailId:emailId,
            mobileNumber:mobileNumber,
            alternateMobileNumber:alternateMobileNumber,
            specializedCourses:specializedCourses,
            addressDetails:addressDetails
        }

        console.log(data)

        setName("")
        setEmailId("")
        setMobileNumber("")
        setAlternateMobileNumber("")
        setSpecializedCourses("")
        setAddressDetails("")

    }

    const nameHandler =(e)=>{
        setName(e.target.value)
    }
    const mobileNumberHandler =(e)=>{
        setMobileNumber(e.target.value)
    }
    const emailIdHandler =(e)=>{
        setEmailId(e.target.value)
    }
    const addressDetailsHandler =(e)=>{
        setAddressDetails(e.target.value)
    }
    const alternateMobileNumberHandler =(e)=>{
        setAlternateMobileNumber(e.target.value)
    }
    const specializedCoursesHandler =(e)=>{
        setSpecializedCourses(e.target.value)
    }
    return(
        <div className={classes.ctn}>
            <div className={classes.form_ctn}>
                <div className={classes.top}>
                    <div className={classes.span_ctn}>
                            <span>T</span>
                            <span>R</span>
                            <span>A</span>
                            <span>I</span>
                            <span>N</span>
                            <span>E</span>
                            <span>R</span>
                        </div>
                </div>
                <div className={classes.bottom}>
                    <form className={classes.form}>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter full name" value={name} onChange={nameHandler}/>
                            <input className={classes.input} placeholder="Enter Email" value={emailId} onChange={emailIdHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter mobile number" value={mobileNumber} onChange={mobileNumberHandler}/>
                            <input className={classes.input} placeholder="Enter alternate mobile number" value={alternateMobileNumber} onChange={alternateMobileNumberHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter address details" value={addressDetails} onChange={addressDetailsHandler}/>
                            <input className={classes.input} placeholder="Enter specialized curses" value={specializedCourses} onChange={specializedCoursesHandler}/>
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




export default TrainerForm