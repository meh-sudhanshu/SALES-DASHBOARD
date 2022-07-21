import { useState } from 'react'
import classes from './customer_form.module.css'



const CustomerForm =()=>{

    const [name,setName] = useState("")
    const [emailId,setEmailId] = useState("")
    const [mobileNumber,setMobileNumber] = useState("")
    const [companyName,setCompanyName] = useState("")
    const [courseName,setCourseName] = useState("")
    const [feesPaid,setFeesPaid] = useState("")
    const [paymentSource,setPaymentSource] = useState("")
    const [certificationStatus,setCertificationStatus] = useState("")
    const [country,setCountry] = useState("")
    const [city,setCity] = useState("")
    const [sourceOfLead,setSourceOfLead] = useState("")
    const [invoiceStatus,setInvoiceStatus] = useState("")
    const [bdeName,setBdeName] = useState("")
    const [leadStatus,setLeadStatus] = useState("")


    const submitHandler = (event)=>{
        event.preventDefault()
        const data = {
            name:name,
            emailId:emailId,
            mobileNumber:mobileNumber,
            companyName:companyName,
            courseName:courseName,
            feesPaid:feesPaid,
            paymentSource:paymentSource,
            certificationStatus:certificationStatus,
            country:country,
            city:city,
            sourceOfLead:sourceOfLead,
            invoiceStatus:invoiceStatus,
            bdeName:bdeName,
            leadStatus:leadStatus
        }

        console.log(data)

        setName("")
        setEmailId("")
        setMobileNumber("")
        setCompanyName("")
        setCourseName("")
        setFeesPaid("")
        setPaymentSource("")
        setCertificationStatus("")
        setCountry("")
        setCity("")
        setSourceOfLead("")
        setInvoiceStatus("")
        setBdeName("")
        setLeadStatus("")

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
    const courseNameHandler =(e)=>{
        setCourseName(e.target.value)
    }
    const feesPaidHandler =(e)=>{
        setFeesPaid(e.target.value)
    }
    const paymentSourceHandler =(e)=>{
        setPaymentSource(e.target.value)
    }
    const certificationStatusHandler =(e)=>{
        setCertificationStatus(e.target.value)
    }
    const countryHandler =(e)=>{
        setCountry(e.target.value)
    }
    const cityHandler =(e)=>{
        setCity(e.target.value)
    }

    const sourceOfLeadHandler =(e)=>{
        setSourceOfLead(e.target.value)
    }

    const invoiceStatusHandler =(e)=>{
        setInvoiceStatus(e.target.value)
    }

    const bdeNameHandler =(e)=>{
        setBdeName(e.target.value)
    }
    const leadStatusHandler =(e)=>{
        setLeadStatus(e.target.value)
    }
    return(
        <div className={classes.ctn}>
            <div className={classes.form_ctn}>
                <div className={classes.top}>
                    <div className={classes.span_ctn}>
                            <span>C</span>
                            <span>U</span>
                            <span>S</span>
                            <span>T</span>
                            <span>O</span>
                            <span>M</span>
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
                            <input className={classes.input} placeholder="Enter company name" value={companyName} onChange={companyNameHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter course name" value={courseName} onChange={courseNameHandler}/>
                            <input className={classes.input} placeholder="Enter fees paid" value={feesPaid} onChange={feesPaidHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter payment source" value={paymentSource} onChange={paymentSourceHandler}/>
                            <input className={classes.input} placeholder="Enter certifiction status" value={certificationStatus} onChange={certificationStatusHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter country" value={country} onChange={countryHandler}/>
                            <input className={classes.input} placeholder="Enter city" value={city} onChange={cityHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter source of lead" value={sourceOfLead} onChange={sourceOfLeadHandler}/>
                            <input className={classes.input} placeholder="Enter invoice status" value={invoiceStatus} onChange={invoiceStatusHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter bde name" value={bdeName} onChange={bdeNameHandler}/>
                            <input className={classes.input} placeholder="Enter lead status" value={leadStatus} onChange={leadStatusHandler}/>
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




export default CustomerForm