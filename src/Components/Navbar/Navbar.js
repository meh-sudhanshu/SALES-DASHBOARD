import React, { useState } from 'react';
import classes from './navbar.module.css'
import app_logo from '../../Assets/Logo/app_logo.png'
import {NavLink} from 'react-router-dom'
import dashboard_logo from '../../Assets/Logo/dashboard.png'
import customer_logo from '../../Assets/Logo/customer.png'
import reference_logo from '../../Assets/Logo/reference.png'
import trainer_logo from '../../Assets/Logo/trainer.png'
import profit_report_logo from '../../Assets/Logo/profit_report.png'
import course_catalog_logo from '../../Assets/Logo/course_catalog.png'
import invoice_logo from '../../Assets/Logo/invoice.png'
import licence_logo from '../../Assets/Logo/licence.png'
import {useNavigate} from 'react-router-dom'
const Navbar =(props)=>{

    const navigate = useNavigate()

    const [customerFlag,setCustomerFlag] = useState(false)
    const [referenceFlag,setReferenceFlag] = useState(false)
    const [trainerFlag,setTrainerFlag] = useState(false)
    const [profitFlag,setProfitFlag] = useState(false)
    const [invoiceFlag,setInvoiceFlag] = useState(false)
    const [licenceFlag,setLicenceFlag] = useState(false)
    const [courseFlag,setCourseFlag] = useState(false)

    const toggleCustomerFlag =()=>{
        setCustomerFlag(!customerFlag)
    }

    const toggleReferenceFlag =()=>{
        setReferenceFlag(!referenceFlag)
    }

    const toggleTrainerFlag =()=>{
        setTrainerFlag(!trainerFlag)
    }

    const toggleProfitFlag =()=>{
        setProfitFlag(!profitFlag)
    }

    const toggleInvoiceFlag =()=>{
        setInvoiceFlag(!invoiceFlag)
    }

    const toggleLicenceFlag =()=>{
        setLicenceFlag(!licenceFlag)
    }

    const toggleCourseFlag =()=>{
        setCourseFlag(!courseFlag)
    }
    const clickHandler =(event)=>{
        if(event.target.name === 'customer') props.flagHandler(2)
        if(event.target.name === 'trainer') props.flagHandler(3)
        if(event.target.name === 'reference') props.flagHandler(4)
        if(event.target.name === 'profit') props.flagHandler(5)
        if(event.target.name === 'invoice') props.flagHandler(6)
        if(event.target.name === 'licence') props.flagHandler(7)
        if(event.target.name === 'course') props.flagHandler(8)
    }
    const loadHomePage =(e)=>{
        window.location.reload()
    }
    const listLoader =(event)=>{
        event.preventDefault()
        console.log(event.target.name)
        if(event.target.name === "customer") navigate("/customerList")
        else if (event.target.name === "reference") navigate("/referenceList")
        else if(event.target.name === "trainer") navigate("/trainerList")
        else if(event.target.name === "profit") navigate("/profitReports")
        else if(event.target.name === "invoice") navigate("/invoiceList")
        else if(event.target.name === "licence") navigate("/licenceList")
        else if(event.target.name === "course") navigate("/courseCatalogList")
    }
    return(
        <nav className={classes.navbar}>
            <div className={classes.logo_ctn}>
                <img src={app_logo} alt="" className={classes.img_logo}/>
                <h6 className={classes.txt_logo}>ULS SALES</h6>
            </div>
            <div className={classes.link_ctn}>
                <NavLink to="/" className={classes.link} >
                    <div className={classes.link_wrapper}>
                        <img src={dashboard_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link} onClick={loadHomePage}>DASHBOARD</h5>   
                    </div>
                </NavLink>
                <NavLink to="/" className={classes.link} onMouseEnter={toggleCustomerFlag} onMouseLeave={toggleCustomerFlag} >
                    <div className={classes.link_wrapper}>
                        <img src={customer_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>Customer</h5>   
                    </div>

                    {customerFlag === true && 
                        <div className={classes.btn_ctn}>
                            <button className={classes.btn} onClick={clickHandler} name="customer">Save</button>
                            <button className={classes.btn} onClick={listLoader} name="customer">Get All</button>
                        </div>
                    }


                </NavLink>
                <NavLink to="/" className={classes.link} onMouseEnter={toggleReferenceFlag} onMouseLeave={toggleReferenceFlag}>
                    <div className={classes.link_wrapper}>
                        <img src={reference_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>Refrence</h5>   
                    </div>
                    {referenceFlag === true && 
                        <div className={classes.btn_ctn}>
                            <button className={classes.btn}  onClick={clickHandler} name="reference">Save</button>
                            <button className={classes.btn} onClick={listLoader} name="reference">Get All</button>
                        </div>
                    }
                </NavLink>


                <NavLink to="/" className={classes.link} onMouseEnter={toggleTrainerFlag} onMouseLeave={toggleTrainerFlag}>
                    <div className={classes.link_wrapper}>
                        <img src={trainer_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>Trainer</h5>   
                    </div>
                    {trainerFlag === true && 
                        <div className={classes.btn_ctn}>
                            <button className={classes.btn} onClick={clickHandler} name="trainer">Save</button>
                            <button className={classes.btn} onClick={listLoader} name="trainer">Get All</button>
                        </div>
                    }
                </NavLink>
                <NavLink to="/" className={classes.link} onMouseEnter={toggleProfitFlag} onMouseLeave={toggleProfitFlag}>
                    <div className={classes.link_wrapper}>
                        <img src={profit_report_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>Profit Reports</h5>   
                    </div>
                    {profitFlag === true && 
                        <div className={classes.btn_ctn}>
                            <button className={classes.btn} onClick={clickHandler} name="profit" >Save</button>
                            <button className={classes.btn} onClick={listLoader} name="profit">Get All</button>
                        </div>
                    }
                </NavLink>
                <NavLink to="/" className={classes.link} onMouseEnter={toggleInvoiceFlag} onMouseLeave={toggleInvoiceFlag}>
                    <div className={classes.link_wrapper}>
                        <img src={invoice_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>Invoice</h5>   
                    </div>
                    {invoiceFlag === true && 
                        <div className={classes.btn_ctn}>
                            <button className={classes.btn} onClick={clickHandler} name="invoice">Save</button>
                            <button className={classes.btn} onClick={listLoader} name="invoice">Get All</button>
                        </div>
                    }
                </NavLink>

                <NavLink to="/" className={classes.link} onMouseEnter={toggleLicenceFlag} onMouseLeave={toggleLicenceFlag} >
                    <div className={classes.link_wrapper}>
                        <img src={licence_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>Licence</h5>   
                    </div>
                    {licenceFlag === true && 
                        <div className={classes.btn_ctn}>
                            <button className={classes.btn} onClick={clickHandler} name="licence">Save</button>
                            <button className={classes.btn} onClick={listLoader} name="licence">Get All</button>
                        </div>
                    }
                </NavLink>

                <NavLink to="/" className={classes.link} onMouseEnter={toggleCourseFlag} onMouseLeave={toggleCourseFlag}>
                    <div className={classes.link_wrapper}>
                        <img src={course_catalog_logo} alt="" className={classes.wrapper_logo}/>
                        <h5 className={classes.link}>Course Catalog</h5>   
                    </div>
                    {courseFlag === true && 
                        <div className={classes.btn_ctn}>
                            <button className={classes.btn} onClick={clickHandler} name="course">Save</button>
                            <button className={classes.btn} onClick={listLoader} name="course">Get All</button>
                        </div>
                    }
                </NavLink>
            </div>
        </nav>
    )
}


export default Navbar;