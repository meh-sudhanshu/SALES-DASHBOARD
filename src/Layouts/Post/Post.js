import CustomerForm from '../../Components/CustomerForm/CustomerForm';
import ReferenceForm from '../../Components/ReferenceForm/ReferenceForm'
import Navbar from '../../Components/Navbar/Navbar';
import classes from './post.module.css'
import { useState } from 'react';
import TrainerForm from '../../Components/TrainerForm/TrainerForm';
import ProfitReportForm from '../../Components/ProfitReportForm/ProfitReportForm';
import InvoiceForm from '../../Components/InvoiceForm/InvoiceForm';
import LicenceForm from '../../Components/LicenceForm/LicenceForm';
import CourseCatalog from '../../Components/CourseCatalog/CourseCatalog';

const Post =()=>{
    const [val , setVal] = useState(1)
    const setValTo1 =()=>{
        setVal(1)
    }
    const setValTo2 =()=>{
        setVal(2)
    }
    const setValTo3 =()=>{
        setVal(3)
    }
    const setValTo4 =()=>{
        setVal(4)
    }
    const setValTo5 =()=>{
        setVal(5)
    }
    const setValTo6 =()=>{
        setVal(6)
    }
    const setValTo7 =()=>{
        setVal(7)
    }
    return(
        <div className={classes.ctn}>
            <div className={classes.left}>
                <Navbar/>
            </div>
            <div className={classes.right}>
                <div className={classes.btn_ctn}>
                    <button className={classes.btn} onClick={setValTo1}>Customer</button>
                    <button className={classes.btn} onClick={setValTo2}>Reference</button>
                    <button className={classes.btn} onClick={setValTo3}>Trainer</button>
                    <button className={classes.btn} onClick={setValTo4}>Profit Reports</button>
                    <button className={classes.btn} onClick={setValTo5}>Invoice</button>
                    <button className={classes.btn} onClick={setValTo6}>Licence</button>
                    <button className={classes.btn} onClick={setValTo7}>Course Catalog</button>
                </div>
                {val ==1 && <CustomerForm/>}
                {val == 2 && <ReferenceForm/>}
                {val ==3 && <TrainerForm/>}
                {val ==4 && <ProfitReportForm/>}
                {val ==5 && <InvoiceForm/>}
                {val ==6 && <LicenceForm/>}
                {val ==7 && <CourseCatalog/>}
            </div>
        </div>
    )
}


export default Post;