import { useState } from 'react'
import classes from './invoice_form.module.css'

const InvoiceForm =()=>{

    const [courseName,setCourseName] = useState("")
    const [invoiceNumber,setInvoiceNumber] = useState("")
    const [gst,setGst] = useState("")
    const [fees,setFees] = useState("")
    const [bdeName,setBdeName] = useState("")
    const [paymentSource,setPaymentSource] = useState("")
    const submitHandler = (event)=>{
        event.preventDefault()
        const data = {
            courseName:courseName,
            invoiceNumber:invoiceNumber,
            gst:gst,
            fees:fees,
            bdeName:bdeName,
            paymentSource:paymentSource
        }

        console.log(data)

        setCourseName("")
        setInvoiceNumber("")
        setGst("")
        setFees("")
        setBdeName("")
        setPaymentSource(" ")

    }
    const courseNameHandler =(e)=>{
        setCourseName(e.target.value)
    }
    const invoiceNubmerHandler =(e)=>{
        setInvoiceNumber(e.target.value)
    }
    const gstHandler =(e)=>{
        setGst(e.target.value)
    }
    const feesHandler =(e)=>{
        setFees(e.target.value)
    }
    
    const bdeNameHandler =(e)=>{
        setBdeName(e.target.value)
    }
    const paymentSourceHandler =(e)=>{
        setPaymentSource(e.target.value)
    }
    return(
        <div className={classes.ctn}>
            <div className={classes.form_ctn}>
                <div className={classes.top}>
                    <div className={classes.span_ctn}>
                            <span>I</span>
                            <span>N</span>
                            <span>V</span>
                            <span>O</span>
                            <span>I</span>
                            <span>C</span>
                            <span>E</span>
                        </div>
                </div>
                <div className={classes.bottom}>
                    <form className={classes.form}>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter course name" value={courseName} onChange={courseNameHandler}/>
                            <input className={classes.input} placeholder="Enter invoice number" value={invoiceNumber} onChange={invoiceNubmerHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter gst" value={gst} onChange={gstHandler}/>
                            <input className={classes.input} placeholder="Enter fees" value={fees} onChange={feesHandler}/>
                        </div>
                        <div className={classes.row}>
                            <input className={classes.input} placeholder="Enter bde name" value={bdeName} onChange={bdeNameHandler}/>
                            <input className={classes.input} placeholder="Enter payment" value={paymentSource} onChange={paymentSourceHandler}/>
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




export default InvoiceForm