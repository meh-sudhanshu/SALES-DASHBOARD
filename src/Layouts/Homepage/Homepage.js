import { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Dashboard from '../Dashboard/Dashboard'
import classes from './homepage.module.css'

import CustomerForm from '../../Components/CustomerForm/CustomerForm'
import ReferenceForm from '../../Components/ReferenceForm/ReferenceForm'
import TrainerForm from '../../Components/TrainerForm/TrainerForm'
import ProfitReportForm from '../../Components/ProfitReportForm/ProfitReportForm'
import InvoiceForm from '../../Components/InvoiceForm/InvoiceForm'
import LicenceForm from '../../Components/LicenceForm/LicenceForm'
import CourseCatalog from '../../Components/CourseCatalog/CourseCatalog'
const Homepage =()=>{

    const [flag , setFlag] = useState(1)

    const changeFlag =(value)=>{
        setFlag(value)
        console.log(value)
    }
    return(
        <div className={classes.ctn}>
            <div className={classes.left}>
                <Navbar flagHandler ={changeFlag}/>
            </div>
            <div className={classes.right}>
                {flag===1 && <Dashboard/>}
                {flag===2 && <CustomerForm/>}
                {flag===3 && <TrainerForm/>}
                {flag ===4 && <ReferenceForm/>}
                {flag ===5 && <ProfitReportForm/>}
                {flag === 6 && <InvoiceForm/>}
                {flag ===7 && <LicenceForm/>}
                {flag === 8 && <CourseCatalog/>}
            </div>
        </div>
    )
}


export default Homepage