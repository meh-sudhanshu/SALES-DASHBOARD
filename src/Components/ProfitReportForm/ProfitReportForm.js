import { useState } from 'react'
import classes from './profit_report_form.module.css'

const ProfitReportForm =()=>{

    const [name,setName] = useState("")
    const [emailId,setEmailId] = useState("")
    const [mobileNumber,setMobileNumber] = useState("")
    const [courseName,setCourseName] = useState("")
    const [feesPaid,setFeesPaid] = useState("")
    const [trainerFees,setTrainerFees] = useState("")
    const [examFees,setExamFees] = useState("")
    const [expenses,setExpenses] = useState("")


    const submitHandler = (event)=>{
        event.preventDefault()
        const data = {
            name:name,
            emailId:emailId,
            mobileNumber:mobileNumber,
            courseName:courseName,
            feesPaid:feesPaid,
            trainerFees:trainerFees,
            examFees:examFees,
            expenses:expenses
        }

        console.log(data)

        setName("")
        setEmailId("")
        setMobileNumber("")
        setCourseName("")
        setFeesPaid("")
        setTrainerFees("")
        setExamFees("")
        setExpenses("")

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
    const courseNameHandler =(e)=>{
        setCourseName(e.target.value)
    }
    
    const feesPaidHandler =(e)=>{
        setFeesPaid(e.target.value)
    }
    const trainerFeesHandler =(e)=>{
        setTrainerFees(e.target.value)
    }
    const examFeesHandler =(e)=>{
        setExamFees(e.target.value)
    }
    const expensesHandler =(e)=>{
        setExpenses(e.target.value)
    }
    return(
        <div className={classes.ctn}>
            <div className={classes.form_ctn}>
                <div className={classes.top}>
                    <div className={classes.span_ctn}>
                            <span>P</span>
                            <span>R</span>
                            <span>O</span>
                            <span>F</span>
                            <span>I</span>
                            <span>T</span>
                            <span className={classes.special_span}>R</span>
                            <span>E</span>
                            <span>P</span>
                            <span>O</span>
                            <span>R</span>
                            <span>T</span>
                            <span>S</span>
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
                            <input className={classes.input} placeholder="Enter course name" value={courseName} onChange={courseNameHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter fees paid" value={feesPaid} onChange={feesPaidHandler}/>
                            <input className={classes.input} placeholder="Enter trainer fees" value={trainerFees} onChange={trainerFeesHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter exam fees" value={examFees} onChange={examFeesHandler}/>
                            <input className={classes.input} placeholder="Enter expenses" value={expenses} onChange={expensesHandler}/>
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




export default ProfitReportForm