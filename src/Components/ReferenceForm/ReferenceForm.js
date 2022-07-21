import { useState } from 'react'
import classes from './reference.module.css'



const ReferenceForm =()=>{

    const [name,setName] = useState("")
    const [emailId,setEmailId] = useState("")
    const [mobileNumber,setMobileNumber] = useState("")
    const [companyName,setCompanyName] = useState("")
    const [refPoints,setRefPoints] = useState("")
    const [address,setAddress] = useState("")


    const submitHandler = (event)=>{
        event.preventDefault()
        const data = {
            name:name,
            emailId:emailId,
            mobileNumber:mobileNumber,
            companyName:companyName,
            refPoints:refPoints,
            address:address
        }

        console.log(data)

        setName("")
        setEmailId("")
        setMobileNumber("")
        setCompanyName("")
        setRefPoints("")
        setAddress("")

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
    const companyNameHandler =(e)=>{
        setCompanyName(e.target.value)
    }
    
    const refPointsHandler =(e)=>{
        setRefPoints(e.target.value)
    }
    const addressHandler =(e)=>{
        setAddress(e.target.value)
    }
    return(
        <div className={classes.ctn}>
            <div className={classes.form_ctn}>
                <div className={classes.top}>
                    <div className={classes.span_ctn}>
                            <span>R</span>
                            <span>E</span>
                            <span>F</span>
                            <span>E</span>
                            <span>R</span>
                            <span>E</span>
                            <span>N</span>
                            <span>C</span>
                            <span>E</span>
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
                            <input className={classes.input} placeholder="Enter company name" value={companyName} onChange={companyNameHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter ref points" value={refPoints} onChange={refPointsHandler}/>
                            <input className={classes.input} placeholder="Enter address" value={address} onChange={addressHandler}/>
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




export default ReferenceForm