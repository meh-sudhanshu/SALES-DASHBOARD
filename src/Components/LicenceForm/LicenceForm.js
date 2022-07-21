import { useState } from 'react'
import classes from './licence_form.module.css'

const LicenceForm =()=>{

    const [toolName,setToolName] = useState("")
    const [validityDate,setValidityDate] = useState("")
    const [amount,setAmount] = useState("")
    const [renewalDate,setRenewalDate] = useState("")
    const [purchasedBy,setPurchasedBy] = useState("")
    const submitHandler = (event)=>{
        event.preventDefault()
        const data = {
            toolName:toolName,
            validityDate:validityDate,
            amount:amount,
            renewalDate:renewalDate,
            purchasedBy:purchasedBy
        }

        console.log(data)

        setToolName("")
        setValidityDate("")
        setAmount("")
        setRenewalDate("")
        setPurchasedBy("")

    }
    const toolNameHandler =(e)=>{
        setToolName(e.target.value)
    }
    const validityDateHandler =(e)=>{
        setValidityDate(e.target.value)
    }
    const amountHandler =(e)=>{
        setAmount(e.target.value)
    }
    const renewalDateHandler =(e)=>{
        setRenewalDate(e.target.value)
    }
    
    const purchasedByHandler =(e)=>{
        setPurchasedBy(e.target.value)
    }
    return(
        <div className={classes.ctn}>
            <div className={classes.form_ctn}>
                <div className={classes.top}>
                    <div className={classes.span_ctn}>
                            <span>L</span>
                            <span>I</span>
                            <span>C</span>
                            <span>E</span>
                            <span>N</span>
                            <span>C</span>
                            <span>E</span>
                        </div>
                </div>
                <div className={classes.bottom}>
                    <form className={classes.form}>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter tool name" value={toolName} onChange={toolNameHandler}/>
                            <input className={classes.input} placeholder="Enter validity date" value={validityDate} onChange={validityDateHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter amount" value={amount} onChange={amountHandler}/>
                            <input className={classes.input} placeholder="Enter renewal date" value={renewalDate} onChange={renewalDateHandler}/>
                        </div>
                        <div className={`${classes.row} ${classes.special_row}`}>
                            <input className={classes.input} placeholder="Enter purchaed by" value={purchasedBy} onChange={purchasedByHandler}/>
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




export default LicenceForm